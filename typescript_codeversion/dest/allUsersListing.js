"use strict";
let slideIndex = 1;
let users = JSON.parse(localStorage.getItem("Users") || "[]");
$(document).ready(function () {
    loadSlideshow(users);
    $("#updateUserForm").on("submit", function (event) {
        event.preventDefault();
        updateUser(slideIndex);
    });
});
function loadSlideshow(users) {
    showUser(slideIndex);
    window.plusSlides = function (n) {
        showUser((slideIndex += n));
    };
}
function showUser(n) {
    if (n > users.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = users.length;
    }
    const userData = users[slideIndex - 1];
    document.getElementById("userTitle").innerHTML =
        "User: " + userData.userID;
    document.getElementById("name_input").value =
        userData.name || "";
    document.getElementById("useremail").value =
        userData.email || "";
    document.getElementById("contactNumber").value =
        userData.contact || "";
    document.getElementById("zipcode").value =
        userData.zipcode || "";
    document.getElementById("birthdate").value =
        userData.birthdate || "";
    const genderRadioButtons = document.getElementsByName("genderradio");
    genderRadioButtons.forEach((radioButton) => {
        if (radioButton.value === userData.gender) {
            radioButton.checked = true;
        }
    });
    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]');
    hobbiesCheckboxes.forEach((checkbox) => {
        checkbox.checked = userData.hobbies.includes(checkbox.value);
    });
    const technologySelect = document.getElementById("technology");
    const options = technologySelect.options;
    for (let i = 0; i < options.length; i++) {
        options[i].selected = userData.technologies.includes(options[i].value);
    }
}
function updateUser(index) {
    var _a;
    const updatedUser = {
        userID: users[index - 1].userID,
        name: document.getElementById("name_input").value,
        email: document.getElementById("useremail").value,
        contact: document.getElementById("contactNumber")
            .value,
        zipcode: document.getElementById("zipcode").value,
        birthdate: document.getElementById("birthdate").value,
        gender: (_a = document.querySelector('input[name="genderradio"]:checked')) === null || _a === void 0 ? void 0 : _a.value,
        hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map((checkbox) => checkbox.value),
        technologies: Array.from(document.getElementById("technology")
            .selectedOptions).map((option) => option.value),
    };
    if (validation(updatedUser)) {
        users[index - 1] = updatedUser;
        localStorage.setItem("Users", JSON.stringify(users));
        alert("User information updated successfully!");
    }
}
function validation(user) {
    var _a;
    let isValidForm = true;
    const error_message_name = document.getElementById("name-error");
    const error_message_email = document.getElementById("email-error");
    const error_message_contact = document.getElementById("contact-error");
    const error_message_zipcode = document.getElementById("zipcode-error");
    const error_message_birthdate = document.getElementById("birthdate-error");
    const error_message_gender = document.getElementById("gender-error");
    const error_message_hobbies = document.getElementById("hobbies-error");
    const error_message_technology = document.getElementById("technology-error");
    error_message_name.textContent = "";
    error_message_email.textContent = "";
    error_message_contact.textContent = "";
    error_message_zipcode.textContent = "";
    error_message_birthdate.textContent = "";
    error_message_gender.textContent = "";
    error_message_hobbies.textContent = "";
    error_message_technology.textContent = "";
    const usernamePattern = /^.{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactPattern = /^(\+91[\s]?)?[0]?[6789]\d{9}$/;
    const zipcodePattern = /^[0-9]{6}$/;
    const username = document.getElementById("name_input")
        .value;
    const useremail = document.getElementById("useremail")
        .value;
    const contactNumber = document.getElementById("contactNumber").value;
    if (!username.match(usernamePattern)) {
        error_message_name.textContent =
            "Username must be at least 1 character long.\n";
        isValidForm = false;
    }
    if (!useremail.match(emailPattern)) {
        if (!useremail.length)
            error_message_email.textContent = "User email should not be empty.\n";
        else {
            error_message_email.textContent =
                "User email should be in the form of abc@xyz.com\n";
        }
        isValidForm = false;
    }
    if (!contactNumber.match(contactPattern)) {
        error_message_contact.textContent =
            "Please enter a valid contact number.\n";
        isValidForm = false;
    }
    const zipcode = document.getElementById("zipcode")
        .value;
    const birthdate = (_a = document.querySelector('input[type="date"]')) === null || _a === void 0 ? void 0 : _a.value;
    if (!zipcode.match(zipcodePattern)) {
        if (zipcode.length < 6)
            error_message_zipcode.textContent = "Zipcode should be 6 numbers long.\n";
        else {
            error_message_zipcode.textContent = "Please enter a valid Zipcode.\n";
        }
        isValidForm = false;
    }
    if (!birthdate) {
        error_message_birthdate.textContent = "Please select a birthdate.\n";
        isValidForm = false;
    }
    const getGender = document.querySelector('input[name="genderradio"]:checked');
    const getHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const technologySelect = document.getElementById("technology");
    const selectedTechnology = Array.from(technologySelect.selectedOptions).map((option) => option.value);
    if (!getGender) {
        error_message_gender.textContent = "Please select a gender.\n";
        isValidForm = false;
    }
    if (getHobbies.length === 0) {
        error_message_hobbies.textContent = "Please select hobbies.\n";
        isValidForm = false;
    }
    if (selectedTechnology.length === 0) {
        error_message_technology.textContent = "Please select technology.\n";
        isValidForm = false;
    }
    return isValidForm;
}
