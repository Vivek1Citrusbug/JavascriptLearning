document.getElementById("myForm").addEventListener("submit",function(event){
    let isValidForm = true;
   
    let error_message = document.getElementById('error');
    error_message.textContent = "";
    
    const username = document.getElementById('name_input').value;
    const useremail = document.getElementById('useremail').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const zipcode = document.getElementById('zipcode').value;

    const usernamePattern = /^.{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactPattern = /^\+?(91)?[0-9]{10}$/;
    const zipcodePattern = /^[0-9]{6}$/

    if(!username.match(usernamePattern)){
        error_message.textContent += "Username must be at least 1 characters long.\n";
        isValidForm = false;
    }

    if(!useremail.match(emailPattern)){
        // window.alert(useremail.length);
        if(!useremail.length)
            error_message.textContent += "user email should not be empty.\n";
        else{
            error_message.textContent+="user email should be in the form of abc@xyz.com\n";
        }
        isValidForm = false;
    }

    if(!contactNumber.match(contactPattern)){
        // window.alert(useremail.length);
        if(contactNumber.length < 10)
            error_message.textContent += "Contact number should be of length 10\n";
        else{
            error_message.textContent+="Please enter valid contact number\n";
        }
        isValidForm = false;
    }

    if(!zipcode.match(zipcodePattern)){
        // window.alert(useremail.length);
        if(zipcode.length < 10)
            error_message.textContent += "Zipcode should be 6 number long.\n";
        else{
            error_message.textContent+="Please enter a valid Zipcode. \n";
        }
        isValidForm = false;
    }

    if(!isValidForm){
        event.preventDefault();
    }
});

