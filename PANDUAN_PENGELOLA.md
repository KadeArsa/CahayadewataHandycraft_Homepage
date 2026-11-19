# Panduan Praktis Pengelolaan Website Cahaya Dewata Handycraft

Website ini dirancang sederhana, ringan, dan tanpa dasbor rumit agar pengelola UMKM Cahaya Dewata Handycraft dapat memperbarui kontak serta koleksi foto secara mandiri.

---

## 1. Cara Membuka Website di Komputer

Cukup buka folder proyek ini dan klik dua kali file `index.html`. Website akan langsung terbuka di browser (Chrome, Edge, Safari, atau Firefox).

---

## 2. Cara Mengganti Nomor WhatsApp Pemilik

1. Buka file `js/data.js` menggunakan Notepad, VS Code, atau editor teks lainnya.
2. Pada bagian atas (`SITE_CONFIG`), ubah dua baris berikut dengan nomor WhatsApp asli pemilik:

```javascript
whatsappNumber: "6281234567890", // Format: 62 diikuti nomor tanpa angka 0 di depan
phoneDisplay: "+62 812-3456-7890", // Format tampilan yang dibaca pengunjung
```

3. Simpan file (`Ctrl + S`) lalu muat ulang (*refresh*) halaman browser. Seluruh tombol WhatsApp (di menu atas, beranda, galeri, formulir pesan cepat, dan tombol melayang) akan otomatis terhubung ke nomor baru tersebut.

---

## 3. Cara Menambah Foto Koleksi Karya Baru

Untuk menambah foto baru (misalnya melengkapi target hingga 25+ foto koleksi):

1. Salin file foto baru ke dalam folder `img/` (contoh: `kalung-tulang-bali.jpg`).
2. Buka file `js/data.js` dan cari bagian `const GALLERY_ITEMS = [ ... ];`.
3. Tambahkan blok baru di bagian paling bawah sebelum tanda `];`:

```javascript
  {
    id: 15,
    category: "miniatur", // Pilihan: 'tengkorak', 'dekorasi', 'miniatur', atau 'proses'
    image: "img/kalung-tulang-bali.jpg",
    titleId: "Kalung Liontin Ukir Tulang Khas Bali",
    titleEn: "Hand-Carved Balinese Bone Pendant Necklace",
    materialId: "Tulang Olahan Alami",
    materialEn: "Natural Carved Bone",
    descId: "Kalung etnik berbahan potongan tulang alami yang diukir halus oleh pengrajin Tampaksiring.",
    descEn: "Ethnic pendant handcrafted from natural upcycled bone by Tampaksiring artisans."
  }
```

4. Simpan file (`Ctrl + S`) dan *refresh* browser. Foto baru otomatis muncul di galeri beserta fitur pembesaran (*lightbox*) dan tombol tanya via WhatsApp!

---

## 4. Cara Menayangkan Website ke Internet (Gratis)

Karena website ini menggunakan HTML, CSS, dan JavaScript statis tanpa server rumit, Anda dapat menayangkannya secara gratis melalui:
- **GitHub Pages**: Unggah seluruh folder ini ke repositori GitHub lalu aktifkan *Pages*.
- **Netlify Drop**: Kunjungi [app.netlify.com/drop](https://app.netlify.com/drop), lalu seret (*drag & drop*) folder `CahayadewataHandycraft` ke layar.

---

*Disusun dalam rangka Program Pengabdian Masyarakat — Magister Informatika (Data Science Specialist), Institut Bisnis dan Teknologi Indonesia (INSTIKI) 2026.*

