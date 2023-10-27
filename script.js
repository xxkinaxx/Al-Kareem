const city = 1301;
const date = new Date();
const dd = String(date.getDate()).padStart(2, "0"); // padstart untuk menambahkan sesuatu apabila sesuatu tersebut mencapai nilai tertentu
const mm = String(date.getMonth() + 1).padStart(2, "0");
const yyyy = date.getFullYear();


const now = yyyy + '-' + mm + '-' + dd;

// jadwal sholat API
const jadwalAPI = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalAPI)
.then(function(response){
    if (!response.ok){
        throw new Error ("API tidak dapat diakses, ada yg salah")
    }
    return response.json();
})
.then((data) => {
    const jadwal = data.data;
    const list = jadwal.jadwal;
    const listJadwal = document.getElementById('list-jadwal');
    const kota = document.getElementById('city');
    const prov = document.getElementById('prov');

    kota.innerHTML = jadwal.lokasi;
    prov.innerHTML = jadwal.daerah;

    list.forEach((el) => {
        const tr = document.createElement("tr");

        // const
        const dd = document.createElement("td");
        const imsak = document.createElement("td");
        const subuh = document.createElement("td");
        const terbit = document.createElement("td");
        const dhuha = document.createElement("td");
        const dzuhur = document.createElement("td");
        const ashar = document.createElement("td");
        const maghrib = document.createElement("td");
        const isya = document.createElement("td");
        // inner text
        dd.innerText = el.tanggal;
        imsak.innerText = el.imsak;
        subuh.innerText = el.subuh;
        terbit.innerText = el.terbit;
        dhuha.innerText = el.dhuha;
        dzuhur.innerText = el.dzuhur;
        ashar.innerText = el.ashar;
        maghrib.innerText = el.maghrib;
        isya.innerText = el.isya;
        dd.classList.add("date");
        // appendchild
        listJadwal.appendChild(tr);
        tr.appendChild(dd)
        tr.appendChild(imsak)
        tr.appendChild(subuh)
        tr.appendChild(terbit)
        tr.appendChild(dhuha)
        tr.appendChild(dzuhur)
        tr.appendChild(ashar)
        tr.appendChild(maghrib)
        tr.appendChild(isya)
    });
})