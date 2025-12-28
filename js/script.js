// for nav link active
  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();

  // Select all navbar links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    // Check if link href matches current page
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });



// Enable dropdown on hover for larger screens
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".navbar .dropdown");

    if (window.innerWidth > 970) {
      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
          const menu = this.querySelector(".dropdown-menu");
          const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector(".dropdown-toggle"));
          bsDropdown.show();
        });

        dropdown.addEventListener("mouseleave", function () {
          const menu = this.querySelector(".dropdown-menu");
          const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector(".dropdown-toggle"));
          bsDropdown.hide();
        });
      });
    }
  });

document.getElementById("footerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const f_emailInput = document.getElementById("footerEmail");
  const f_msg = document.getElementById("footerMsg");
  const f_emailPattern = /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (!f_emailPattern.test(f_emailInput.value.trim())) {
    f_msg.textContent = "❌ Please enter a valid email address.";
    f_msg.style.color = "red";
    f_emailInput.classList.add("is-invalid");  // Bootstrap class
    f_emailInput.classList.remove("is-valid");
  } else {
    f_msg.textContent = "✅ Thank you for subscribing!";
    f_msg.style.color = "limegreen";
    f_emailInput.classList.remove("is-invalid");
    f_emailInput.classList.add("is-valid");
    f_emailInput.value = ""; // clear field

    setTimeout(() => {
      f_msg.textContent = "";
      f_emailInput.classList.remove("is-valid");
    }, 3000);
  }
});

    // <!-- <script src="https://unpkg.com/aos@next/dist/aos.js">// can't run without internet
    // </script> -->bootstrap
    //    <!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js"></script> -->