    const usernamePattern = /^.{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactPattern = /^(\+91[\s]?)?[0]?[6789]\d{9}$/;
    const zipcodePattern = /^[0-9]{6}$/

    let date = new Date();
    let userID = date.getTime();

    console.log(userID);
    document.getElementById("myForm").addEventListener("submit", function (event) {
    
    console.log('form is submitted');
    let isValidForm = true;

    const username = document.getElementById('name_input').value;
    const useremail = document.getElementById('useremail').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const zipcode = document.getElementById('zipcode').value;
    const birthdate = document.querySelector('input[type="date"]').value;
    const getGender = document.querySelector('input[name="genderradio"]:checked');   
    const gethobbies = document.querySelectorAll('input[name="hobbies"]:checked');   
    const technologySelect = document.getElementById('technology');
    const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);
    console.log(selectedTechnology);
    
    let error_message = document.getElementById('error');
    error_message.textContent = "";
    
    if (!username.match(usernamePattern)) {
        error_message.textContent += "Username must be at least 1 characters long.\n";
        isValidForm = false;
    }

    if (!useremail.match(emailPattern)) {
        if (!useremail.length)
            error_message.textContent += "user email should not be empty.\n";
        else {
            error_message.textContent += "user email should be in the form of abc@xyz.com\n";
        }
        isValidForm = false;
    }

    if (!contactNumber.match(contactPattern)) {
        if (contactNumber.length < 10)
            error_message.textContent += "Contact number should be of length 10 \n";
        else {
            error_message.textContent += "Please enter valid contact number\n";
        }
        isValidForm = false;
    }

    if (!zipcode.match(zipcodePattern)) {
        if (zipcode.length < 6)
            error_message.textContent += "Zipcode should be 6 number long.\n";
        else {
            error_message.textContent += "Please enter a valid Zipcode. \n";
        }
        isValidForm = false;
    }

    if(!getGender){
        error_message.textContent+="Please select gender \n"; 
        isValidForm = false; 
    }
    
    if(!gethobbies){
        error_message.textContent+="Please select hobbies \n"; 
        isValidForm = false;
    }

    if (selectedTechnology.length === 0) {
        error_message.textContent+="Please select technology \n";
        isValidForm = false;
    } 
    
    if (!isValidForm) {event.preventDefault();} 
    else {
        const formData = {
            name: username,
            email: useremail,
            contact: contactNumber,
            zipcode: zipcode,
            birthdate: birthdate,
            gender: getGender.value, 
            hobbies: Array.from(gethobbies).map(hobby => hobby.value), 
            technologies: selectedTechnology 
        };
        console.log(JSON.stringify(formData));
        localStorage.setItem("User " + userID.toString(), JSON.stringify(formData));
        userID = userID + 1;
    }
});


