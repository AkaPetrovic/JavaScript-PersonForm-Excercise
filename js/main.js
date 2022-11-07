function initializeDate() {
  document.getElementById("birthday").value = getDateString(new Date());
}

function getDateString(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
}

function hasValue(value) {
  if (value != "") {
    return true;
  } else {
    return false;
  }
}

function checkTelephone(value) {
  if (value.startsWith("0")) {
    if (value.length == 11) {
      if (value.charAt(3) == "/") {
        return true;
      }
    }
  }
  return false;
}

function renderData(
  firstname,
  lastname,
  email,
  telephone,
  birthday,
  employment,
  gender
) {
  const inputData = document.getElementById("result");

  let employmentString;
  if (employment) {
    employmentString = "are employed";
  } else {
    employmentString = "are not employed";
  }

  let birthdayString = (inputData.innerHTML =
    "<h2>Your data:</h2><p>Your full name is: " +
    firstname +
    " " +
    lastname +
    "<br>Your email is: " +
    email +
    "<br>Your telephone number is: " +
    telephone +
    "<br>Your birthday is: " +
    birthday +
    "<br>You " +
    employmentString +
    "<br>You are " +
    gender.toLowerCase() +
    "</p>");
}

function formSubmit(event) {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const birthday = document.getElementById("birthday").value;
  const employment = document.getElementById("employment").checked;
  let gender;
  if (document.getElementById("gender-male").checked) {
    gender = "Male";
  } else {
    gender = "Female";
  }
  console.log(birthday);
  if (hasValue(firstname) && hasValue(lastname) && hasValue(email)) {
    if (checkTelephone(telephone)) {
      renderData(
        firstname,
        lastname,
        email,
        telephone,
        birthday,
        employment,
        gender
      );
      document.getElementById("error-message").innerHTML = "";
      document.getElementById("person-form").reset();
    } else {
      document.getElementById("error-message").innerHTML =
        "Telephone field needs to start with '0', has to contain '/' after the first 3 digits and needs to have 11 characters in total";
    }
  } else {
    document.getElementById("error-message").innerHTML =
      "Fields 'firstname', 'Lastname' and 'Email' are required";
  }
  initializeDate();
}
