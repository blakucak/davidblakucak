var db = function localConnect(){
    return require('mysql').createConnection({
        hostname: 'localhost',
        user: 'root',
        password: 'pamaloppa',
        database: 'file_sharing'
    });
    connection.connect();
}

module.exports.localConnect = db;
