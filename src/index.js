// Import our custom CSS
import './styles/main.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import apt1 from './assets/apt1.jpg';
import siyinqaba from './assets/siyinqaba.png';
import exams_council from './assets/exams_council.png';
const headerPic1 = document.getElementById('aptPic1');
const moet = document.getElementById('moet');
const ecos = document.getElementById('ecos');
headerPic1.src = apt1;
moet.src = siyinqaba;
ecos.src = exams_council;
const currentDate = new Date().getFullYear();
document.getElementById('currentDate').innerHTML = currentDate;