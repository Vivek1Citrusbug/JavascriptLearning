let slideUpdateIndex: number = 1;
let usersUpdate: { userID: string; name: string; email: string; contact: string; zipcode: string; birthdate: string; gender: string; hobbies: string[]; technologies: string[]; }[] = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]');

$(document).ready(function () {
    loadSlideshowUpdated(usersUpdate);
    $('#userFormUpdated').on('submit', function (event: Event) {
        event.preventDefault();
        console.log("function start");
        selectedUpdateUser(slideUpdateIndex);
        console.log("function ends");
    });
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
    (document.getElementById("userTitle") as HTMLElement).innerHTML = "User: " + userData.userID;
    (document.getElementById("name_input") as HTMLInputElement).value = userData.name || '';
    (document.getElementById("useremail") as HTMLInputElement).value = userData.email || '';
    (document.getElementById("contactNumber") as HTMLInputElement).value = userData.contact || '';
    (document.getElementById("zipcode") as HTMLInputElement).value = userData.zipcode || '';
    (document.getElementById("birthdate") as HTMLInputElement).value = userData.birthdate || '';

    const genderRadioButtons = document.getElementsByName("genderradio") as NodeListOf<HTMLInputElement>;
    genderRadioButtons.forEach(radioButton => {
        radioButton.checked = (radioButton.value === userData.gender);
    });

    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]') as NodeListOf<HTMLInputElement>;
    hobbiesCheckboxes.forEach(checkbox => {
        checkbox.checked = userData.hobbies.includes(checkbox.value);
    });

    const technologySelect = document.getElementById('technology') as HTMLSelectElement;
    const options = technologySelect.options;
    for (let i = 0; i < options.length; i++) {
        options[i].selected = userData.technologies.includes(options[i].value);
    }
}

function selectedUpdateUser(index: number): void {
    const updatedUser = {
        userID: usersUpdate[index - 1].userID,
        name: (document.getElementById("name_input") as HTMLInputElement).value,
        email: (document.getElementById("useremail") as HTMLInputElement).value,
        contact: (document.getElementById("contactNumber") as HTMLInputElement).value,
        zipcode: (document.getElementById("zipcode") as HTMLInputElement).value,
        birthdate: (document.getElementById("birthdate") as HTMLInputElement).value,
        gender: (document.querySelector('input[name="genderradio"]:checked') as HTMLInputElement)?.value,
        hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked') as NodeListOf<HTMLInputElement>).map(checkbox => checkbox.value),
        technologies: Array.from((document.getElementById('technology') as HTMLSelectElement).selectedOptions).map(option => option.value)
    };
    if (validationUpdated(updatedUser)) {
        usersUpdate[index - 1] = updatedUser;
        let allUsers: { userID: string; name: string; email: string; contact: string; zipcode: string; birthdate: string; gender: string; hobbies: string[]; technologies: string[]; }[] = JSON.parse(localStorage.getItem('Users') || '[]');
        for (let i = 0; i < allUsers.length; i++) {
            const temp = allUsers[i];
            if(temp.userID == usersUpdate[index-1].userID){
                temp.name =  usersUpdate[index - 1].name;
                temp.email = usersUpdate[index - 1].email;
                temp.contact = usersUpdate[index - 1].contact;
                temp.zipcode = usersUpdate[index - 1].zipcode;
                temp.birthdate = usersUpdate[index - 1].birthdate;
                temp.gender = usersUpdate[index - 1].gender;
                temp.hobbies = usersUpdate[index - 1].hobbies;
                temp.technologies = usersUpdate[index - 1].technologies;
            }
        }
        localStorage.setItem('Users', JSON.stringify(allUsers));
        alert("User information updated successfully!");
    }
}


function validationUpdated(updatedUser: { name: string; email: string; contact: string; zipcode: string; birthdate: string; gender: string; hobbies: string[]; technologies: string[]; }): boolean {
    let isValidForm = true;

    const error_message_name = document.getElementById('name-error') as HTMLElement;
    const error_message_email = document.getElementById('email-error') as HTMLElement;
    const error_message_contact = document.getElementById('contact-error') as HTMLElement;
    const error_message_zipcode = document.getElementById('zipcode-error') as HTMLElement;
    const error_message_birthdate = document.getElementById('birthdate-error') as HTMLElement;
    const error_message_gender = document.getElementById('gender-error') as HTMLElement;
    const error_message_hobbies = document.getElementById('hobbies-error') as HTMLElement;
    const error_message_technology = document.getElementById('technology-error') as HTMLElement;

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

    const username = (document.getElementById('name_input') as HTMLInputElement).value;
    const useremail = (document.getElementById('useremail') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;

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

    const zipcode = (document.getElementById('zipcode') as HTMLInputElement).value;
    const birthdate = (document.querySelector('input[type="date"]') as HTMLInputElement)?.value;

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

    const getGender = document.querySelector('input[name="genderradio"]:checked') as HTMLInputElement;
    const getHobbies = document.querySelectorAll('input[name="hobbies"]:checked') as NodeListOf<HTMLInputElement>;
    const technologySelect = document.getElementById('technology') as HTMLSelectElement;
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

    return isValidForm;
}

