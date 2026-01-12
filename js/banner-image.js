/* 添加文章题头图功能 */
(function() {
  'use strict';

  // 等待页面加载完成
  function init() {
    // 获取当前文章页面的数据
    const pageData = window.page;
    if (!pageData) return;

    // 使用文章封面图，如果没有则使用默认图
    const imageUrl = pageData.image || '/images/default-banner.svg';

    // 在文章标题前插入题头图
    const postHeader = document.querySelector('.post-block .post-header');
    if (!postHeader) return;

    // 创建题头图元素
    const bannerImg = document.createElement('img');
    bannerImg.src = imageUrl;
    bannerImg.alt = pageData.title || 'Article Banner';
    bannerImg.className = 'post-banner';

    // 插入到标题前
    postHeader.parentNode.insertBefore(bannerImg, postHeader);
  }

  // 页面加载后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
