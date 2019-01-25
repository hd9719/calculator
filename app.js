document.body.style.backgroundImage = "url('images/giphy.gif')";
//var tag=document.querySelector('.calcBG col-md-3 col-md-offset-4 text-center');

let display=document.getElementById('t1');
display.value=0;
var rows=document.querySelectorAll('.row');
let display1=document.getElementById('text');
let number1=0,
           number2=0,
           number3=0;
let id1='+';


// console.log(rows);



 // loadEventListeners();




//eventlistners
// function loadEventListeners()
// {
// tag.addEventListener('click',calculate);

// }






//functions

// function calculate()
// {
   
// //  if(e.targt.classList=='col-sm-3')
// // {
   
// // }
// // console.log(e.target);







function myfunction(id) {
    if(display.value==='0')
    {
        display.value='';
    }
   
  let len=display.value.length;
    
    if(len < 10)
    {
        display.value+=id;
    }
   else 
   {
        return(alert("max 10 allowed"));
   }
   
  }
  


 function calculate(id)
 {
    
    if(display.value==='0')
{
    return(alert("no input added"));
}  



// var input = eval(display.value);
// display.value=input;




   switch(id)
   {
       


case '+': number1=parseInt(display.value,10);
        display.value='0';
        id1='+';
        
        break;
       

case '-':    number1=parseInt(display.value,10);
            
            display.value='0';
           // result(number1,id);
           id1='-';
            break;

        
          //    display.value=number3;
case '*':     number1=parseInt(display.value,10);
              display.value='0';
             // result(num1,id);
              id1='*'
              break;
           // display.value=number3;
case '/':      number1=parseInt(display.value,10);
              display.value='0';
              //result(num1,id);
              id1='/'
              break;

 case '=':  number2=parseInt(display.value,10);
             console.log(number2);
              
            
             result(number1,number2,id1);
             
            // display.value= number3;
              break;       
                      
              }


            }
   


 function result(num1,num2,id)
{ console.log("hii");
  //let  flag='hi';
   switch(id)
   {
 
  case '+':// number2=display.value;
            number3=num1 + num2; 
            console.log(number3);
            //leng=number3.length;

            //console.log(leng);
            //checknumber(leng,number3);
            display.value= number3;
            
           break;
  case '-': //number2=display.value;
            number3=num1 - num2; 
            //console.log(number3);
            //leng=number3.length;
            display.value= number3;
           // checknumber(leng,number3);    
           break;

  case '*': //number2=display.value;
            number3=num1 * num2;
            //console.log(number3);
            //leng=number3.length;
          //    checknumber(leng,number3); 
            display.value= number3;   
           break;

 case '/':  //number2=display.value;
            number3=num1 / num2;
           // checknumber(leng,number3);
            //leng=number3.length; 
            display.value = number3;    
             break;


   }
    
      //return number3;
    
}
 


// function checknumber(leng,number3)
// {
// // //   let leng = 0;
// //   leng=parseInt(number3.length,10);
//    console.log(leng);
//   if(leng < 10)
//   {
//     display.value = number3;
  
// }
  
//  else

//  {
//     return (alert("number greater than 10 digit"));
    

// }
// }
  function clearscreen()
  {
   number1=display.value;
   let token=0;
   token=number1.length;
  // console.log(token);


   number2=number1.substring(0,token-1);

    display.value=number2;
    
    // number2=display.value;
    // if(number2 === ' ')
    // {
    //     display.value = '0';
    //     return 0;
    // }



  }

function clearscreenAll()
{

    number1=display.value;
    let token=0;
    token=number1.length;
   // console.log(token);
 
 
    number2=number1.substring(0,0);
 
     display.value=number2;

}


function singleInput(id)
{

 number2=display.value;

 if(number2==='0')
 {

    return(alert("no input added"));

 }

  switch(id)
{
  case 'square': number1=parseInt(display.value,10);
               console.log(number1);
               number2=number1 * number1;
               console.log(number2);
            display.value=number2;
            break;
    
  case 'cube': number1=parseInt(display.value,10);
             number2=number1 * number1 * number1;
             console.log(number2);
            display.value = number2;
            break;
  
//   case %:   number1=parseInt(display.value,10);
//              break;  
             
             







}

}





