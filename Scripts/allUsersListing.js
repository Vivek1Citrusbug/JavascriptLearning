let slideIndex = 1;
let users = JSON.parse(localStorage.getItem('Users'));

$(document).ready(function () {
    loadSlideshow(users);
    $('#updateUserForm').on('submit', function(event) {
        event.preventDefault(); 
        updateUser(slideIndex); 
    });
});

function loadSlideshow(users) {
    showUser(slideIndex);

    window.plusSlides = function (n) {
        showUser(slideIndex += n);
    };
}

function showUser(n) {
    if (n > users.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = users.length; }
    const userData = users[slideIndex - 1];
    document.getElementById("userTitle").innerHTML = "User: " + userData.userID;
    document.getElementById("name_input").value = userData.name || '';
    document.getElementById("useremail").value = userData.email || '';
    document.getElementById("contactNumber").value = userData.contact || '';
    document.getElementById("zipcode").value = userData.zipcode || '';
    document.getElementById("birthdate").value = userData.birthdate || '';

    const genderRadioButtons = document.getElementsByName("genderradio");
    genderRadioButtons.forEach(radioButton => {
        if (radioButton.value === userData.gender) {
            radioButton.checked = true;
        }
    });

    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]');
    hobbiesCheckboxes.forEach(checkbox => {
        checkbox.checked = userData.hobbies.includes(checkbox.value);
    });

    const technologySelect = document.getElementById('technology');
    const options = technologySelect.options;
    for (let i = 0; i < options.length; i++) {
        options[i].selected = userData.technologies.includes(options[i].value);
    }
}

function updateUser(index) {
    let updatedUser = {
        userID: users[index - 1].userID, 
        name: document.getElementById("name_input").value,
        email: document.getElementById("useremail").value,
        contact: document.getElementById("contactNumber").value,
        zipcode: document.getElementById("zipcode").value,
        birthdate: document.getElementById("birthdate").value,
        gender: document.querySelector('input[name="genderradio"]:checked').value,
        hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(checkbox => checkbox.value),
        technologies: Array.from(document.getElementById('technology').selectedOptions).map(option => option.value)
    };
    users[index - 1] = updatedUser;
    localStorage.setItem('Users', JSON.stringify(users));
    alert("User information updated successfully!");
}
