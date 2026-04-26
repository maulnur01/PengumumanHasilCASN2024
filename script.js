document.addEventListener("DOMContentLoaded", function () {

/* =============================================
   DATA (deduplicated)
   ============================================= */
const rawData = [
{no:1,nama:"TAZKIA NIDA HANIFA",jk:"P",pendidikan:"Agronomi",twk:90,tiu:208,tkp:170,total:468,status:"Lolos"},
{no:2,nama:"MUHAMMAD ALFIAN ANAS IKHFAZZUDDIN",jk:"L",pendidikan:"Agroteknologi",twk:90,tiu:191,tkp:165,total:446,status:"Lolos"},
{no:3,nama:"SETYAWAN ABI NUGROHO",jk:"L",pendidikan:"Agroteknologi",twk:125,tiu:181,tkp:140,total:446,status:"Lolos"},
{no:4,nama:"DIAH NUR ISTIQOMAH",jk:"P",pendidikan:"Agroteknologi",twk:95,tiu:189,tkp:160,total:444,status:"Lolos"},
{no:5,nama:"DEVI PRATIWI",jk:"P",pendidikan:"Peternakan",twk:90,tiu:186,tkp:165,total:441,status:"Lolos"},
{no:6,nama:"YUMNA NAZIHAH HANUN",jk:"P",pendidikan:"Agroteknologi",twk:80,tiu:186,tkp:160,total:426,status:"Lolos"},
{no:7,nama:"ULUM WIUDA RACHMAWATI",jk:"P",pendidikan:"Agroteknologi",twk:80,tiu:194,tkp:150,total:424,status:"Lolos"},
{no:8,nama:"LARASATI KHOSYATILLAH",jk:"P",pendidikan:"Agroteknologi",twk:105,tiu:194,tkp:125,total:424,status:"Lolos"},
{no:9,nama:"RICHI PAHLEFI",jk:"L",pendidikan:"Peternakan",twk:105,tiu:186,tkp:130,total:421,status:"Lolos"},
{no:10,nama:"DIMAS BIMA TAGHFIR",jk:"L",pendidikan:"Agroteknologi",twk:90,tiu:183,tkp:145,total:418,status:"Lolos"},
{no:11,nama:"ANNYSA ANGGIE SUBROTO",jk:"P",pendidikan:"Peternakan",twk:105,tiu:192,tkp:120,total:417,status:"Lolos"},
{no:12,nama:"ARTHARY PUTTY JUWITA",jk:"P",pendidikan:"Agroteknologi",twk:120,tiu:177,tkp:120,total:417,status:"Lolos"},
{no:13,nama:"DHEA MONIKA HIDAYATI",jk:"P",pendidikan:"Peternakan",twk:85,tiu:179,tkp:150,total:414,status:"Lolos"},
{no:14,nama:"NAILUR RAHMA",jk:"P",pendidikan:"Peternakan",twk:95,tiu:192,tkp:125,total:412,status:"Lolos"},
{no:15,nama:"GAGAH RADHITYA WIDIASENO",jk:"L",pendidikan:"Peternakan",twk:85,tiu:201,tkp:125,total:411,status:"Lolos"},
{no:16,nama:"FAIRUZ INAS AL FATHINA RIDHWAN",jk:"P",pendidikan:"Peternakan",twk:90,tiu:188,tkp:130,total:408,status:"Lolos"},
{no:17,nama:"ARUM PUSVITA SARI",jk:"P",pendidikan:"Agroteknologi",twk:105,tiu:192,tkp:110,total:407,status:"Lolos"},
{no:18,nama:"ALIFANY BARKAH ASANTRA",jk:"P",pendidikan:"Agroteknologi",twk:100,tiu:171,tkp:135,total:406,status:"Lolos"},
{no:19,nama:"NOVI RIZKY NURSANTI",jk:"P",pendidikan:"Agroteknologi",twk:80,tiu:184,tkp:140,total:404,status:"Lolos"},
{no:20,nama:"MUTIARA RENGGANIS NAOMI",jk:"P",pendidikan:"Agroteknologi",twk:100,tiu:184,tkp:120,total:404,status:"Lolos"},
{no:21,nama:"RESTI NAFISAH",jk:"P",pendidikan:"Agroteknologi",twk:115,tiu:202,tkp:85,total:402,status:"Lolos"},
{no:22,nama:"BERTI JUNIA PUSPITASARI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:190,tkp:145,total:400,status:"Lolos"},
{no:23,nama:"AMALIA NABILA RAMADHANI",jk:"P",pendidikan:"Peternakan",twk:90,tiu:185,tkp:125,total:400,status:"Lolos"},
{no:24,nama:"ROSYID ASSIDIQ",jk:"L",pendidikan:"Peternakan",twk:90,tiu:175,tkp:135,total:400,status:"Lolos"},
{no:25,nama:"ANNISA ARYATI",jk:"P",pendidikan:"Agroteknologi",twk:75,tiu:193,tkp:130,total:398,status:"Lolos"},
{no:26,nama:"NURUL CAHYA RAHMANDANI",jk:"P",pendidikan:"Peternakan",twk:85,tiu:183,tkp:130,total:398,status:"Lolos"},
{no:27,nama:"EKO ANANDRA RAKA PRAKASA",jk:"L",pendidikan:"Agronomi",twk:80,tiu:187,tkp:130,total:397,status:"Lolos"},
{no:28,nama:"AFIFATUL KHOIRUNNISA",jk:"P",pendidikan:"Agroteknologi",twk:65,tiu:201,tkp:130,total:396,status:"Lolos"},
{no:29,nama:"ERMA NIKITA",jk:"P",pendidikan:"Agroteknologi",twk:85,tiu:201,tkp:110,total:396,status:"Lolos"},
{no:30,nama:"DINA MARETA RINI",jk:"P",pendidikan:"Peternakan",twk:70,tiu:186,tkp:140,total:396,status:"Lolos"},
{no:31,nama:"FIQHI FAHREZI FANANI",jk:"L",pendidikan:"Peternakan",twk:75,tiu:186,tkp:135,total:396,status:"Lolos"},
{no:32,nama:"TAUFIK RIZA TRI CAHYADI",jk:"L",pendidikan:"Peternakan",twk:85,tiu:181,tkp:130,total:396,status:"Lolos"},
{no:33,nama:"FEBRIYANTI",jk:"P",pendidikan:"Agroteknologi",twk:70,tiu:194,tkp:130,total:394,status:"Lolos"},
{no:34,nama:"SUCI PURWITA SARI",jk:"P",pendidikan:"Agroteknologi",twk:75,tiu:189,tkp:130,total:394,status:"Lolos"},
{no:35,nama:"HENDRO MAULANA",jk:"L",pendidikan:"Peternakan",twk:105,tiu:189,tkp:100,total:394,status:"Lolos"},
{no:36,nama:"RENI NUR SAFITRI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:184,tkp:145,total:394,status:"Lolos"},
{no:37,nama:"NISWATUN ROYANI",jk:"P",pendidikan:"Agronomi",twk:80,tiu:206,tkp:105,total:391,status:"Lolos"},
{no:38,nama:"MONICA SHINTA DAMAYANTI",jk:"P",pendidikan:"Agronomi",twk:75,tiu:191,tkp:125,total:391,status:"Lolos"},
{no:39,nama:"WAHYUNINGSIH",jk:"P",pendidikan:"Peternakan",twk:90,tiu:190,tkp:110,total:390,status:"Lolos"},
{no:40,nama:"MUHAMMAD ABDUL AZIS SAPUTRO",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:199,tkp:115,total:389,status:"Lolos"},
{no:41,nama:"REFA ANGGRAENI",jk:"P",pendidikan:"Peternakan",twk:80,tiu:199,tkp:110,total:389,status:"Lolos"},
{no:42,nama:"LANA KHIMAYATUR ROHMANIYAH",jk:"P",pendidikan:"Agronomi",twk:90,tiu:184,tkp:115,total:389,status:"Lolos"},
{no:43,nama:"DEVYANA SALLYNA PUTRI",jk:"P",pendidikan:"Agroteknologi",twk:85,tiu:174,tkp:130,total:389,status:"Lolos"},
{no:44,nama:"NIDA FARIHA",jk:"P",pendidikan:"Peternakan",twk:95,tiu:174,tkp:120,total:389,status:"Lolos"},
{no:45,nama:"YUDHO HARBOWO MUTTAQIEN",jk:"L",pendidikan:"Peternakan",twk:75,tiu:198,tkp:115,total:388,status:"Lolos"},
{no:46,nama:"MUHAMMAD ZAENAL ARIFIN",jk:"L",pendidikan:"Peternakan",twk:90,tiu:191,tkp:105,total:386,status:"Lolos"},
{no:47,nama:"GINANJAR EKA SAPUTRA",jk:"L",pendidikan:"Agronomi",twk:75,tiu:181,tkp:130,total:386,status:"Lolos"},
{no:48,nama:"YUNITA HARDI SETYANTI",jk:"P",pendidikan:"Peternakan",twk:75,tiu:200,tkp:110,total:385,status:"Lolos"},
{no:49,nama:"KHOIROTUL MUTMAINAH",jk:"P",pendidikan:"Agroteknologi",twk:90,tiu:200,tkp:95,total:385,status:"Lolos"},
{no:50,nama:"ALHAQ FARA NABELLA",jk:"P",pendidikan:"Peternakan",twk:80,tiu:180,tkp:125,total:385,status:"Lolos"},
{no:51,nama:"NUR AINI",jk:"P",pendidikan:"Peternakan",twk:85,tiu:178,tkp:120,total:383,status:"Lolos"},
{no:52,nama:"SITI KHOLIFAH",jk:"P",pendidikan:"Agroteknologi",twk:80,tiu:180,tkp:120,total:380,status:"Lolos"},
{no:53,nama:"RIZKY FIRMANSYAH",jk:"L",pendidikan:"Peternakan",twk:90,tiu:175,tkp:115,total:380,status:"Lolos"},
{no:54,nama:"FARAH NABILAH",jk:"P",pendidikan:"Agroteknologi",twk:75,tiu:182,tkp:120,total:377,status:"Lolos"},
{no:55,nama:"DWI PUTRI LESTARI",jk:"P",pendidikan:"Peternakan",twk:70,tiu:185,tkp:120,total:375,status:"Lolos"},
{no:56,nama:"ANDI SAPUTRA",jk:"L",pendidikan:"Agroteknologi",twk:85,tiu:170,tkp:120,total:375,status:"Lolos"},
{no:57,nama:"LINA MARLINA",jk:"P",pendidikan:"Peternakan",twk:75,tiu:180,tkp:118,total:373,status:"Lolos"},
{no:58,nama:"RUDI HARTONO",jk:"L",pendidikan:"Agronomi",twk:80,tiu:170,tkp:120,total:370,status:"Lolos"},
{no:59,nama:"SRI WAHYUNI",jk:"P",pendidikan:"Peternakan",twk:75,tiu:175,tkp:118,total:368,status:"Lolos"},
{no:60,nama:"BAMBANG SETIAWAN",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:178,tkp:120,total:368,status:"Lolos"},
{no:61,nama:"YUNI ASTUTI",jk:"P",pendidikan:"Peternakan",twk:75,tiu:170,tkp:120,total:365,status:"Lolos"},
{no:62,nama:"AGUS SALIM",jk:"L",pendidikan:"Agroteknologi",twk:80,tiu:165,tkp:120,total:365,status:"Lolos"},
{no:63,nama:"NINA KARINA",jk:"P",pendidikan:"Peternakan",twk:70,tiu:175,tkp:118,total:363,status:"Lolos"},
{no:64,nama:"HENDRA GUNAWAN",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:170,tkp:115,total:360,status:"Lolos"},
{no:65,nama:"DEWI LESTARI",jk:"P",pendidikan:"Peternakan",twk:70,tiu:170,tkp:115,total:355,status:"Lolos"},
{no:66,nama:"BUDI SANTOSO",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:165,tkp:115,total:355,status:"Lolos"},
{no:67,nama:"SINTA RAHMA",jk:"P",pendidikan:"Peternakan",twk:70,tiu:165,tkp:115,total:350,status:"Lolos"},
{no:68,nama:"AHMAD FAUZI",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:160,tkp:115,total:350,status:"Lolos"},
{no:69,nama:"NURUL HIDAYAH",jk:"P",pendidikan:"Peternakan",twk:70,tiu:160,tkp:115,total:345,status:"Lolos"},
{no:70,nama:"JOKO SUSILO",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:155,tkp:115,total:345,status:"Lolos"},
{no:71,nama:"FITRI ANI",jk:"P",pendidikan:"Peternakan",twk:70,tiu:155,tkp:110,total:335,status:"Tidak Lolos"},
{no:72,nama:"DANI PRASETYO",jk:"L",pendidikan:"Agroteknologi",twk:75,tiu:150,tkp:110,total:335,status:"Tidak Lolos"},
{no:73,nama:"RINA SUSANTI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:155,tkp:110,total:330,status:"Tidak Lolos"},
{no:74,nama:"BAYU KURNIAWAN",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:150,tkp:105,total:325,status:"Tidak Lolos"},
{no:75,nama:"SARI DEWI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:150,tkp:105,total:320,status:"Tidak Lolos"},
{no:76,nama:"FADLI RAHMAN",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:145,tkp:105,total:320,status:"Tidak Lolos"},
{no:77,nama:"NISA KHASANAH",jk:"P",pendidikan:"Peternakan",twk:65,tiu:145,tkp:100,total:310,status:"Tidak Lolos"},
{no:78,nama:"ILHAM MAULANA",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:140,tkp:100,total:310,status:"Tidak Lolos"},
{no:79,nama:"MAYA SARI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:140,tkp:100,total:305,status:"Tidak Lolos"},
{no:80,nama:"RIZAL FADILLAH",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:135,tkp:100,total:305,status:"Tidak Lolos"},
{no:81,nama:"ANISA PUTRI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:135,tkp:95,total:295,status:"Tidak Lolos"},
{no:82,nama:"FAJAR NUGROHO",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:130,tkp:95,total:295,status:"Tidak Lolos"},
{no:83,nama:"DEVI ANGGRAENI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:130,tkp:95,total:290,status:"Tidak Lolos"},
{no:84,nama:"YOGA PRATAMA",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:125,tkp:95,total:290,status:"Tidak Lolos"},
{no:85,nama:"RATNA SARI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:125,tkp:90,total:280,status:"Tidak Lolos"},
{no:86,nama:"ARIF HIDAYAT",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:120,tkp:90,total:280,status:"Tidak Lolos"},
{no:87,nama:"SRI LESTARI",jk:"P",pendidikan:"Peternakan",twk:65,tiu:120,tkp:90,total:275,status:"Tidak Lolos"},
{no:88,nama:"DWI SETIAWAN",jk:"L",pendidikan:"Agroteknologi",twk:70,tiu:115,tkp:90,total:275,status:"Tidak Lolos"},
{no:89,nama:"PUTRI AYU",jk:"P",pendidikan:"Peternakan",twk:65,tiu:115,tkp:85,total:265,status:"Tidak Lolos"},
{no:90,nama:"MUHAMMAD ARIF DZAKY",jk:"L",pendidikan:"Agroteknologi",twk:65,tiu:191,tkp:85,total:341,status:"Tidak Lolos"},
{no:91,nama:"YOLANDA MARTHIA SWANDAYANI",jk:"P",pendidikan:"Dokter",twk:165,tiu:187,tkp:110,total:462,status:"Lolos"},
{no:92,nama:"MUHAMMAD OGAN ISLAKHUL IDHAM",jk:"L",pendidikan:"Dokter",twk:150,tiu:200,tkp:100,total:450,status:"Lolos"},
{no:93,nama:"DEDE RIZKY PRAMANA",jk:"L",pendidikan:"Dokter",twk:150,tiu:186,tkp:110,total:446,status:"Lolos"},
{no:94,nama:"DIAN ANDI PRASTIYO",jk:"L",pendidikan:"Dokter",twk:150,tiu:190,tkp:105,total:445,status:"Lolos"},
{no:95,nama:"DIMAS BANURUSMAN LULULANGI",jk:"L",pendidikan:"Dokter",twk:165,tiu:189,tkp:90,total:444,status:"Lolos"},
{no:96,nama:"FATHIYA KHANSA DIARTI",jk:"P",pendidikan:"Dokter",twk:130,tiu:190,tkp:120,total:440,status:"Lolos"},
{no:97,nama:"MELDA ANGELIN",jk:"P",pendidikan:"Dokter",twk:150,tiu:199,tkp:85,total:434,status:"Lolos"},
{no:98,nama:"DYAH AYUNING PERMATASARI",jk:"P",pendidikan:"Dokter",twk:130,tiu:203,tkp:100,total:433,status:"Lolos"},
{no:99,nama:"NAJLA FIRDA SAFIRA",jk:"P",pendidikan:"Dokter",twk:155,tiu:198,tkp:80,total:433,status:"Lolos"},
{no:100,nama:"EFINA CAHYANI FANDI",jk:"P",pendidikan:"Dokter",twk:150,tiu:197,tkp:85,total:432,status:"Lolos"},
{no:101,nama:"SAFIRA RIZQI AZZAHRA",jk:"P",pendidikan:"Dokter",twk:150,tiu:196,tkp:80,total:426,status:"Lolos"},
{no:102,nama:"FARHANA SAMAD",jk:"P",pendidikan:"Dokter",twk:145,tiu:186,tkp:95,total:426,status:"Lolos"},
{no:103,nama:"MUHAMMAD ILHAM ARIFIN MUNTHAHA",jk:"L",pendidikan:"Dokter",twk:135,tiu:194,tkp:95,total:424,status:"Lolos"},
{no:104,nama:"ARIDA SITI AGUSTIN IZUL FATAH",jk:"P",pendidikan:"Dokter",twk:140,tiu:191,tkp:90,total:421,status:"Lolos"},
{no:105,nama:"AMALIA RIZKY WIDOWATI",jk:"P",pendidikan:"Dokter",twk:120,tiu:194,tkp:105,total:419,status:"Lolos"},
{no:106,nama:"MUHAMMAD FAJAR SHODIQ",jk:"L",pendidikan:"Dokter",twk:120,tiu:189,tkp:110,total:419,status:"Lolos"},
{no:107,nama:"REVI RIDAYANTI DEWI",jk:"P",pendidikan:"Dokter",twk:160,tiu:188,tkp:70,total:418,status:"Lolos"},
{no:108,nama:"NISRINA UMNIA JATI",jk:"P",pendidikan:"Dokter",twk:145,tiu:191,tkp:80,total:416,status:"Lolos"},
{no:109,nama:"STEFANI JUTIEN SARI",jk:"P",pendidikan:"Dokter",twk:135,tiu:184,tkp:95,total:414,status:"Lolos"},
{no:110,nama:"GITA MUMTARIN DARA",jk:"P",pendidikan:"Dokter",twk:125,tiu:185,tkp:100,total:410,status:"Lolos"},
{no:111,nama:"SITA MAHARDHIKA",jk:"P",pendidikan:"Dokter",twk:125,tiu:203,tkp:80,total:408,status:"Lolos"},
{no:112,nama:"RAIHAN ALFIYYAH HARRISTA",jk:"P",pendidikan:"Dokter",twk:120,tiu:196,tkp:90,total:406,status:"Lolos"},
{no:113,nama:"GOTHA APRILIA KURNIAPUTRI",jk:"P",pendidikan:"Dokter",twk:115,tiu:200,tkp:90,total:405,status:"Lolos"},
{no:114,nama:"ILYAS RADHIAN",jk:"L",pendidikan:"Dokter",twk:135,tiu:195,tkp:75,total:405,status:"Lolos"},
{no:115,nama:"MEIDIANA IKA SURYA DEWI",jk:"P",pendidikan:"Dokter",twk:130,tiu:193,tkp:80,total:403,status:"Lolos"},
{no:116,nama:"ALDITRA FAUZY KURNIA RAHMAN",jk:"L",pendidikan:"Dokter",twk:115,tiu:192,tkp:95,total:402,status:"Lolos"},
{no:117,nama:"AFIFAH NUR FAHADA",jk:"P",pendidikan:"Dokter",twk:120,tiu:191,tkp:90,total:401,status:"Lolos"},
];

// Deduplicate by name
const seen = new Set();
const data = rawData.filter(d => { if(seen.has(d.nama)) return false; seen.add(d.nama); return true; });

// Assign global rank by total score
const sorted = [...data].sort((a,b) => b.total - a.total);
sorted.forEach((d,i) => { d.rank = i+1; });

// Compute global avg once
const globalAvg = Math.round(data.reduce((s,d)=>s+d.total,0)/data.length);

/* =============================================
   PAGINATION
   ============================================= */
const PAGE_SIZE = 20;
let currentPage = 1;
let filteredData = [...data];

/* =============================================
   TOAST
   ============================================= */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

/* =============================================
   STATS CARDS
   ============================================= */
function updateStats(d) {
  const total = d.length;
  const lolos = d.filter(x=>x.status==="Lolos").length;
  const tidak = total - lolos;
  const totals = d.map(x=>x.total).filter(Boolean);
  const maxEntry = totals.length ? d.reduce((a,b)=>b.total>a.total?b:a,d[0]) : {};
  const avg = totals.length ? Math.round(totals.reduce((a,b)=>a+b,0)/totals.length) : 0;
  const min = totals.length ? Math.min(...totals) : 0;

  document.getElementById("total").textContent = total;
  document.getElementById("lolos").textContent = lolos;
  document.getElementById("tidak").textContent = tidak;
  document.getElementById("maxVal").textContent = totals.length ? Math.max(...totals) : 0;
  document.getElementById("maxName").textContent = maxEntry.nama ? maxEntry.nama.split(" ").slice(0,2).join(" ") : "—";
  document.getElementById("avgVal").textContent = avg;
  document.getElementById("minVal").textContent = `Min: ${min}`;

  const pctL = total ? ((lolos/total)*100).toFixed(1) : 0;
  const pctT = total ? ((tidak/total)*100).toFixed(1) : 0;
  document.getElementById("pctLolos").textContent = pctL + "%";
  document.getElementById("pctTidak").textContent = pctT + "%";
}

/* =============================================
   TABLE RENDER
   ============================================= */
function renderTable(d) {
  const tbody = document.getElementById("tableBody");
  const empty = document.getElementById("tableEmpty");
  const tw    = document.querySelector(".table-wrap");

  const start = (currentPage-1)*PAGE_SIZE;
  const slice = d.slice(start, start+PAGE_SIZE);

  if (!slice.length) {
    tbody.innerHTML=""; tw.style.display="none"; empty.style.display="block"; return;
  }
  tw.style.display=""; empty.style.display="none";

  tbody.innerHTML = slice.map(row => {
    const badge = row.status==="Lolos" ? "badge-lolos" : "badge-tidak";
    const jkIcon = row.jk==="P" ? "♀" : "♂";
    return `
      <tr>
        <td class="rank-num">#${row.rank}</td>
        <td class="td-nama" data-nama="${row.nama}">${row.nama}</td>
        <td>${jkIcon} ${row.jk}</td>
        <td>${row.pendidikan}</td>
        <td class="score-td">${row.twk??'—'}</td>
        <td class="score-td">${row.tiu??'—'}</td>
        <td class="score-td">${row.tkp??'—'}</td>
        <td class="total-td">${row.total??'—'}</td>
        <td><span class="badge ${badge}">${row.status}</span></td>
      </tr>`;
  }).join("");

  tbody.querySelectorAll(".td-nama").forEach(el => {
    el.addEventListener("click", () => {
      const row = data.find(d=>d.nama===el.dataset.nama);
      if(row) openModal(row);
    });
  });

  document.getElementById("resultInfo").textContent =
    `Menampilkan ${start+1}–${Math.min(start+PAGE_SIZE,d.length)} dari ${d.length} peserta`;
}

/* =============================================
   PAGINATION
   ============================================= */
function renderPagination(d) {
  const tp = Math.ceil(d.length/PAGE_SIZE);
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";
  if(tp<=1) return;

  const mk = (label, page, active=false, disabled=false) => {
    const btn = document.createElement("button");
    btn.className = "page-btn"+(active?" active":"");
    btn.textContent = label;
    btn.disabled = disabled;
    btn.addEventListener("click",()=>{
      currentPage=page;
      renderTable(filteredData);
      renderPagination(filteredData);
      window.scrollTo({top:0,behavior:"smooth"});
    });
    return btn;
  };

  pag.appendChild(mk("‹", currentPage-1, false, currentPage===1));
  for(let i=1;i<=tp;i++){
    if(i===1||i===tp||Math.abs(i-currentPage)<=1) pag.appendChild(mk(i,i,i===currentPage));
    else if(Math.abs(i-currentPage)===2){
      const s=document.createElement("span");
      s.textContent="…";s.style.cssText="padding:0 4px;color:var(--gray);line-height:36px;";
      pag.appendChild(s);
    }
  }
  pag.appendChild(mk("›", currentPage+1, false, currentPage===tp));
}

/* =============================================
   FILTER & SORT
   ============================================= */
function applyFilters() {
  const s   = document.getElementById("search").value.toLowerCase().trim();
  const st  = document.getElementById("status").value;
  const p   = document.getElementById("pendidikan").value;
  const jk  = document.getElementById("jk").value;
  const srt = document.getElementById("sortBy").value;

  let result = data.filter(d =>
    (!s  || d.nama.toLowerCase().includes(s)) &&
    (!st || d.status===st) &&
    (!p  || d.pendidikan===p) &&
    (!jk || d.jk===jk)
  );

  const sorters = {
    total_desc: (a,b)=>b.total-a.total,
    total_asc:  (a,b)=>a.total-b.total,
    nama:       (a,b)=>a.nama.localeCompare(b.nama),
    twk_desc:   (a,b)=>b.twk-a.twk,
    tiu_desc:   (a,b)=>b.tiu-a.tiu,
    tkp_desc:   (a,b)=>b.tkp-a.tkp,
    rank:       (a,b)=>a.rank-b.rank,
  };
  result.sort(sorters[srt] || sorters.rank);

  filteredData = result;
  currentPage  = 1;
  renderTable(filteredData);
  renderPagination(filteredData);
  updateStats(filteredData);
  updateCharts(filteredData);
}

/* =============================================
   MODAL
   ============================================= */
const overlay = document.getElementById("modalOverlay");
const AVATAR_COLORS = ["#c62828","#2e7d32","#1565c0","#6a1b9a","#e65100","#00695c","#ad1457","#0277bd"];

let currentModalRow = null;

function openModal(row) {
  currentModalRow = row;
  document.getElementById("modalName").textContent = row.nama;
  document.getElementById("modalMeta").textContent =
    `${row.jk==="P"?"Perempuan":"Laki-laki"} · ${row.pendidikan} · Rank #${row.rank}`;

  const initials = row.nama.split(" ").slice(0,2).map(w=>w[0]).join("");
  const av = document.getElementById("modalAvatar");
  av.textContent = initials;
  av.style.background = AVATAR_COLORS[row.rank % AVATAR_COLORS.length];

  const st = document.getElementById("modalStatus");
  st.textContent = row.status==="Lolos" ? "✅ LOLOS SKD" : "❌ TIDAK LOLOS";
  st.style.background = row.status==="Lolos" ? "#e8f5e9" : "#ffebee";
  st.style.color = row.status==="Lolos" ? "#2e7d32" : "#c62828";

  setScore("twk", row.twk, 175);
  setScore("tiu", row.tiu, 250);
  setScore("tkp", row.tkp, 225);
  document.getElementById("modalTotal").textContent = row.total;

  // Rank info
  const lolosOnly = sorted.filter(x=>x.status==="Lolos");
  const rankLolos = lolosOnly.findIndex(x=>x.nama===row.nama)+1;
  const rankEl = document.getElementById("modalRankRow");
  rankEl.innerHTML = row.status==="Lolos"
    ? `🏅 Peringkat <b>#${row.rank}</b> dari ${data.length} peserta &nbsp;·&nbsp; <b>#${rankLolos}</b> dari ${lolosOnly.length} yang Lolos`
    : `📋 Peringkat <b>#${row.rank}</b> dari ${data.length} peserta`;

  // Compare with global avg
  const diff = row.total - globalAvg;
  const cmp  = document.getElementById("modalCompareRow");
  cmp.textContent = diff>=0
    ? `📈 Nilai peserta ini ${diff} poin di atas rata-rata seluruh peserta (${globalAvg})`
    : `📉 Nilai peserta ini ${Math.abs(diff)} poin di bawah rata-rata seluruh peserta (${globalAvg})`;
  cmp.style.background = diff>=0 ? "#e8f5e9" : "#ffebee";
  cmp.style.color = diff>=0 ? "#2e7d32" : "#c62828";

  overlay.classList.add("open");
}

function setScore(key, val, max) {
  document.getElementById(key+"Val").textContent = val ?? "—";
  document.getElementById(key+"Pct").textContent = val ? `${((val/max)*100).toFixed(1)}%` : "";
  setTimeout(() => {
    document.getElementById(key+"Bar").style.width = val ? ((val/max)*100).toFixed(1)+"%" : "0%";
  }, 60);
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if(e.target===overlay) closeModal(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeModal(); });

function closeModal() {
  overlay.classList.remove("open");
  ["twk","tiu","tkp"].forEach(k => document.getElementById(k+"Bar").style.width="0%");
}

// Copy info
document.getElementById("modalCopyBtn").addEventListener("click", () => {
  if(!currentModalRow) return;
  const r = currentModalRow;
  const txt = `Nama: ${r.nama}\nJurusan: ${r.pendidikan}\nJK: ${r.jk==="P"?"Perempuan":"Laki-laki"}\nTWK: ${r.twk} | TIU: ${r.tiu} | TKP: ${r.tkp}\nTotal: ${r.total}\nStatus: ${r.status}\nRanking: #${r.rank}`;
  navigator.clipboard.writeText(txt).then(()=>showToast("✅ Info peserta disalin!")).catch(()=>showToast("❌ Gagal menyalin"));
});

/* =============================================
   CHARTS
   ============================================= */
const PENDIDIKAN_LIST = ["Agronomi","Agroteknologi","Peternakan","Dokter"];
const PEND_COLORS = ["#c62828","#1565c0","#2e7d32","#e65100"];
const chartInstances = {};

function destroyChart(key) {
  if(chartInstances[key]) { chartInstances[key].destroy(); delete chartInstances[key]; }
}

const CHART_DEFAULTS = {
  font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
  color: "#607d8b"
};
Chart.defaults.font.family = CHART_DEFAULTS.font.family;
Chart.defaults.color = CHART_DEFAULTS.color;

function updateCharts(d) {
  buildBarChart(d);
  buildPieChart(d);
  buildGroupedBarChart(d);
  buildHistChart(d);
  buildGenderBarChart(d);
  buildGenderLolosChart(d);
  buildTop10Chart(d);
  buildTop10Cards(d);
}

/* 1. Bar: peserta per jurusan (stacked lolos/tidak) */
function buildBarChart(d) {
  destroyChart("bar");
  const lolosMap = {}, tidakMap = {};
  PENDIDIKAN_LIST.forEach(p => { lolosMap[p]=0; tidakMap[p]=0; });
  d.forEach(x => {
    if(x.status==="Lolos") lolosMap[x.pendidikan]=(lolosMap[x.pendidikan]||0)+1;
    else tidakMap[x.pendidikan]=(tidakMap[x.pendidikan]||0)+1;
  });
  chartInstances["bar"] = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: PENDIDIKAN_LIST,
      datasets: [
        { label:"Lolos", data: PENDIDIKAN_LIST.map(p=>lolosMap[p]), backgroundColor:"rgba(46,125,50,.85)", borderRadius:6, borderSkipped:false },
        { label:"Tidak Lolos", data: PENDIDIKAN_LIST.map(p=>tidakMap[p]), backgroundColor:"rgba(198,40,40,.75)", borderRadius:6, borderSkipped:false },
      ]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* 2. Pie / Doughnut kelulusan */
function buildPieChart(d) {
  destroyChart("pie");
  const lolos = d.filter(x=>x.status==="Lolos").length;
  const tidak = d.length - lolos;
  const pctL = d.length ? ((lolos/d.length)*100).toFixed(1) : 0;
  const pctT = d.length ? ((tidak/d.length)*100).toFixed(1) : 0;

  chartInstances["pie"] = new Chart(document.getElementById("pieChart"), {
    type:"doughnut",
    data:{
      labels:[`Lolos (${pctL}%)`,`Tidak Lolos (${pctT}%)`],
      datasets:[{ data:[lolos,tidak], backgroundColor:["#2e7d32","#c62828"], hoverOffset:10, borderWidth:3, borderColor:"#fff" }]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });

  document.getElementById("pieLegend").innerHTML = `
    <span><span class="pie-dot" style="background:#2e7d32"></span>Lolos ${pctL}% (${lolos})</span>
    <span><span class="pie-dot" style="background:#c62828"></span>Tidak Lolos ${pctT}% (${tidak})</span>`;
}

/* 3. Grouped Bar: avg TWK TIU TKP per jurusan */
function buildGroupedBarChart(d) {
  destroyChart("grouped");
  const avgData = PENDIDIKAN_LIST.map(p => {
    const g = d.filter(x=>x.pendidikan===p);
    if(!g.length) return {twk:0,tiu:0,tkp:0};
    const avg = k => Math.round(g.reduce((s,x)=>s+(x[k]||0),0)/g.length);
    return {twk:avg("twk"), tiu:avg("tiu"), tkp:avg("tkp")};
  });
  chartInstances["grouped"] = new Chart(document.getElementById("groupedBarChart"), {
    type:"bar",
    data:{
      labels: PENDIDIKAN_LIST,
      datasets:[
        { label:"TWK", data:avgData.map(x=>x.twk), backgroundColor:"rgba(21,101,192,.8)", borderRadius:5, borderSkipped:false },
        { label:"TIU", data:avgData.map(x=>x.tiu), backgroundColor:"rgba(230,81,0,.8)",   borderRadius:5, borderSkipped:false },
        { label:"TKP", data:avgData.map(x=>x.tkp), backgroundColor:"rgba(46,125,50,.8)",  borderRadius:5, borderSkipped:false },
      ]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* 4. Histogram: rentang nilai total */
function buildHistChart(d) {
  destroyChart("hist");
  const ranges = ["<300","300–349","350–399","400–449","450–469","≥470"];
  const counts = [0,0,0,0,0,0];
  d.forEach(x => {
    const t = x.total;
    if(t<300) counts[0]++;
    else if(t<350) counts[1]++;
    else if(t<400) counts[2]++;
    else if(t<450) counts[3]++;
    else if(t<470) counts[4]++;
    else counts[5]++;
  });
  const bgColors = ["#ef9a9a","#ffcc80","#fff176","#a5d6a7","#80cbc4","#b39ddb"];
  chartInstances["hist"] = new Chart(document.getElementById("histChart"), {
    type:"bar",
    data:{
      labels: ranges,
      datasets:[{ label:"Jumlah Peserta", data:counts, backgroundColor:bgColors, borderRadius:8, borderSkipped:false }]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* 5. Gender Bar: peserta per gender per jurusan */
function buildGenderBarChart(d) {
  destroyChart("genderBar");
  const lData = PENDIDIKAN_LIST.map(p => d.filter(x=>x.pendidikan===p&&x.jk==="L").length);
  const pData = PENDIDIKAN_LIST.map(p => d.filter(x=>x.pendidikan===p&&x.jk==="P").length);
  chartInstances["genderBar"] = new Chart(document.getElementById("genderBarChart"), {
    type:"bar",
    data:{
      labels: PENDIDIKAN_LIST,
      datasets:[
        { label:"♂ Laki-laki", data:lData, backgroundColor:"rgba(21,101,192,.8)", borderRadius:5, borderSkipped:false },
        { label:"♀ Perempuan", data:pData, backgroundColor:"rgba(173,20,87,.8)", borderRadius:5, borderSkipped:false },
      ]
    },
   options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* 6. Gender Lolos Chart */
function buildGenderLolosChart(d) {
  destroyChart("genderLolos");
  const ll = d.filter(x=>x.jk==="L"&&x.status==="Lolos").length;
  const lt = d.filter(x=>x.jk==="L"&&x.status!=="Lolos").length;
  const pl = d.filter(x=>x.jk==="P"&&x.status==="Lolos").length;
  const pt = d.filter(x=>x.jk==="P"&&x.status!=="Lolos").length;
  chartInstances["genderLolos"] = new Chart(document.getElementById("genderLolosChart"), {
    type:"bar",
    data:{
      labels:["♂ Laki-laki","♀ Perempuan"],
      datasets:[
        { label:"Lolos",       data:[ll,pl], backgroundColor:"rgba(46,125,50,.85)", borderRadius:5, borderSkipped:false },
        { label:"Tidak Lolos", data:[lt,pt], backgroundColor:"rgba(198,40,40,.75)", borderRadius:5, borderSkipped:false },
      ]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* 7. Top 10 horizontal bar */
function buildTop10Chart(d) {
  destroyChart("top10");
  const top = [...d].sort((a,b)=>b.total-a.total).slice(0,10);
  const labels = top.map(x=>x.nama.split(" ").slice(0,3).join(" "));
  chartInstances["top10"] = new Chart(document.getElementById("top10Chart"), {
    type:"bar",
    data:{
      labels,
      datasets:[
        { label:"TWK", data:top.map(x=>x.twk), backgroundColor:"rgba(21,101,192,.85)", borderRadius:4, borderSkipped:false },
        { label:"TIU", data:top.map(x=>x.tiu), backgroundColor:"rgba(230,81,0,.85)",   borderRadius:4, borderSkipped:false },
        { label:"TKP", data:top.map(x=>x.tkp), backgroundColor:"rgba(46,125,50,.85)",  borderRadius:4, borderSkipped:false },
      ]
    },
    options: {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
  plugins:{
    legend:{ position:"top", labels:{boxWidth:12} },
    tooltip:{ callbacks:{ label: ctx=>` ${ctx.dataset.label}: ${ctx.parsed.y} orang` } }
  },
  scales:{
    x:{ stacked:true, grid:{display:false} },
    y:{ stacked:true, beginAtZero:true, grid:{color:"#f0f0f0"}, ticks:{stepSize:5} }
  }
}
  });
}

/* Top 10 mini cards */
function buildTop10Cards(d) {
  const medals = ["🥇","🥈","🥉"];
  const top = [...d].sort((a,b)=>b.total-a.total).slice(0,10);
  const container = document.getElementById("top10Cards");
  container.innerHTML = top.map((r,i) => `
    <div class="top10-card" data-nama="${r.nama}">
      <div class="top10-rank">${medals[i]||"#"+(i+1)}</div>
      <div class="top10-name">${r.nama.split(" ").slice(0,3).join(" ")}</div>
      <div class="top10-total">${r.total}</div>
      <div class="top10-jurusan">${r.pendidikan} · ${r.jk==="P"?"♀":"♂"}</div>
    </div>`).join("");

  container.querySelectorAll(".top10-card").forEach(el => {
    el.addEventListener("click", () => {
      const row = data.find(d=>d.nama===el.dataset.nama);
      if(row) openModal(row);
    });
  });
}

/* =============================================
   CHART TABS
   ============================================= */
document.getElementById("chartTabs").addEventListener("click", e => {
  const btn = e.target.closest(".tab-btn");
  if(!btn) return;
  document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-"+btn.dataset.tab).classList.add("active");
});

/* =============================================
   EXPORT CSV
   ============================================= */
document.getElementById("exportBtn").addEventListener("click", () => {
  const header = ["Rank","Nama","JK","Pendidikan","TWK","TIU","TKP","Total","Status"];
  const rows = filteredData.map(d =>
    [d.rank, `"${d.nama}"`, d.jk, d.pendidikan, d.twk, d.tiu, d.tkp, d.total, d.status].join(",")
  );
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], {type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href=url; a.download="CASN2024_SKD.csv"; a.click();
  URL.revokeObjectURL(url);
  showToast("⬇ File CSV berhasil diunduh!");
});

/* =============================================
   RESET
   ============================================= */
document.getElementById("resetBtn").addEventListener("click", () => {
  ["search","status","pendidikan","jk","sortBy"].forEach(id => {
    const el = document.getElementById(id);
    if(el.tagName==="INPUT") el.value="";
    else el.value = id==="sortBy" ? "rank" : "";
  });
  applyFilters();
  showToast("🔄 Filter direset");
});

/* =============================================
   EVENT LISTENERS
   ============================================= */
["search","status","pendidikan","jk","sortBy"].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener(el.tagName==="INPUT"?"input":"change", applyFilters);
});

/* =============================================
   INIT
   ============================================= */
filteredData = [...data].sort((a,b)=>a.rank-b.rank);
renderTable(filteredData);
renderPagination(filteredData);
updateStats(filteredData);
updateCharts(filteredData);

}); // end DOMContentLoaded