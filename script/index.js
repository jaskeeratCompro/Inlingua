document.addEventListener("DOMContentLoaded", function () {
  const START_DATE = 1719566744;
  const FREE_TRIAL_DAYS = 30;

  const currentTime = Date.now();
  const endTime = (START_DATE + FREE_TRIAL_DAYS * 24 * 60 * 60) * 1000;
  const remainingDays = Math.max(0, Math.ceil((endTime - currentTime) / (1000 * 60 * 60 * 24)));

  const trialRemainingDaysElement = document.querySelector("#trialRemainingDays");
  trialRemainingDaysElement.innerText = remainingDays;

  const startDate = new Date(START_DATE * 1000);
  const options = {year: 'numeric', month: 'short', day: 'numeric'};

  const formattedStartDate = startDate.toLocaleDateString('en-US', options);

  document.querySelector('#trialStartDate').innerText = formattedStartDate;
});

var inputField = document.getElementById("username");
var username = "";

function flipbookClick() {
  const inputEle = document.querySelector("#pageNo");
  const pageNo = inputEle.value || '36';
  const switchEle = document.querySelector("#iframeSwitch");
  if (switchEle.checked) {
    //const iframeContainer = document.querySelector("#webbookIframe");
    //iframeContainer.classList.add("visible");

    //const iframeWrapper = document.querySelector("#iframeContainer");
    //const iframe = document.createElement('iframe');
    //iframe.src = url;

    //iframeWrapper.appendChild(iframe);
    let url = pageNo ? `eReader.html?page=${pageNo}` : `eReader.html`;
    window.open(url, "_blank");
  } else {
    const readerUrl = `https://inlreader-dev.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}`;
    window.open(readerUrl, "_blank");
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

function toggleAccordian(event) {
  const accordian = event.currentTarget;
  const isOpen = accordian.getAttribute("aria-expanded") === "true";
  const accordianContainer = accordian.nextElementSibling;
  if (isOpen) {
    accordianContainer.classList.add("hide");
    accordian.classList.remove("rotate");
    accordian.setAttribute("aria-expanded", "false");
    //accordianContainer.scrollIntoView(false);
  } else {
    accordianContainer.classList.remove("hide");
    accordian.classList.add("rotate");
    accordian.setAttribute("aria-expanded", "true");
    //accordianContainer.scrollIntoView(true);
  }
}
