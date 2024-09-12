//classes is blueprint
//factory me sab car ka ik blueprint bna hoga or sab cars waise hi bane gi start se nhi bane gi
//class is object blueprint
//let car nam ki class bani jis me sab car wali mwthod or property hogi
class car{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
//class is template jis se diff object ban sakte ha
//class se obj bnata ha like this
let audi=new car(); 
let toyota=new car();//new keyword se new obj bnta ha through class
//audi is my object of car class

//now audi me car class wali properties jae gi
audi.start();
audi.stop();
toyota.start();