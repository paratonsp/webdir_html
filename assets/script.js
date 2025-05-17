jQuery(function() {
    console.log('pppppp');
    var base_url = window.location.origin;
    var el = document.createElement('script');
    el.type = 'application/ld+json';
    el.text = JSON.stringify(
        {"@context": "https://schema.org", "@type": "WebSite", "name": "Website Directory", "url": base_url}
    );

    document.querySelector('head').appendChild(el);
})