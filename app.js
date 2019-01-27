//select for global elements
  document.body.style.backgroundImage = "url('images/giphy.gif')";

  let display=document.getElementById('t1');

  display.value=0;

  var rows=document.querySelectorAll('.row');

  let display1=document.getElementById('text');

  let history1=document.querySelectorAll('.tab');

  let history_select=document.querySelector('#history');

  let calculator_select=document.querySelector('#calculator');

  let number1=0,
           number2=0,
           number3=0;
  let id1='+';



//eventlistners









//chek length of number in display if greater then 10 then show alert
function myfunction(id) {

             if(display.value==='0')
    {
             display.value='';
    }
   
            let len=display.value.length;
    
  //if len < 10
            if(len < 10)
    {
            display.value+=id;
    }
             else 
    {
             return(alert("max 10 allowed"));
    }
   
    }
  

//function to read first input and then clear screen to set 0
//also stores id of pressed command
 function calculate(id)
    {
    
    //         if(display.value==='0')
    // {
    //         return(alert("no input added"));
    // }  







  //switch case for id
   switch(id)
    {
       

               //parse number to float to convert it to float from string
case '+':        number1=parseFloat(display.value,10);
                 display.value='0';
                 id1='+';
        
                 break;
       

case '-':       number1=parseFloat(display.value,10);
                display.value='0';
                id1='-';
                break;

        
          
case '*':      number1=parseFloat(display.value,10);
               display.value='0';
            
               id1='*'
               break;
           
case '/':      number1=parseFloat(display.value,10);
               display.value='0';
              
               id1='/'
               break;

case 'power':  number1=parseFloat(display.value,10);
               display.value='0';
               id1='power';
               break;

case '%':      number1=parseFloat(display.value,10);
               display.value='0';
               id1='%';
               break;

               //reading number 2 after pressing =
 case '=':     number2=parseFloat(display.value,10);
               //console.log(number2);
             
              
               //when user press = call result for another calculation
                result(number1,number2,id1);
             
            
               break;       
                      
    }


    }
   

 
 //function to calculate result from previous function call and after printing to display           
function result(num1,num2,id)
    {               //console.log("hii");
                let expression;
              
switch(id)
   
    {
 
case '+':       //store result in number3
               number3=num1 + num2;
               check_dot(number3); 
               checknumber(number3);
               //set result to calculator display
              // display.value= number3;
               break;
  
case '-': 
               number3=num1 - num2; 
               check_dot(number3);
               checknumber(number3);
               //display.value= number3;
               break;

case '*':
               number3=num1 * num2;
               check_dot(number3);
               checknumber(number3);
               
               //display.value= number3;   
               break;

case '/':  
               number3=num1 / num2;
               check_dot(number3);
               checknumber(number3);
               //display.value = number3;    
               break;

case 'power':
                number3=Math.pow(num1,num2);
                check_dot(number3);
                checknumber(number3);
                //display.value=number3;
                break;

case '%':       number3=(num1/100)*num2;
                check_dot(number3);
                checknumber(number3);
                //display.value=number3;
                break;

  



    } 
   //to add a transaction to localstorage call addtohistory function
     addtoHistory(num1,num2,id,number3);
  
    }
 

//function to check result length
//if greater than 10 than display error message
function checknumber(numb)
    {
       
      
   
               let leng='0';
               console.log(numb);
               leng=numb.toString().length;
  
if(leng <= 10)
    {
               display.value = numb;
  
    }
  
else

    {
                
               display.value='result greater than 10 digit';
    

    }
    }


//to remove 1 char from last on screen
function clearscreen()
    {

                //reading no from display
               number1=display.value;
                //token variable for length
                let token=0;
                token=number1.length;
 
 //if length=1 then display value=0               
if(token == 1)
    {
                display.value='0';
      
                return 0;
    }

              //to cut 1 no ferom total string and to display
               number2=number1.substring(0,token-1);

               display.value=number2;
    
    


    }


//to clear total screen  
function clearscreenAll()
    {


 
               display.value='0';
     
    }

//function for single input calculation which takes first input and then operand
function singleInput(id)
    {
               
               //reading number value from display
               number2=display.value;
               let expression;



switch(id)
    {
  
  
case 'square':   number1=parseFloat(display.value,10);
                 //console.log(number1);
                 number3=number1 * number1;
                 check_dot(number3);
                 checknumber(number3);
                 id1='square';
                
                  break;
    
case 'cube':    number1=parseFloat(display.value,10);
                number3=number1 * number1 * number1;
                console.log(number3);
                check_dot(number3);
                checknumber(number3);
                
                id1='cube';
                break;
  
case 'fact':    number1=parseFloat(display.value,10);
                number3 = factorial(number1);
                check_dot(number3);
                checknumber(number3); 
                
                id1='fact' 
                break;
             
case 'root':    number1=parseFloat(display.value,10);
                number3=Math.sqrt(number1);
                check_dot(number3);
                checknumber(number3);
                
                id1='root';
                break;
                        
   
   
     }

                //to add transaction to history to localstorage
                addtoHistory1(id1,number1,number3);
     }



//recursive function to calculate factorial called from singleinput function
function factorial(num)
    {
               let fact=1;
   
   
if(num==0)
    {
               return 1;
    }
      
else
    {
               for(let i=1;i<num;i++)
               fact= fact*i;
               console.log(fact);
               return fact;
    }
   
    }


 //function to add doubleinput transaction to local storage which takes 4 arguments  
function addtoHistory(num1,num2,id,number3)
    {  
                let expressions;
   
   
                expressions=getHistory();


if(expressions.length >= 10)
    { 
                expressions.shift();

    }
                let expression= num1 + id + num2 + '='+ number3;

                expressions.push(expression);

                localStorage.setItem('expressions',JSON.stringify(expressions));



    }




//function to add singleinput transaction to local storage which takes 3 arguments 
function addtoHistory1(id,num1,num2)
    {  
               let expressions;
   
               expressions=getHistory();


//verifying that history data does not exceed 10 data               
if(expressions.length >= 10)
    {
               expressions.shift();
 
    }
                let expression= num1 + id + '='+ num2;
                //pushing expression to expressions array
                expressions.push(expression);
                //to set expressions to localstorage with converting object to string   
                localStorage.setItem('expressions',JSON.stringify(expressions));



    }


 
//function to get history from localstorage which gives array of transactions
function getHistory()
    {  
               let expressions;
               //to get item key=expressions from local storage
               const expressionLS=localStorage.getItem('expressions');


//checking local storage have some values or not if not then return new array
if(expressionLS==null)
    {
               expressions=[];
    }
else  
    {          //to convert it to object parse it
               expressions=JSON.parse(expressionLS);
    }
 
               return expressions;


    }


//function to display history to display which gives history table
function showHistory()
   {  
       
               let row;
               //set calculator section display none(off)
               calculator_select.style.display = 'none';
               //set history table section block(ON)
               history_select.style.display = 'block';
                history_select.innerHTML = ' ';


              let expressions=getHistory();
  
               //creates new table element
               const newElement=document.createElement('table');
               //giv classname 
               newElement.classList = 'historyTable';
                //set header names
               newElement.innerHTML=`<tr><td>History</td><td>  expression</td></tr>`;
               //selecting style
               newElement.firstElementChild.style.fontWeight = 'bold';
 


//for iterating expressions (value)               
for(let i=0;i<10;i++)
    {
        
    
        
               //create new element tr
               row=document.createElement('tr');
               //joining our expression
               row.innerHTML = `<td>${i+1}</td><td>${expressions[i]}</td>`;
               //appending child
               newElement.appendChild(row);


    }       

               //main append to division
              history_select.appendChild(newElement);
        
        

    }



//navigate function to set calculator removing history table
function navigate()
   {

               //set history table section display null
               history_select.style.display = 'none';
               //set history table content null
               history_select.innerHTML = ' ';
                //enable calculator section display block
               calculator_select.style.display = 'block';


   }

   //function for round off decimal values which are greater than 10 digit but have small values
   //also checks for values having power 
function check_dot(nmr)
    {
     
              let dot=nmr.toString();
              //console.log(dot);

if(dot.indexOf('+',0)>0)

    {

                  display.value='result greater than 10 digit';
    }
   
else if(dot.indexOf('.',0)>0)
    {
        
         
              number3=parseFloat(dot.substring(0,10));
        

        
        
    }


    }

 