let currentStep = 0;
showStep(currentStep);

function showStep(step:number):void {
    const steps = document.getElementsByClassName("step") as HTMLCollectionOf<HTMLElement>;
    (steps[step] as HTMLElement).classList.add("active");

    if (step === 0) {
        (document.getElementById("prevBtn") as HTMLElement).style.display = "none";
    } else {
        (document.getElementById("prevBtn") as HTMLElement).style.display = "inline";
    }

    if (step === (steps.length - 1)) {
        (document.getElementById("nextBtn") as HTMLElement).innerHTML = "Submit";
        (document.getElementById("nextBtn") as HTMLElement).onclick = submitForm; 
    } else {
        (document.getElementById("nextBtn") as HTMLElement).innerHTML = "Next";
        (document.getElementById("nextBtn") as HTMLElement).onclick = function() { nextPrev(1); };
    }
}

function nextPrev(direction : number) : boolean | void{
    const steps = document.getElementsByClassName("step") as HTMLCollectionOf<HTMLElement>;
    if (direction === 1 && !validateStep(currentStep)) {
        return false;
    }
    (steps[currentStep] as HTMLElement).classList.remove("active");
    currentStep += direction;

    if (currentStep == steps.length - 1) {
        const username = (document.getElementById('name_input') as HTMLInputElement).value;
        const useremail = (document.getElementById('useremail') as HTMLInputElement).value;
        const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
        const zipcode = (document.getElementById('zipcode') as HTMLInputElement).value;
        const birthdate = (document.querySelector('input[type="date"]') as HTMLInputElement).value;
        const getGender = document.querySelector('input[name="genderradio"]:checked') as HTMLInputElement | null;;
        const gethobbies = document.querySelectorAll('input[name="hobbies"]:checked') as NodeListOf<HTMLInputElement>;
        const technologySelect = document.getElementById('technology') as HTMLSelectElement;;
        const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);

        (document.getElementById('summaryName') as HTMLElement).textContent = username;
        (document.getElementById('summaryEmail')  as HTMLElement).textContent = useremail;
        (document.getElementById('summaryContact')  as HTMLElement).textContent = contactNumber;
        (document.getElementById('summaryZipcode')  as HTMLElement).textContent = zipcode;
        (document.getElementById('summaryBirthdate')  as HTMLElement).textContent = birthdate;
        (document.getElementById('summaryGender')  as HTMLElement).textContent = getGender ? getGender.value : "Not selected";
        (document.getElementById('summaryHobbies')  as HTMLElement).textContent = Array.from(gethobbies).map(hobby => hobby.value).join(", ");
        (document.getElementById('summaryTechnologies')  as HTMLElement).textContent = selectedTechnology.join(", ");
    }

    showStep(currentStep);
}

function addNewUser(formData : {
    userID: string;
    name: string;
    email: string;
    contact: string;
    zipcode: string;
    birthdate: string;
    gender: string | null;
    hobbies: string[];
    technologies: string[];
}) : void{
    let stored_Data = localStorage.getItem("Users");
    let users = stored_Data ? JSON.parse(stored_Data) : [];
    users.push(formData);
    localStorage.setItem("Users", JSON.stringify(users));
    alert("Form submitted successfully!");
}

function submitForm(): void {
    const username = (document.getElementById('name_input') as HTMLInputElement).value;
    const useremail = (document.getElementById('useremail') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
    const zipcode = (document.getElementById('zipcode') as HTMLInputElement).value;
    const birthdate = (document.querySelector('input[type="date"]') as HTMLInputElement).value;
    const getGender = (document.querySelector('input[name="genderradio"]:checked') as HTMLInputElement);
    const gethobbies = (document.querySelectorAll('input[name="hobbies"]:checked') as NodeListOf<HTMLInputElement>);
    const technologySelect = (document.getElementById('technology') as HTMLSelectElement);
    const selectedTechnology = Array.from(technologySelect.selectedOptions).map(option => option.value);
    
    let date = new Date();
    let userID = date.getTime();
    const formData = {
        userID:userID.toString(),
        name: username,
        email: useremail,
        contact: contactNumber,
        zipcode: zipcode,
        birthdate: birthdate,
        gender: getGender ? getGender.value : null, 
        hobbies: Array.from(gethobbies).map(hobby => hobby.value),
        technologies: selectedTechnology 
    };

    addNewUser(formData);

    (document.getElementById("myForm") as HTMLFormElement).reset();
    location.reload();
}
