window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const pageNo = urlParams.get("page");
  const url = `https://inlreader-dev.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}`;
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.allowFullscreen = true;

  const iframeContainer = document.querySelector("#eReaderIframe");
  iframeContainer.appendChild(iframe);

  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarDimensionContainer = document.querySelector(".sidebarDimensions");
  const iframeDimensionContainer = document.querySelector(".iframeDimensions");

  sidebarDimensionContainer.innerText = `Sidebar Dimensions: ${sidebarContainer.offsetWidth} x ${sidebarContainer.offsetHeight}`;
  iframeDimensionContainer.innerText = `Iframe Dimensions: ${iframeContainer.offsetWidth} x ${iframeContainer.offsetHeight}`;
};

window.onresize = function () {
  const iframeContainer = document.querySelector("#eReaderIframe");
  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarDimensionContainer = document.querySelector(".sidebarDimensions");
  const iframeDimensionContainer = document.querySelector(".iframeDimensions");

  sidebarDimensionContainer.innerText = `Sidebar Dimensions: ${sidebarContainer.offsetWidth} x ${sidebarContainer.offsetHeight}`;
  iframeDimensionContainer.innerText = `Iframe Dimensions: ${iframeContainer.offsetWidth} x ${iframeContainer.offsetHeight}`;
};
