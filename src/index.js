document.addEventListener("DOMContentLoaded", () => {
  /*the Document Object Model represents the structure of a html document and represents tags
  as nodes. We can use Javascript to manipulate these nodes*/

  // console.log(document.URL)
  // console.log(document.title)
  // console.log(window.innerHeight)

  // document.title = "I own this bitch";
  // console.log(document.title)


/** the getElementById method helps us select a node using it's Id so that we can then
 * do whatever we want with it.
 */ 

// const obj = {
//   //key  value => property
//   name: "Paul Ashton",
//   age: "Is a vampire"
// }

// //selecting html elements/tags
// let textBox = document.getElementById("new-task-description");
// console.log(document.getElementById("new-task-description"));


//  let button = document.getElementById("submit");
//  console.log(document.getElementById("submit"));

// let taskInput = document.getElementById("new-task-description")

// //Understanding event listeners
// //  taskInput.addEventListener("input", ()=>{
// //   console.log("User is typing: " + taskInput.value)});


const taskForm = document.getElementById("create-task-form");
const newTaskInput = document.getElementById("new-task-description");
const unorderedTaskList = document.getElementById("tasks"); 
const taskPriority = document.querySelector("select");
const taskDueDate = document.getElementById("due-date");

//add an Event Listener to listen for user's actions
taskForm.addEventListener("submit", (event) =>{
  event.preventDefault(); //prevents form from refreshing the page

  //save user input in this variable
  const userText = newTaskInput.value; //better to use a new variable for readability and efficience, since we only access the DOM once
   if(userText === "") return;          //the .value retrieves what the user has entered in the input field/textbox
  const userPriority = taskPriority.value;
  const userDueDate = taskDueDate.value;

  //create a new list item
  const newTaskListed = document.createElement("li");
  newTaskListed.innerText =`${userText} - Due: ${userDueDate || "No due date"}`; //this now saves whatever the user entered into the newly created list tag
                            //userText "- Due:" userDueDate|| "No due date"
  //set color based on priority
  switch (userPriority) {
    case "high":
      newTaskListed.style.color = "red";
      break;
    case "medium":
      newTaskListed.style.color = "orange";
      break;
    case "low":
      newTaskListed.style.color = "green";
      break;
  }

  //DOM(the html document) & Javascript(only stored in memory)

  //append the new listed item to the unordered list
  unorderedTaskList.appendChild(newTaskListed);//connect the <li> in memory to the <ul> in the DOM
  
//create delete button
const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";

//add an event listener to the delete button
deleteButton.addEventListener("click", () =>{
  unorderedTaskList.removeChild(newTaskListed)}); //remove the task from the list

//append the delete button to the new task listed
newTaskListed.append(deleteButton);

//create edit button
const editButton = document.createElement("button");
editButton.innerText = "Edit";

//add an event listener to the edit button
editButton.addEventListener("click", () =>{
  const newText = prompt("Edit your task:", userText);
    if (newText !== null && newText !== "") {
      newTaskListed.firstChild.textContent = `${newText} - Due: ${userDueDate || "No due date"}`;
    }
});
//append the edit button to the new task listed
newTaskListed.appendChild(editButton);
  taskForm.reset();
});
  

});
