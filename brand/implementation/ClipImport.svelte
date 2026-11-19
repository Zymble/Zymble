<script lang="ts">
  let { action }: { action: string } = $props();
</script>
<form method="post" action={action} class="cr-ui cr-card">
  <label class="cr-field">
    Stream URL
    <input type="url" name="url" placeholder="https://…" required />
  </label>
  <button class="cr-btn" type="submit">Import stream</button>
</form>
