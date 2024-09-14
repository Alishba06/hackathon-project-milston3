var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    var resumeHTML = "\n        <h3>".concat(name, "</h3>\n        <p>Email: ").concat(email, "</p>\n        <h4>Education</h4>\n        <p>").concat(degree, " from ").concat(school, "</p>\n        <h4>Work Experience</h4>\n        <p>").concat(jobTitle, " at ").concat(company, "</p>\n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    var resumeContainer = document.getElementById('generated-resume');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeHTML;
    }
});
