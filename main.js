const statusEl = document.getElementById('status');
const button = document.getElementById('pingBtn');

button.addEventListener('click', async () => {
  statusEl.textContent = 'Appel API en cours...';
  try {
    const res = await fetch('http://localhost:3000/api/health');
    if (!res.ok) throw new Error('Réponse non OK');
    const data = await res.json();
    statusEl.textContent = `Backend OK: ${data.message}`;
  } catch {
    statusEl.textContent = 'Impossible de contacter le backend (localhost:3000).';
  }
});

statusEl.textContent = 'Frontend prêt.';
