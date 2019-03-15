function verificate(password, callback) {
    var XHR = new XMLHttpRequest();
    XHR.addEventListener('load', function(event) {
        console.log(XHR.response);
        if (callback) {
            callback(XHR.response);
        }
    });
    XHR.addEventListener('error', function(event) {
        alert('Oups!');
    });
    XHR.open('POST', config.protocol + '://' + config.server_host + '/gallery/secure');
    XHR.setRequestHeader("Content-Type", "application/json");
    XHR.send(JSON.stringify({"password": password}));
}

function setCookie() {
    var k = config.cookie_name,
        v = config.cookie_value,
        m = config.cookie_expire;
    var d = new Date();
    d.setTime(d.getTime() + (m * 1000 * 60));
    var expires = "expires=" + d.toUTCString();
    document.cookie = k + '=' + v + ';' + expires;
}

function getCookies() {
    var cookies = {};
    var tokens = document.cookie.split('; ');
    for (i in tokens) {
        var cookie = tokens[i].split('=');
        cookies[cookie[0]] = cookie[1];
    }
    return cookies;
}

function hasCookie() {
    var cookies = getCookies();
    return config.cookie_name in cookies;
}

function redirect(url) {
    $(document).ready(function() {
        window.location.href=url;
    });
}
