// ==========================================
// AUTHENTICATION MODULE (Login, Register, Lupa Password)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Handling Validasi Form Login
  const loginForm = document.querySelector('.auth-card form[action="Beranda.html"]');
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      const email = document.getElementById("email")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!email || !password) {
        e.preventDefault();
        alert("Harap isi Email dan Password!");
      }
    });
  }

  // 2. Handling Form Register & Lupa Password
  const authForm = document.querySelector('.auth-card form[action="loginrev.html"]');
  const namaInput = document.getElementById("nama");

  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      const email = document.getElementById("email")?.value.trim();

      // Jika Form Register (ada input nama)
      if (namaInput) {
        const nama = namaInput.value.trim();
        const password = document.getElementById("password")?.value.trim();

        if (!nama || !email || !password) {
          e.preventDefault();
          alert("Harap lengkapi seluruh data pendaftaran!");
          return;
        }
        alert("Pendaftaran berhasil! Silakan login.");
      } 
      // Jika Form Lupa Password
      else {
        if (!email) {
          e.preventDefault();
          alert("Masukkan email terdaftar Anda!");
          return;
        }
        alert(`Link reset password telah dikirim ke: ${email}`);
      }
    });
  }
});