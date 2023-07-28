function submitForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    var outputDiv = document.getElementById('output');
    var reg=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    
    //Clear previous errorsCµ
    document.getElementById("emailError").innerHTML = '';
    document.getElementById("phoneError").innerHTML = '';
    document.getElementById("dateError").innerHTML = '';
    document.getElementById("messageError").innerHTML = '';

    var isValid = true;

if (email == "" || !reg.test(email)){
    document.getElementById("emailError").innerHTML="Please enter a valid email form with @ and .";
    isValid = false;
}

if (phone == "") {
    document.getElementById("phoneError").innerHTML="Phone number is empty.";
    isValid = false;
}

else if (!/^(\+212[-]?\d{9,})$/.test(phone)) {
        document.getElementById("phoneError").innerHTML="Phone number must start with '+212' and have 9 additional digits";
    isValid = false;
}


var minDate = new Date("2000-01-01")
var maxDate = new Date("2024-12-31")
givenDate = new Date(date)
console.log(date)

if (date == "") {
    document.getElementById("dateError").innerHTML="Date is empty.";
    isValid = false;
}
else if ((givenDate >= maxDate) || (givenDate <= minDate)) {
    document.getElementById("dateError").innerHTML="Pleas enter a date between 2024-12-31 and 2000-01-01.";
}



if (message == "") {
    document.getElementById("messageError").innerHTML="Text is empty";
    isValid = false;
}


if (isValid) {
    var outputText = "Email :" + email + "</br>" + "Phone :" + phone + "</br>" + "Date :" + date + "</br>" + "Text :" + message + "</br>" + "</br>"
    outputDiv.innerHTML += outputText

    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("message").value = "";
}
else {
    outputDiv.innerHTML ='';
}

}