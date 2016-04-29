var db = function localConnect(){
    return require('mysql').createConnection({
        hostname: 'ap-cdbr-azure-southeast-b.cloudapp.net',
        user: 'bf666ccbb8ddd8',
        password: 'pamaloppa',
        database: '340ef08e'
    });
    connection.connect();
}

module.exports.localConnect = db;
