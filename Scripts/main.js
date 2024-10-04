let currentStep = 0;
showStep(currentStep);

function showStep(step) {
    const steps = document.getElementsByClassName("step");
    steps[step].classList.add("active");

    if (step === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (step === (steps.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
        document.getElementById("nextBtn").onclick = submitForm; 
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
        document.getElementById("nextBtn").onclick = function() { nextPrev(1); };
    }
}

function nextPrev(direction) {
    const steps = document.getElementsByClassName("step");
    if (direction === 1 && !validateStep(currentStep)) {
        return false;
    }
    steps[currentStep].classList.remove("active");
    currentStep += direction;

    if (currentStep == steps.length - 1) {
        const username = document.getElementById('name_input').value;
        const useremail = document.getElementById('useremail').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const zipcode = document.getElementById('zipcode').value;
        const birthdate = document.querySelector('input[type="date"]').value;
        const getGender = document.querySelector('input[name="genderradio"]:checked');
        const gethobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        const technologySelect = document.getElementById('technology');
        const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);

        document.getElementById('summaryName').textContent = username;
        document.getElementById('summaryEmail').textContent = useremail;
        document.getElementById('summaryContact').textContent = contactNumber;
        document.getElementById('summaryZipcode').textContent = zipcode;
        document.getElementById('summaryBirthdate').textContent = birthdate;
        document.getElementById('summaryGender').textContent = getGender ? getGender.value : "Not selected";
        document.getElementById('summaryHobbies').textContent = Array.from(gethobbies).map(hobby => hobby.value).join(", ");
        document.getElementById('summaryTechnologies').textContent = selectedTechnology.join(", ");
    }

    showStep(currentStep);
}

function submitForm() {

    const username = document.getElementById('name_input').value;
    const useremail = document.getElementById('useremail').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const zipcode = document.getElementById('zipcode').value;
    const birthdate = document.querySelector('input[type="date"]').value;
    const getGender = document.querySelector('input[name="genderradio"]:checked');
    const gethobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const technologySelect = document.getElementById('technology');
    const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);

    const formData = {
        name: username,
        email: useremail,
        contact: contactNumber,
        zipcode: zipcode,
        birthdate: birthdate,
        gender: getGender ? getGender.value : null, 
        hobbies: Array.from(gethobbies).map(hobby => hobby.value),
        technologies: selectedTechnology 
    };

    let date = new Date();
    let userID = date.getTime();
    localStorage.setItem("User " + userID.toString(), JSON.stringify(formData));

    alert("Form submitted successfully!");

    document.getElementById("myForm").reset();
    location.reload();
}
