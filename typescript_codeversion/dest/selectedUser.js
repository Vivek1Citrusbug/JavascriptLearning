"use strict";
const userData = JSON.parse(localStorage.getItem('selectedUser') || '{}');
document.getElementById("userTitle").innerHTML = "User : " + userData.userID;
document.getElementById("name_input").value = userData.name || '';
document.getElementById("useremail").value = userData.email || '';
document.getElementById("contactNumber").value = userData.contact || '';
document.getElementById("zipcode").value = userData.zipcode || '';
document.getElementById("birthdate").value = userData.birthdate || '';
const genderRadioButtons = document.getElementsByName("genderradio");
genderRadioButtons.forEach((radioButton) => {
    if (radioButton.value === userData.gender) {
        radioButton.checked = true;
    }
});
const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]');
hobbiesCheckboxes.forEach(checkbox => {
    if (userData.hobbies.includes(checkbox.value)) {
        checkbox.checked = true;
        checkbox.disabled = true;
    }
});
const technologySelect = document.getElementById('technology');
const options = technologySelect.options;
for (let i = 0; i < options.length; i++) {
    if (userData.technologies.includes(options[i].value)) {
        options[i].selected = true;
    }
}
