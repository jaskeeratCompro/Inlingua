window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const pageNo = urlParams.get("page");
  const url = `https://inlreader-dev.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}&embed`;
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.allowFullscreen = true;

  const iframeContainer = document.querySelector("#eReaderIframe");
  iframeContainer.appendChild(iframe);

  toggleSidebar();
  getDimensions();
};

window.onresize = function () {
  toggleSidebar();
  getDimensions();
};

function toggleSidebar(){
  const sidebar = document.querySelector(".sidebarContainer");
  if(screen.width < 1024){
    sidebar.classList.add('hidden');
  }
  else{
    sidebar.classList.remove('hidden');
  }
}

function getDimensions(){
  const header = document.querySelector("header");
  const sidebar = document.querySelector(".sidebarContainer");

  document.querySelector(".headerDimension").innerText = `(height: ${header.offsetHeight}px)`;
  document.querySelector(".sidebarDimension").innerText = `(width: ${sidebar.offsetWidth}px)`;
}
