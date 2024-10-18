// function displayUsersOnPage() {
//     const selectedUsers = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]');
//     if (selectedUsers.length === 0) {
//         alert("No users found in local storage.");
//         return;
//     }
    
// }
// window.addEventListener('DOMContentLoaded', displayUsersOnPage);

let slideUpdateIndex: number = 1;
let usersUpdate: { userID: string; name: string; email: string; contact: string; zipcode: string; birthdate: string; gender: string; hobbies: string[]; technologies: string[]; }[] = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]');

$(document).ready(function () {
    loadSlideshowUpdated(usersUpdate);
});

function loadSlideshowUpdated(usersUpdate: any[]): void {
    showUserUpdated(slideUpdateIndex);
    window.plusSlides = function (n: number) {
        slideUpdateIndex += n;
        if (slideUpdateIndex > usersUpdate.length) { slideUpdateIndex = 1; }
        if (slideUpdateIndex < 1) { slideUpdateIndex = usersUpdate.length; }
        showUserUpdated(slideUpdateIndex);
    };
}

function showUserUpdated(n: number): void {
    const userData = usersUpdate[n - 1];

    // Display user details in the form
    (document.getElementById("userTitle") as HTMLElement).innerHTML = "User: " + userData.userID;
    (document.getElementById("name_input") as HTMLInputElement).value = userData.name || '';
    (document.getElementById("useremail") as HTMLInputElement).value = userData.email || '';
    (document.getElementById("contactNumber") as HTMLInputElement).value = userData.contact || '';
    (document.getElementById("zipcode") as HTMLInputElement).value = userData.zipcode || '';
    (document.getElementById("birthdate") as HTMLInputElement).value = userData.birthdate || '';

    // Set gender radio buttons
    const genderRadioButtons = document.getElementsByName("genderradio") as NodeListOf<HTMLInputElement>;
    genderRadioButtons.forEach(radioButton => {
        radioButton.checked = (radioButton.value === userData.gender);
    });

    // Set hobbies checkboxes
    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]') as NodeListOf<HTMLInputElement>;
    hobbiesCheckboxes.forEach(checkbox => {
        checkbox.checked = userData.hobbies.includes(checkbox.value);
    });

    // Set selected technologies
    const technologySelect = document.getElementById('technology') as HTMLSelectElement;
    const options = technologySelect.options;
    for (let i = 0; i < options.length; i++) {
        options[i].selected = userData.technologies.includes(options[i].value);
    }
}
