const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const form = document.getElementById("MyForm");
const NamaInput = document.getElementById('nama');
const EmailInput = document.getElementById('email');
const PesanInput = document.getElementById('pesan');
const NamaError = document.getElementById('namaError');
const EmailError = document.getElementById('emailError');
const PesanError = document.getElementById('pesanError');

form.addEventListener("submit", function(event) {
    event.preventDefault()

    NamaError, EmailError, PesanError.innerText = "";

    if (NamaInput.value.trim() === "") {
        NamaError.innerText = "Nama Tidak Boleh Kosong.";
    }

    if (EmailInput.value.trim() === "") {
        EmailError.innerText = "Email Tidak Boleh Kosong.";
    } else if (!emailPattern.test(EmailInput.value.trim())) {
        EmailError.innerText = "Format Email Salah.";
    }

    if (PesanInput.value.trim() === "") {
        PesanError.innerText = "Pesan Tidak Boleh Kosong.";
    }
});


