// ==========================================
// PROFIL & LOGOUT MODULE (Profil & Edit Profil)
// ==========================================

// Fungsi Modal Logout
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("active");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("active");
}

function switchModal(closeId, openId) {
  closeModal(closeId);
  openModal(openId);
}

document.addEventListener("DOMContentLoaded", () => {
  // Fitur Tambah Email di Edit Profil
  const btnAddEmail = document.querySelector(".btn-add-email");
  if (btnAddEmail) {
    btnAddEmail.addEventListener("click", () => {
      const newEmail = prompt("Masukkan alamat email tambahan:");
      if (newEmail && newEmail.includes("@")) {
        const badgeCard = document.createElement("div");
        badgeCard.className = "email-badge-card";
        badgeCard.innerHTML = `
          <div class="email-icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="email-details">
            <span class="email-text">${newEmail}</span>
            <span class="email-time">Baru saja</span>
          </div>
        `;
        btnAddEmail.parentNode.insertBefore(badgeCard, btnAddEmail);
      } else if (newEmail) {
        alert("Format email tidak valid!");
      }
    });
  }

  // Handling Form Simpan Perubahan Profil
  const editProfileForm = document.querySelector('.profile-card form[action="profil.html"]');
  if (editProfileForm) {
    editProfileForm.addEventListener("submit", () => {
      alert("Perubahan profil berhasil disimpan!");
    });
  }
});