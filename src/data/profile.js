// Semua konten portofolio diambil dari CV. Ubah di sini untuk memperbarui situs.

export const profile = {
  name: "Dwi Wahyu Susilowati",
  shortName: "Dwi Wahyu",
  role: "Fullstack Developer",
  roles: ["Fullstack Developer", "Frontend Engineer", "Java Backend Developer", "Next.js & React Developer"],
  location: "Bandung, Indonesia",
  email: "dwiwahyuprivate@gmail.com",
  phone: "+62 851-8723-8701",
  phoneHref: "tel:+6285187238701",
  whatsapp: "https://wa.me/6285187238701",
  linkedin: "https://www.linkedin.com/in/dwi-wahyu-susilowati-39ab6a374/",
  github: "https://github.com/dwiwahyu06",
  photo: "/thumbs/dwi.jpg",
  summary:
    "Fullstack Developer dengan pengalaman profesional di PT Sovware Data Mandiri dalam membangun aplikasi web menggunakan Java, Next.js, React.js, dan Python. Berpengalaman dalam pengembangan frontend, layanan backend, integrasi database dan REST API, serta penyusunan dokumentasi teknis proyek.",
  traits: ["Bertanggung jawab", "Komunikatif dalam tim", "Tepat waktu"],
};

// Tanggal mulai kerja — durasi pengalaman dihitung otomatis dari sini.
export const CAREER_START = new Date(2026, 0, 1);

export const monthsSince = (start, now = new Date()) =>
  Math.max(1, (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1);

export const formatDuration = (months) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} bulan`;
  return m === 0 ? `${y} tahun` : `${y} tahun ${m} bulan`;
};

export const experiences = [
  {
    role: "Fullstack Developer",
    company: "PT Sovware Data Mandiri",
    location: "Bandung",
    period: "Januari 2026 – Sekarang",
    start: CAREER_START,
    current: true,
    points: [
      "Mengembangkan dan memelihara fitur frontend menggunakan Next.js dan React.js, termasuk komponen UI yang responsif dan reusable yang terhubung dengan REST API backend.",
      "Membangun dan memelihara layanan backend berbasis Java untuk mendukung kebutuhan bisnis dan sistem.",
      "Berkontribusi pada modul berbasis Python dalam proyek multi-bahasa bersama codebase Java dan JavaScript.",
      "Mengintegrasikan aplikasi web dengan database MySQL dan PostgreSQL serta API pihak ketiga, dan meningkatkan performa query serta halaman.",
      "Menyusun dokumentasi teknis proyek, meliputi spesifikasi fitur, referensi API, dan panduan instalasi yang digunakan tim pengembang.",
      "Menganalisis dan memperbaiki bug, memelihara kode yang sudah ada, serta berkolaborasi dengan tim melalui alur kerja berbasis Git.",
    ],
    stack: ["Next.js", "React.js", "Java", "Python", "MySQL", "PostgreSQL", "REST API", "Git"],
  },
];

export const education = {
  degree: "Diploma Manajemen Informatika",
  school: "Universitas Nasional PASIM Bandung",
  period: "2023 – 2026",
  note: "Lulus September 2026",
  gpa: "3,50",
  gpaMax: "4,00",
  courses: ["Pemrograman Web", "Sistem Basis Data", "Sistem Informasi", "Struktur Data", "Algoritma"],
};

// `icon` dipetakan ke komponen ikon di Skills.jsx
export const skillGroups = [
  {
    title: "Bahasa Pemrograman",
    icon: "code",
    items: ["Java", "JavaScript", "Python", "SQL", "C", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["Next.js", "React.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Java Spring Boot", "Node.js", "Express.js", "Python", "REST API"],
  },
  {
    title: "Database",
    icon: "database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: "tool",
    items: ["Git", "GitHub", "VS Code", "SQLyog", "XAMPP"],
  },
  {
    title: "Lainnya",
    icon: "layers",
    items: ["Dokumentasi Teknis", "Integrasi API Pihak Ketiga", "Debugging & Troubleshooting", "Kerja Sama Tim"],
  },
];

export const projects = [
  {
    title: "Knit And Keep",
    subtitle: "Sistem Penjualan Thrifting",
    period: "Juni 2025 – September 2025",
    image: "/thumbs/knit.jpg",
    description:
      "Sistem penjualan berbasis web untuk pakaian bekas, mencakup katalog produk, pemesanan, dan manajemen penjualan — lengkap dengan payment gateway dan integrasi API alamat.",
    stack: ["React", "Java Spring Boot", "PostgreSQL", "Tailwind CSS", "Payment Gateway", "API Alamat"],
    features: [
      "Register & login",
      "Pencarian produk",
      "Keranjang & checkout",
      "Transaksi & pembayaran",
      "Integrasi maps alamat",
      "Dashboard admin: transaksi & barang",
    ],
    link: "https://github.com/dwiwahyu06/KNIT-AND-KEEP",
    linkLabel: "Source Code",
    type: "Fullstack",
  },
  {
    title: "Maison Belle Salon",
    subtitle: "Platform Salon Modern",
    period: "Januari 2025 – Mei 2025",
    image: "/thumbs/ReactLanjutan.jpg",
    description:
      "Platform web untuk usaha salon, mencakup daftar layanan, pencarian, dan pemesanan oleh pelanggan. Frontend React dengan backend Express.js.",
    stack: ["React", "Express.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
    features: ["Daftar & manajemen layanan", "Pencarian layanan", "Pemesanan oleh pelanggan"],
    link: "https://masion-belle-salon.vercel.app/",
    linkLabel: "Live Demo",
    type: "Fullstack",
  },
  {
    title: "MasakApaHariIni",
    subtitle: "Aplikasi Resep Masakan",
    period: "Oktober 2024 – Desember 2024",
    image: "/thumbs/masak.jpg",
    description:
      "Aplikasi web untuk menelusuri dan mencari resep masakan — menampilkan 50 resep dari berbagai daerah di Indonesia, dilengkapi fitur favorit dan pencarian.",
    stack: ["React", "Tailwind CSS", "Vite"],
    features: ["50 resep nusantara", "Pencarian resep", "Simpan favorit"],
    link: "https://masakapa-hari-ini.vercel.app/",
    linkLabel: "Live Demo",
    type: "Frontend",
  },
];

export const certificates = [
  {
    title: "Pelatihan React dan Java Spring Boot",
    period: "Juli 2025 – September 2025",
    image: "/thumbs/Ser-ReactJava.jpg",
    full: "/thumbs/lg/Ser-ReactJava.jpg",
    tag: "Fullstack",
  },
  {
    title: "Pelatihan Git dan GitHub",
    period: "Juni 2025",
    image: "/thumbs/Ser-GIT.jpg",
    full: "/thumbs/lg/Ser-GIT.jpg",
    tag: "Tools",
  },
  {
    title: "Pelatihan Advanced React",
    period: "Desember 2024 – Juni 2025",
    image: "/thumbs/Ser-Reactback.jpg",
    full: "/thumbs/lg/Ser-Reactback.jpg",
    tag: "Frontend",
  },
  {
    title: "Pelatihan Dasar React",
    period: "September 2024 – November 2024",
    image: "/thumbs/Ser-FundamentalReact.jpg",
    full: "/thumbs/lg/Ser-FundamentalReact.jpg",
    tag: "Frontend",
  },
  {
    title: "Pelatihan Pengembangan Web (HTML, CSS, JavaScript)",
    period: "Juni 2024 – Agustus 2024",
    image: "/thumbs/Ser-HTML.jpg",
    full: "/thumbs/lg/Ser-HTML.jpg",
    tag: "Web",
  },
  {
    title: "Pelatihan Struktur Data",
    period: "Februari 2024 – Mei 2024",
    image: "/thumbs/Ser-Strukturdata.jpg",
    full: "/thumbs/lg/Ser-Strukturdata.jpg",
    tag: "Fundamental",
  },
  {
    title: "Pelatihan Basis Data",
    period: "Februari 2024 – Mei 2024",
    image: "/thumbs/Ser-Basisdata.jpg",
    full: "/thumbs/lg/Ser-Basisdata.jpg",
    tag: "Database",
  },
  {
    title: "Logika Algoritma Dasar (Bahasa C)",
    period: "September 2023 – Januari 2024",
    image: "/thumbs/Ser-C.jpg",
    full: "/thumbs/lg/Ser-C.jpg",
    tag: "Fundamental",
  },
];

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "experience", label: "Pengalaman" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "certificates", label: "Sertifikat" },
  { id: "contact", label: "Kontak" },
];
