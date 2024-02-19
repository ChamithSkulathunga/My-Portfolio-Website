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
showMenu('navtoggle','navmenu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('navmenu')
    // When we click on each navLink, we remove the show-menu class
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
              sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('activeLink')
        }else{
            sectionsClass.classList.remove('activeLink')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.homeData, .aboutImg, .skillsSubtitle, .skillsText',{}); 
sr.reveal('.homeImg, .aboutSubtitle, .aboutText, .skillsImg',{delay: 400}); 
sr.reveal('.homeSocialIcon',{ interval: 200}); 
sr.reveal('.skillsData, .workImg, .contactInput',{interval: 200}); 