const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "result-display"
) as HTMLDivElement;
const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "download"
) as HTMLButtonElement;

// Handle form Submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // Collect input value
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const gender = (document.getElementById("gender") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Save Form Data
  const resumeData = {
    name,
    email,
    phone,
    dob,
    gender,
    education,
    experience,
    skills,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));

  // Generate Dynamic Resume content dynamically
  const resumeHtml = `
    <h2>Editable Dynamic Resume</h2>
    <br/>
    <h3>Personal Information </h3>
    <p><b>Name : </b> <span contenteditable="true">${name}</span></p>
      <p><b>Email : </b> <span contenteditable="true">${email}</span></p>
         <p><b>Phone : </b> <span contenteditable="true">${phone}</span></p>
        <p><b>Date of Birth : </b> <span contenteditable="true">${dob}</span></p>
          <p><b>Gender : </b> <span contenteditable="true">${gender}</span></p>
             <h3>Education </h3>
                <p contenteditable="true"><b>Education : </b> ${education}</p>
                  <h3>Experience </h3>
                <p contenteditable="true"><b>Experience : </b>${experience}</p>
                  <h3>Skills </h3>
                <p contenteditable="true" ><b>Skills : </b>${skills}</p>


    `;
  // Display the generate resume
  resumeDisplayElement.innerHTML = resumeHtml;
  const shareableURL = `
    ${window.location.origin}?username=${encodeURIComponent(username)}`;

  // Display the Shareable Link
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});
// Download

downloadPdfButton.addEventListener("click", () => {
  window.print();
});
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.Email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumeData.phone;
      (document.getElementById("dob") as HTMLInputElement).value =
        resumeData.dob;
      (document.getElementById("gender") as HTMLInputElement).value =
        resumeData.gender;
      (document.getElementById("education") as HTMLInputElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLInputElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLInputElement).value =
        resumeData.skills;
    }
  }
});

// Display the Generate Resume
