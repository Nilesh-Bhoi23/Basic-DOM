console.log("Chapter 6 DOM - document Object Model");
// Chaper 6
// DOM - document object model.
// Part - 1

// The 3 Musketeers of web Dev

/* 1) HTML(structure)
   2) CSS(style)
   3) Javascript(Logic)
*/
//----
//Window object
// The window Object Represents an open window in a browser's . it is browser.it is browser's object(not javaScript,s) & is automatically created by browser. 
// it is a global object with lots of properties & method.

// window.console.log("hello");
// console.dir(document.body);

// how to access inner html tags using js.
//=====================

// // access by id
// let heading = document.getElementById("heading");//h1
// // console.log(heading);
// console.dir(heading);

// let button = document.getElementById("myid");
// console.dir(button);

// // access by class
// let headings = document.getElementsByClassName("myClass");// it like array - it is A diffrent type 
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//============================

// Query selecter..
// Syntax:-
/*
   Document.querySelecter("myID / myClass / tag")
   // returns first element

   Document.querySelecterAll("myID / myClass / tag")
   //returns a NodeList
*/   

// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl); // 1st element

// let allEl = document.querySelectorAll(".myClass"); 
// console.dir(allEl); // all elements

//===============================

//Properties

// // tagName: returns tag for element nodes

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

//================================
// parent-child

// console.dir(document.body.firstChild);

// let chi = document.querySelector("div").children; 
// console.dir(chi);