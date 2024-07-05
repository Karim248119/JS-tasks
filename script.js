//1-	 Write a program that allow to user enter number then print it

const user = document.getElementById("userName");
const result = document.getElementById("result");

//2-	Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

const num = document.querySelector("#q2 input");
const result2 = document.querySelector("#q2 p");
const checkbtn = document.querySelector("#q2 button");

checkbtn.addEventListener("click", () => {
  if (num.value % 3 === 0) {
    result2.innerHTML = "yes";
  } else {
    result2.innerHTML = "no";
  }
});

//3-	Write a program that allows the user to insert 2 integers then print the max

const num1 = document.querySelector("#q3 .num1");
const num2 = document.querySelector("#q3 .num2");
const result3 = document.querySelector("#q3 p");
const compareBtn = document.querySelector("#q3 button");

compareBtn.addEventListener("click", () => {
  if (num1.value > num2.value) {
    result3.innerHTML = num1.value;
  } else {
    result3.innerHTML = num2.value;
  }
});

//4-	Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

const num4 = document.querySelector("#q4 input");
const result4 = document.querySelector("#q4 p");
const btn4 = document.querySelector("#q4 button");

btn4.addEventListener("click", () => {
  if (num4.value < 0) {
    result4.innerHTML = "negative";
  } else {
    result4.innerHTML = "positive";
  }
});

//5-	Write a program that take 3 integers from user then print the max element and the min element.

const num51 = document.querySelector("#q5 .num1");
const num52 = document.querySelector("#q5 .num2");
const num53 = document.querySelector("#q5 .num3");
const min = document.querySelector("#q5 .min");
const max = document.querySelector("#q5 .max");
const Btn5 = document.querySelector("#q5 button");

Btn5.addEventListener("click", () => {
  switch ((num51, num52, num53)) {
    case num51 > num52 && num51 > num53:
      max.innerHTML = num51.value;
      min.innerHTML = num52.value;
      break;
    case num52 > num51 && num52 > num53:
      max.innerHTML = num52.value;
      min.innerHTML = num53.value;
      break;
    default:
      max.innerHTML = num53.value;
      min.innerHTML = num51.value;
      break;
  }
});

//6-	Write a program that allows the user to insert integer number then check If a number is oven or odd

const num6 = document.querySelector("#q6 input");
const result6 = document.querySelector("#q6 p");
const btn6 = document.querySelector("#q6 button");

btn6.addEventListener("click", () => {
  if (num6.value % 2 == 0) {
    result6.innerHTML = "even";
  } else {
    result6.innerHTML = "odd";
  }
});

//7-	Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
const char7 = document.querySelector("#q7 input");
const result7 = document.querySelector("#q7 p");
const btn7 = document.querySelector("#q7 button");

btn7.addEventListener("click", () => {
  if (
    char7.value == "a" ||
    char7.value == "e" ||
    char7.value == "i" ||
    char7.value == "o" ||
    char7.value == "u"
  ) {
    result7.innerHTML = "vowel";
  } else {
    result7.innerHTML = "consonant";
  }
});

// 8-	Write a program that allows user to insert integer then print all numbers between 1 to that’s number

const num8 = document.querySelector("#q8 input");
const result8 = document.querySelector("#q8 p");
const btn8 = document.querySelector("#q8 button");

btn8.addEventListener("click", () => {
  for (let i = 1; i <= num8.value; i++) {
    result8.innerHTML += i;
  }
});

//9-	Write a program that allows user to insert integer then print a multiplication table up to 12.
const num9 = document.querySelector("#q9 input");
const result9 = document.querySelector("#q9 #result");
const btn9 = document.querySelector("#q9 button");

btn9.addEventListener("click", () => {
  for (let i = 1; i <= 12; i++) {
    result9.innerHTML += `<p>${i}*${num9.value}=${i * num9.value}</p>`;
  }
});

//10-	Write a program that allows to user to insert number then print all even numbers between 1 to this number

const num10 = document.querySelector("#q10 input");
const result10 = document.querySelector("#q10 p");
const btn10 = document.querySelector("#q10 button");

btn10.addEventListener("click", () => {
  for (let i = 1; i <= num10.value; i++) {
    if (i % 2 === 0) {
      result10.innerHTML += i;
    }
  }
});

//11-	Write a program that take two integers then print the power
const num111 = document.querySelector("#q11 .num1");
const num211 = document.querySelector("#q11 .num2");
const result11 = document.querySelector("#q11 p");
const Btn11 = document.querySelector("#q11 button");

Btn11.addEventListener("click", () => {
  result11.innerHTML = Math.pow(num111.value, num211.value);
});

//12-Write a program to enter marks of five subjects and calculate total, average and percentage.

function calcMarks(a, b, c, d, e) {
  const avg = (a + b + c + d + e) / 5;
  const perc = ((a + b + c + d + e) / 500) * 100;
  console.log("average:", avg);
  console.log("percentage:", perc);
}

calcMarks(25, 55, 90, 85, 70);

//13-	Write a program to input month number and print number of days in that month.

function monthDays(month) {
  const daysInMonth = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  console.log("Number of days:", daysInMonth[month]);
}

printDaysInMonth(2);

//14-	Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

function gradeCalculator(a, b, c, d, e) {
  const total = a + b + c + d + e;
  const percentage = (total / 500) * 100;
  let grade;

  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log("Percentage:", percentage);
  console.log("Grade:", grade);
}

/////////////////15-	Switch////////////////

//o	Write a program to print total number of days in month

function totalDaysInMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;
    case 2:
      console.log("28 days (29 in leap years)");
      break;
    default:
      console.log("Invalid month");
  }
}

//o	Write a program to check whether an alphabet is vowel or consonant

function vowelChecker(char) {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("Vowel");
      break;
    default:
      console.log("Consonant");
  }
}

//o	Write a program to find maximum between two numbers

function Max(a, b) {
  switch (true) {
    case a > b:
      console.log(`${a} is greater`);
      break;
    case b > a:
      console.log(`${b} is greater`);
      break;
    default:
      console.log("Both are equal");
  }
}

//o	Write a program to check whether a number is even or odd

function checkEvenOrOdd(number) {
  switch (number % 2) {
    case 0:
      console.log("Even");
      break;
    default:
      console.log("Odd");
  }
}

//o	Write a program to check whether a number is positive or negative or zero

function signChecker(number) {
  switch (true) {
    case number > 0:
      console.log("Positive");
      break;
    case number < 0:
      console.log("Negative");
      break;
    default:
      console.log("Zero");
  }
}

//o	Write a program to create Simple Calculator

function Calculator(a, b, operation) {
  switch (operation) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operation");
  }
}

//16-	Print Numbers 1 to 10: Use a loop to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//17-	Sum of First 10 Natural Numbers: Calculate the sum of the first 10 natural numbers using a loop

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);

//18-	Print Even Numbers Between 1 and 20: Use a loop to print all even numbers between 1 and 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//19-	Factorial of a Number: Calculate the factorial of a given number using a loop

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log("Factorial:", result);
}

//20-	Reverse a String: Reverse a given string using a loop

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log("Reversed String:", reversed);
}

//21-	Print Elements of an Array: Print all elements of an array using a loop.

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log("Arrsy's elements:", array[i]);
}

//22-	Find Maximum in an Array: Find the maximum number in an array using a loop.

function maxNum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("Max. no.:", max);
}

//23-	Print Multiplication Table: Print the multiplication table of a given number up to 10 using a loop.

function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

//24-	Count Vowels in a String: Count the number of vowels in a given string using a loop.

function countVowels(txt) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < txt.length; i++) {
    if (vowels.includes(txt[i].toLowerCase())) {
      count++;
    }
  }
  console.log(`Number of vowels: ${count}`);
}

//25-	Check Prime Number: Check if a given number is prime using a loop.

function isPrime(num) {
  if (num <= 1) {
    console.log(`${num} is not a prime number`);
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number`);
      return;
    }
  }

  console.log(`${num} is a prime number`);
}
