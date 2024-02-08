import './styles/main.scss';
//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import loading from './assets/loading-gif.gif';
import siyinqaba from './assets/siyinqaba.png';
import { student } from './student';
const loader = document.querySelector('#loading');
loader.src = loading;
const moet = document.getElementById('moet');
moet.src = siyinqaba;
document.querySelector('#addStudent').addEventListener('click', (e) => {
    student.addStudent();
    e.preventDefault();
});

