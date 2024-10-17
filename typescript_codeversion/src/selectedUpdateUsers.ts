let slideUpdateIndex: number = 1;

function displaySelectedUsersOnPage() {
    const selectedUsers = JSON.parse(localStorage.getItem('SelectedUpdateUsers') || '[]'); 
    $(document).ready(function () {
        loadSlideshow(selectedUsers);
    });

    function loadSlideshow(selectedUsers: any[]): void {
        showUser(slideUpdateIndex);
        window.plusSlides = function (n: number) {
            showUser(slideUpdateIndex += n);
        };
    }

    function showUser(n: number): void {
        if (n > selectedUsers.length) { slideUpdateIndex = 1; }
        if (n < 1) { slideUpdateIndex = selectedUsers.length; }
        const userData = selectedUsers[slideUpdateIndex - 1];
        (document.getElementById("userTitle") as HTMLElement).innerHTML = "User: " + userData.userID;
        (document.getElementById("name_input") as HTMLInputElement).value = userData.name || '';
        (document.getElementById("useremail") as HTMLInputElement).value = userData.email || '';
        (document.getElementById("contactNumber") as HTMLInputElement).value = userData.contact || '';
        (document.getElementById("zipcode") as HTMLInputElement).value = userData.zipcode || '';
        (document.getElementById("birthdate") as HTMLInputElement).value = userData.birthdate || '';

        const genderRadioButtons = document.getElementsByName("genderradio") as NodeListOf<HTMLInputElement>;
        genderRadioButtons.forEach(radioButton => {
            if (radioButton.value === userData.gender) {
                radioButton.checked = true;
            }
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

}

window.addEventListener('DOMContentLoaded', displaySelectedUsersOnPage);
