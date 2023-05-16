// javascript code example 1:
/* var body = document.body;
var div = document.createElement('div');
var paragraph = document.createElement('p');
div.appendChild(document.createTextNode('my div text'));
paragraph.appendChild(document.createTextNode('my paragraph text'));
body.appendChild(div);
body.appendChild(p); */

// javascript code example 2:
/* var ul = document.getElementById('navList');
var li = document.createElement('li');
var a = document.createElement('a');
a.href = "#";
a.innerHTML = "blog";
li.appendChild(a);
ul.appendChild(li); */

// javascript code example 3:
/* var parentdiv = document.getElementById('parentElement');
var h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('My First JavaScript Project'));
parentdiv.insertBefore(h1, document.getElementById('childElement')); */

// javascript code example 4: 
/* var div = document.getElementById('data');
var exampleAttr = div.getAttribute('id');
div.setAttribute('name', 'john'); */

// javascript code example 5:
/* var div = document.getElementById('user');
div.setAttribute('dataset-id', '');
div.setAttribute('dataset-name', ''); */

// javascript code example 6:
/* var navDiv = document.getElementById('navigation');
console.log(navDiv.className);
console.log(navDiv.classList);
navDiv.classList.add('add1');
navDiv.classList.add('add2', 'add3');
console.log(navDiv.className);
navDiv.remove('add1');
navDiv.remove('add2', 'add3'); */

// javascript code example 7: 
/* var h1 = document.getElementById('color');
h1.classList.toggle('pink');
h1.classList.toggle('pink'); */

// javascript code example 8: 
/* var div = document.getElementById('orange');
div.remove(); */

// javascript code example 9:
/* var div = document.getElementById('orange').id;
document.getElementById('orange').parentNode.removeChild(document.getElementById('orange')); */

// javascript code example 10:
/* var h1 = document.getElementById('color');
var h1parent = h1.parentNode;
var p = document.createElement('p');
p.setAttribute('id', 'color');
p.textContent = 'new replacement element';
h1parent.replaceChild(p, h1); */