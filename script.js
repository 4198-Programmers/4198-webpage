const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

const faders = document.querySelectorAll('.fade-in');

// Only make it work on not very small screens???
// if (this.matchMedia("(min-width: 768px)").matches)

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }

  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

$(window).on("load resize", function() {
    $dropdown.hover(
      function() {
        const $this = $(this);
        
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
        $dropdownMenu.removeClass('d-none');
        
        $("#navbarDropdown").addClass('special');
      },
      function() {
        const $this = $(this);
        
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
        $dropdownMenu.addClass('d-none');
        
        $("#navbarDropdown").removeClass('special');
      }
      
    );
  });


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
    // mybutton.style.opacity = "1";
    mybutton.classList.add('appear');
    // mybutton.target.classList.add('appear');
    // mybutton.setAttribute("style","opacity:1.0; -moz-opacity:0.5; filter:alpha(opacity=50)");
  } else {
    // mybutton.style.opacity = "0";
    mybutton.style.display = "none";
    mybutton.classList.remove('appear')
    
    
    // mybutton.target.classList.removeClass('appear');
    // mybutton.setAttribute("style","opacity:1.0; -moz-opacity:0.5; filter:alpha(opacity=50)");
  }
}



// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}