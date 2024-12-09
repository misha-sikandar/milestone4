document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload on form submission

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate the resume content dynamically
        const resumeHTML = `
            <h3><b>Editable Resume</b></h3>
            <h3>Personal Information</h3>
            <p><b>Name:</b><span id="edit-name" class="editable">${name}</span></p>
            <p><b>Email:</b><span id="edit-email" class="editable">${email}</span></p>
            <p><b>Phone:</b><span id="edit-phone" class="editable">${phone}</span></p>
            <p><b>LinkedIn:</b><span id="edit-linkedin" class="editable">${linkedin}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Work Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skilss" class="editable">${skills}</p>
        `;

        // Display generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        makeEditable();
        }
    });
});
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement= element as HTMLElement;
            const currentValue= currentElement.textContent || "" ;
                if(currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
                    const input= document.createElement('input')
                    input.type='text'
                    input.value=currentValue
                    input.classList.add('editing-input')
                    input.addEventListener('blur',function(){
                        currentElement.textContent=input.value;
                        currentElement.style.display='inline'
                        input.remove()
                    })




                    currentElement.style.display='none'
                    currentElement.parentNode?.insertBefore(input,currentElement)
                    input.focus()


                }
        }

        )
    }

    )
}