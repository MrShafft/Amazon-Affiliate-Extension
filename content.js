const affiliateTagKey = 'affiliateTag';

function addAffiliateTagToLinks(tag) {
  const links = document.querySelectorAll('a[href*="amazon."]');
  links.forEach(link => {
    try {
      const url = new URL(link.href);
      if (!url.searchParams.has('tag')) {
        url.searchParams.set('tag', tag);
        link.href = url.toString();
      }
    } catch (e) {
      // Ignore invalid URLs
    }
  });
}

window.addEventListener('load', () => {
  chrome.storage.sync.get([affiliateTagKey], (result) => {
    const tag = result[affiliateTagKey] || 'yourtag-20';
    addAffiliateTagToLinks(tag);
  });
});