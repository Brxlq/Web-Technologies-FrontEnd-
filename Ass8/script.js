AOS.init({
  duration: 1000,
  once: true,
  offset: 150
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert(" Message Sent Successfully!");
  const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
  modal.hide();
  this.reset();
});

// Typed.js
var typed = new Typed('.typed-text', {
  strings: [
    "I'm Web Designer ",
    "I'm UI Designer ",
    "I'm Creator "
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
  showCursor: false
});


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,

    }

    emailjs.send("service_qguvrkr", "template_fl5fne9", parms).then(alert("Email Sent!"))
}


/* Skills part */

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const animateProgress = (bar) => {
    const target = bar.getAttribute("data-target");
    bar.style.width = "0%";
    let width = 0;

    const interval = setInterval(() => {
      if (width >= target) {
        clearInterval(interval);
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }, 3); 
  };

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgress(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});

/* Theme */

const themeSwitch = document.getElementById('checkbox');
const body = document.body;

themeSwitch.addEventListener('change', () => {
  body.classList.toggle('light-theme');
  localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
});

if(localStorage.getItem('theme') === 'light'){
  body.classList.add('light-theme');
  themeSwitch.checked = true;
} else {
  body.classList.remove('light-theme');
  themeSwitch.checked = false;
}
