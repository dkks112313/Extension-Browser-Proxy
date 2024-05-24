const button = document.getElementById('grb_butt');
button.style.background = "linear-gradient(#ff3232, #deff00)";

let isClick = true;

chrome.storage.sync.get('isClick', (data) => {
    isClick = data.isClick;
    changeColor();
});

button.addEventListener('click', () => {
    isClick = !isClick;
    changeColor();

    chrome.storage.sync.set({isClick: isClick});
    chrome.runtime.sendMessage({message: "toggleProxy"});
});

function changeColor() {
    let background;
    if(isClick) {
        background = "linear-gradient(#009c4a, #45b5fd)";
    }
    else {
        background = "linear-gradient(#ff3232, #deff00)";
    }
    button.style.background = background;
}
