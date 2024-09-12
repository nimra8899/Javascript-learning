//array is object type
let array=['aaa','hhb','hfh'];

console.log(array[0]);
console.log(array.length);

let arr=['3','4',88,'66'];
arr[3]=33;
console.log(arr);
//array injavascript can be change ksis bhi index par  strings change nhi hosakte 
//mutable jo change hojae or immutable jo change na hoo
let hero=['thor','dddd','ssss'];
for (let i=0;i<hero.length;i++)//i index consider hoga
console.log(hero[i]);

let cities=['multan','lahore','isl','khi'];
for(let j=0; j<cities.length;j++)
console.log(cities[j]);


for(let city of cities)//city=cities[j]
console.log(city.toUpperCase());




//marks find averge

let marks=[85,97,44,37,79,65];
let sum=0;
for(let val of marks){
sum=sum+val;}
console.log(sum);
let average=sum/marks.length;
console.log(average);
//prices per 10% off ha or array me discount value store hoo
//let prices=[250,650,77,666,50];
//let discount=0;
//console.log(prices[indx]);
//for(let value of prices)


//array method
//push method add somthing on end and pop will Pull
let fruits=['apple','grapes','orange','banana'];
fruits.push('potota','burger','gghgh');
console.log(fruits);//array methods orignal array ko change kare ga not like strings

//pop method end se del kare ga
let clothes=['shirt','pant','frock','trouser'];
clothes.pop();
console.log(clothes);

//to sting array ko string me convert karta ha
let array1=['nnnn','nndd','dert'];
console.log(array1.toString());
//concat two array combine
let arr2=[7,9,6,5,33,6];
let arr4=[88,9,76,44,2,3];
let arr5=[5,53,55,22,66,22];
let result=arr2.concat(arr4,arr5);
console.log(result);
let marvel=['superman','spiderman'];
marvel.unshift('wonderwoman');
console.log(marvel);
//unshift method start me element add krta ha
let nimra=[9,4,22,3,33];
let output=nimra.shift();//first se del krta ha
console.log(output);
console.log(nimra);
//slice method
let slicemethod=[77,99,0,7,6,5];//0 index se 4 index se pehle wale ements aaye ge
let value1=slicemethod.slice(0,4);//2 is staring index and 3 is ending index
console.log(value1);
//splice method  ....orignal array change 
//splice  (staring index jaha se start kara,kitne elements del krne,new elements add karne?if not leave it blank)
let nimra1=[1,2,3,4,5,6,7,8];
nimra1.splice(0,4,33,555);
console.log(nimra1);
//practice
let companies=['bloomberg','mirosoft','uber','google','ibm','netflix'];
companies.shift();//remove bloomberg
companies.splice(1,1,'ola');//uber ki jaga ola
companies.push('amazon');
console.log(companies);
let number =[1,2,3,4,5];
for(let i of number){
    console.log(i);
}