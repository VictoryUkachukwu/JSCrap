//LOGICAL OPERATORS 

//OR ||

let hour;
let isWeekend;

hour = 9;

if (hour < 10 || hour > 18) {
          alert("The office is closed!");
 }
 else {
           alert("Right on time!")
 };

hour =12;
isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
          alert("The office is NOT closed");
}
else {
          alert("Office is open")
};

let fName = "";
let lastName = "";
let nickName = "JavaScript";

alert(fName || lastName || nickName || "Anonymous");

//AND &&
// // let userName = prompt("Input username" , "");
// let userName = "Victory";
// let lastName = "obi";

// if (userName == "Victory" && lastName == "obi") {
//           alert("Correct");
// };

let time = 12;
let minute = 30;

alert(time == 12 && minute == 30);

// if (time == 12 && minute == 30) {
//           alert("The time is 12:30");
// }


//!NOT

alert(!true);

//ASSIGNMENT

let login = prompt("userName" , "");
let password;


if(login == "Admin") {
          password = prompt("Input password" , "");
          if(password == "TheMaster") {
                    alert("Welcome");
          }
          else if(password == "") {
                    alert("Cancelled!")
          }
          else {
                    alert("Wrong password!");
          }
}
else if (login == "") {
                    alert("Cancelled!");
          }

else {
          alert("I dont know you");
};

//--------------------------------------------------------------------------------------

//LOOP

//while
let v = 0;
while (v < 4) {
          alert(v);
          v++;
}

//do...while
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


//for...
for (let i = 0; i < 3; i++) {
          alert(i);
 }

 //OR
 let i = 0;
 for (; i< 3; i++) {
           alert(i);
 }

 //OR
 let i = 0;
 for (; i<3;) {
           alert(i++);
 }

 if (i > 5) {
          alert(i);
        } else {
          continue;
        }
