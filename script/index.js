var inputField = document.getElementById("username");
var username = "";

function flipbookClick() {
  const inputEle = document.querySelector("#pageNo");
  const pageNo = inputEle.value;
  let url = `https://wayside-reader1.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}`;

  const switchEle = document.querySelector("#iframeSwitch");
  if (switchEle.checked) {
    const iframeContainer = document.querySelector("#webbookIframe");
    iframeContainer.classList.add("visible");

    const iframe = iframeContainer.querySelector("iframe");
    iframe.src = url;
  } else {
    window.open(url, "_blank");
  }
  
  return;
}

function webbookClick() {
  let url = "https://wayside-reader2.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=36";
  window.open(url, "_blank");
}

function flipbookClickTE() {
  let url = "https://wayside-reader1.comprodls.com/demo/teacher-edition/interkulturel_1_te?page=36-37";
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
}
