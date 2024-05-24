var config_on = {
    mode: "pac_script",
    pacScript: {
        data: "function FindProxyForURL(url, host) {\n" +
              "        return 'PROXY 13.48.97.40:8888';\n" +
              "}\n"
    }
};

var config_off = {
    mode: "pac_script",
    pacScript: {
        data: "function FindProxyForURL(url, host) {\n" +
              "        return 'DIRECT';\n" +
              "}\n"
    }
};

let useProxy = false;

function setOnProxy() {
    chrome.proxy.settings.set(
        {value: config_on, scope: 'regular'}
    );
}

function setOffProxy() {
    chrome.proxy.settings.set(
        {value: config_off, scope: 'regular'}
    );
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "toggleProxy") {
            useProxy = !useProxy;

            if(useProxy) {
                setOnProxy();
            }
            else {
                setOffProxy();
            }
        }
    }
);
