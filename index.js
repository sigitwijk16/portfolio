const gridContainer = document.getElementById("grid-container");

const skillsArray = [
  {
    id: 1,
    name: "Android Development",
    skills: ["Java", "Kotlin", "XML Views", "MVVM", "Room"],
  },
  {
    id: 2,
    name: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Node.js",
    ],
  },
  {
    id: 3,
    name: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Leaning dengan Keras & Tensorflow",
    ],
  },
  {
    id: 4,
    name: "Soft Skills",
    skills: ["Kerjasama Tim", "Mindset untuk Selalu Belajar"],
  },
  {
    id: 5,
    name: "Bahasa",
    skills: [
      "Bahasa Inggris Level Advanced (590/677 - Amikom English Proficiency Test)",
    ],
  },
];

console.log(gridContainer);

gridContainer.innerHTML = "";
gridContainer.classList.add("grid-container");

function populateSkills(skillsArr) {
  skillsArr.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-item");

    const skillTitle = document.createElement("h2");
    skillTitle.classList.add("skill-title");
    skillTitle.textContent = skill.name;

    const skillList = document.createElement("ul");
    skillList.classList.add("skill-list");

    skill.skills.forEach((item) => {
      const newList = document.createElement("li");
      newList.textContent = item;
      skillList.appendChild(newList);
    });

    skillCard.appendChild(skillTitle);
    skillCard.appendChild(skillList);
    gridContainer.appendChild(skillCard);
  });
}

populateSkills(skillsArray);

const expGrid = document.getElementById("exp-grid");

const experiencesArray = [
  {
    id: 1,
    name: "Proyek Rintan Mobile Freelance Android Developer",
    time: "Agustus 2024 - Desember 2024",
    details: [
      "Membangun aplikasi Android berbasis single activity dengan multiple fragments (total 30 fragment) menggunakan Kotlin dan XML Views.",
      "Integrasi backend REST API melalui Retrofit, serta penggunaan viewBinding untuk pengelolaan UI.",
      "Melakukan slicing UI/UX design ke dalam XML menggunakan berbagai elemen View dan ViewGroup.",
      "Mengimplementasikan Explicit dan Implicit Intent dengan Bundle dan Parcelable untuk navigasi antar-fragment dan ke aplikasi eksternal.",
      "Mengembangkan fitur RecyclerView dengan pagination dari backend dengan onScrollListener.",
      "Fitur-fitur utama mencakup berbagai fitur native seperti pengambilan gambar melalui kamera dengan penyisipan informasi lokasi dari GPS ke metadata EXIF, pengambilan koordinat dari peta menggunakan osmdroid MapView, input form dan file dengan metode POST dan PUT, serta penyimpanan gambar berlokasi ke database lokal ROOM untuk penggunaan offline.",
    ],
  },
  {
    id: 2,
    name: "Proyek Egeoforest (Freelance Android Developer)",
    time: "Agustus 2024 - September 2024",
    details: [
      "Melakukan minor update aplikasi Android (Kotlin + XML) dengan perbaikan bug dan tambahan fungsional.",
      "Perbaikan error build app & login error ketika device offline.",
      "Refactor fungsi agar tetap bisa mendapatkan lokasi GPS saat offline, serta menambahkan metadata lokasi ke foto di CameraFragment.",
    ],
  },
  {
    id: 3,
    name: "Forum Asisten Universitas Amikom Yogyakarta",
    time: "September 2024 - Januari 2025",
    details: [
      "Asisten Praktikum Backend Development (CodeIgniter + MySQL).",
      "Mendukung kegiatan belajar mengajar untuk mahasiswa D3 Teknik Informatika.",
    ],
  },
  {
    id: 4,
    name: "Proyek Event Manager",
    time: "September 2025",
    details: [
      "Membangun website dengan PHP Laravel 12, Filament v4 untuk Admin Dashboard, dan Blade Template untuk client-facing.",
      "Fitur utama: manajemen event, sesi, reservasi dengan otorisasi admin.",
      "Membangun halaman publik untuk menampilkan event, detail kuota per sesi, dan form reservasi.",
    ],
  },
  {
    id: 5,
    name: "Proyek Eagle System (Freelance Backend Developer)",
    time: "Juli 2024 - Agustus 2024",
    details: [
      "Membangun RESTful API menggunakan Express.js (Node.js) dengan database MySQL dan Prisma ORM.",
      "Mengembangkan fitur manajemen peminjaman barang dengan stok dan otorisasi user (admin & karyawan) berbasis JWT.",
      "Fitur: manajemen user, event (penugasan acara), pengumuman admin, inventory, dan perizinan barang.",
      "Melakukan integrasi sebagian fitur utama ke frontend menggunakan Vue.js.",
    ],
  },
];

let htmlSring = `
    <div class="exp-item">
        <h2 class="skill-title" style="padding: 0;">Proyek Rintan Mobile Freelance Android Developer</h2>
        <h2 class="skill-list" style="padding: 0;">Agustus 2024 - Desember 2024</h2>
        <ul class="exp-list">
            <li>Membangun aplikasi Android berbasis single activity dengan multiple fragments (total 30 fragment) menggunakan Kotlin dan XML Views.</li>
            <li>Integrasi backend REST API melalui Retrofit, serta penggunaan viewBinding untuk pengelolaan UI.</li>
            <li>Melakukan slicing UI/UX design ke dalam XML menggunakan berbagai elemen View dan ViewGroup.</li>
        </ul>
    </div>
    <div style="height: 100%; width: 2px; background-color: white;"></div>
    <div class="exp-item-none">
    </div>
`;

expGrid.innerHTML = "";

function populateExperience(expArr) {
  expArr.forEach((exp) => {
    const expCard = document.createElement("div");
    expCard.classList.add("exp-item");

    const expTitle = document.createElement("h2");
    expTitle.classList.add("exp-title");
    expTitle.textContent = exp.name;

    const expTime = document.createElement("p");
    expTime.classList.add("exp-time");
    expTime.textContent = exp.time;

    const expList = document.createElement("ul");
    expList.classList.add("exp-list");

    exp.details.forEach((item) => {
      const newList = document.createElement("li");
      newList.textContent = item;
      expList.appendChild(newList);
    });

    expCard.appendChild(expTitle);
    expCard.appendChild(expTime);
    expCard.appendChild(expList);

    const blankExp = document.createElement("div");
    blankExp.classList.add("exp-item-none");

    const expLine = document.createElement("div");
    expLine.classList.add("exp-line");

    if (exp.id % 2 === 0) {
      expGrid.appendChild(blankExp);
      expGrid.appendChild(expLine);
      expGrid.appendChild(expCard);
    } else {
      expGrid.appendChild(expCard);
      expGrid.appendChild(expLine);
      expGrid.appendChild(blankExp);
    }
  });
}

populateExperience(experiencesArray);
