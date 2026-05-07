let lastScrollY=window.pageYOffset;
const header=document.querySelector('header');

if (header) {
    window.addEventListener('scroll', ()=> {
            const currentScrollY=window.pageYOffset; if (currentScrollY > lastScrollY && currentScrollY > 60) {
                header.classList.add('hidden');
            }

            else {
                header.classList.remove('hidden');
            }

            lastScrollY=currentScrollY;
        });
}