async function load() {
  try {
    const res = await fetch('/api/public-apis');
    const data = await res.json();
    allApis = data.entries || [];
    renderCategories();
    renderFavorites();
    renderList();
  } catch (e) {
    console.error(e);
    statusEl.textContent = '加载失败：后端代理异常';
  }
}

