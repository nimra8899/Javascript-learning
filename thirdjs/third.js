for(let num=0;num<=10;num++){
    console.log("nimra");
}

//sum of 1 to 5
let sum=0;
for(i=1;i<=10;i++){
    sum=sum+i;
}
{
    console.log("sum="+sum);
}
//infinite loop
//never do any loop jo khabi khatam hi na ho
//while loop
let j=1;
while(j<=10){
    console.log("hey");
    j++;
}
//do while
let c=100;//do while ik bar lazmi chale ga beshak condition satisfy na ho
do{
    console.log("hey");
    c++;
}while(c<=10);

//value of str in loop
let size=0;
//for of loop me i ki value automaticcally aaye gi
let string ="nimraisgood";//sab ki value print hojae gi
for(let i of string){
    console.log(i);//for of loop
    size++;
}
{
    console.log(size);
}
//for in loop
//oject ki chize batae ga
let student={
    age:20,
    name:'nnj',
    height:20,
    state:'pass'
};
for(let obj in student)
{
    console.log("values in object ",obj);
}
//print all even num from 1-100
    for(let i=0;i<=100;i++){
        if(i%2==0){
        console.log(i);
    }
}
//prompt me number guess krte raho jab tak sahi  na hoo
//let gnumber=38;
//let usernumber=prompt("enter your number");
//while(usernumber!=gnumber){
   //usernumber= prompt("wrong number guess again");
//}
    //console.log("yaay right  number");


//table

for(i=2;i<=2;i++)
for(j=1;j<=10;j++){
    console.log(i+ "x" +j+"="+i*j);
}
//strings ki positions ka pata chalta 
let str1="nimra";
let str2 ="jabbar";
{
    console.log(str1[0]);// give n
    console.log(str2[2]);// give b
    
}
//template literals
let object={
    cost:12,
    discount:20
};
let output =`cost of ${object.cost } is  ${object.discount}`;//back ticks lagani hs
console.log(output);
// escape character and length of string
let str4="huugghghbjh/tnimra";///t dono string ki combine length batata ha
console.log(str4.length);// give lenth of strring
//strings method
//touppercase
let string1="nimrajababr";
let strnew=string1.toUpperCase();
{
    console.log(strnew);//upper case me kar dega
}
//lower case
let string2="IAMGOOD";
let newstr2=string2.toLowerCase();
{
    console.log(newstr2);
}
//trim method white spaces ko khtam krta ha
let string3="i am not good   ....";
console.log(string3.trim());
//slice strings
let string5="01234567";
console.log(string5.slice(1,6));//1-6 k drmain print hoge

//concat strings
let str9="nimra";
let str8="jabbar";
let result=str9.concat(str8);
console.log(result);
//replace string with new one
let str6="monday";
console.log(str6.replace('m','s'));
//is index par kia string ha
let str45="learningjs";
console.log(str45.charAt(6));


//

//let username=prompt("enter username");
//str77="@"
//let fullname=str77.concat(username);
//console.log(fullname+fullname.length);//nimrajabbar enter karne se @nimrajabbar12 aaye ga
//let numbertoguess=39;
//let username1=prompt("input number");
//while(numbertoguess=!username1);
//{
// username1=prompt("wrong number");
//}
//{
 //   console.log("right number");}
    let p=2; 
for(let x=1;x<=10;x++)
   
    {
    console.log(p+"X"+x  +  "="+ p*x     );
}


