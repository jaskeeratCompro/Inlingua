window.onload = function(){ debugger
  const urlParams = new URLSearchParams(window.location.search);
  const pageNo = urlParams.get('page');
  const url = `https://inlreader-dev.comprodls.com/demo/student-edition/interkulturel_1_vtext?page=${pageNo}`;
  const iframe = document.createElement('iframe');
  iframe.src = url;

  const iframeContainer = document.querySelector('#eReaderIframe');
  iframeContainer.appendChild(iframe);
};