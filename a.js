var ginput = "fno"


function selectinput(a)
{
ginput=a;
}

function clear(b){
	document.getElementById(ginput).value = '';
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

