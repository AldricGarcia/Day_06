function displayAgentInfo(obj)
{
    let age = obj.age;
    let numbers = obj.numbers;
    let firstName = obj.firstName;
    let lastName = obj.lastName;

    let text = "My name is " + lastName + ", " + firstName + " " + lastName + "! I'm the agent " + numbers + " and I'm " + age + " years old.";
    let paragraph = document.querySelector('p');

    paragraph.textContent = text;
}
let person = {
    age: 57,
    numbers: '007',
    firstName: 'James',
    lastName: 'Bond'
};

window.onload = function()
{
displayAgentInfo(person);
}