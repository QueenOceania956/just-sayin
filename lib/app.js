function askName() {
    var firstName = prompt("What is your first name?");
    var lastName = prompt("What is your last name?");
    alert(firstName + " " + lastName + " " + ", you are an amazing and beautiful unicorn, and don't let anyone tell you otherwise. Now get out there and show the world just how awesome you are! Just an fyi, " + counter + " unicorn(s) have been on this, including yourself.");
}

function countPeople() {
    counter = counter + 1;
    askName();
     var name = $('#name').val();
}
var counter = 0;

new WOW().init();
