//IMP  
//GLOBAL OBJECT FOR BROWSER(MEANS WHEN WE DO console.log(this)on browser the global object for browser is window)
// but when we run in a node environmnet matlab idhar hie the global object is empty{} in node js compiler
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // console.log(this) karte toh bahut sari values aati hai this.username karte hai toh undefined aata jisse pta chalta hai this doesnt work in functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"   // YE BHI UPAR WALE FUNCTION KAI JAISE HIE BATARA KI SYNTAX BADALDOGE FUNCTION KA TOH BHI THIS NHI CHALEGA USME
//     console.log(this.username);   // imp difference  // function mai agar sir console.log(this) kiya toh bahut kuch aata hai output mai  but arrow function mai nhi aata empty aata hai
// }

//arrow function is    ()=>{}    wrapped in variable like given below and we can run arrow funtion without {} also so we can write ()=>() 



const chai =  () => {
    let username = "hitesh"   // yha pe bhi function ki tarah console.log(this.username) karenge toh undefined aayega 
    console.log(this);       //YHA PE THIS KO PRINT KAREGE TOH EMPTY OBJECT{} AAYEGA AUR BROWSER PAI WINDOW AAYEGA AS SAID ABOVE
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

 //const addTwo = (num1, num2) => num1 + num2         // THIS IS IMPLICIT RETURN //ISME {} PARETHESIS HATA SAKTE EK LINE MAI LANEKA AUR RETURN HATA DENEKA SAME OUTPUT


 
//matlab hum num1+num2 ko kidhar bhi likh sakte one the  same line and in the  below lines as well



 const addTwo = (num1, num2) =>     //AGAR {}YE PARENTHESIS MAI WRAP KIYA HAI TOH RETURN LIKHNA PADEGA BUT IF WRAPPED IN THIS() PARENTHSIS NO NEED TO RETURN
 
 
 
 ( num1 + num2 )  //here also same as above 



//const addTwo = (num1, num2) => ({username: "hitesh"}) //it will not run without () because object banane kai liye hai {} ye lagta toh execution kai liye we have to wrap object under () and o/p will be username:hitesh with considering the fact that we arve providing 2 numbers which are not in use also


console.log(addTwo(3, 4))





//ye aage dekhenge loops mai

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()