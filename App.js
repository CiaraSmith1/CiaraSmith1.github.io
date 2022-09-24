console.log('This Script is Loaded From an External JS File')

// This is an Alert
// alert("This is an Alert!")

var name = window.prompt("Enter Your Name: ")
alert(`Hello ${name}!`)

// use document.getElementByID()
document.getElementById("name").innerHTML = "<h2>Hello " + name + "!</h2>"