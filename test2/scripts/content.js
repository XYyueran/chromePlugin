const article = document.querySelector(".antd-pro-components-global-header-index-name");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const badge = document.createElement("p");
  badge.textContent = "欢迎你，松鼠（郝文琴）"
  article.parentNode.insertBefore(badge, article);
}