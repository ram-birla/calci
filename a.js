var ginput = "fno"


function selectinput(a)
{
ginput=a;

}

function num(val) 
{ 
   document.getElementById(ginput).value+=val 
} 

function add(){

var a,b,c;
a=Number(document.getElementById("fno").value);
b=Number(document.getElementById("sno").value);
c= a + b;
document.getElementById("result").value= c;

}

function sub(){
var a,b,c;
a=Number(document.getElementById("fno").value);
b=Number(document.getElementById("sno").value);
c= a - b;
document.getElementById("result").value= c;
}

function mul(){
var a,b,c;
a=Number(document.getElementById("fno").value);
b=Number(document.getElementById("sno").value);
c= a * b;
document.getElementById("result").value= c;
}

function div(){
var a,b,c;
a=Number(document.getElementById("fno").value);
b=Number(document.getElementById("sno").value);
c= a / b;
document.getElementById("result").value= c;
}

function per(){
var a,b,c;
a=Number(document.getElementById("fno").value);
b=Number(document.getElementById("sno").value);
c= (a*100)/b;
document.getElementById("result").value= c;
}

function backSpace() {
	var box = document.getElementById(ginput);  
 	var number = box.value;
  
  	var len = number.length - 1;
  
 	var newNumber = number.substring( 0, len );
  
  	box.value = newNumber;

} 

function reset(){
document.getElementById(ginput).value = '';
}

function square(){
var a,b,c;
if (ginput=="fno"){
a=Number(document.getElementById(ginput).value);

c= a * a;
document.getElementById("result").value= c;
   }
else if (ginput=="sno"){
b=Number(document.getElementById(ginput).value);
c= b*b;
document.getElementById("result").value= c;
  }
}

function cube(){
var a,b,c;
if (ginput=="fno"){
a=Number(document.getElementById(ginput).value);

c= a * a *a;
document.getElementById("result").value= c;
   }
else if (ginput=="sno"){
b=Number(document.getElementById(ginput).value);
c= b*b*b;
document.getElementById("result").value= c;
  }
}
