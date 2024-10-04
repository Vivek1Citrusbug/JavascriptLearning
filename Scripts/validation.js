function validateStep(step) {
    let isValidForm = true;
    let error_message = document.getElementById('error');
    error_message.textContent = "";

    const usernamePattern = /^.{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactPattern = /^(\+91[\s]?)?[0]?[6789]\d{9}$/;
    const zipcodePattern = /^[0-9]{6}$/;

    if (step === 0) {
        const username = document.getElementById('name_input').value;
        const useremail = document.getElementById('useremail').value;
        const contactNumber = document.getElementById('contactNumber').value;

        if (!username.match(usernamePattern)) {
            error_message.textContent += "Username must be at least 1 character long.\n";
            isValidForm = false;
        }

        if (!useremail.match(emailPattern)) {
            if (!useremail.length)
                error_message.textContent += "User email should not be empty.\n";
            else {
                error_message.textContent += "User email should be in the form of abc@xyz.com\n";
            }
            isValidForm = false;
        }

        if (!contactNumber.match(contactPattern)) {
            if (contactNumber.length < 10)
                error_message.textContent += "Contact number should be of length 10.\n";
            else {
                error_message.textContent += "Please enter a valid contact number.\n";
            }
            isValidForm = false;
        }
    }

    if (step === 1) {
        const zipcode = document.getElementById('zipcode').value;
        const birthdate = document.querySelector('input[type="date"]').value;

        if (!zipcode.match(zipcodePattern)) {
            if (zipcode.length < 6)
                error_message.textContent += "Zipcode should be 6 numbers long.\n";
            else {
                error_message.textContent += "Please enter a valid Zipcode.\n";
            }
            isValidForm = false;
        }
        var now = new Date();
        console.log("Zip code : ",zipcode);
        console.log("Currnt data : ",now);
        console.log("Birthdate : ".birthdate);
        currentDate = new Date().toISOString().split("T")[0];
        if (!birthdate && birthdate > currentDate) {
            error_message.textContent += "Please select a birthdate.\n";
            isValidForm = false;
        }
    }

    if (step === 2) {
        const getGender = document.querySelector('input[name="genderradio"]:checked');   
        const getHobbies = document.querySelectorAll('input[name="hobbies"]:checked');   
        const technologySelect = document.getElementById('technology');
        const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);
        console.log("gender : ",getGender);
        console.log("hobbies : ",now);
        console.log("selectedTechnology : ",selectedTechnology);
        if (!getGender) {
            error_message.textContent += "Please select a gender.\n";
            isValidForm = false;
        }
        if (getHobbies.length === 0) {
            error_message.textContent += "Please select hobbies.\n";
            isValidForm = false;
        }
        if (selectedTechnology.length === 0) {
            error_message.textContent += "Please select technology.\n";
            isValidForm = false;
        }
    }
    
    return isValidForm;
}
