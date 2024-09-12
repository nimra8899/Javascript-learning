console.log(window);//dom is document object model
//tree structure....jab bhi document banti ha to browser dom create kardeta ha
//windown->document->html->head/body
//head->meta ,link,head,title
//body->body k tags
document.body.style.background="pink";
//console.dir(document.body.childNodes[1].innerText="");//dom dynamicchanges karta ha in web pages
//elements ko access karna in dom
//..Selecting with id
//id mean jo h3 ha usko access karna ha
let d=document.getElementById("mean");//aesi id ka nam likhe jo ha hi nhi to null aye ga
console.dir(d);
let print=document.getElementsByClassName("para");//html collection return karta ha 
console.log(print);
console.dir(print);

//by tagname
let paragraph=document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);
let button=document.getElementById("press");
console.log(button);
console.dir(button);
//queryselector
//is me class id tag sab access hojate
let elements=document.querySelector("p");// give first element
console.dir(elements);

let elements1=document.querySelectorAll("p");// give all elements
console.dir(elements1);
//class
let elements2=document.querySelector(".myClass");// give first element
console.log(elements2);
//id
let elements3=document.querySelectorAll("#myId");// give first element
console.dir(elements3);
//properties

//tagname
elements.tagName;
//innertext....//body me script or div ha or div me heading,para,button, hoti ha ye dom structure ha
//body parent node ha or div or script child node ha or div k ander mazeed child ha///sibling same level per hoti
//    body(parent)
//      |
//     DIV(CHILD)
//   /   |    \
//  h1(1st child)  para    h2(last child)   
document.querySelector("div").children;
//learn navigation from mdn doc text node elementnode  commentnode


//div
let div=document.querySelector("div");
console.dir(div);
div.innerText;// div k andar sab ka inner text print hoga
div.innerHTML;//is me tags bhi prrint hoge with text 
//text content
div.innerText="abc12333";//div me sara text change ho kar ye hojae ga jo set kia
div.innerHTML="<div>inner div</div>"
let heading=document.querySelector("head");
console.dir(heading);
heading.innerHTML="<h1>hey</h1>"
heading.innerText="abh12"
//practice
let header5=document.querySelector("h2");
console.dir(header5);
header5.innerText="hello javascript from apna college students";
// teen div ha or same name class box ha or sab ko access kar k text dalna ha
let box=document.querySelectorAll(".box");
console.dir(box);
box[0].innerText="hey this is box1 here";
box[1].innerText="hey this is box2 here";
box[2].innerText="hey this is box3 here";
//other method 
//let idx=0;
//for(div of box){
//div.innerText=`hey new box ${idx}`;
//idx++;}


