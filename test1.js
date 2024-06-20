let node = document.doctype;
let thisNodeHTML =
  "<!DOCTYPE " +
  node.name +
  (node.publicId ? ' PUBLIC"' + node.publicId + '"' : "") +
  (!node.publicId && node.systemId ? " SYSTEM" : "") +
  (node.systemId ? ' "' + node.systemId + '"' : "") +
  ">";

let doctype = thisNodeHTML ? true : false;
let html = document.querySelector('html') ? true : false;
let body = document.querySelector("body") ? true : false;
let h1 = document.querySelector("h1") ? true : false;
let pre = document.querySelector("pre") ? true : false;
let hr = document.querySelector("hr") ? true : false;
let br = document.querySelector("br") ? true : false;
let h4 = document.querySelector("h4")
  || document.querySelector("h5")
  || document.querySelector("h6")
  || document.querySelector("h3")
  || document.querySelector("h2")
? true : false;
let title = document.title ? true : false;
let link = document.querySelector("link") ? true : false;
let result = 0;
let massage = '';
let div = document.createElement("div");
div.classList.add('container');
let resultSpan = document.createElement("span");
resultSpan.classList.add('result');
let span = document.createElement('span');
let errors = document.createElement('span');
span.appendChild(document.createTextNode('Start Test'));
span.classList.add('test')
div.appendChild(span)
div.appendChild(resultSpan)
div.appendChild(errors);
div.style.position = 'fixed';
div.style.top = "10px"
div.style.right = "10px";
div.style.width = '200px';
div.style.backgroundColor = "#eee"
div.style.padding = "10px"
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.fontFamily = "arial"
span.style.cursor = "pointer"
resultSpan.style.paddingTop = "10px";
resultSpan.style.textAlign = "center";
resultSpan.style.fontSize = "20px";
resultSpan.style.fontWeight = "bold";
document.body.append(div)

let arr = [doctype, html, body, h1, pre, hr, br, h4, title,link];

span.onclick = () => {
  errors = '';
  arr.forEach(e => {
    if (e === true) {
      result++;
    }
  })
  resultSpan.textContent = `${arr.length}/${result}`;
  if (!doctype) {
    errors += "<p style='color: red;'>Doctype undefined</p>"
  }
  if (!h1) {
    errors += "<p style='color: red;'>incorrect element to define the Song Name</p>"
  }
  if (!pre) {
    errors += "<p style='color: red;'>incorrect element to define lyrics</p>"
  }
  if (!hr) {
    errors += "<p style='color: red;'>Missing horizontal rule</p>"
  }
  if (!h4) {
    errors += "<p style='color: red;'>incorrect element to define author</p>"
  }
  if (!title) {
    errors += "<p style='color: red;'>Missing title for webpage</p>"
  }
  if (!link) {
    errors += "<p style='color: red;'>Missing favicon for webpage</p>"
  }
  if (result === arr.length) {
    errors = "<p style='color: lightgreen'>Greet ! You have Passed All Steps</p>"
  }
  div.innerHTML += errors;
}
