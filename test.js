function webadder() {
    let e = document.createElement("a"),
        o = document.createTextNode("webAdder");
    e.appendChild(o),
        (e.href = "https://webadder.com"),
        (e.target = "_blank"),
        (e.title = "Design, Develop and Deploy"),
        (e.style.cssText =
            "z-index:2;color:white;position:fixed;text-decoration:none;font-family: Raleway, sans-serif;;font-size:10px;bottom:0;right:0;background-image: linear-gradient( to right, #9966ff 0%, #3399ff 51%, #669999 100% );border-radius:3px 0 0 0;padding:0 2px"),
        document.body.appendChild(e),
        (e.onmouseover = function () {
            e.style.color = "black";
        }),
        (e.onmouseout = function () {
            e.style.color = "white";
        });
}
(document.body.onload = webadder),
    (src = "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"),
    (WebFontConfig = { google: { families: ["Raleway:100,400,700,800,900"] } }),
    (function (e) {
        var o = e.createElement("script"),
            t = e.scripts[0];
        (o.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"),
            (o.async = !0),
            t.parentNode.insertBefore(o, t);
    })(document);
