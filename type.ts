
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const resumeHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <h4>Education</h4>
        <p>${degree} from ${school}</p>
        <h4>Work Experience</h4>
        <p>${jobTitle} at ${company}</p>
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    const resumeContainer = document.getElementById('generated-resume');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeHTML;
    }
});
