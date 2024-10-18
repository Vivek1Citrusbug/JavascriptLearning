"use strict";
// function displayUsersOnPage() {
//     const selectedUsers = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]');
//     if (selectedUsers.length === 0) {
//         alert("No users found in local storage.");
//         return;
//     }
// }
// window.addEventListener('DOMContentLoaded', displayUsersOnPage);
let slideUpdateIndex = 1;
let usersUpdate = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]');
$(document).ready(function () {
    loadSlideshowUpdated(usersUpdate);
});
function loadSlideshowUpdated(usersUpdate) {
    showUserUpdated(slideUpdateIndex);
    window.plusSlides = function (n) {
        slideUpdateIndex += n;
        if (slideUpdateIndex > usersUpdate.length) {
            slideUpdateIndex = 1;
        }
        if (slideUpdateIndex < 1) {
            slideUpdateIndex = usersUpdate.length;
        }
        showUserUpdated(slideUpdateIndex);
    };
}
function showUserUpdated(n) {
    const userData = usersUpdate[n - 1];
    // Display user details in the form
    document.getElementById("userTitle").innerHTML = "User: " + userData.userID;
    document.getElementById("name_input").value = userData.name || '';
    document.getElementById("useremail").value = userData.email || '';
    document.getElementById("contactNumber").value = userData.contact || '';
    document.getElementById("zipcode").value = userData.zipcode || '';
    document.getElementById("birthdate").value = userData.birthdate || '';
    // Set gender radio buttons
    const genderRadioButtons = document.getElementsByName("genderradio");
    genderRadioButtons.forEach(radioButton => {
        radioButton.checked = (radioButton.value === userData.gender);
    });
    // Set hobbies checkboxes
    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]');
    hobbiesCheckboxes.forEach(checkbox => {
        checkbox.checked = userData.hobbies.includes(checkbox.value);
    });
    // Set selected technologies
    const technologySelect = document.getElementById('technology');
    const options = technologySelect.options;
    for (let i = 0; i < options.length; i++) {
        options[i].selected = userData.technologies.includes(options[i].value);
    }
}
