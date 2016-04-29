var connection = require('../routes/koneksi.js').localConnect();
var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');

router.get('/',function(req,res){
   if(!req.session.nim) {
      res.redirect('/');
    } else {
      connection.query('select * from user where nim=?',[req.session.nim],function(err,rows){
        connection.query('select count(*) as jumlah FROM file',function(err2,rows2){
         connection.query('select sum(ukuran) as total FROM file',function(err3,rows3){
           if(rows3[0].total == null){
             rows3[0].total = 0;
           }
            res.render('indexAdmin', {data : rows, jumlahData : rows2, totalData : rows3});
          });
        });
      });
    }
});

router.get('/upload', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       res.render('formUploadAdmin');
     }
});

router.get('/manage', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('select * from file',function(err,rows){
         console.log(rows);
         res.render('manageFileAdmin',{data : rows});
       });
     }
});

router.get('/editUser/:id', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('select * from user where nim=?',[req.params.id],function(err,rows){
         console.log(rows);
         res.render('editUser', {data : rows});
       });
     }
});

router.post('/editUser/:id', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('update user set nama=?, status=? where nim=?',[req.body.nama,req.body.status,req.params.id],function(err,rows){
         console.log(rows);
         res.redirect('/admin/user');
       });
     }
});

router.get('/editFile/:id', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('select * from file where fid=?',[req.params.id],function(err,rows){
         console.log(rows);
         res.render('edit', {data : rows});
       });
     }
});

router.post('/editFile/:id', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('update file set deskripsi=?, status=? where fid=?',[req.body.desk,req.body.status,req.params.id],function(err,rows){
         console.log(rows);
         res.redirect('/admin/manage');
       });
     }
});

router.get('/deleteUser/:id', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('delete from user where nim=?',[req.params.id],function(err,rows){
         console.log(rows);
         res.redirect('/admin/user');
       });
     }
});

router.get('/delete/:id', function(req, res){
  connection.query('select * from file where fid=?',[req.params.id],function(err,rows){
    var targetPath = './public/files/'+rows[0].nama_file;
    fs.unlink(targetPath,function(err) {
      if(err) {
        res.send("Error to delete file: "+err);
      } else {
        connection.query('delete from file where fid=?',[req.params.id],function(err,rows){
          if(err){
            res.send("Error to delete database: "+err);
          }else{
            res.redirect('/admin/manage');
          }
        });
      }
    })
  });
});

router.get('/user', function upload (req , res , next){
    if(!req.session.nim) {
       res.redirect('/');
     } else {
       connection.query('select * from user',function(err,rows){
         console.log(rows);
         res.render('manageUserAdmin',{data : rows});
       });
     }
});

router.post('/upload',function(req,res){
  //fungsi ambil gambar
  var multiparty = require("multiparty");
  var form = new multiparty.Form();
  form.parse(req,function(err,fields,files){
    var file = files.uploadfile[0];
    var fs = require("fs");
    nama = file.originalFilename;
    ukuran = file.size/1024;
    var waktu = moment().format('YYYY-MM-d HH:mm:s');
    //end fungsi ambil gambar
    var nim = req.session.nim;
    fs.readFile(file.path,function(err,data){
      var path = "./public/files/"+file.originalFilename;
      fs.writeFile(path,data,function(error){
        if(error) console.log(error);
          connection.query('INSERT INTO file values("",?,?,?,?,?,?)',
            [ nim, nama, ukuran, waktu, fields.desk, fields.status],
            function(err, rows){
              if(err){
                console.log("Ini Error");
                console.log(err);
              }else{
                  res.redirect('/admin/manage');
              }
        });
      });
    });
  });
});


router.get('/logout', function(req, res) {
   req.session.destroy(function(err){
      if(err){
        console.log(err);
      }
      else
      {
        res.redirect('/');
      }
    });
});

module.exports = router;
