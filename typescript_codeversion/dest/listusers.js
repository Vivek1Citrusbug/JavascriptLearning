"use strict";
let stored_Data = localStorage.getItem("Users");
let userBlock = ``;
if (stored_Data) {
    let userList = document.getElementById('tableBody');
    const users = JSON.parse(stored_Data);
    users.forEach((user) => {
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
                        <td>${user.hobbies.join(', ')}</td>
                        <td>${user.technologies.join(', ')}</td>
                        <td><button type="button" class='btn btn-primary' id="viewButton_${user.userID}">View</button></td>
                    </tr>`;
    });
    if (userList) {
        userList.innerHTML = userBlock;
        users.forEach((user) => {
            const viewButton = document.querySelector(`#viewButton_${user.userID}`);
            if (viewButton) {
                viewButton.addEventListener('click', () => {
                    viewUserDetails(users, user.userID);
                });
            }
        });
    }
}
else {
    console.log("No data found for 'Users' in local storage.");
}
function viewUserDetails(users, userId) {
    const userData = users.find(user => user.userID === userId);
    if (userData) {
        localStorage.setItem("selectedUser", JSON.stringify(userData));
        window.location.href = 'userDetails.html';
    }
    else {
        alert("User not found!");
    }
}
function showCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "block";
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    button1.addEventListener("click", closeCustomAlert);
    button2.addEventListener("click", () => {
        const selectedCheckboxes = document.querySelectorAll('.custome_checkbox_checker:checked');
        if (selectedCheckboxes.length === 0) {
            console.log("No checkboxes selected.");
            alert("No checkboxes selected!");
            return;
        }
        const users = JSON.parse(localStorage.getItem('Users') || '[]');
        let selectedUsers = [];
        selectedCheckboxes.forEach((checkbox) => {
            const selectedUserId = checkbox.id.split('_');
            const matchedUser = users.find((user) => String(user.userID) === selectedUserId[1]);
            if (matchedUser) {
                selectedUsers.push(matchedUser);
            }
            else {
                console.log("No user found for Checkbox ID:", selectedUserId);
            }
        });
        if (selectedUsers.length === 0) {
            console.log("No users matched with the selected checkboxes.");
            alert("No matching users found.");
            return;
        }
        localStorage.setItem('SelectedUpdateUsers', JSON.stringify(selectedUsers));
        location.href = 'selectedUser.html';
    });
    button3.addEventListener("click", () => {
        location.href = 'allUsersListing.html';
    });
}
function closeCustomAlert() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
}
function deleteSelectedRecords() {
    let allRecords = localStorage.getItem("Users");
    if (!allRecords)
        return;
    let finalListOfRecords = JSON.parse(allRecords);
    console.log("In delete records function");
    const records = Array.from(document.getElementsByClassName('custome_checkbox_checker'));
    records.forEach((record) => {
        if (record.checked) {
            let selectedID = record.id.split('_')[1];
            finalListOfRecords = finalListOfRecords.filter(user => user.userID !== selectedID);
        }
    });
    localStorage.setItem('Users', JSON.stringify(finalListOfRecords));
    location.reload();
    console.log("Updated records in localStorage", finalListOfRecords);
}
