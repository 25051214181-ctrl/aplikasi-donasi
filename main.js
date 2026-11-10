// ==========================================
// UTAMA MODULE (Beranda, Detail Donasi, Nominal Donasi)
// ==========================================

// Format otomatis nominal rupiah saat mengetik (untuk nominaldonasi.html)
function formatCurrency(input) {
  let value = input.value.replace(/\D/g, "");
  if (value) {
    input.value = parseInt(value, 10).toLocaleString("id-ID");
  } else {
    input.value = "";
  }
}

// Fungsi tombol nominal cepat / chip
function setNominal(val) {
  const input = document.getElementById("nominalInput");
  if (input) {
    input.value = val.toLocaleString("id-ID");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Handling Submit Donasi
  const donationForm = document.querySelector(".donation-form");
  if (donationForm) {
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nominalInput = document.getElementById("nominalInput");
      const nominalVal = nominalInput ? nominalInput.value.replace(/\D/g, "") : 0;
      const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value;

      if (!nominalVal || parseInt(nominalVal, 10) <= 0) {
        alert("Masukkan nominal donasi yang valid!");
        return;
      }

      if (!paymentMethod) {
        alert("Pilih metode pembayaran terlebih dahulu!");
        return;
      }

      alert(`Terima kasih! Donasi sebesar Rp ${parseInt(nominalVal, 10).toLocaleString("id-ID")} via ${paymentMethod.toUpperCase()} berhasil dikirim.`);
      window.location.href = "Beranda.html";
    });
  }
});