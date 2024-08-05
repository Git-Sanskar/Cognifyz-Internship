// Function to change the color of the button when clicked
function changeColor() {
    const button = event.target;
    button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'blue' : 'red';
}
// Function to show a greeting message based on the current time
function showGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    alert(greeting);
}
// Function to add two numbers and display the result
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;

    document.getElementById('result').innerText = 'Result: ' + result;
}