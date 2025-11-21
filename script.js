document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            header.classList.add('-translate-y-full');
        } else if (scrollTop < lastScrollTop) {
            header.classList.remove('-translate-y-full');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });


    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    
    const privacyModal = document.getElementById('privacy-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    openModalBtn.addEventListener('click', () => {
        privacyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        privacyModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !privacyModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
});