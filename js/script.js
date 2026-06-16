document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('membershipForm');

  // Validasi form
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const gender = document.getElementById('gender').value;
      const dob = document.getElementById('dob').value;
      const password = document.getElementById('password').value;
      const agree = document.getElementById('agree').checked;

      if (name === '') {
        alert('Name is required.');
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
      }
      if (gender === '') {
        alert('Please select your gender.');
        return;
      }
      if (dob === '') {
        alert('Date of birth is required.');
        return;
      }
      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
      if (!agree) {
        alert('You must agree to the terms and conditions.');
        return;
      }

      alert('Membership form submitted successfully!');
      form.reset();
    });
  }

  // Filter produk berdasarkan kategori
  const filter = document.getElementById("filter");
  const cards = document.querySelectorAll(".product-card");

  if (filter) {
    filter.addEventListener("change", function () {
      const selectedCategory = this.value;

      cards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (selectedCategory === "all" || category === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
