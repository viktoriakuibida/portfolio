/* ===============================
   SIDE NAV – SCROLL SPY
=============================== */

const sections = document.querySelectorAll(
    "#hero, #projects, #about, #contact"
  );
  const navLinks = document.querySelectorAll(".side-nav a");
  
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // fjern active fra alle links
          navLinks.forEach(link => link.classList.remove("active"));
  
          // find det link der matcher sektionen
          const activeLink = document.querySelector(
            `.side-nav a[data-section="${entry.target.id}"]`
          );
  
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px"
    }
  );
  
  sections.forEach(section => observer.observe(section));
  

/* ===============================
   HERO – TYPING EFFECT
=============================== */

const text = "det er mig";
const typingTarget = document.getElementById("typing-text");
const arrow = document.querySelector(".intro-arrow");
let index = 0;
let deleting = false;

function typeLoop() {
  if (!typingTarget) return;

  if (!deleting && index < text.length) {
    typingTarget.textContent += text[index++];
    setTimeout(typeLoop, 120);
  } else if (!deleting) {
    arrow.style.opacity = 1;
    deleting = true;
    setTimeout(typeLoop, 1200);
  } else if (index > 0) {
    typingTarget.textContent = text.slice(0, --index);
    setTimeout(typeLoop, 80);
  } else {
    deleting = false;
    arrow.style.opacity = 0;
    setTimeout(typeLoop, 600);
  }
}

window.addEventListener("load", typeLoop);

/* ===============================
   PROJECT MODALS
=============================== */

const cards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".project-modal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById(card.dataset.project)?.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

modals.forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target.classList.contains("modal-overlay") ||
        e.target.classList.contains("modal-close")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modals.forEach(m => m.classList.remove("active"));
    document.body.style.overflow = "";
  }
});

/* ===============================
   VIDEO PLAY / PAUSE – KORREKT VERSION
=============================== */

document.querySelectorAll(".video-wrapper").forEach(wrapper => {
    const video = wrapper.querySelector("video");
    const button = wrapper.querySelector(".video-toggle");
  
    if (!video || !button) return;
  
    button.addEventListener("click", async (e) => {
      e.stopPropagation();
  
      if (video.paused || video.ended) {
        try {
          await video.play();
          wrapper.classList.add("playing");
          button.textContent = "❚❚";
        } catch (err) {
          console.warn("Kunne ikke afspille video:", err);
        }
      } else {
        video.pause();
      }
    });
  
    video.addEventListener("pause", () => {
      wrapper.classList.remove("playing");
      button.textContent = "▶";
    });
  
    video.addEventListener("ended", () => {
      wrapper.classList.remove("playing");
      button.textContent = "▶";
    });
  });
  
  /* =========================================
  KONTAKT TEKST TYPING
  ============================================*/
  const contactText = "følg med her";
const contactTarget = document.getElementById("contact-typing");
const contactArrow = document.querySelector(".contact-hint-arrow");

let contactIndex = 0;
let contactDeleting = false;

function contactTypeLoop() {
  if (!contactTarget) return;

  if (!contactDeleting && contactIndex < contactText.length) {
    contactTarget.textContent += contactText[contactIndex++];
    setTimeout(contactTypeLoop, 120);
  } else if (!contactDeleting) {
    contactArrow.style.opacity = 1;
    contactDeleting = true;
    setTimeout(contactTypeLoop, 1400);
  } else if (contactIndex > 0) {
    contactTarget.textContent = contactText.slice(0, --contactIndex);
    setTimeout(contactTypeLoop, 80);
  } else {
    contactDeleting = false;
    contactArrow.style.opacity = 0;
    setTimeout(contactTypeLoop, 800);
  }
}

window.addEventListener("load", contactTypeLoop);
