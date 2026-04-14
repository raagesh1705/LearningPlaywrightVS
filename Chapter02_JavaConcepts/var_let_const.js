//var, let, const 

//VARIABLES 
//var - function scoped 
var x=10; // global scope - secondary preference 
console.log(x);

//defining of function 
function test(){

    console.log("hello");
    var x=20;//local scope- high/primary  preference 
    console.log(x);

    if (true){
        var x=30;
        console.log(x);
    }
    console.log("F is", +x);
}

//calling of function 
test();
// variables = allow re-declaration wherever in the code 



// Let is block coded, hence prints b = 30 and restricting b=40 within the if block 
//Let doesn't allow double declaration ; let a =10; let a=20; not possible 
//MOSTLY LET IS USED COMPARED TO OTHERS 


let b =20; // global scope 
console.log(b);

function test1 (){
    console.log("print me ");
    let b = 50; // local scope 
    console.log(b);  
if(true){
let b= 40;
console.log(b);
}
console.log ("F is",+b);
}

test1();

// constant 
const pi=3.14;
console.log(pi);
pi=3.14;
