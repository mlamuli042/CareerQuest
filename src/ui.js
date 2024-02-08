class UI {
    constructor() {
        this.id = document.querySelector('#national_id');
        this.name = document.querySelector('#your_name');
        this.teacher = document.querySelector('#your_teacher');
        this.school = document.querySelector('#your_school');
        this.terms = document.querySelector('#terms');
    }
    getFormInput() {
        const date = this.getCurrentDate();
        const id = document.querySelector('#national_id').value;
        const name = document.querySelector('#your_name').value;
        const gender = document.querySelector('#gender').value;
        const title = document.querySelector('#title').value;
        const teacher = document.querySelector('#your_teacher').value;
        const school = document.querySelector('#your_school').value;
        const grade = document.querySelector('#grade').value;
        const terms = document.querySelector('#terms').checked ? 'checked' : 'not checked';
        const career_guidance_teacher = `${title} ${teacher}`;
        return {
            date,
            id,
            name,
            gender,
            title,
            teacher,
            school,
            grade,
            terms,
            career_guidance_teacher
        }
    }
    getCurrentDate() {
        const today = new Date();
        const day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
        const month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
        const year = today.getFullYear();
        const current_date = document.getElementById('current_date');
        current_date.setAttribute("value", `${day}/${month}/${year}`);
        const date = current_date.value;
        return date;
    }
    showPopup() {
        document.getElementById('popup-container').classList.add('active');
    }
    removePopup() {
        document.getElementById('popup-container').classList.remove('active');
    }
    showAlert = function (message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const idDiv = document.querySelector('#id-div');
        const form = document.querySelector('#student-form');
        form.insertBefore(div, idDiv);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    clearFiels() {
        this.id.value = '';
        this.name.value = '';
        this.teacher.value = '';
        this.school.value = '';
    }
}
export const ui = new UI();