var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("result-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download");
// Handle form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input value
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // Save Form Data
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        gender: gender,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate Dynamic Resume content dynamically
    var resumeHtml = "\n    <h2>Editable Dynamic Resume</h2>\n    <br/>\n    <h3>Personal Information </h3>\n    <p><b>Name : </b> <span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email : </b> <span contenteditable=\"true\">").concat(email, "</span></p>\n         <p><b>Phone : </b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Date of Birth : </b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n          <p><b>Gender : </b> <span contenteditable=\"true\">").concat(gender, "</span></p>\n             <h3>Education </h3>\n                <p contenteditable=\"true\"><b>Education : </b> ").concat(education, "</p>\n                  <h3>Experience </h3>\n                <p contenteditable=\"true\"><b>Experience : </b>").concat(experience, "</p>\n                  <h3>Skills </h3>\n                <p contenteditable=\"true\" ><b>Skills : </b>").concat(skills, "</p>\n\n\n    ");
    // Display the generate resume
    resumeDisplayElement.innerHTML = resumeHtml;
    var shareableURL = "\n    ".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the Shareable Link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Download 
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.Email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('dob').value = resumeData.dob;
            document.getElementById('gender').value = resumeData.gender;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
// Display the Generate Resume
