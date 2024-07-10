window.onload = function(){ debugger
  const urlParams = new URLSearchParams(window.location.search);
  const pageNo = urlParams.get('page');
  const baseUrl = `https://inlreader-dev.comprodls.com/demo/student-edition/interkulturel_1_vtext`;
  let url = new URL(baseUrl);
  if(pageNo){
    url.searchParams.append('page', pageNo);
  }
  url= url.toString();
  const iframe = document.createElement('iframe');
  iframe.src = url;

  const iframeContainer = document.querySelector('#eReaderIframe');
  iframeContainer.appendChild(iframe);
};