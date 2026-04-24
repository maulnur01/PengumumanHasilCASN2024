document.addEventListener("DOMContentLoaded", function(){

const data = [
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

/* ================== STATISTIK ================== */
function updateStats(data){
  document.getElementById("total").innerText = data.length;
  document.getElementById("lolos").innerText = data.filter(d=>d.status=="Lolos").length;
  document.getElementById("tidak").innerText = data.filter(d=>d.status!="Lolos").length;

  const totals = data.map(d=>d.total).filter(v=>v!=null);
  document.getElementById("max").innerText = Math.max(...totals);
  document.getElementById("min").innerText = Math.min(...totals);
}

/* ================== TABLE ================== */
function renderTable(data){
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.no}</td>
        <td>${d.nama}</td>
        <td>${d.jk}</td>
        <td>${d.pendidikan}</td>
        <td>${d.twk ?? "-"}</td>
        <td>${d.tiu ?? "-"}</td>
        <td>${d.tkp ?? "-"}</td>
        <td>${d.total ?? "-"}</td>
        <td>${d.status}</td>
      </tr>
    `;
  });
}

/* ================== FILTER ================== */
function filterData(){
  const s = document.getElementById("search").value.toLowerCase();
  const st = document.getElementById("status").value;
  const p = document.getElementById("pendidikan").value;

  const filtered = data.filter(d =>
    d.nama.toLowerCase().includes(s) &&
    (st=="" || d.status==st) &&
    (p=="" || d.pendidikan==p)
  );

  renderTable(filtered);
  updateStats(filtered);
  updateChart(filtered);
}

/* ================== CHART DINAMIS ================== */
let barChart, pieChart;

function updateChart(data){

  // Hitung pendidikan
  const pendidikanMap = {};
  data.forEach(d=>{
    pendidikanMap[d.pendidikan] = (pendidikanMap[d.pendidikan] || 0) + 1;
  });

  const labelsPendidikan = Object.keys(pendidikanMap);
  const dataPendidikan = Object.values(pendidikanMap);

  // Hitung status
  const lolos = data.filter(d=>d.status=="Lolos").length;
  const tidak = data.length - lolos;

  // Destroy chart lama biar tidak bug
  if(barChart) barChart.destroy();
  if(pieChart) pieChart.destroy();

  /* BAR */
  barChart = new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
      labels: labelsPendidikan,
      datasets: [{
        label: "Jumlah Peserta",
        data: dataPendidikan
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  /* PIE */
  pieChart = new Chart(document.getElementById("pieChart"), {
    type: 'doughnut',
    data: {
      labels: ["Lolos","Tidak Lolos"],
      datasets: [{
        data: [lolos, tidak]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

/* ================== EVENT ================== */
document.getElementById("search").addEventListener("keyup", filterData);
document.getElementById("status").addEventListener("change", filterData);
document.getElementById("pendidikan").addEventListener("change", filterData);

/* ================== INIT ================== */
renderTable(data);
updateStats(data);
updateChart(data);

});