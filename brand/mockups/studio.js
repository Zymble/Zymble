(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const routes = Array.from(document.querySelectorAll('.route'));
  const mediaTheme = matchMedia('(prefers-color-scheme: dark)');
  const logo = byId('head-logo');
  const logoFiles = [logo.getAttribute('src'), logo.dataset.dark || '../logo/horizontal-dark.svg'];
  let manualTheme = false;
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    logo.src = logoFiles[dark ? 1 : 0];
    byId('theme').textContent = dark ? 'Light theme' : 'Dark theme';
  }
  setTheme(mediaTheme.matches);
  mediaTheme.addEventListener('change', event => { if (!manualTheme) setTheme(event.matches); });
  byId('theme').addEventListener('click', () => {
    manualTheme = true;
    setTheme(document.documentElement.dataset.theme !== 'dark');
  });

  let messageTimer, jobTimer;
  function notify(message) {
    clearTimeout(messageTimer);
    byId('toast').textContent = message;
    messageTimer = setTimeout(() => { byId('toast').textContent = ''; }, 4500);
  }
  function startJob() {
    clearInterval(jobTimer);
    const steps = ['Reading the source', 'Locating suggested cuts', 'Preparing captions', 'Review ready'];
    const show = index => {
      byId('job').value = index;
      byId('job-label').textContent = steps[index];
      byId('job-status').textContent = index === 3 ? '3 suggested clips are ready.' : 'Step ' + (index + 1) + ' of 3';
      byId('job-next').hidden = index !== 3;
    };
    let i = 0;
    show(i);
    jobTimer = setInterval(() => { show(++i); if (i === 3) clearInterval(jobTimer); }, 1100);
  }
  const video = byId('vid');
  let playingRange = false;
  function navigate(first = false) {
    const requested = location.hash.slice(1);
    const route = routes.find(section => section.id === requested) || byId('home');
    routes.forEach(section => { section.hidden = section !== route; });
    if (route.id === 'processing') startJob(); else clearInterval(jobTimer);
    if (route.id !== 'editor') { playingRange = false; video.pause(); }
    const headline = route.querySelector('h1');
    document.title = headline.textContent + ' · ClipyRush';
    if (!first) { headline.focus({preventScroll:true}); window.scrollTo(0, 0); }
  }
  window.addEventListener('hashchange', () => navigate());
  byId('skip').addEventListener('click', e => { e.preventDefault(); byId('main').focus(); });
  document.querySelectorAll('.demo-access').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); location.hash = 'dashboard'; }));
  document.querySelectorAll('[name="billing"]').forEach(radio => radio.addEventListener('change', () => {
    document.querySelectorAll('.price').forEach(price => {
      const cost = Number(price.dataset[radio.value]);
      price.textContent = cost ? '$' + cost : 'Custom';
      const note = price.nextElementSibling;
      if (cost) note.textContent = radio.value === 'year' ? 'per year, billed annually' : 'per month';
    });
  }));

  const drop = byId('drop');
  let chosenFile;
  function setFile(file) {
    chosenFile = null; byId('file-name').textContent = ''; byId('upload-error').textContent = '';
    if (!file) return;
    if (!file.type.startsWith('video/') && !/\.(mp4|webm|mov|mkv|m4v)$/i.test(file.name)) {
      byId('upload-error').textContent = 'Choose a video file.'; return;
    }
    chosenFile = file; byId('file-name').textContent = file.name;
    byId('url').value = '';
  }
  byId('file').addEventListener('change', e => setFile(e.target.files[0]));
  byId('url').addEventListener('input', () => { byId('file').value=''; setFile(null); });
  ['dragover','dragenter'].forEach(type => drop.addEventListener(type, e => { e.preventDefault(); drop.classList.add('over'); }));
  drop.addEventListener('dragleave', () => drop.classList.remove('over'));
  drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('over'); byId('file').value=''; setFile(e.dataTransfer.files[0]); });
  byId('upload-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!chosenFile && !/^https?:\/\//i.test(byId('url').value)) {
      byId('upload-error').textContent = 'Choose a video or enter an HTTP(S) link.'; byId('url').focus(); return;
    }
    byId('upload-error').textContent = ''; location.hash = 'processing';
  });
  byId('use-sample').addEventListener('click', () => { location.hash = 'processing'; });
  byId('job-retry').addEventListener('click', startJob);

  const clips = [
    {name:'The last turn',start:0,end:18,caption:'The last turn.'},
    {name:'Wet asphalt',start:3,end:15,caption:'Wet asphalt.'},
    {name:'Over the crest',start:7,end:16,caption:'Over the crest.'}
  ];
  let activeClip = 0;
  const captionTrack = video.addTextTrack('captions','Edited caption','en');
  captionTrack.mode = 'showing';
  function previewCaption() {
    const a=byId('in').valueAsNumber, b=byId('out').valueAsNumber;
    for (const cue of Array.from(captionTrack.cues || [])) captionTrack.removeCue(cue);
    const copy=byId('caption').value.trim();
    if (copy && Number.isFinite(a) && Number.isFinite(b) && b>a && a>=0 && b<=18) {
      const cue=new VTTCue(a,b,copy);
      captionTrack.addCue(cue);
    }
  }
  function syncTrim() {
    const a = byId('in').valueAsNumber, b = byId('out').valueAsNumber;
    const valid = Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b <= 18 && b > a;
    byId('trim-err').textContent = valid ? '' : 'Choose whole seconds between 0 and 18. The out point must follow the in point.';
    [byId('in'),byId('out')].forEach(input => input.setAttribute('aria-invalid',String(!valid)));
    byId('save-cut').disabled = !valid; byId('play-cut').disabled = !valid;
    if (valid) {
      byId('selectedrange').style.left = (100*a/18)+'%';
      byId('selectedrange').style.right = (100*(18-b)/18)+'%';
      byId('clip-length').textContent = (b-a)+' s selected · Source 00:'+time(a+1122)+' – 00:'+time(b+1122);
    } else { byId('clip-length').textContent=''; }
    previewCaption();
    return valid;
  }
  function time(s) { return [Math.floor(s/60),s%60].map(n => String(n).padStart(2,'0')).join(':'); }
  function loadClip(i) {
    activeClip=i;
    const clip=clips[i];
    byId('clip-title').textContent=clip.name;
    byId('in').value=clip.start; byId('out').value=clip.end;
    byId('caption').value=clip.caption; byId('s-clip').value=clip.name;
    syncTrim();
    if (video.readyState >= 1) video.currentTime=clip.start;
  }
  document.querySelectorAll('[data-clip]').forEach(link => link.addEventListener('click', () => loadClip(Number(link.dataset.clip))));
  byId('caption').addEventListener('input', previewCaption);
  ['in','out'].forEach(id => byId(id).addEventListener('input', syncTrim));
  byId('save-cut').addEventListener('click', () => {
    if (!syncTrim()) return;
    Object.assign(clips[activeClip],{start:byId('in').valueAsNumber,end:byId('out').valueAsNumber,caption:byId('caption').value});
    const clip = clips[activeClip];
    const cardLink = document.querySelector('#library a[data-clip="'+activeClip+'"]');
    if (cardLink) cardLink.closest('article').querySelector('.caption').textContent =
      'Night stage · 00:'+time(1122+clip.start)+' · '+(clip.end-clip.start)+' s';
    const rowLink = document.querySelector('#dashboard a[data-clip="'+activeClip+'"]');
    if (rowLink) rowLink.closest('tr').cells[1].textContent=time(1122+clip.start);
    notify('Cut and caption saved for this session.');
  });
  byId('play-cut').addEventListener('click', async () => {
    if (!syncTrim()) return;
    try { video.currentTime=byId('in').valueAsNumber; playingRange=true; await video.play(); }
    catch { playingRange=false; notify('The video could not play in this browser.'); }
  });
  video.addEventListener('timeupdate', () => {
    byId('playhead').style.left=Math.min(99,video.currentTime/18*100)+'%';
    if (playingRange && video.currentTime>=byId('out').valueAsNumber) {
      playingRange=false; video.pause(); video.currentTime=byId('out').valueAsNumber;
    }
  });
  video.addEventListener('pause', () => { playingRange=false; });
  const tabs=Array.from(document.querySelectorAll('[role=tab]'));
  function selectTab(i,focus=false) {
    tabs.forEach((tab,n) => { tab.tabIndex=n===i?0:-1; tab.setAttribute('aria-selected',String(n===i)); byId(tab.getAttribute('aria-controls')).hidden=n!==i; });
    if (focus) tabs[i].focus();
  }
  tabs.forEach((tab,i) => {
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', e => {
      const target={ArrowRight:(i+1)%tabs.length,ArrowLeft:(i+tabs.length-1)%tabs.length,Home:0,End:tabs.length-1}[e.key];
      if (target!==undefined) { e.preventDefault();selectTab(target,true); }
    });
  });
  const dialog=byId('confirm');
  byId('schedule-form').addEventListener('submit', e => {
    e.preventDefault();
    byId('confirm-detail').textContent=[byId('s-clip').value,byId('channel').value,byId('s-date').value.replace('T',' '),byId('zone').value].join(' · ');
    dialog.showModal();
  });
  byId('cancel-dialog').addEventListener('click', () => dialog.close());
  byId('confirm-schedule').addEventListener('click', () => {
    byId('scheduled').textContent='Scheduled in this preview: '+byId('confirm-detail').textContent;
    dialog.close();
  });
  byId('prefs').addEventListener('submit', e => { e.preventDefault();notify('Workspace preferences saved for this session.'); });
  loadClip(0);
  navigate(true);
})();
