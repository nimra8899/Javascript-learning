const student= {
    name:'nimra',
    rollno:16,
    setion:'G',
    printrollno:function(){
        console.log("roll no jis",this.rollno);
    },//kisi object me this use horha ha iska matlab wohi objech this.roolno =student roll no

};
//object k pas prototype hota ha
//array bhi ik object ha to uske passs bhi prototype hota ha
array=['f','g'];
array.push("push");
console.log(array);//push is by default function jo prototype me hota ha


//making your own protype
const emp={
    caltax(){
        console.log("tax is 10%", );
 
    }//emp object me caltax wala function ha
    
}
const karanarjun={
    name:'jj',
    caltax:()=>{
        console.log("tax is 20");//object ka method print hoga
    }
    
}
karanarjun.__proto__=emp//abb karanarjun obkect or uske prototype me same funtion ha t0 jab caltax call kare to obkect wala print hoga
karanarjun.caltax();//agar protype or object me same function hoga to object wala prefer hoga
//ik entity banao or real world ki trah uski properties de do
//oop chizo ko asan banati ha
//human object banaya human,run
//abstraction=>hiding details
//encapsulation=>5 chize mix kar k ik bari chiz bana dena _like mouse keyboard moniter ko mila kr pc bana do
//inheritance=>purani ya parent ki qualities le kar new chiz banana start se bnane ki zarurt nhi ha
//polymorphism=>ik chiz kki alag alag form like phone multiple chize krta ha


//protype => js object me protype hota ha/////protype is reference to objecct
let a={
    name:'harry',
    language:'js',
    run:()=>{
      //  alert("run")             //class is blueprint or template like agar blueprint me sab ka color blue ha
    }
};
a.run();
console.log(a.name);
//protytype ko set a.__proto__=p isme a ka protype is p
 
const p={
    name2:'nn',
    age:12,
    section:"g",
};
a.__proto__=p//p is a ka prototype
//ab prototype ka prototype bhi rakh sakte ha
p.__proto__={
    name:'nimra',
    age:11,
};
class toyotacar{       //class
    start(){
        console.log("start");
}
constructor( brand,model){
    console.log("create new object");//do bar ye print hoga because do object bane ha do call hue ha object
    this.brand='brand';
    this.model="1980";
}
setbrand(brand){
    console.log("its branded car");
}
stop(){
    console.log("stop");
}
}       //create object
let civic =new toyotacar();//object
//ab civic ko start or stop krsakte usme toyota car k function aagye ha becoz wo uska object ha
let alto=new toyotacar("alto");

                                        //constructor//
//constructor is special keyword or method 
//constructor is used to initialize object .... jab new object create hota to constructor ban jata
//protype me automatically constructor hota 
// we can create custom constructor
 
                                   //inheritance//
//passing down methods and property from parent to child
//we use keyword extend

class parent{
    hello()// this function print hello
    {
        console.log("hello wordl");
    }
}
class child extends parent{// all property of parent classs are inherited

}
let object=new child();

class person{
    constructor(name){
        console.log("enter parent constructor");
        this.name=name;
    }
    sleep(){
        console.log("sleep");
    }
    eat(){
        console.log("eat");
    }

}
class developer extends person {
   
    constructor(name){

        console.log("enter child constructor");
        super(name);            //agar super me name na dia to name;undefined aaye ga becacuse ye constrictor parent ko call krta ha
        this.name=this.name;
    }
    buildapp(){//abb agar newobject.buildapp likhu to pehle sleep aaye ga
        super.sleep();//agar parent class k kisi method ko pehle call krna to super aaye ga like super.sleep()
        console.log("bulid app");
    }
    solve(){
        console.log("solve promblem");// agar is class me constructor banao gi to super keyword use to call parent class constructor

    }
}                       //har developer ka alag name hoo is liye constructor me pass kro wo
let object2=new parent();
let newobject=new developer("nimra");
let newobject2=new developer("john");//jab bhi new developer ka object   bane ga to uska ik alg name hoga
//agar child and parent dono k pass same method ha to child method use hoga that is called method overriding
                     //super keyword//
 // agar ham child or extended like jaause developer ha usme constructor banate ha to usme super keyword use krna
 // hoga to call parent class constructor first
 

                //practice//
                //college k liye website  bana rhe  

 class user{
    constructor(name,email){
        this.email=email;
        this.name=name;
    }
  viewdataa(){
    console.log("view data");
  }

 }               
 class admin extends user{
    constructor(name,email){
        super(name.email);
        this.email=email;
        this.name=name;
    }
    editdata(){
        console.log("edit dATA");
    }

 }
 let admin1=new admin("jeny","admin@gmail.com"); 
                      //error handling//
        let c=44;
        let d=8;
        console.log(c);
        console.log(d); 
        console.log(c-d);
        try{//jis line me shaq erro ka wo try me hoga 
            console.log(d-n); //yaha error aaye ga because n donot exist
           //ab is error ki waja se pora js ki file nhi run hogi to isko handle krma hoga try catch se
        }catch(error){//catch handle krta erro ko
          console.log(error);
        }
        console.log(c+c);
        console.log(d+d); 
        console.log(c+d);
        console.log(d+c); 
        //try catch se baqi code run hoga jo error ha wo catch me print hojae ga