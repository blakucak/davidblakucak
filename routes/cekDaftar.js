var connection = require('../routes/con.js').localConnect();

module.exports = function cek (req , res , next){
    connection.query('select * from user where nim=? and password=?',[req.body.nim, req.body.password],function(err,rows){
        if(rows.length != 0){
          req.session.nim = req.body.nim;
          if(rows[0].status == "admin"){
            res.redirect('/admin');
          }else{
            res.redirect('/users');
          }
        }else{
          res.render('login',{ pesan : 'Maaf NIM atau password salah' });
        }
    });
};
