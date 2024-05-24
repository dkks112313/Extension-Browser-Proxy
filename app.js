const button = document.getElementById('grb_butt');

button.addEventListener('click', () => {
    let background;
    if(button.value === "1") {
        background = "linear-gradient(#009c4a, #45b5fd)";
        button.value = "2";
    }
    else {
        background = "linear-gradient(#ff3232, #deff00)";
        button.value = "1";
    }

    button.style.background = background;

    chrome.storage.sync.set({buttonState: button.value, buttonBackground: background}, function() {
        console.log('Button state is ' + button.value);
        console.log('Button background is ' + background);
    });

    chrome.runtime.sendMessage({message: "toggleProxy"});
});

window.onload = function() {
    chrome.storage.sync.get(['buttonState', "buttonBackground"], function(data) {
        button.value = data.buttonState;
        button.style.background = data.buttonBackground;
    });
};
