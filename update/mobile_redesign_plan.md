# Rencana Bertahap: Redesign Mobile UX (Native-Feeling)

Dokumen ini memecah inisiatif desain ulang antarmuka _mobile_ menjadi tahapan-tahapan yang terstruktur dan terukur. Tujuannya adalah merubah portofolio agar tidak sekadar menjadi versi miniatur dari tampilan desktop (PC), melainkan terasa seperti aplikasi *native* di genggaman pengguna. Pengembangannya dibagi menjadi 4 fase agar iterasi bisa diuji secara bertahap.

---

## Fase 1: Fondasi Skala dan Ruang (Fluidity & Density)
Fase ini berfokus mengatur proporsi elemen agar pas untuk rasio layar _mobile_ tanpa merusak tampilan desktop.

* **1.1. Refaktor Tipografi (Fluid Typography):**
  * Ganti ukuran statis font (`text-5xl`, `text-6xl`) dengan CSS `clamp()`. Contoh: `text-[clamp(2.5rem,5vw,4rem)]`.
  * Pastikan line-height (_tracking/leading_) pada teks Hero dan deskripsi proyek diperketat di layar _mobile_ untuk memaksimalkan ruang vertikal.
* **1.2. Penyesuaian Padding (Edge-to-Edge Design):**
  * Kurangi spasi `container` atau `px` di semua section (seperti *About*, *Skills*, *Portfolio*). Ubah `px-8` menjadi `px-4` atau `px-5` untuk layar `< 768px`.
  * Biarkan gambar atau _card background_ meluas menyentuh tepi layar (menghilangkan border/margin yang terlalu tebal di HP).
* **1.3. Optimasi Latar Belakang & Ornamen:**
  * Sembunyikan atau kecilkan animasi _blob_ raksasa/blur dari *background* pada `App.tsx` jika layar sangat kecil (menggunakan `hidden md:block` atau mengurangi skalanya drastis). Ini juga menghemat memori.

## Fase 2: Rombak Sistem Navigasi (Ergonomi Tangan)
Fase ini adalah perubahan *UX* terdalam, mengganti pola _hiding menu_ PC menjadi _accessible menu_ ala aplikasi mandiri (_standalone app_).

* **2.1. Desain Bottom Tab Bar:**
  * Buat komponen baru (misal: `MobileBottomBar.tsx`) yang diletakkan secara `fixed bottom-0`.
  * Menu utama berupa tab ikon sederhana (Home, About, Portfolio, Contact) lengkap dengan _glassmorphism_ (efek *blur* transparan).
* **2.2. Transisi Navbar Komputer (Desktop):**
  * Sembunyikan `Navbar.tsx` original secara total untuk *viewport* *mobile* (`hidden md:flex`).
  * Integrasikan transisi kemunculan *Bottom Bar* saat di-*scroll*, atau tambahkan status aktif pada *icon* seiring letak *scroll user* (ScrollSpy functionality).
* **2.3. Posisikan Theme Toggle:**
  * Pindahkan tombol _switch_ *Dark Mode / Light Mode* ke area yang mudah diakses lewat jempol, baik itu bersandingan dengan bilah navigasi bawah, maupun mengambang (*floating action button*) secara ergonomis di pojok kanan bawah jika *tab bar* sedang tertunda kemunculannya.

## Fase 3: Transisi Sentuhan dan Interaksi (Touch & Gestures)
Transisi fungsi dari *Mouse* (_Hover_) menjadi fitur layar tekan dan geser (*Tap & Swipe*).

* **3.1. Implementasi CSS Scroll Snap & Carousels:**
  * Komponen *Timeline* atau kartu *Portfolio*: Buat tata letak grid menjadi urutan mendatar (`flex-row overflow-x-auto snap-x snap-mandatory`).
  * Setiap kartu *(card)* akan mengunci (*snap-center* atau *snap-start*) di tengah layar layaknya UI Instagram/TikTok/App Store, menghilangkan kewajiban *user* *scroll* jauh ke bawah.
* **3.2. Penyesuaian `Magnetic` dan Efek *Hover*:**
  * Nonaktifkan modul *magnetic-button* dan efek `spotlight/glow hover` di HP (`pointer-events: none` untuk *non-mouse device*) karena komponen ini merepotkan dan bisa memicu perilaku lengket (_sticky states_) di iOS/Android.
  * Tambahkan indikator visual `active` (reaksi ditekan: _scale-down_ perlahan) sebagai *feedback* sentuhan langsung.

## Fase 4: Penyesuaian Spesifik Per-Sekolah/Komponen
Tahap *finishing* untuk memoles *layout* spesifik yang terlihat janggal setelah fondasi berubah.

* **4.1. Penyederhanaan Hero Section:**
  * Ubah posisi susunan antara *copywriting* dan foto *profile/avatar*. Jika di desktop mereka bersampingan mendatar, posisikan tumpukan *copywriting* di atas *(center-aligned)* dan letakkan foto di bawahnya dengan persentase lebar lebih ideal (jangan sampai memakan 70% layar).
* **4.2. Timeline Vertikal Menjadi "Stepper":**
  * Struktur *Timeline* vertikal mungkin memakan ruang horizontal jika garis berada di tengah-tengah (kiri kosong, kanan teks). Ratakan _alignment_ komponen *Timeline* ke sisi kiri penuh agar garis *stepper* berdempetan dengan ujung margin, memberi ruang teks lebih panjang.
* **4.3. Skalabilitas Komponen Interaktif (Tilt/Liquid):**
  * `TiltCard.tsx` atau `LiquidImage.tsx` yang bereaksi berlebihan terhadap sensor rotasi HP *(gyroscope)* bisa diturunkan sensitivitasnya atau langsung dimatikan jika mengakibatkan gangguan visual/kelambatan saat memutus pergerakan ibu jari pengguna.

---

**Saran Siklus Pengerjaan Utama:** Mulailah mendedikasikan pengerjaan **Fase 1**, kemudian jadikan **Fase 2 (Bottom Bar Nav)** sebagai iterasi penyelesaian besarnya. Dua hal tersebut menyumbang porsi terbesar agar aplikasi terasa seperti "Aplikasi Mobile", bukan sekadar _website_.
