// This file is for the custom elements that we define that are repeated everywhere like the header and the footer
// It makes it nice for clean code and easier to edit if we need.
//                              - Aiden
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML += `
    <nav class="navbar navbar-expand-lg navbar-dark hmmm">
        <div class="container-fluid">
            <a href="/"><img src="/Source/ROBOCATICON.svg" alt="Robocats Logo" width="52.6" height="38"/></a>
            <a class="navbar-brand px-lg-4" href="/">Team 4198</a>
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-light px-sm-4" href="/about">About</a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link text-light px-sm-4" href="/contact">Contact Us</a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link text-light px-sm-4" href="/events">Events</a>
                    </li>
    
                    <li class="nav-item">
                    <!-- <a class="nav-link disabled">Placeholder</a> -->
                        <a class="nav-link text-light px-sm-4" href="/sponsors">Sponsors</a>
                    </li>
  
                </ul>
            </div>
        </div>
    </nav>`;
    }
}


customElements.define('navbar-component', Navbar); // Register the custom element

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML += `
    <div class="container footer">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span class="text">2024 RoboCats</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="link-light" href="https://www.instagram.com/4198robocatsofficial" target="_blank"><i
                    class="fa fa-instagram"></i></a></li>
                <li class="ms-3"><a class="link-light" href="https://twitter.com/robocats_4198" target="_blank"><i class="fa fa-twitter"></i></a>
                <li class="ms-3"><a class="link-light" href="https://www.facebook.com/RoboCats4198" target="_blank"><i class="fa fa-facebook"></i></a>
                <li class="ms-3"><a class="link-light" href="https://github.com/4198-Programmers" target="_blank"><i class="fa fa-github"></i></a>
                <li class="ms-3"><a class="link-light" href="https://www.youtube.com/@RoboCats4198/featured" target="_blank"><i class="fa fa-youtube"></i></a>
                <li class="ms-3"><a class="link-light" href="https://www.tiktok.com/@team4198" target="_blank"><img src="/Source/Photos/tiktok.svg" width="10em" /></a></li>
                <li class="ms-3"><a href="https://www.thebluealliance.com/team/4198/" target="_blank"> <img src="/Source/Photos/tba.png" width="10em" /></a></li>
                <!-- https://www.youtube.com/@RoboCats4198/featured -->
            </ul>
        </footer>
    </div>`;
    }
}

customElements.define('footer-component', Footer); // Register the custom element

class HeadContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML += `
    <link rel="shortcut icon" href="/Source/ROBOCATICON.svg" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="./style.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <meta property="og:title" content="RoboCats 4198">
    <meta property="og:description"
        content="The RoboCats are a FIRST Robotics High School Competition Team, Team 4198 from Waconia, Minnesota.">
    <meta property="og:url" content="https://www.team4198.org">
    <meta data-react-helmet="true" name="theme-color" content="#1c6db">
    <meta property="og:image"
        content="https://raw.githubusercontent.com/4198-Programmers/4198-webpage/main/ROBOCATICON.svg">
    <meta content="#7325a3" name="theme-color" />
    <meta name="darkreader-lock">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins">`;
    }
}

customElements.define('head-component', HeadContent); // Register the custom element