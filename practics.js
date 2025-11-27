// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')

function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0
}

let username = "per"
let message = "You have three new notifications"


let messageToUser = message +", "+username + "!"
console.log(messageToUser)

let name = "Prakhar"
let greeting = "Welcome back, "

let myGreeting = greeting + " " + name
console.log(myGreeting)


let welcomeEl = document.getElementById('welcome-el')
welcomeEl.innerText = myGreeting


welcomeEl.innerText += "👋"


let firstName = 'Prakhar'
let lastName = 'Nag'

let fullName = firstName + " " + lastName

console.log(fullName)
