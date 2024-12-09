document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("resume-form");
    var resumeDisplayElement = document.getElementById("resume-display");
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload on form submission
        // Collect input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var linkedin = document.getElementById('linkedin').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Generate the resume content dynamically
        var resumeHTML = "\n            <h3><b>Editable Resume</b></h3>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b><span id=\"edit-name\" class=\"editable\">".concat(name, "</span></p>\n            <p><b>Email:</b><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><b>Phone:</b><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <p><b>LinkedIn:</b><span id=\"edit-linkedin\" class=\"editable\">").concat(linkedin, "</span></p>\n\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p id=\"edit-skilss\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Display generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            makeEditable();
        }
    });
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
