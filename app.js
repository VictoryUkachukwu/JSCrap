alert('hello!');
var net = "99" == 99;
console.log(net);

//var sample working

let amount = 20;
amount = amount * 2;
document.write(amount);

let space = `<br><br>`;
document.write(space);

amount = "$" + String(amount);
document.write(amount);

document.write(space);

let accountBalance = 500.00;
let phonePrice = 800.00;

if(phonePrice < accountBalance) {
          document.write("I want to buy this phone")
}
else{
          document.write("No thanks"); 
}

document.write(space);


let demo1 = "John Doe";
document.write(demo1);

document.write(space);

//---------------------------------------------------------------------------------------------
//comparison checks

let result;

result = 5 > 2;
document.write(result);

document.write(space);

//-------------------------------------------------------------------------------------------

result = "apple" > "pineapple";
document.write(result);

document.write(space);

//-------------------------------------------------------------------------------------------

result = "2" > "12";
document.write(`${result} (hello! I added this statement to the boolean result)`);

document.write(space);

//-------------------------------------------------------------------------------------------

result = undefined == null;
document.write(result);

document.write(space);

//-------------------------------------------------------------------------------------------

result = undefined === null;
document.write(result);

document.write(space);

//-------------------------------------------------------------------------------------------
//conditional branching if()

let ageVerify = prompt("How old are you?" , "18");
if (ageVerify < 18) {
          alert("Sorry, you are underaged!");
}

else if (ageVerify > 35) {
          alert("Sorry, you are overaged!");
}

else {
          alert("Congratulations, you are the right age!");
}

//-------------------------------------------------------------------------------------------
//short form for if( )conditional statement {single}

// let example = prompt("How old are you for real?" , "");
// let trial;

// trial = (example > 18) ? "overaged" : "underaged";
// alert(trial);

//-------------------------------------------------------------------------------------------


//short form for if () conditional statement {multiple}

let example = prompt("Hello, what's your age?" , "");
let trial;

trial = (example < 18) ? "underage" :
          (example > 18) ? "overaged" :
           "right age";
alert(trial);


//-------------------------------------------------------------------------------------------
//assignment

let hello = prompt("What is the value" , "");
let tryAl;

tryAl = (hello > 0) ?  1 :
          (hello < 0) ? -1 :
          0;
alert(tryAl);

//-------------------------------------------------------------------------------------------


let getValue = prompt("Get value" , "");

if (getValue > 0) {
          alert(1);
}

else if (getValue < 0) {
          alert(-1);
}

else {
          alert(0);
};