let stored_Data = localStorage.getItem("Users");
let userBlock = ``;

if (stored_Data) {
    let userList = document.getElementById('tableBody');
    const users = JSON.parse(stored_Data);
    users.forEach(user => {
        userBlock += `<tr>
                        <td>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input custome_checkbox_checker" id="checkbox_${user.userID}">
                            </div>
                        </td>
                        <td>${user.userID}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.zipcode}</td>
                        <td>${user.birthdate}</td>
                        <td>${user.gender}</td>
                        <td>${user.hobbies}</td>
                        <td>${user.technologies}</td>
                        <td><button type="button" class='btn btn-primary' id="viewButton_${user.userID}">View</button></td>
                    </tr>`
    });

    if (userList) {
        userList.innerHTML = userBlock;

        users.forEach(user => {
            document.querySelector(`#viewButton_${user.userID}`).addEventListener('click', function () {
                viewUserDetails(users, user.userID);
            });
        });
    }
} else {
    console.log("No data found for 'user' in local storage.");
}

function viewUserDetails(users, userId) {
    const userData = users.find(user => user.userID === userId);
    if (userData) {
        localStorage.setItem("selectedUser", JSON.stringify(userData));
        window.location.href = 'userDetails.html';
    } else {
        alert("User not found!");
    }
}

function showCustomAlert() {
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("button1").addEventListener("click", function () {
        closeCustomAlert();
    });

    document.getElementById("button2").addEventListener("click", function () {
        closeCustomAlert();
    });

    document.getElementById("button3").addEventListener("click", function () {
        location.href = 'allUsersListing.html';
    });
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}

function deleteSelectedRecords() {
    let allRecords = localStorage.getItem("Users");
    let finalListOfRecords = JSON.parse(allRecords);
    console.log("In delete records function");
    const records = Array.from(document.getElementsByClassName('custome_checkbox_checker'));
    records.forEach((record, index) => {
        if (record.checked) {
            let selectedID = record.id.split('_')[1];
            finalListOfRecords = finalListOfRecords.filter(user => user.userID != selectedID);
        }
    });
    localStorage.setItem('Users', JSON.stringify(finalListOfRecords));
    location.reload();
    console.log("Updated records in localStorage", finalListOfRecords);
}
