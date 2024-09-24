const express = require("express") // import modul express
const app = express() // inisialisasi express
const port = 3000 //port


app.get("/", (req, res)=>{
    res.send("Hello");
});
//get = mengambil
app.get("/about",(req, res)=>{
    // res.send("About us");
    res.sendFile(__dirname+"/about.html");
})
//put = update

app.get("/contact", (req, res)=>{
    // res.send("Contact Us");
    res.sendFile(__dirname+"/contact.html");
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