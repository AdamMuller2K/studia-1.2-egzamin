document.addEventListener("DOMContentLoaded", function () {
  const elementyFaq = document.querySelectorAll(".element-faq");

  elementyFaq.forEach((element) => {
    const podsumowanie = element.querySelector("summary");

    podsumowanie.addEventListener("click", function (e) {
      e.preventDefault();

      if (!element.open) {
        elementyFaq.forEach((innyElement) => {
          if (innyElement !== element && innyElement.open) {
            innyElement.open = false;
          }
        });
      }

      element.open = !element.open;

      const ikona = this.querySelector("i");
      if (element.open) {
        ikona.style.transform = "rotate(180deg)";
      } else {
        ikona.style.transform = "rotate(0deg)";
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((kotwica) => {
    kotwica.addEventListener("click", function (e) {
      e.preventDefault();

      const celId = this.getAttribute("href");
      if (celId === "#") return;

      const elementCel = document.querySelector(celId);
      if (elementCel) {
        window.scrollTo({
          top: elementCel.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const formularzNewslettera = document.getElementById("formularz-newslettera");
  if (formularzNewslettera) {
    formularzNewslettera.addEventListener("submit", function (e) {
      e.preventDefault();

      const poleImienia = document.getElementById("pole-imienia");
      const poleEmail = document.getElementById("pole-email");
      const checkbox = document.getElementById("checkbox-regulamin");

      if (!poleImienia.value.trim()) {
        alert("Proszę podać imię");
        poleImienia.focus();
        return;
      }

      if (!poleEmail.value.trim() || !poleEmail.value.includes("@")) {
        alert("Proszę podać prawidłowy adres email");
        poleEmail.focus();
        return;
      }

      if (!checkbox.checked) {
        alert("Proszę zaakceptować regulamin");
        return;
      }

      const przyciskWyslij = this.querySelector(".przycisk");
      const oryginalnyTekst = przyciskWyslij.innerHTML;

      przyciskWyslij.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Wysyłanie...';
      przyciskWyslij.disabled = true;

      setTimeout(() => {
        alert(
          "Dziękujemy za zapisanie się do newslettera! Otrzymasz od nas wiadomość z potwierdzeniem. No może ;p"
        );
        this.reset();
        przyciskWyslij.innerHTML = oryginalnyTekst;
        przyciskWyslij.disabled = false;

        localStorage.setItem("newsletterSubscribed", "true");
      }, 1500);
    });
  }

  const ikonySocial = document.querySelectorAll(".ikona-social");
  ikonySocial.forEach((ikona) => {
    ikona.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.3)";
    });

    ikona.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  window.addEventListener("scroll", function () {
    const naglowek = document.querySelector("header");
    const pozycjaPrzewijania = window.scrollY;

    if (pozycjaPrzewijania > 50) {
      naglowek.style.backgroundColor = "rgba(139, 69, 19, 0.95)";
    } else {
      naglowek.style.backgroundColor = "";
    }
  });
  const linkiNawigacji = document.querySelectorAll(".glowna-nawigacja a");
  linkiNawigacji.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        history.pushState(null, null, href);
      }
    });
  });
});
