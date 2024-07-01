//total step
const totalSteps = 4;

// Current step
let currentStep = 0;

document.getElementById("start-button").addEventListener("click", showPersonalDetailsPrompt);

function showPersonalDetailsPrompt() {
    const name = prompt("Enter your name:");
    const surname = prompt("Enter your surname:");
    const age = prompt("Enter your age:");
    const gender = prompt("Enter your gender:");
    const privacyterms = prompt("Agree with privacy terms:");

    // Update displayed information
    document.getElementById("name").textContent = name;
    document.getElementById("surname").textContent = surname;
    document.getElementById("age").textContent = age;
    document.getElementById("gender").textContent = gender;
    document.getElementById("privacyterms").textContent = privacyterms;

    // Show personal details section
    document.getElementById("personal-details").style.display = "block";

    // Update progress
    currentStep++;
    updateProgress();
}

function validateAndShowExperienceForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("personal-details").style.display = "none";
    document.getElementById("volunteering-experience").style.display = "block";
    showExperiencePrompt();

    // Update progress
    currentStep++;
    updateProgress();
}

function showExperiencePrompt() {
    const Rational = prompt("What brings you to this cause");
    const DoA = prompt("Enter your DoA:");
    const task = prompt("Enter your volunteering task:");
    const Place = prompt("Enter your Place:");
    const assignmentType = prompt("Enter your Assignment type:");
    
    // Update displayed information
    document.getElementById("Rational").textContent = Rational;
    document.getElementById("DoA").textContent = DoA;
    document.getElementById("task").textContent = task;
    document.getElementById("Place").textContent = Place;
    document.getElementById("Assignmenttype").textContent = assignmentType;
}

document.getElementById("volunteering-next-button").addEventListener("click", validateAndShowQualificationForm);

function validateAndShowQualificationForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("volunteering-experience").style.display = "none";
    document.getElementById("qualification").style.display = "block";
    showQualificationPrompt();

    // Update progress
    currentStep++;
    updateProgress();
}

function showQualificationPrompt() {
    const areaOfStudy = prompt("Enter your area of study:");
    const highestDegree = prompt("Enter your highest degree:");
    const universityInstitution = prompt("Enter your University/Institution:");
    const completionYear = prompt("Enter your completion year:");
    const country = prompt("Enter your country:");
    
    // Update displayed information
    document.getElementById("Area_of_study").textContent = areaOfStudy;
    document.getElementById("Highest_degree").textContent = highestDegree;
    document.getElementById("University_Institution").textContent = universityInstitution;
    document.getElementById("Completion_year").textContent = completionYear;
    document.getElementById("Country").textContent = country;
}

document.getElementById("qualification-next-button").addEventListener("click", validateAndShowAvailabilityForm);

function validateAndShowAvailabilityForm() {
    // You can add validation logic here if needed
    // For simplicity, assuming all fields are filled
    document.getElementById("qualification").style.display = "none";
    document.getElementById("availability").style.display = "block";
    showAvailabilityPrompt();

    // Update progress
    currentStep++;
    updateProgress();
}

function showAvailabilityPrompt() {
    const surname = prompt("Enter your surname:");
    const contactNumber = prompt("Enter your contact number:");
    const email = prompt("Enter your email address:");

    // Update displayed information
    document.getElementById("surname").textContent = surname;
    document.getElementById("contact-number").textContent = contactNumber;
    document.getElementById("availability-email").textContent = email;
}

function updateProgress(progress = null) {
    if (progress === null) {
        progress = (currentStep / totalSteps) * 100; // Calculate progress percentage
    }
    document.getElementById("progress-bar").style.width = `${progress}%`; // Update progress bar width
    document.getElementById("progress-text").textContent = `${progress}% Complete`; // Update progress text

    // Show submit button when all questions are completed
    if (currentStep === totalSteps) {
        document.getElementById("availability-next-button").style.display = "block";
    }

    // Show output when progress reaches 100%
    if (progress === 100) {
        showOutput();
    }
}

document.getElementById("availability-next-button").addEventListener("click", updateProgress);

function showOutput() {
    // Gather all the collected information
    const name = document.getElementById("name").textContent;
    const surname = document.getElementById("surname").textContent;
    const age = document.getElementById("age").textContent;
    const gender = document.getElementById("gender").textContent;
    const privacyterms = document.getElementById("privacyterms").textContent;
    
    const rational = document.getElementById("Rational").textContent;
    const doa = document.getElementById("DoA").textContent;
    const task = document.getElementById("task").textContent;
    const place = document.getElementById("Place").textContent;
    const assignmentType = document.getElementById("Assignmenttype").textContent;

    const areaOfStudy = document.getElementById("Area_of_study").textContent;
    const highestDegree = document.getElementById("Highest_degree").textContent;
    const universityInstitution = document.getElementById("University_Institution").textContent;
    const completionYear = document.getElementById("Completion_year").textContent;
    const country = document.getElementById("Country").textContent;

    const contactNumber = document.getElementById("contact-number").textContent;
    const email = document.getElementById("availability-email").textContent;

    // Create the output message
    const output = `
    <br><fieldset style="background-color: rgba(0, 0, 0, 0.1);">
        <h2>Personal Details:</h2>
        <h3>
        Name: ${name}<br><br>
        Surname: ${surname}<br><br>
        Age: ${age}<br><br>
        Gender: ${gender}<br><br>
        Agree with privacy terms: ${privacyterms}<br><br>
        </h3>

        <h2>Volunteering Experience:</h2>
        <h3>
        Rational: ${rational}<br><br>
        Date of Arrival: ${doa}<br><br>
        Task: ${task}<br><br>
        Place: ${place}<br><br>
        Assignment type: ${assignmentType}<br><br>
        </h3>

        <h2>Qualification:</h2>
        <h3>
        Area of study: ${areaOfStudy}<br><br>
        Highest degree: ${highestDegree}<br><br>
        University/Institution: ${universityInstitution}<br><br>
        Completion year: ${completionYear}<br><br>
        Country: ${country}<br><br>
        </h3>

        <h2>Availability and Contact:</h2>
        <h3>
        Surname: ${surname}<br><br>
        Contact Number: ${contactNumber}<br><br>
        Email: ${email}
        </h3>
    </fieldset>
    
    `;

    // Display the output on the web page
    document.getElementById("display-area").innerHTML = output;
}
