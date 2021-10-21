/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = 'a version control system that allows us to track changes and quickly access and manipulate files locally'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = 'a cloud based collaboration tool that allows us to update, send and receive files securely to and from our local machine'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: "creates a new local repository",
    code: "git init"
}

console.log(init.description)
console.log(init.code)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: "downloads a project from a remote repository",
    code: "git clone <url>"
}

console.log(clone.description)
console.log(clone.code)



//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: "displays the status of your working directory",
    code: "git status"
}

console.log(status.description)
console.log(status.code)


//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: "add a file to the staging area",
    code: "git add"
}

console.log(add.description)
console.log(add.code)


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
    description: "creates a new commit from changes added to the staging area; must include message!",
    code: "git commit -m \"message here\""
}

console.log(commit.description)
console.log(commit.code)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description: "push local changes to online repository such as Github",
    code: "git push"
}

console.log(push.description)
console.log(push.code)