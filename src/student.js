import { http } from "./http";
import { ui } from "./ui";
class Student {
    constructor() {
        ui.id.addEventListener('blur', this.validateID);
        ui.name.addEventListener('blur', this.validateName);
        ui.teacher.addEventListener('blur', this.validateTeacher);
        ui.school.addEventListener('blur', this.validateSchool);
        ui.terms.addEventListener('blur', this.validateTerms);
    }
    loadEventListerners() {
        this.validateID();
        this.validateName();
        this.validateTeacher();
        this.validateSchool();
        this.validateTerms();
    }
    addStudent() {
        this.loadEventListerners();
        const input = ui.getFormInput();
        if (input.id === '' || input.name === '' || input.teacher === '' || input.school === '' || input.terms === 'not checked') {

        } else {
            http.get(`http://localhost:3000/students`)
                .then(response => {
                    if (response.length <= 0) {
                        //add student
                        this.submitStudent();
                    }
                    return response;
                })
                .then(response => {
                    let student_id;
                    response.forEach((data) => {
                        student_id = data.id;
                    })
                    if (input.id === student_id) {
                        ui.showAlert('ID already registered. Please try another one', 'error');
                    } else {
                        this.submitStudent();
                    }
                })
                .catch(err => console.log(err));
        }
    }
    submitStudent() {
        const input = ui.getFormInput();
        const student = {
            date: input.date,
            id: input.id,
            name: input.name,
            gender: input.gender,
            career_guidance_teacher: input.career_guidance_teacher,
            school: input.school,
            grade: input.grade
        }
        http.post('http://localhost:3000/students', student)
            .then(student => {
                ui.showPopup();
                setTimeout(() => {
                    ui.removePopup();
                    window.location.href = 'assessment.html' + '?id=' + input.id;
                }, 3000);
            })
            .catch(err => console.log(err));
    }
    validateID() {
        const re = /^[0-9]{1}$/;
        const id = document.querySelector('#national_id');
        if (id.value === '') {
            id.classList.add('is-invalid');
        }
        else if (!re.test(id.value)) {
            id.classList.add('is-invalid');
        } else {
            id.classList.remove('is-invalid');
        }
    }
    validateName() {
        const re = /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/;
        const name = document.querySelector('#your_name');
        if (!re.test(name.value)) {
            name.classList.add('is-invalid');
        } else {
            name.classList.remove('is-invalid');
        }
    }
    validateTeacher() {
        const re = /^([A-Za-z\. ]+)[a-zA-Z]$/;
        const teacher = document.querySelector('#your_teacher');
        if (!re.test(teacher.value)) {
            teacher.classList.add('is-invalid');
        } else {
            teacher.classList.remove('is-invalid');
        }
    }
    validateSchool() {
        const re = /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/;
        const school = document.querySelector('#your_school');
        if (!re.test(school.value)) {
            school.classList.add('is-invalid');
        } else {
            school.classList.remove('is-invalid');
        }
    }
    validateTerms() {
        const terms = document.querySelector('#terms');
        if (!terms.checked) {
            terms.classList.add('is-invalid');
        } else {
            terms.classList.remove('is-invalid');
        }
    }
}
export const student = new Student();