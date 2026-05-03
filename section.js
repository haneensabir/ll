// const modeBtn = document.querySelector('.modebutton');

// function checkTheme() {
//     const savedTheme = localStorage.getItem('theme');
    
//     if (savedTheme === 'dark') {
//         document.body.classList.add('dark-mode');
//         modeBtn.textContent = "Light"; 
//     } else {
//         modeBtn.textContent = "Mode";
//     }
// }

// checkTheme();

// modeBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
    
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');
//         modeBtn.textContent = "Light";
//     } else {
//         localStorage.setItem('theme', 'light');
//         modeBtn.textContent = "Dark";
//     }
// });
const modeBtn = document.querySelector('.modebutton');
const body = document.body;
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        modeBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

modeBtn.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modeBtn.textContent = 'Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modeBtn.textContent = 'Light Mode';
    }
});
function checkAuthStatus() {
    const user = localStorage.getItem('userToken');

    if (user) {
        if(loginBtn) loginBtn.style.display = 'none';
        if(signupBtn) signupBtn.style.display = 'none';
        if(logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        if(loginBtn) loginBtn.style.display = 'inline-block';
        if(signupBtn) signupBtn.style.display = 'inline-block';
        if(logoutBtn) logoutBtn.style.display = 'none';
    }
}
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName'); 
        
        alert("You have been logged out.");
        window.location.reload(); 
    });
}
window.onload = () => {
    applySavedTheme();
    checkAuthStatus();
};











// const currentTheme = localStorage.getItem('theme');
// if (currentTheme === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'dark');
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const toggleBtn = document.getElementById('theme-toggle');
    
//     if (toggleBtn) {
//         toggleBtn.addEventListener('click', () => {
//             let theme = 'light';
//             if (document.documentElement.getAttribute('data-theme') !== 'dark') {
//                 theme = 'dark';
//                 document.documentElement.setAttribute('data-theme', 'dark');
//             } else {
//                 document.documentElement.removeAttribute('data-theme');
//             }
//             localStorage.setItem('theme', theme);
//         });
//     }
// });
// const modeBtn = document.querySelector('.modebutton');
// const body = document.body;

// modeBtn.addEventListener('click', () => {
//     const currentTheme = body.getAttribute('data-theme');
//     if (currentTheme === 'dark') {
//         body.setAttribute('data-theme', 'light');
//     } else {
//         body.setAttribute('data-theme', 'dark');
//     }
// });



















// let x= document.getElementById('hh')
// function hello(){
//     document.body.style.background= 'black' ;
//     document.body.style.color= 'white' ;
//     document.body.style.color= 'white' ;

//     let links = document.querySelectorAll('a');
//     links.forEach(link => {
//         link.style.color = 'white';
//     });
//     let lin = document.querySelectorAll('.btns');
//     lin.forEach(lin => {
//         lin.style.border ='1px solid white';  
        
//     });
//     let buttons = document.querySelectorAll('.btns , .btn');

//     buttons.forEach(btn => {
//     btn.onmouseenter = function() {
//         this.style.backgroundColor = 'white';
//         this.style.color = 'black';
//     };
//     btn.onmouseleave = function() {
//         this.style.backgroundColor = 'transparent';
//         this.style.color = 'white';
//     }});
//     let look = document.querySelectorAll('footer');
//     look.forEach(look => {
//         look.style.background='white';
//         look.style.color='black';
// });
// let nav = document.querySelectorAll('.ii');

// nav.forEach(ii => {
//     ii.onmouseenter = function() {
//         this.style.color = 'rgb(237, 167, 14)'; 
//     };
//     ii.onmouseleave = function() {
//         this.style.color = 'white'; 
//         this.style.backgroundColor = 'transparent'; 
//     };
// });
// }
// x.onclick =hello ;
// let menuBtn = document.getElementById('menu-btn');
// let menu = document.querySelector('.navlist'); 

// menuBtn.onclick = function() {
//     menu.classList.toggle('active');
// };

// document.onclick = function(e) {
//     if (e.target.id !== 'menu-btn' && !menu.contains(e.target)) {
//         menu.classList.remove('active');
//     }
// };