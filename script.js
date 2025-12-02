/* --------------------------------------------------
   Mobile Navigation
-------------------------------------------------- */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
  });
}

if (mobileClose) {
  mobileClose.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
}

/* close mobile nav on link click */
document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
});

/* --------------------------------------------------
   Smooth Scroll (Desktop)
-------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href.startsWith("#")) return;

    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* --------------------------------------------------
   Profile Image Expand
-------------------------------------------------- */
const profilePhoto = document.getElementById('profilePhoto');
if (profilePhoto) {
  profilePhoto.addEventListener('click', () => {
    profilePhoto.classList.toggle('profile-photo-expanded');
  });
}

/* --------------------------------------------------
   Swipers
-------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  /* Project Swiper */
  new Swiper('.project-swiper', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2.2 }
    },
    pagination: { el: '.project-swiper .swiper-pagination', clickable: true }
  });

  /* Streamlit Swiper + Smart Autoplay */
  const streamlitSwiper = new Swiper('.streamlit-swiper', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    breakpoints: {
      768: { slidesPerView: 2 }
    },
    pagination: { el: '.streamlit-swiper .swiper-pagination', clickable: true },
    on: {
      init: function () {
        handleSmartAutoplay(this);
      },
      slideChange: function () {
        handleSmartAutoplay(this);
      }
    }
  });

  function handleSmartAutoplay(swiper) {
    swiper.slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (!video) return;

      if (index === swiper.activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  /* Machine Learning Swiper */
  new Swiper('.ml-swiper', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2.2 }
    },
    pagination: { el: '.ml-swiper .swiper-pagination', clickable: true }
  });

});

/* --------------------------------------------------
   Fade-in on Scroll
-------------------------------------------------- */
const fadeElements = document.querySelectorAll('.fade-section, .fade-card');

const fadeObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('fade-visible');
    }
  });
},{ threshold: 0.2 });

fadeElements.forEach(el => fadeObserver.observe(el));

/* --------------------------------------------------
   Contact form (demo)
-------------------------------------------------- */
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks ${name}, your message has been received.`);
  e.target.reset();
}
/* NEW — Safe Autoplay Fallback for Portfolio Video */
document.addEventListener("DOMContentLoaded", () => {
  const pv = document.querySelector(".portfolio-video");
  if (pv) {
    pv.play().catch(() => {
      pv.muted = true;
      pv.play().catch(()=>{});
    });
  }
});
/* Finance Project Video Play-Fix */
document.addEventListener("DOMContentLoaded", () => {
  const fp = document.querySelector(".finance-project-video");
  if (fp) {
    fp.addEventListener("play", () => {
      fp.muted = false; // enable audio when user interacts
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const sun = document.querySelector(".sun-3d");
  const orbits = document.querySelectorAll(".planet-orbit");

  // Fade in sun
  sun.style.transition = "opacity 1s ease, transform 0.8s ease";
  sun.style.opacity = 1;
  sun.style.transform += " scale(1.03)";

  // Fade in planets one-by-one
  orbits.forEach((orbit, index) => {
    setTimeout(() => {
      orbit.style.transition = "opacity 1.2s ease";
      orbit.style.opacity = 1;
    }, 300 + index * 250);
  });
});



