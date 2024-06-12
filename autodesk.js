window.onload = () => {

// Create Iframe
const iframe = document.createElement('iframe');
iframe.classList.add('wolken-iframe');

// iframe.srcdoc = srcDoc;
// iframe.src="http://localhost:5509/2.html";
iframe.srcdoc="https://cdn.jsdelivr.net/gh/rgalaWolken/autodesk-poc/wolken-iframe.html"
iframe.style.width = '100%';
iframe.style.height = 'calc(100vh - 110px)';
iframe.style.border = 'none';  

// Create Main Div
const mainDiv = document.createElement('div');
mainDiv.classList.add('wolken-iframe-div');
mainDiv.appendChild(iframe);

const wolkenContainer = document.getElementsByTagName('my-wolken-tag');
wolkenContainer[0].appendChild(mainDiv);


}


