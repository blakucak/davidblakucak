var connection = require('../routes/koneksi.js').localConnect();

module.exports = function SaveRecord(req , res , next){

    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        nim      : input.nim,
        nama     : input.nama,
        fakultas : input.fakultas,
        jurusan  : input.jurusan,
        kelamin  : input.kelamin,
        password : input.password,
        status   : 'user'

    };
    connection.query("INSERT INTO user set ? ",RecordDetailParsedFromForm, function(err, rows)
    {

        if (err){
            console.log("Error inserting : %s ",err );
            res.render('register',{pesan : 'Registrasi Gagal'});
        }
        res.render('register',{pesan : 'Registrasi Berhasil'});

    });


}
