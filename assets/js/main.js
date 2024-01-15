/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const typedTextElement = document.getElementById('typed-text');
            const textArray = ['a Python Developer'];
            let index = 0;
            let charIndex = 0;

            function type() {
                if (charIndex < textArray[index].length) {
                    typedTextElement.textContent += textArray[index].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 100); // Adjust the typing speed here
                } else {
                    setTimeout(erase, 1500); // Wait for a moment before erasing
                }
            }

            function erase() {
                if (charIndex > 0) {
                    typedTextElement.textContent = textArray[index].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, 50); // Adjust the erasing speed here
                } else {
                    index = (index + 1) % textArray.length;
                    setTimeout(type, 500); // Wait before typing the next text
                }
            }

            document.addEventListener('DOMContentLoaded', function () {
                setTimeout(type, 1000); // Wait for a moment before starting typing
            });





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
