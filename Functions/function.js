function variable(){
    console.log("mmmm");
}

variable();
//parameters
function print(messege){
    console.log(messege);

}
print("jnjnjn");//call me jo likhe ge wo argument hoga meesege or jnjnjn will be called parameter/argument
//sum kro do number with function
function addfunction(n1,n2){
    console.log(n1+n2);

}
addfunction(3,4);
//subtract num
function minus(x,y)//local variables jo block scope me ho or bracket k bahie kam na kare


{
    s=x-y;
    return s;//return k bad block me jo bhi wo execute nhi hoga
}
 let val =minus(4,8);//parameters of funnction are local variable and are block scope
 console.log(val );
 //multiplication
 function mul(g,h)
 {
    return g*h;
 }
 let value= mul(6,7);
  console.log(value);
  //arrow fuctione+
  let arrowfunction=(e,r)=>{
    console.log(e+r);
  };
  arrowfunction(3,6);
  //multiply rrow funvtion
  let mularrow=(t,i)=>{
    console.log(t*i);
  };
  mularrow(7,9);
  //ik string k vowels batae
   function countvow(str){
    let count=0;

    for(let b of str){


    

    if(b==="a"||b==='e'||b==='i'||b==='o'||b==="u")
    {
        count++;
    


   }
}
console.log(count);}

    countvow("nimra");
    //

let loop="mmmmm";
let size;
for(let char of loop){
    console.log(char);
 size++;
}
console.log(size);
//for each method 
//fuction ko object k sath mila kar method bnta ha
//callbak function jo as a argument dosre fuction ko pass ho
let arr=[1,2,34];
arr.forEach(function print(val)//argument me function ha
{
    console.log(val);// array ki value print hogi

});
let array=[1,3.4,2];
array.forEach((val)=>{
    console.log(val);
});
//for each sirf array me use hoga
//higher order function/method are foreach 
//high order jo dosre fuuntion ko as aparameter use kare
//jaha callback hoga wo function high order hoga
//value,index ,array ye call back k parameters ha
//square of array num
let number=[1,2,3,4,5,6];
 number.forEach((square)=>{
    let result=square*square;
  console.log(result);
 });                  
 //map method
 //is me bhi teen parameters use hosakte ha value,index,array
 let array1=[2,33,44,556];
 let arraynew=array1.map((print)=>{
    return print;//map return new array                //arr.map(callbackfunctipn(value,index,array))
 });
 console.log(arraynew);//map tab use hota jab new array bnana ho
 //filter method ...sab index par ja kar values filter karna based on some conditions
let array3=[44,67,22];
let newarray2=array3.filter((hey)=>{
    return hey%2==0;//condition/      //filter even value
});
console.log(newarray2);
//reduce ...bht sare operations perform krta or reduce krtaa array ko into single one
//sum
let array4=[1,2,3,4,5,6,7];
let output=array4.reduce((previous,current)=>{
    return previous+current;
});//array ki sari value add hojae gi
console.log(output);
//largest num with reduce
let array5=[1,2,3,4,5,6,7];
let result=array5.reduce((prev,curr)=>{
    return prev>curr?prev:curr;// ? terrerny operator
    //agar prev bari to return prev otherwise return curr
});
console.log(result);
//smallest find in array
let array6=[1,2,3,4,5,6,7];
let smallest=array6.reduce((previous,current)=>{
    return previous<current?previous:current;
});
console.log(smallest);
//find marks that are ninty
let marks=[44,90,66,773,99,33,56];
let result1=marks.filter((value)=>{
  return value>90;
});
console.log(result1);
//take number n from user and creat array from 1 to n
let numbers=prompt("input number");
 let array7=[];
 for(let i=1;i<=numbers;i++)
 {
    array7[i-1]=i;
 }
 console.log(array7);
//product suing reduce method
let array8=[2,3,45,5];
let product=array8.reduce((prev,current)=>{
return prev*current;

});
console.log(product);