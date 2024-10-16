"use strict";
function validateStep(step) {
    let isValidForm = true;
    let error_message_name = document.getElementById('name-error');
    let error_message_email = document.getElementById('email-error');
    let error_message_contact = document.getElementById('contact-error');
    let error_message_zipcode = document.getElementById('zipcode-error');
    let error_message_birthdate = document.getElementById('birthdate-error');
    let error_message_gender = document.getElementById('gender-error');
    let error_message_hobbies = document.getElementById('hobbies-error');
    let error_message_technology = document.getElementById('technology-error');
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
    if (step === 0) {
        const username = document.getElementById('name_input').value;
        const useremail = document.getElementById('useremail').value;
        const contactNumber = document.getElementById('contactNumber').value;
        if (!username.match(usernamePattern)) {
            error_message_name.textContent = "Username must be at least 1 character long.\n";
            isValidForm = false;
        }
        if (!useremail.match(emailPattern)) {
            if (!useremail.length)
                error_message_email.textContent = "User email should not be empty.\n";
            else {
                error_message_email.textContent = "User email should be in the form of abc@xyz.com\n";
            }
            isValidForm = false;
        }
        if (!contactNumber.match(contactPattern)) {
            error_message_contact.textContent = "Please enter a valid contact number.\n";
            isValidForm = false;
        }
    }
    if (step === 1) {
        const zipcode = document.getElementById('zipcode').value;
        const birthdate = document.querySelector('input[type="date"]').value;
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
    }
    if (step === 2) {
        const getGender = document.querySelector('input[name="genderradio"]:checked');
        const getHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        const technologySelect = document.getElementById('technology');
        const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);
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
    }
    return isValidForm;
}
