const clock=document.getElementById('clock')// A NEW TECHNIQUE
//const clock=document.querySelector('#clock')//APNI WALI TECHNIQUE


setInterval(function(){
  const date=new Date();//yaad rakhi date aandar set interval kai 
  clock.innerHTML=date.toLocaleTimeString()
},1000 /*ms*/)

//setInterval(function(){},1000) :- syntax 1000ms mai function execute hota rehga iska matlab