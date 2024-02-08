import './styles/main.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import siyinqaba from './assets/siyinqaba.png';
import { http } from './http';
import { ui } from './ui';
let student_id = document.location.search.replace(/^.*?\=/,'');
const moet = document.getElementById('moet');
moet.src = siyinqaba;
const student_name = document.querySelector('.student-name');
const student_school = document.querySelector('.student-school');
window.addEventListener('load', checkStudent);
function checkStudent() {
    if (window.location.search === "") {
        window.location.href = 'registration.html';
    } else {
        document.querySelector('.user-avater').style.display = 'block';
        document.querySelector('.nav-buttons').style.display = 'none';
    }
}

document.querySelector('.user-avater').addEventListener('click', () => {
    document.getElementById('subMenu').classList.toggle('open-profile');
});

http.get(`http://localhost:3000/students/${student_id}`)
.then(response => {
    student_name.innerHTML = response.name;
    student_school.innerHTML = response.school;
})
.catch(err => console.log(err));