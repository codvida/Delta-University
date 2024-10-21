var messengerButton = document.getElementById("messengerButton");
  var messengerPopup = document.getElementById("messengerPopup");

  messengerButton.addEventListener("click", function() {
    messengerPopup.classList.toggle("show");
  });




  var smallScreen = document.getElementById("smallScreen");

  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      smallScreen.classList.add("hidden");
    } else {
      smallScreen.classList.remove("hidden");
    }
  });




  window.addEventListener('load', function() {
    const imgNote = document.querySelector('.img-note');
    imgNote.classList.add('loaded');
});



document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    
    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.textContent);
                let startValue = 0;
                const increment = Math.ceil(endValue / 100);
                const interval = setInterval(() => {
                    if (startValue < endValue) {
                        startValue += increment;
                        target.textContent = startValue;
                    } else {
                        clearInterval(interval);
                    }
                }, 300);
                observer.unobserve(target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});






const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('img');

function restartSlide() {
  
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    setTimeout(() => {
        carousel.style.transition = 'transform 5000s linear infinite';
    }, 50);
}

carousel.addEventListener('transitionend', () => {
    restartSlide();
});




window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    const content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 500);
    }, 2500); 
});






document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});





document.addEventListener("DOMContentLoaded", function() {
    var accButtons = document.querySelectorAll(".accordion-button");

    accButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                this.classList.remove("active");
            } else {
                // Close all other accordions
                accButtons.forEach(function(btn) {
                    btn.nextElementSibling.style.display = "none";
                    btn.classList.remove("active");
                });

                // Open the clicked accordion
                content.style.display = "block";
                this.classList.add("active");
            }
        });
    });
});

