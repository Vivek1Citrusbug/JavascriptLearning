type User = {
    userID: string;
    name: string;
    email: string;
    contact: string;
    zipcode: string;
    birthdate: string;
    gender: string | null;
    hobbies: string[];
    technologies: string[];
};

let stored_Data = localStorage.getItem("Users");
let userBlock = ``;

if (stored_Data) {
    let userList = document.getElementById('tableBody') as HTMLTableElement;
    const users: User[] = JSON.parse(stored_Data);
    
    users.forEach((user: User) => {
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

        users.forEach((user: User) => {
            const viewButton = document.querySelector(`#viewButton_${user.userID}`) as HTMLButtonElement;
            if (viewButton) {
                viewButton.addEventListener('click', () => {
                    viewUserDetails(users, user.userID);
                });
            }
        });
    }
} else {
    console.log("No data found for 'Users' in local storage.");
}

function viewUserDetails(users: User[], userId: string): void {
    const userData = users.find(user => user.userID === userId);
    if (userData) {
        localStorage.setItem("selectedUser", JSON.stringify(userData));
        window.location.href = 'userDetails.html';
    } else {
        alert("User not found!");
    }
}

function showCustomAlert(): void {
    const customAlert = document.getElementById("customAlert") as HTMLElement;
    customAlert.style.display = "block";

    const button1 = document.getElementById("button1") as HTMLButtonElement;
    const button2 = document.getElementById("button2") as HTMLButtonElement;
    const button3 = document.getElementById("button3") as HTMLButtonElement;

    button1.addEventListener("click", closeCustomAlert);
    button2.addEventListener("click", closeCustomAlert);

    button3.addEventListener("click", () => {
        location.href = 'allUsersListing.html';
    });
}

function closeCustomAlert(): void {
    const customAlert = document.getElementById("customAlert") as HTMLElement;
    customAlert.style.display = "none";
}

function deleteSelectedRecords(): void {
    let allRecords = localStorage.getItem("Users");
    if (!allRecords) return;
    
    let finalListOfRecords: User[] = JSON.parse(allRecords);
    console.log("In delete records function");

    const records = Array.from(document.getElementsByClassName('custome_checkbox_checker') as HTMLCollectionOf<HTMLInputElement>);

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
