$(document).ready(function () {
    var base_url = window.location.origin;
    data = {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "Website Directory",
      "url" : base_url
    };

    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    $("#dynamicJSONLD").html(JSON.stringify(data));
});