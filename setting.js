// Handle sidebar navigation
document.querySelectorAll('.sidebarofpro ul li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.sidebarofpro ul li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
        // Handle content changes based on selected sidebar item
        if (item.id === "profile-tab") {
            displayProfileForm();
        } else {
            displayPlaceholderContent(item.textContent);
        }
    });
});

// Handle update button click
document.getElementById('update-button').addEventListener('click', () => {
    alert('Profile updated successfully!');
    // Simulate saving the updated profile data
    const profileData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        status: document.getElementById('status').value,
        age: document.getElementById('age').value
    };
    console.log(profileData);
});

// Function to display the profile form
function displayProfileForm() {
    document.querySelector('.content').innerHTML = `
        <div class="profile-form">
            <img src="profile-pic.jpg" alt="Profile Picture" class="profile-pic">
            <button id="update-button">Update</button>

            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" value="Darcy Tierney">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" value="darcy@gmail.co.com">
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" value="+91 0292-282-222">
            </div>

            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" id="gender" value="Male">
            </div>

            <div class="form-group">
                <label for="status">Relation Status</label>
                <input type="text" id="status" value="Single">
            </div>

            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" value="29">
            </div>
        </div>
    `;
    document.getElementById('update-button').addEventListener('click', () => {
        alert('Profile updated successfully!');
        const profileData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
            status: document.getElementById('status').value,
            age: document.getElementById('age').value
        };
        console.log(profileData);
    });
}

// Function to display placeholder content
function displayPlaceholderContent(content) {
    document.querySelector('.content').innerHTML = `
        <h2>${content}</h2>
        <p>This is the ${content} section.</p>
    `;
   
}
