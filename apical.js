
const JSONDiv = document.getElementById("jsondata");
const xhttpr = new XMLHttpRequest();
xhttpr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  
xhttpr.send();
  
xhttpr.onload = ()=> {
  if (xhttpr.status === 200) {
      const response = JSON.parse(xhttpr.response);
      JSONDiv.innerhtml = response;
  }
};
