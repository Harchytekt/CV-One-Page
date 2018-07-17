$(document).ready(function() {
    setAge();
});

/* Begin Calculate Age */

function setAge() {
    var datesDifference = Date.now() - new Date('1994-06-21').getTime();
    var ageMilli = new Date(datesDifference);
    var age = Math.abs(ageMilli.getFullYear() - 1970);
    document.getElementById("age").innerHTML = age;
}

/* End Caclulate Age */
