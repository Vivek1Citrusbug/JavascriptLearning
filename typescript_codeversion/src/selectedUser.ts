const userData = JSON.parse(localStorage.getItem('selectedUser') || '{}');

(document.getElementById("userTitle") as HTMLElement).innerHTML = "User : " + userData.userID;
(document.getElementById("name_input") as HTMLInputElement).value = userData.name || '';
(document.getElementById("useremail") as HTMLInputElement).value = userData.email || '';
(document.getElementById("contactNumber") as HTMLInputElement).value = userData.contact || '';
(document.getElementById("zipcode") as HTMLInputElement).value = userData.zipcode || '';
(document.getElementById("birthdate") as HTMLInputElement).value = userData.birthdate || '';

const genderRadioButtons = document.getElementsByName("genderradio") as NodeListOf<HTMLInputElement>;
genderRadioButtons.forEach((radioButton) => {
    if (radioButton.value === userData.gender) {
        radioButton.checked = true; 
    }
});

const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]') as NodeListOf<HTMLInputElement>;
hobbiesCheckboxes.forEach(checkbox => {
    if (userData.hobbies.includes(checkbox.value)) {
        checkbox.checked = true;
        checkbox.disabled = true; 
    }
});

const technologySelect = document.getElementById('technology') as HTMLSelectElement;
const options = technologySelect.options;
for (let i = 0; i < options.length; i++) {
    if (userData.technologies.includes(options[i].value)) {
        options[i].selected = true;
    }
}


