document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('[data-download]');

  items.forEach(async (item) => {
    const url = item.dataset.download;
    const label = item.dataset.label || 'Baixar PDF';

    try {
      const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });

      if (response.ok) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = label;
        link.setAttribute('download', '');
        item.replaceChildren(link);
      } else {
        item.textContent = 'Aguardando publicação';
      }
    } catch (_) {
      item.textContent = 'Aguardando publicação';
    }
  });
});
