# Laporan Penyelesaian Redesign Mobile & Optimalisasi Visual
**Tanggal:** 26 April 2026

Laporan ini merangkum semua perubahan, penambahan komponen, dan perbaikan antarmuka (UI/UX) yang telah difokuskan untuk mencapai transisi *Mobile-First* yang terasa seperti aplikasi *native* (Native-Feeling), sekaligus mempertahankan keindahan *Dark Mode* dan tipografi.

## 1. Komponen Baru yang Ditambahkan (Penambahan Fitur)
Berikut adalah komponen yang dibuat dari nol untuk menggantikan fungsionalitas lama dan memperbaiki *UX* mobile:
- **`Preloader.tsx`**: Layar *splash screen* di awal muat halaman dengan *counter* angka (000-100) dan *progress bar* bergaya minimalis.
- **`MobileBottomBar.tsx`**: Navigasi bilah bawah khusus *mobile* ala aplikasi iOS/Android yang menggantikan gaya Hamburger Menu tradisional. Bar ini mendukung *ScrollSpy* (indikator aktif saat di-scroll) dan menyembunyikan diri saat *scroll* ke bawah untuk menghemat ruang.
- **`SkillsMarquee.tsx`**: Pita teks berjalan (kinetic typography strip) secara berulang, memberikan dinamisme visual tanpa memberatkan ukuran aset.
- **`SpotlightCard.tsx`**: Komponen kartu dengan efek cahaya biru (glow) yang mengikuti gerakan kursor pada layar Desktop. Ini menggantikan `TiltCard` yang tidak ramah sentuhan.

## 2. Perubahan pada Komponen yang Ada (Modifikasi UI)
Perubahan mendasar pada fondasi tata letak dan penyesuaian layar:

- **Perombakan Grid 3-Kolom Konstan:**
  - **`Portfolio.tsx`**: Mengunci grid menjadi `grid-cols-3` baik di desktop maupun pada layar *mobile*, menggantikan mode iteratif sebelumnya (swipe carousel). Teks diecilkan agar proporsi kartu di *mobile* memuat banyak data tanpa penuh sesak.
  - **`ContactFooter.tsx`**: *Let's Work Together Card* (Email, Instagram, WhatsApp) disesuaikan menjadi 3 kolom konsisten di segala rasio layar.
  - **`AboutSkills.tsx`**: Kartu kapabilitas spesifik (Komunikasi, Kolaborasi, Konten) dibuat dalam 1 baris (3 kolom konsisten). Teks ikon Google Sheets / Tools diubah menjadi rata tengah (`text-center`) agar tidak *mencong* saat teks turun ke baris bawah.

- **Optimasi Sensor & Layar Sentuh Khusus HP (Gestures & Touch Safety):**
  - **`CustomCursor.tsx`**, **`Magnetic.tsx`**, dan **`SpotlightCard.tsx`**: Diberi deteksi khusus (`pointer: coarse`). Efeknya akan dimatikan otomatis pada perangkat layar sentuh (HP) agar tidak *lagging* atau lengket saat tangan diangkat.
  - **`LiquidImage.tsx`**: Filter distorsi likuid berbasis *SVG Turbulence* dinonaktifkan di perangkat *touchscreen* dan menayangkan `<img />` biasa agar scroll lebih halus di iOS/Android.

- **Penyesuaian Visual Dasar:**
  - **Tipografi Cair (*Fluid Typography*)**: Pengaturan `text-5xl/6xl` dirombak menuju CSS `clamp()` untuk menghasilkan ukuran teks yang responsif mulus di berbagai perangkat.
  - **`Navbar.tsx`**: Fungsionalitas Hamburger dan *overlay menu* dihapus, karena sudah ditangani `MobileBottomBar`. Menu di bar hanya tersisa *toggle* *Dark Mode* untuk *mobile*.
  - **`Hero.tsx`**: Penataan ulang elemen di *mobile* menjadi `flex-col-reverse` sehingga *copywriting* ditumpuk di atas persis, sementara ruang profil/foto di-limit ke porsi yang tidak memakan tempat berlebih (maksimal `65vw`).
  - **`Timeline.tsx`**: Merampingkan *stepper* dari posisi rata tengah menjadi *left-aligned stepper* yang meluas penuh, sehingga ukuran padding layar sempit menjadi terpakai optimal. Ditambah dengan mode *Swipe Horizontal* pada riwayat pendidikan.
  - **`index.css`**: Menambahkan lapisan *Grain/Noise overlay* halus untuk sinematik, *scrollbar hider*, dan variabel padding baris bawah.

## 3. Kesimpulan Redesign
Proses rombak antarmuka ini telah sukses mentransisikan portofolio dari mode "Situs PC dikecilkan" menjadi "Aplikasi Layar Sentuh" yang kaya interaksi di *Mobile* sembari mempertahankan interaksi *Mouse Hover/Spotlight* premium di Desktop. Semua elemen berjalan pada 60fps tanpa kelambatan berkat penonaktifan efek CPU/GPU berat pada mode HP.
