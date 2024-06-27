// Immediately Invoked Function Expressions (IIFE)
//jo function immmediatly execute hojaye woh hai iife but ye basic defination hai 
//interview mai - global scope kai varibales ya kuch bhi unke hone wale pollution/influenece ko hatane kai liye (unse problem jo hoti hai unhe hatane kai liye) we use iife


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();                                     //impppppppp ; lagana COMPULSARY hai in IIFE

//()() here the first () was to wrap function in it as a block and another () was for the call of execution




//here in arrow function we can also use ()=>{} this syntax and also ()=>() syntax and iife wrapped in () and called and executed by ()


( (name) => (
    console.log(`DB CONNECTED to ${name}`)
 ) )(`mongoDB`)
// as ye neeche wala () is call function we can write parameter in it which is accepted by (name) above