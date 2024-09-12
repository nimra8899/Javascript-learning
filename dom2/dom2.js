let div=document.querySelector("div");
console.log(div);
let output=div.getAttribute("id");
console.log(output);//id ki value ya nam aayajae ga
let output2=div.getAttribute("name");
console.log(output2);//id ki value ya nam aayajae ga

let paragraph=document.querySelector("p");
console.log(paragraph);
let output3=paragraph.getAttribute("class");
console.log(output3);
let output4=paragraph.setAttribute("class","para2");//class ka nam change hojae ga
console.log(output4);

//div.style.backgroundColor="";
div.style.width="120px";
//div.innerText="this is box";
//append karna end me add karn hota ha div items wali uske end me butoon laga do through append
let button=document.createElement("button");
console.log(button);
button.innerText="click me";
div.append(button);//end me aaye ga div k
button.style.backgroundColor="red";
//prepend
let button2=document.createElement("button");
console.log(button2);
button2.innerText="click me 2";
div.prepend(button2);//staert me aaye ga div k
//before
let button3=document.createElement("button");
console.log(button3);
button3.innerText="click me 3";
div.before(button3);//staert me aaye ga div k just  bahir
//after
let button4=document.createElement("button");
console.log(button4);
button4.innerText="click me 4";
div.after(button4);//end me aaye ga div k bahir just

//heading start me dalo
let heading=document.createElement("h2");
console.log(heading);
heading.innerText="hey there";
 let output5=document.querySelector("body");
 console.log(output5);
 output5.prepend(heading);
 //remove
 let paragraph2=document.createElement("p");
paragraph2.innerText="hey";
 console.log(paragraph2);
 paragraph2.remove();
 heading.remove();//remove heading
 //apppend child
 let node=document.createElement("li");
 let textnode=document.createTextNode("water");
 node.appendChild(textnode);
document.getElementById("box").appendChild(textnode);//list me add kkrdia
//remove chiold
document.getElementById("box").removeChild(textnode);//list me remove kkrdia

//practice
//button bnao or style style kro
let btn1=document.createElement("button");
console.log(btn1);
btn1.style.backgroundColor="red";
btn1.innerText="click me";
btn1.style.color="white";
let body=document.querySelector("body");
console.log(body);
body.prepend(btn1);
/////............
let para2=document.createElement("p");
para2.innerText="hhhhhhhh";
console.log(para2);
let para1=document.querySelector(".mypara");
console.log(para1);
para1.append(para2);



