const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

// Only make it work on not very small screens???
// if (this.matchMedia("(min-width: 768px)").matches)

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