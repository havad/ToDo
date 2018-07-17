var count = 0;      //this is used to label the divs and buttons created

//Function should read the text from the box and create a paragraph and x button that acts as a task on the webpage
//if no value is in the text box nothing happens
function submitButton() {

    //check to make sure the text box has a value
    if (document.getElementById("text").value == ""){
        console.log("nothing submitted");
        return;
    }

    //increase count and we need to create a div and paragraph to store the task
    count++;
    console.log("count is " + count);
    var newDiv = document.createElement("div");
    var para = document.createElement("p");
    var text = document.createTextNode(document.getElementById("text").value);
    para.setAttribute("id", "para" + count);
    para.setAttribute("onclick", "strike(this.id)");
    para.appendChild(text);

    console.log(text);

    //we need a button to click to remove an element which is done here
    var xButton = document.createElement("button");
    xButton.setAttribute("id", "xButton" + count);
    xButton.setAttribute("onclick", "removeTask(this.parentElement.id)");
    var x = document.createTextNode("x");
    xButton.appendChild(x);

    para.style.display = "inline-block";
    
    //finish by appending everything to the newDiv
    newDiv.setAttribute("id", "task" + count);
    newDiv.appendChild(para);
    newDiv.appendChild(xButton);
    document.getElementById("tasks").appendChild(newDiv);

    document.getElementById("text").value = "";
}

//function should remove task and x button so that tasks may be cleared out when finished
function removeTask(id) {

    var test = document.getElementById(id)
    test.parentNode.removeChild(test);

    console.log("removing " + id + "!");
}

//adds or removes a strikethough on the text of the paragraph
function strike(id) {
    console.log(id);
    if (document.getElementById(id).style.textDecoration == "line-through") {
        document.getElementById(id).style.textDecoration = "";
    }
    else {
        document.getElementById(id).style.textDecoration = "line-through";
    }
    
}

//checks if enter key was pressed, if so submits text
function check(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        submitButton();
    }
}