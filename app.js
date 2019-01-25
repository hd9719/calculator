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
let number4;

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
           
              
            
             result(number1,number2,id1);
             
            // display.value= number3;
              break;       
                      
              }


            }
   


 function result(num1,num2,id)
{ console.log("hii");
  let  flag='hi';
   switch(id)
   {
 
  case '+':// number2=display.value;
            number3=num1 + num2; 
            //console.log();
            checknumber(number3);
            //display.value= number3;
            
           break;
  case '-': //number2=display.value;
            number3=num1 - num2; 
            //display.value= number3;
            checknumber(number3);    
           break;

  case '*': //number2=display.value;
            number3=num1 * num2;
            checknumber(number3); 
            //display.value= number3;   
           break;

 case '/':  //number2=display.value;
            number3=num1 / num2;
            checknumber(number3); 
           // display.value = number3;    
             break;


   }
    
      //return number3;
    
}
 


function checknumber(number4)
{
  let leng = 0;
  leng=number4.length;
  console.log(leng);
  if(leng > 10)
  {
    
    return (alert("number greater than 10 digit"));
}
  
 else

 {
  
    display.value = number4;

}
}
  function clearscreen()
  {






  }










