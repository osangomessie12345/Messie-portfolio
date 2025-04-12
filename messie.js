    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }
    };
    showMenu('jinwoo','satoru');

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction(){
        const navMenu = document.getElementById('satoru');
        navMenu.classList.remove('show');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', scrollActive);
    function scrollActive(){
        const scrollY = window.pageYOffset;
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.satoru a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
