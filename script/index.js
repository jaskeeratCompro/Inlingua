var inputField = document.getElementById("username");
var username = "";

function flipbookClick() { debugger
  const inputEle = document.querySelector("#pageNo");
  const pageNo = inputEle.value;
  let url = `https://wayside-reader1.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}`;

  const switchEle = document.querySelector("#iframeSwitch");
  if (switchEle.checked) {
    const iframeContainer = document.querySelector("#webbookIframe");
    iframeContainer.classList.add("visible");

    const iframeWrapper = document.querySelector("#iframeContainer");
    const iframe = document.createElement('iframe');
    iframe.src = url;

    iframeWrapper.appendChild(iframe);
  } else {
    window.open(url, "_blank");
  }
  
  return;
}

function builderClick() {
  let url = "https://vhl-builder.comprodls.com/";
  window.open(url, "_blank");
}

let lastSelectedDiv = document.getElementById("div1");
let lastSelectedButtons = [document.getElementById("div1").querySelector("button")];

function handleDivClick(event) {
  if (lastSelectedDiv.id != event.currentTarget.id) {
    if (lastSelectedDiv !== null) {
      lastSelectedDiv.classList.remove("selectedDiv");
    }
    event.currentTarget.classList.add("selectedDiv");
    lastSelectedDiv = event.currentTarget;

    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((button) => {
      lastSelectedButtons.forEach((selectedbutton) => {
        selectedbutton.classList.remove("launchSelectedButton");
      });
      button.classList.add("launchSelectedButton");
    });
    lastSelectedButtons = buttons;
  }
}

document.getElementById("div1").addEventListener("mousedown", handleDivClick);
document.getElementById("div2").addEventListener("mousedown", handleDivClick);

function closeIframe() {
  const iframeContainer = document.querySelector("#webbookIframe");
  iframeContainer.classList.remove("visible");

  const iframeWrapper = document.querySelector("#iframeContainer");
  iframeWrapper.innerHTML = "";
}