/**
 * ============================================================================
 * PENGATURAN UTAMA & DATA WEBSITE — CAHAYA DEWATA HANDYCRAFT
 * ============================================================================
 * Panduan singkat untuk pengelola UMKM:
 * 1. Untuk mengganti nomor WhatsApp pemilik, ubah nilai `whatsappNumber` di bawah
 *    (gunakan format kode negara 62 tanpa tanda + atau 0 di depan).
 * 2. Untuk menambah foto koleksi baru, cukup salin foto ke folder `img/`,
 *    lalu tambahkan 1 blok data baru pada bagian `GALLERY_ITEMS` di bawah.
 * ============================================================================
 */

const SITE_CONFIG = {
  brandName: "Cahaya Dewata Handycraft",
  taglineId: "Seni Ukir Tulang & Tanduk Warisan Tampaksiring, Bali",
  taglineEn: "Hand-Carved Bone & Horn Artistry from Tampaksiring, Bali",

  // Ganti dengan nomor WhatsApp aktif pemilik Cahaya Dewata Handycraft (format: 628xxxxxxxxxx)
  whatsappNumber: "6281234567890",
  phoneDisplay: "+62 812-3456-7890",

  address: "Banjar Manukaya Anyar, Desa Manukaya, Kec. Tampaksiring, Kab. Gianyar, Bali 80552",
  hoursId: "Senin – Minggu, 08.00 – 17.00 WITA",
  hoursEn: "Monday – Sunday, 08:00 – 17:00 WITA",

  googleMapsShortUrl: "https://maps.app.goo.gl/JjGqsTJ8bU31KqoF8",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=-8.4080272,115.3135591&hl=id&z=16&output=embed",
  coordinates: "-8.4080272, 115.3135591",

  defaultWaMessageId:
    "Halo Cahaya Dewata Handycraft, saya tertarik dengan karya ukiran tulang dan tanduk dari Tampaksiring. Boleh saya berdiskusi mengenai produk atau pemesanan?",
  defaultWaMessageEn:
    "Hello Cahaya Dewata Handycraft, I am interested in your hand-carved bone and horn artworks from Tampaksiring, Bali. Could we discuss available pieces or custom orders?"
};

/**
 * 6 TAHAPAN PROSES PEMBUATAN (Sesuai Proposal Pengabdian Masyarakat)
 */
const PROCESS_STEPS = [
  {
    step: "01",
    image:
      "img/ANWiy9T8S9el4moKz24yJPfvqJJV_ZrlSooamjeqIr9VOzzLhr2gvt2Y85CrSXjXBZ4_o6P9xz6rdnNnRrt6fPvwf5ww9f3phFIkqcjV51DOoZc3D95Hv-aadA2n-k9oLHGWm6Xp-Zcw4032-h3024-k-no.jpg",
    titleId: "Pengumpulan Limbah Tulang & Tanduk",
    titleEn: "Ethical Raw Material Collection",
    descId:
      "Bahan baku berupa limbah tulang dan tanduk hewan ternak yang tidak terpakai dikumpulkan secara bertanggung jawab. Setiap potongan dipilih berdasarkan kekuatan struktur dan karakter alaminya sehingga limbah dapat terlahir kembali menjadi karya seni.",
    descEn:
      "Discarded livestock bones and horns are responsibly gathered from local by-product sources. Each piece is carefully selected for structural strength and natural form, giving waste a second life as heirloom art."
  },
  {
    step: "02",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29 (1).jpeg",
    titleId: "Pembersihan dengan Perebusan",
    titleEn: "Hygienic Boiling & Cleaning",
    descId:
      "Tulang dan tanduk direbus serta dibersihkan secara menyeluruh untuk menghilangkan seluruh sisa organik, lemak, dan bau alami. Proses higienis ini menghasilkan bahan baku yang bersih, putih alami, serta aman dipajang di dalam ruangan.",
    descEn:
      "Bones and horns undergo thorough boiling and manual cleaning to remove all organic residue, oils, and natural odor. This hygienic preparation produces clean, ivory-toned material safe for indoor display."
  },
  {
    step: "03",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29 (2).jpeg",
    titleId: "Pengeringan & Pemilihan Struktur",
    titleEn: "Sun Drying & Structural Preparation",
    descId:
      "Tulang dikeringkan di bawah sinar matahari Bali hingga kadar airnya seimbang dan siap dipahat tanpa retak. Ke depan, bengkel kerja juga merencanakan pembaruan teknologi pengeringan terukur agar proses tetap optimal di segala musim.",
    descEn:
      "Pieces are naturally sun-dried under the Balinese sun until moisture stabilizes for crack-free carving. Moving forward, the workshop plans to introduce controlled drying technology to maintain consistent quality year-round.",
    badgeId: "Rencana Pembaruan Teknologi Pengeringan",
    badgeEn: "Future Upgrade: Controlled Drying Tech"
  },
  {
    step: "04",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.28.jpeg",
    titleId: "Pengukiran Motif Tradisional Bali",
    titleEn: "Traditional Balinese Hand Carving",
    descId:
      "Pengrajin terlebih dahulu menggambar sketsa motif khas Bali—seperti Barong, Patra, Mandala, hingga kaligrafi khusus—lalu memahatnya secara teliti dengan tangan. Tahap ini memadukan ketekunan, rasa seni, dan warisan budaya Tampaksiring.",
    descEn:
      "Artisans first sketch traditional Balinese ornaments—including Barong, Patra scrollwork, Mandala, or custom calligraphy—before intricately hand-carving every curve with patience and cultural mastery."
  },
  {
    step: "05",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29 (4).jpeg",
    titleId: "Penghalusan Akhir (Finishing)",
    titleEn: "Sanding, Staining & Finishing",
    descId:
      "Karya yang telah diukir kemudian dihaluskan, diberi sentuhan warna alami (putih tulang natural, cokelat antik, atau hitam elegan), dipadukan dengan tanduk yang telah dipoles, serta dilapisi pelindung agar detail pahatan awet bertahun-tahun.",
    descEn:
      "Carved artworks are finely sanded, finished in natural ivory, antique patina, or matte black tones, paired with polished horns, and sealed to protect the intricate relief for generations."
  },
  {
    step: "06",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30 (2).jpeg",
    titleId: "Pengemasan Aman Lokal & Ekspor",
    titleEn: "Export-Grade Safe Packaging",
    descId:
      "Setiap karya diperiksa kualitasnya lalu dikemas dengan pelindung berlapis dan penanda fragile yang kokoh. Standar pengemasan ini menjaga ukiran tiba dengan utuh ke tangan kolektor di dalam negeri maupun pasar ekspor mancanegara.",
    descEn:
      "Each finished sculpture passes quality inspection and is securely packed with multi-layer fragile cushioning, ensuring safe arrival for collectors across Indonesia and international export destinations."
  }
];

/**
 * PENGENALAN JENIS TULANG & TANDUK (Minimal 3 Kategori — Disajikan 4 Kategori Utama)
 */
const BONE_TYPES = [
  {
    id: "sapi",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.31 (1).jpeg",
    tagId: "Kategori 01 • Paling Populer",
    tagEn: "Category 01 • Most Popular",
    titleId: "Tulang & Tengkorak Sapi",
    titleEn: "Cow Skull & Bone",
    characterId: "Permukaan lebar, serat padat, warna gading alami",
    characterEn: "Broad canvas, dense grain, natural ivory tone",
    descId:
      "Berasal dari limbah ternak sapi yang telah dibersihkan secara higienis. Bidang tulangnya yang luas dan kokoh sangat ideal untuk pahatan rumit bermotif Barong Bali, Patra, dan Mandala baik dalam tampilan putih alami, cokelat antik, maupun hitam matte.",
    descEn:
      "Ethically salvaged livestock by-product cleaned to hygienic perfection. Its broad, sturdy surface provides an ideal canvas for elaborate Barong Bali, Patra, and Mandala reliefs in natural ivory, antique brown, or matte black.",
    usesId: ["Hiasan Dinding Besar", "Ukiran Motif Barong", "Dekorasi Vila & Hotel"],
    usesEn: ["Statement Wall Art", "Barong Relief Carvings", "Villa & Resort Decor"]
  },
  {
    id: "kerbau",
    image:
      "img/AABkmLdRwIFxWWyeNl2ZlvfRVtOriVjwG6GpqTARrEQ0u1FBafcxXBL_W4wqH0m2SoqYw1SZBAMYJII8HVtGMIECUc_vZ2QqudtxmMEGcuf_LIV8SHXlbwsuBmgzMxc8gZSRX1cq_0tyw4032-h3024-k-no.jpg",
    tagId: "Kategori 02 • Mahakarya & Tanduk",
    tagEn: "Category 02 • Masterpiece & Horn",
    titleId: "Tengkorak & Tanduk Kerbau",
    titleEn: "Buffalo Skull & Dark Horn",
    characterId: "Tanduk melengkung megah, hitam alami mengilap, sangat kuat",
    characterEn: "Majestic curved horns, naturally glossy ebony, ultra-durable",
    descId:
      "Tengkorak kerbau memiliki rentang tanduk yang gagah dan berwibawa untuk karya koleksi kelas ekspor serta ukiran kaligrafi beraksen emas. Sementara bagian tanduknya yang pekat dapat diukir menjadi miniatur patung Ganesha, perhiasan, dan hiasan meja.",
    descEn:
      "Buffalo skulls boast a commanding horn span prized for export masterpieces and gold-accented calligraphy. Solid dark horn segments are also carved into finely detailed Ganesha miniatures, pendants, and tabletop sculptures.",
    usesId: ["Ukiran Tanduk Panjang", "Miniatur Patung Tanduk", "Karya Koleksi Custom"],
    usesEn: ["Longhorn Wall Sculptures", "Horn Miniatures", "Bespoke Collector Pieces"]
  },
  {
    id: "domba",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30 (1).jpeg",
    tagId: "Kategori 03 • Artistik & Spiral",
    tagEn: "Category 03 • Artistic Spiral",
    titleId: "Tulang & Tanduk Domba / Kambing",
    titleEn: "Ram & Goat Skull",
    characterId: "Ukuran ringkas, tanduk melingkar alami, berkarakter hangat",
    characterEn: "Compact form, natural spiral horns, warm organic character",
    descId:
      "Memiliki lengkungan tanduk spiral yang unik dan bobot yang lebih ringan sehingga mudah dipasang di berbagai ruang interior. Pengrajin kerap menghiasinya dengan ukiran geometris, bunga teratai, hingga ornamen tradisional Bali bernuansa antik.",
    descEn:
      "Distinguished by sculptural spiral horns and a lighter silhouette that fits effortlessly into modern or bohemian interiors. Artisans adorn both skull and horns with geometric, lotus, and antique Balinese motifs.",
    usesId: ["Dekorasi Ruang Tamu", "Ukiran Motif Geometris", "Cendera Mata Eksklusif"],
    usesEn: ["Living Room Accents", "Geometric Motif Carvings", "Exclusive Keepsakes"]
  },
  {
    id: "olahan",
    image:
      "img/ANWiy9TQnUwhDHLSIMBpkoMjzn0nF-_7c8GT4clKdbgEQG1jCdjwDm421aRNBO3L7aOG0Upne9UdfG2voLchzJ2xyEGmvjF49riwhD2kQgwYGmxcRcX84ZQHsSi1SqxgCSOE9l2pu1kzaB5P7M1Aw2160-h3840-k-no.jpg",
    tagId: "Kategori 04 • Zero-Waste Craft",
    tagEn: "Category 04 • Zero-Waste Craft",
    titleId: "Potongan Tulang & Tanduk Olahan",
    titleEn: "Crafted Bone & Horn Pieces",
    characterId: "Memanfaatkan setiap potongan kecil tanpa menyisakan limbah",
    characterEn: "Every small offcut transformed with zero wasted material",
    descId:
      "Potongan tulang dan tanduk berukuran kecil diolah penuh ketelitian menjadi kalung etnik, liontin, gantungan kunci, mainan unik, hingga miniatur patung karakter Bali. Bukti nyata prinsip keberlanjutan di mana setiap bagian alam dihargai.",
    descEn:
      "Smaller cuts of bone and horn are lovingly shaped into ethnic necklaces, pendants, charms, handcrafted toys, and pocket-sized Balinese figurines—honoring our zero-waste sustainability ethos.",
    usesId: ["Kalung & Liontin Etnik", "Miniatur & Mainan", "Hiasan Meja & Souvenir"],
    usesEn: ["Ethnic Necklaces & Pendants", "Miniatures & Toys", "Desk Decor & Souvenirs"]
  }
];

/**
 * GALERI KOLEKSI KARYA CAHAYA DEWATA HANDYCRAFT
 * Kategori yang tersedia: 'tengkorak', 'dekorasi', 'miniatur', 'proses'
 */
const GALLERY_ITEMS = [
  {
    id: 1,
    category: "tengkorak",
    image:
      "img/AABkmLdRwIFxWWyeNl2ZlvfRVtOriVjwG6GpqTARrEQ0u1FBafcxXBL_W4wqH0m2SoqYw1SZBAMYJII8HVtGMIECUc_vZ2QqudtxmMEGcuf_LIV8SHXlbwsuBmgzMxc8gZSRX1cq_0tyw4032-h3024-k-no.jpg",
    titleId: "Ukiran Tengkorak Kerbau Motif Kaligrafi & Mandala Emas",
    titleEn: "Carved Buffalo Skull — Golden Calligraphy & Mandala",
    materialId: "Tengkorak & Tanduk Kerbau",
    materialEn: "Buffalo Skull & Carved Horns",
    descId:
      "Mahakarya hiasan dinding berukuran besar dengan pahatan medalion geometris pada tulang antik serta ukiran kaligrafi beraksen emas di kedua sisi tanduk hitam.",
    descEn:
      "A grand centerpiece combining an antique-stained geometric medallion on the skull with finely engraved gold-accented calligraphy across both carved black horns."
  },
  {
    id: 2,
    category: "tengkorak",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30 (3).jpeg",
    titleId: "Ukiran Tengkorak Sapi Motif Barong Bali",
    titleEn: "Hand-Carved Cow Skull — Traditional Balinese Barong",
    materialId: "Tengkorak Sapi Natural",
    materialEn: "Natural Ivory Cow Skull",
    descId:
      "Menampilkan sosok sakral Barong khas Bali yang dipahat langsung pada permukaan tulang putih alami, dikelilingi ornamen sulur patra yang halus dan dalam.",
    descEn:
      "Depicts the iconic Balinese guardian Barong carved directly into natural ivory bone, framed by deeply recessed traditional patra scrollwork."
  },
  {
    id: 3,
    category: "tengkorak",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.31 (1).jpeg",
    titleId: "Trio Tengkorak Sapi Tanduk Hitam — Natural & Antik",
    titleEn: "Cow Skull Trio with Polished Black Horns",
    materialId: "Tengkorak Sapi & Tanduk Poles",
    materialEn: "Cow Skull & Polished Horns",
    descId:
      "Pilihan warna finishing putih tulang alami dan cokelat antik bermotif mandala flora, dilengkapi tanduk hitam mengilap dan tali gantung anyaman tangan.",
    descEn:
      "Showcasing natural ivory and antique-brown mandala finishes paired with sleek polished black horns and hand-braided hanging cords."
  },
  {
    id: 4,
    category: "tengkorak",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30 (1).jpeg",
    titleId: "Ukiran Tengkorak Domba Motif Geometris & Flora Antik",
    titleEn: "Antique Carved Ram Skull — Geometric & Floral Relief",
    materialId: "Tengkorak & Tanduk Domba",
    materialEn: "Ram Skull & Spiral Horns",
    descId:
      "Detail pahatan rapat bermotif belah ketupat dan bunga Bali yang menyatu hingga ke seluruh lengkungan tanduk, diberi pewarnaan cokelat antik yang hangat.",
    descEn:
      "Dense diamond-geometric and Balinese floral carving extending seamlessly across the spiral horns, finished in a warm antique patina."
  },
  {
    id: 5,
    category: "dekorasi",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30 (2).jpeg",
    titleId: "Seri Koleksi Tengkorak Domba Siap Ekspor",
    titleEn: "Export-Ready Carved Ram Skull Series",
    materialId: "Tengkorak Domba Finishing Antik",
    materialEn: "Antique-Finished Ram Skulls",
    descId:
      "Tiga varian motif berbeda—Patra Bali, Teratai, dan Geometris—yang telah selesai diukir dan siap dikemas aman untuk pengiriman lokal maupun mancanegara.",
    descEn:
      "Three distinct motif editions—Balinese Patra, Lotus, and Geometric—completed and staged for secure domestic and international shipping."
  },
  {
    id: 6,
    category: "miniatur",
    image:
      "img/ANWiy9TQnUwhDHLSIMBpkoMjzn0nF-_7c8GT4clKdbgEQG1jCdjwDm421aRNBO3L7aOG0Upne9UdfG2voLchzJ2xyEGmvjF49riwhD2kQgwYGmxcRcX84ZQHsSi1SqxgCSOE9l2pu1kzaB5P7M1Aw2160-h3840-k-no.jpg",
    titleId: "Miniatur Patung Dewa Ganesha Ukiran Tanduk",
    titleEn: "Hand-Carved Dark Horn Ganesha Miniature",
    materialId: "Tanduk Kerbau Hitam Alami",
    materialEn: "Solid Dark Buffalo Horn",
    descId:
      "Patung miniatur Ganesha setinggi genggaman tangan yang dipahat halus dari tanduk kerbau hitam pekat, memamerkan ketelitian luar biasa pengrajin Tampaksiring.",
    descEn:
      "A palm-sized Ganesha sculpture intricately carved from solid dark buffalo horn, highlighting the micro-carving precision of Tampaksiring artisans."
  },
  {
    id: 7,
    category: "dekorasi",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29 (4).jpeg",
    titleId: "Seri Dekorasi Dinding Ukiran Hitam Matte",
    titleEn: "Matte Black Carved Skull Wall Collection",
    materialId: "Tengkorak Sapi Finishing Hitam",
    materialEn: "Matte-Black Stained Cow Skulls",
    descId:
      "Koleksi tengkorak berukir motif tembus (kerawang) dengan finishing hitam pekat bergaya modern-etnik, sangat digemari untuk dekorasi interior vila dan kafe.",
    descEn:
      "Openwork carved skulls finished in dramatic matte black, blending ethnic heritage with contemporary interior appeal for villas and galleries."
  },
  {
    id: 8,
    category: "miniatur",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.30.jpeg",
    titleId: "Ragam Hiasan Meja, Patung Gajah & Ukiran Bengkel",
    titleEn: "Assorted Figurines, Carved Elephants & Workshop Pieces",
    materialId: "Tulang & Tanduk Olahan",
    materialEn: "Carved Bone & Horn Assortment",
    descId:
      "Selain hiasan dinding tengkorak, pengrajin juga memproduksi beragam figuratif, miniatur gajah, mainan seni, dan dekorasi rumah dalam jumlah satuan maupun grosir.",
    descEn:
      "Beyond wall skulls, our artisans craft tabletop figurines, carved elephant miniatures, decorative toys, and custom pieces for retail or wholesale."
  },
  {
    id: 9,
    category: "tengkorak",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.31.jpeg",
    titleId: "Deretan Ukiran Barong Bali Putih Alami",
    titleEn: "Natural Ivory Barong Bali Edition",
    materialId: "Tengkorak Sapi Putih Alami",
    materialEn: "Natural Ivory Cow Skulls",
    descId:
      "Setiap ukiran Barong dibuat satu per satu dengan tangan sehingga memiliki ekspresi wajah dan alur ukiran unik yang tidak pernah benar-benar sama.",
    descEn:
      "Each Barong relief is individually hand-carved, ensuring every piece carries a one-of-a-kind expression and organic artisan signature."
  },
  {
    id: 10,
    category: "proses",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.31 (2).jpeg",
    titleId: "Tahap Sketsa Motif Mandala di Atas Tulang",
    titleEn: "Hand-Drawn Mandala Sketch on Natural Bone",
    materialId: "Dokumentasi Proses Sketsa",
    materialEn: "Design & Sketching Stage",
    descId:
      "Sebelum pahatan dimulai, pengrajin menggambar pola mandala dan dedaunan secara manual dengan pensil langsung mengikuti lekuk anatomi tulang.",
    descEn:
      "Before carving begins, artisans freehand-sketch intricate mandala and botanical motifs directly onto the bone's natural contours."
  },
  {
    id: 11,
    category: "proses",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.28.jpeg",
    titleId: "Ketelitian Tangan Memahat Motif Patra Bali",
    titleEn: "Precision Hand-Carving Balinese Patra Motifs",
    materialId: "Dokumentasi Proses Ukir",
    materialEn: "Artisan Carving in Progress",
    descId:
      "Setiap lengkungan kerawang patra dipahat perlahan dengan ketenangan dan presisi tinggi agar tulang tetap utuh dan menghasilkan dimensi bayangan yang hidup.",
    descEn:
      "Every openwork scroll is carved steadily by hand, preserving the bone's structural integrity while creating luminous depth and shadow."
  },
  {
    id: 12,
    category: "proses",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29 (3).jpeg",
    titleId: "Penyatuan & Penyesuaian Tanduk Spiral",
    titleEn: "Fitting & Balancing Natural Spiral Horns",
    materialId: "Dokumentasi Bengkel Manukaya Anyar",
    materialEn: "Manukaya Anyar Workshop",
    descId:
      "Pengrajin Banjar Manukaya Anyar menyelaraskan pasangan tanduk alami dengan pangkal tulang agar simetris, kokoh, dan harmonis sebelum tahap finishing.",
    descEn:
      "A Manukaya Anyar craftsman carefully matches and fits natural horns onto the prepared skull for balanced symmetry prior to final finishing."
  },
  {
    id: 13,
    category: "proses",
    image:
      "img/ANWiy9SKU2473uwuvqrt4vu4StkUR0Y9J-_DfhT9txajZq_gaHZBz_gCTwaTl9nqzJ5wIGzEti9H_mGs6uwgVHzRJC5wwc0CvPILsfKAALgQEOCfLZ-coPBXzHZq1qp91s97UjeJxZglDe_4Cw-8w3024-h4032-k-no.jpg",
    titleId: "Suasana Bale & Galeri Cahaya Dewata Handycraft",
    titleEn: "Traditional Balinese Bale & Workshop Courtyard",
    materialId: "Banjar Manukaya Anyar, Tampaksiring",
    materialEn: "Manukaya Anyar, Tampaksiring, Bali",
    descId:
      "Bengkel kerja sekaligus rumah budaya di Banjar Manukaya Anyar, Tampaksiring—terbuka bagi wisatawan yang ingin melihat langsung karya dan berbincang dengan pengrajin.",
    descEn:
      "Our serene Balinese courtyard workshop in Banjar Manukaya Anyar, Tampaksiring—welcoming visitors to witness traditional bone carving firsthand."
  },
  {
    id: 14,
    category: "proses",
    image: "img/WhatsApp Image 2026-11-18 at 21.03.29.jpeg",
    titleId: "Dedikasi Pengrajin Lokal Tampaksiring",
    titleEn: "Dedication of Local Tampaksiring Craftsmen",
    materialId: "Proses Pahat Manual",
    materialEn: "Handcrafted Heritage",
    descId:
      "Keterampilan mengukir diwariskan dari generasi ke generasi, memberdayakan perekonomian warga sekitar sekaligus menjaga kelestarian seni kriya Bali.",
    descEn:
      "Carving knowledge passed across generations empowers local families in Tampaksiring while keeping living Balinese craftsmanship thriving."
  }
];

/**
 * KAMUS TEKS DWIBAHASA (INDONESIA & ENGLISH)
 */
const TRANSLATIONS = {
  id: {
    "nav.home": "Beranda",
    "nav.profile": "Profil & Kisah",
    "nav.process": "Proses Pembuatan",
    "nav.bones": "Jenis Tulang",
    "nav.gallery": "Koleksi Karya",
    "nav.contact": "Kontak & Lokasi",
    "nav.cta": "Hubungi WhatsApp",

    "hero.badge": "Banjar Manukaya Anyar • Tampaksiring, Gianyar, Bali",
    "hero.title": "Mengubah Limbah Alam Menjadi Warisan Seni Ukir Bali",
    "hero.subtitle":
      "Cahaya Dewata Handycraft adalah UMKM pengrajin lokal Tampaksiring yang mengolah limbah tulang dan tanduk hewan menjadi karya seni bernilai tinggi—dari ukiran tengkorak motif khas Bali, dekorasi rumah, kalung, hingga miniatur siap ekspor.",
    "hero.btnPrimary": "Diskusi & Pesan via WhatsApp",
    "hero.btnSecondary": "Jelajahi Koleksi Karya",
    "hero.stat1Label": "Tahap Produksi Teliti",
    "hero.stat2Label": "Limbah Tulang Ramah Lingkungan",
    "hero.stat3Label": "Kualitas Pasar Lokal & Ekspor",
    "hero.caption": "Karya Ukiran Tanduk & Tulang Pengrajin Tampaksiring",

    "pillars.1Title": "Pelestarian Budaya Bali",
    "pillars.1Desc":
      "Setiap motif Barong, Patra, dan Mandala dipahat langsung dengan tangan, menjaga keaslian cerita dan tradisi kriya Gianyar.",
    "pillars.2Title": "Kepedulian Lingkungan",
    "pillars.2Desc":
      "100% mengolah limbah tulang dan tanduk hewan ternak yang tidak terpakai menjadi karya seni abadi yang bersih dan aman.",
    "pillars.3Title": "Pemberdayaan Pengrajin Lokal",
    "pillars.3Desc":
      "Tumbuh bersama warga Banjar Manukaya Anyar dan menjembatani karya tulus pengrajin menuju pasar wisata dan ekspor dunia.",

    "profile.eyebrow": "01 • Profil & Kisah Kami",
    "profile.title": "Rumah Digital Pengrajin Tulang & Tanduk di Jantung Tampaksiring",
    "profile.lead":
      "Berawal dari ketekunan tangan pengrajin di Banjar Manukaya Anyar, Tampaksiring, Gianyar, Bali, Cahaya Dewata Handycraft memadukan pelestarian budaya leluhur dengan kepedulian nyata terhadap lingkungan.",
    "profile.p1":
      "Bagi kami, limbah tulang dan tanduk hewan bukanlah akhir dari sebuah siklus, melainkan kanvas alami yang menunggu untuk dihidupkan kembali. Melalui kesabaran, ketelitian, dan penghormatan terhadap seni ukir Bali, bahan-bahan alam tersebut disulap menjadi dekorasi rumah, hiasan dinding, kalung, mainan, miniatur, hingga patung tengkorak berukir motif tradisional Bali.",
    "profile.p2":
      "Setiap karya yang lahir dari bengkel kerja kami membawa autentisitas budaya serta mendukung kesejahteraan keluarga pengrajin setempat. Kini, karya Cahaya Dewata Handycraft tidak hanya dicari oleh wisatawan yang berkunjung ke Bali, tetapi juga telah menembus pasar kolektor dan ekspor internasional.",
    "profile.quote":
      "“Kami tidak sekadar membuat cendera mata, melainkan merawat cerita, tradisi ukir Bali, dan wujud syukur atas alam yang diolah kembali dengan sepenuh hati.”",
    "profile.quoteAuthor": "— Keluarga Pengrajin Cahaya Dewata Handycraft, Manukaya Anyar",
    "profile.highlight1": "Autentisitas Motif Tradisional Bali",
    "profile.highlight2": "Dukung Wisata Kreatif & Budaya Tampaksiring",
    "profile.highlight3": "Menerima Satuan, Grosir & Pesanan Custom",
    "profile.highlight4": "Komunikasi Langsung dengan Pemilik Bengkel",

    "process.eyebrow": "02 • Tahapan Proses Pembuatan",
    "process.title": "6 Langkah Teliti dari Limbah Alam hingga Siap Ekspor",
    "process.subtitle":
      "Setiap karya melewati rangkaian proses tradisional yang higienis, sabar, dan penuh ketelitian sebelum hadir di ruang Anda.",

    "bones.eyebrow": "03 • Mengenal Bahan Baku",
    "bones.title": "Jenis Tulang & Tanduk Ramah Lingkungan",
    "bones.subtitle":
      "Kami hanya menggunakan limbah tulang dan tanduk hewan ternak yang telah dibersihkan secara higienis—aman, etis, dan berkelanjutan.",
    "bones.ecoTitle": "Komitmen Keberlanjutan & Keamanan Bahan",
    "bones.ecoDesc":
      "Seluruh bahan baku berasal dari limbah hewan ternak yang tidak terpakai (bukan satwa dilindungi). Melalui proses perebusan, pembersihan, dan pengeringan menyeluruh, setiap karya bebas bau, higienis, tahan lama, serta aman untuk dekorasi interior rumah, vila, maupun galeri seni.",

    "gallery.eyebrow": "04 • Galeri Koleksi Karya",
    "gallery.title": "Detail Pahatan Asli Pengrajin Cahaya Dewata",
    "gallery.subtitle":
      "Klik foto untuk melihat detail ukiran lebih dekat atau langsung berdiskusi dengan pemilik mengenai ukuran, motif custom, dan ketersediaan via WhatsApp.",
    "gallery.filterAll": "Semua Karya",
    "gallery.filterSkull": "Ukiran Tengkorak",
    "gallery.filterDecor": "Hiasan & Dekorasi",
    "gallery.filterMini": "Miniatur & Tanduk",
    "gallery.filterWorkshop": "Suasana Bengkel",
    "gallery.customTitle": "Ingin Motif Custom, Kalung, Mainan, atau Pesanan Ekspor?",
    "gallery.customDesc":
      "Selain koleksi di atas, kami melayani pembuatan dekorasi rumah, kalung tulang, mainan seni, serta ukiran motif khusus (logo, kaligrafi, Barong, atau Mandala) sesuai permintaan Anda.",
    "gallery.customBtn": "Konsultasi Pesanan Custom",
    "gallery.zoomHint": "Lihat Detail",

    "contact.eyebrow": "05 • Kontak & Lokasi Bengkel Kerja",
    "contact.title": "Pesan Langsung & Kunjungi Bengkel Kami di Tampaksiring",
    "contact.subtitle":
      "Tidak perlu sistem yang rumit—Anda dapat langsung berbincang dengan pemilik melalui WhatsApp untuk menanyakan koleksi, harga, pesanan custom, atau menjadwalkan kunjungan ke Banjar Manukaya Anyar.",
    "contact.infoTitle": "Informasi Kontak Langsung",
    "contact.addressLabel": "Alamat Bengkel & Galeri",
    "contact.phoneLabel": "Telepon / WhatsApp Pemilik",
    "contact.hoursLabel": "Jam Kunjungan",
    "contact.waDirectBtn": "Chat Langsung di WhatsApp",
    "contact.mapsBtn": "Buka Petunjuk Arah Google Maps",
    "contact.formTitle": "Kirim Pesan Cepat ke WhatsApp",
    "contact.formDesc":
      "Isi pesan singkat di bawah ini, lalu klik tombol kirim untuk langsung membuka percakapan WhatsApp bersama pemilik Cahaya Dewata Handycraft.",
    "contact.nameLabel": "Nama Anda",
    "contact.namePlaceholder": "Contoh: Made / Sarah",
    "contact.interestLabel": "Karya yang Diminati",
    "contact.opt1": "Ukiran Tengkorak Motif Bali (Barong / Mandala / Patra)",
    "contact.opt2": "Dekorasi Rumah & Hiasan Dinding",
    "contact.opt3": "Kalung, Miniatur & Mainan Tulang/Tanduk",
    "contact.opt4": "Pesanan Motif Custom / Kaligrafi",
    "contact.opt5": "Pembelian Grosir / Ekspor",
    "contact.opt6": "Kunjungan Wisata ke Bengkel Tampaksiring",
    "contact.msgLabel": "Pesan atau Pertanyaan",
    "contact.msgPlaceholder":
      "Ceritakan ukuran, motif, jumlah, atau jadwal kunjungan yang Anda inginkan...",
    "contact.submitBtn": "Kirim Pesan via WhatsApp",
    "contact.mapTitle": "Peta Lokasi Cahaya Dewata Handycraft",

    "lightbox.waBtn": "Tanyakan Karya Ini via WhatsApp",
    "lightbox.close": "Tutup",

    "footer.about":
      "UMKM kerajinan ukir tulang dan tanduk khas Bali di Banjar Manukaya Anyar, Tampaksiring, Gianyar. Menghidupkan limbah alam menjadi warisan seni budaya yang ramah lingkungan.",
    "footer.navTitle": "Navigasi Utama",
    "footer.visitTitle": "Kunjungi Kami",
    "footer.credit":
      "Dikembangkan melalui Program Pengabdian Masyarakat • Magister Informatika (Data Science Specialist), Institut Bisnis dan Teknologi Indonesia (INSTIKI) 2026.",
    "footer.rights": "Hak Cipta © 2026 Cahaya Dewata Handycraft. Seluruh hak dilindungi."
  },
  en: {
    "nav.home": "Home",
    "nav.profile": "Our Story",
    "nav.process": "Craft Process",
    "nav.bones": "Materials",
    "nav.gallery": "Collection",
    "nav.contact": "Contact & Map",
    "nav.cta": "Chat on WhatsApp",

    "hero.badge": "Banjar Manukaya Anyar • Tampaksiring, Gianyar, Bali",
    "hero.title": "Transforming Natural Waste Into Living Balinese Carving Heritage",
    "hero.subtitle":
      "Cahaya Dewata Handycraft is a community-rooted Balinese artisan workshop in Tampaksiring upcycling discarded livestock bones and horns into heirloom art—from carved Balinese skulls and home decor to necklaces and export-ready sculptures.",
    "hero.btnPrimary": "Inquire & Order via WhatsApp",
    "hero.btnSecondary": "Explore Collection",
    "hero.stat1Label": "Careful Crafting Stages",
    "hero.stat2Label": "Eco-Upcycled Materials",
    "hero.stat3Label": "Local & Export Craftsmanship",
    "hero.caption": "Hand-Carved Bone & Horn Artistry from Tampaksiring",

    "pillars.1Title": "Balinese Cultural Heritage",
    "pillars.1Desc":
      "Every Barong, Patra, and Mandala motif is hand-carved with care, preserving the authentic living traditions of Gianyar.",
    "pillars.2Title": "Environmental Stewardship",
    "pillars.2Desc":
      "100% upcycled livestock bone and horn by-products—hygienically cleaned and transformed into sustainable indoor art.",
    "pillars.3Title": "Empowering Local Artisans",
    "pillars.3Desc":
      "Supporting village craftsmen in Banjar Manukaya Anyar and connecting heartfelt Balinese artistry with global admirers.",

    "profile.eyebrow": "01 • Profile & Heritage Story",
    "profile.title": "A Digital Home for Tampaksiring's Bone & Horn Artisans",
    "profile.lead":
      "Rooted in Banjar Manukaya Anyar, Tampaksiring, Gianyar, Bali, Cahaya Dewata Handycraft unites ancestral Balinese carving traditions with genuine environmental care.",
    "profile.p1":
      "To our artisans, discarded livestock bones and horns are not waste—they are natural canvases waiting to be reborn. Through patience, hand skill, and deep respect for Balinese ornament, these materials become home decor, wall sculptures, ethnic necklaces, handcrafted toys, miniatures, and intricately carved skulls.",
    "profile.p2":
      "Every artwork carries authentic cultural storytelling while strengthening the livelihoods of local families. Today, Cahaya Dewata Handycraft welcomes cultural travelers to our Tampaksiring workshop and ships handcrafted pieces to international collectors worldwide.",
    "profile.quote":
      "“We do more than craft souvenirs—we preserve Balinese carving stories and honor nature by giving overlooked materials a timeless soul.”",
    "profile.quoteAuthor": "— Artisan Family of Cahaya Dewata Handycraft, Manukaya Anyar",
    "profile.highlight1": "Authentic Traditional Balinese Motifs",
    "profile.highlight2": "Creative & Cultural Tourism in Tampaksiring",
    "profile.highlight3": "Single Pieces, Wholesale & Custom Orders",
    "profile.highlight4": "Direct Personal Consultation with the Owner",

    "process.eyebrow": "02 • The Making Process",
    "process.title": "6 Artisanal Steps from Upcycled Material to Export-Ready Art",
    "process.subtitle":
      "Every piece journeys through hygienic preparation, patient hand-carving, and protective packaging before arriving in your space.",

    "bones.eyebrow": "03 • Natural Materials",
    "bones.title": "Eco-Friendly Bone & Horn Categories",
    "bones.subtitle":
      "We exclusively craft with hygienically treated livestock by-products—ethical, sustainable, and safe for every interior.",
    "bones.ecoTitle": "Sustainability & Safety Commitment",
    "bones.ecoDesc":
      "All raw materials come solely from unused livestock by-products—never protected wildlife. Through thorough boiling, sanitization, and sun drying, every piece is odor-free, durable, and completely safe for homes, villas, and art galleries.",

    "gallery.eyebrow": "04 • Artwork Collection",
    "gallery.title": "Authentic Hand-Carved Details from Our Workshop",
    "gallery.subtitle":
      "Click any artwork to inspect the carving details up close or chat directly with the owner on WhatsApp regarding sizing, availability, and custom motifs.",
    "gallery.filterAll": "All Works",
    "gallery.filterSkull": "Carved Skulls",
    "gallery.filterDecor": "Home Decor",
    "gallery.filterMini": "Miniatures & Horn",
    "gallery.filterWorkshop": "Workshop Life",
    "gallery.customTitle": "Looking for Custom Motifs, Necklaces, Toys, or Export Orders?",
    "gallery.customDesc":
      "Beyond the pieces shown above, we craft bone necklaces, artisan toys, home accents, and bespoke carvings (calligraphy, Barong, Mandala, or custom emblems) tailored to your request.",
    "gallery.customBtn": "Discuss a Custom Order",
    "gallery.zoomHint": "View Details",

    "contact.eyebrow": "05 • Contact & Workshop Location",
    "contact.title": "Order Directly or Visit Our Workshop in Tampaksiring",
    "contact.subtitle":
      "Simple and personal—message the owner directly via WhatsApp to discuss pieces, pricing, custom carvings, or plan an in-person visit to Banjar Manukaya Anyar.",
    "contact.infoTitle": "Direct Contact Information",
    "contact.addressLabel": "Workshop & Gallery Address",
    "contact.phoneLabel": "Owner Phone / WhatsApp",
    "contact.hoursLabel": "Visiting Hours",
    "contact.waDirectBtn": "Chat Directly on WhatsApp",
    "contact.mapsBtn": "Get Directions on Google Maps",
    "contact.formTitle": "Send a Quick WhatsApp Message",
    "contact.formDesc":
      "Fill in a quick note below and tap send to open a direct WhatsApp conversation with the owner of Cahaya Dewata Handycraft.",
    "contact.nameLabel": "Your Name",
    "contact.namePlaceholder": "e.g., Made / Sarah",
    "contact.interestLabel": "Artwork of Interest",
    "contact.opt1": "Balinese Carved Skull (Barong / Mandala / Patra)",
    "contact.opt2": "Home Decor & Wall Sculptures",
    "contact.opt3": "Necklaces, Miniatures & Carved Toys",
    "contact.opt4": "Custom Motif / Calligraphy Carving",
    "contact.opt5": "Wholesale / Export Inquiry",
    "contact.opt6": "Workshop Cultural Visit in Tampaksiring",
    "contact.msgLabel": "Your Message or Inquiry",
    "contact.msgPlaceholder":
      "Share your preferred motif, size, quantity, or planned visit date...",
    "contact.submitBtn": "Send via WhatsApp",
    "contact.mapTitle": "Cahaya Dewata Handycraft Location Map",

    "lightbox.waBtn": "Inquire About This Piece on WhatsApp",
    "lightbox.close": "Close",

    "footer.about":
      "Balinese hand-carved bone and horn handicraft workshop in Banjar Manukaya Anyar, Tampaksiring, Gianyar. Upcycling natural materials into enduring cultural art.",
    "footer.navTitle": "Explore",
    "footer.visitTitle": "Visit Us",
    "footer.credit":
      "Developed through the Community Service Program • Master of Informatics (Data Science Specialist), Institut Bisnis dan Teknologi Indonesia (INSTIKI) 2026.",
    "footer.rights": "Copyright © 2026 Cahaya Dewata Handycraft. All rights reserved."
  }
};

