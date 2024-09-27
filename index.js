const express = require("express") // import modul express
const app = express() // inisialisasi express
const port = 3000 //port

// gunakan ejs
app.set('view engine','ejs');

app.get("/", (req, res)=>{
    // res.send("Hello");
    const berita = [
        {
            judul:"Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        }

    ];
    
    res.render('index',{title: 'Halaman Home', berita});
});

app.get("/prodi", (req, res)=>{
    
    const prodis = [
        
        // Prodi : ["Sistem Informasi"],
        // Singkatan : ["SI"],
        // Fakultas :["FIKR"]
        
            // "Prodi" : "Sistem Informasi",
            // "Fakultas"  : "FIKR",
            // "Singkatan"  : "SI"
        

            {
                "Prodi"     : "Sistem Informasi",
                "Fakultas"  : "FIKR",
                "Singkatan"  : "SI"
            },
            {
                "Prodi" : "Informatika",
                "Fakultas"  : "FIKR",
                "Singkatan"  : "IF"
            },
            {
                "Prodi" : "Teknik Elektro",
                "Fakultas"  : "FIKR",
                "Singkatan"  : "TE"
            },
            {
                "Prodi" : "Manajemen Informatika",
                "Fakultas"  : "FIKR",
                "Singkatan"  : "MI"
            },
            {
                "Prodi" : "Manajemen",
                "Fakultas"  : "FEB",
                "Singkatan"  : "MJ"
            },
            {
                "Prodi" : "Akuntansi",
                "Fakultas"  : "FEB",
                "Singkatan"  : "AK"
            },
            
        
    
    ]
    
    res.render('prodi',{title: 'Halaman prodi', prodis});
});

//get = mengambil
app.get("/about",(req, res)=>{
    // res.send("About us");
    // res.sendFile(__dirname+"/about.ejs");
    res.render('about')
})
//put = update

app.get("/contact", (req, res)=>{
    // res.send("Contact Us");
    // res.sendFile(__dirname+"/contact.ejs");
    res.render('contact')
});



//json route /mahasiswa
app.get("/mahasiswa",(req,res)=>{
    res.json({
        "status":"success",
        "message":"Data Mahasiswa",
        "data" : [
            {
                "npm" : 2226240030,
                "nama"  : "Qrizky"
            },
            {
                "npm" : 2226240030,
                "nama" : "Qrizky 2"
            },
            {
                "npm":2226240030,
                "nama":"Qrizky 3"
            }
        ]})
})

//json route /dosen
app.get("/dosen",(req,res)=>{
    res.json({
        "status":"success",
        "message":"Data Dosen",
        "data" : [
            {
                prodi:"Sistem Informasi",
               dosen: ["Iis","faris","dafid"]
                
            },
            {
                prodi:"Informatika",
                dosen: ["Derry","Siska","Yohannes"] 
            }
        ]})
})

// handle unknown route
app.use("",(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});



// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
})