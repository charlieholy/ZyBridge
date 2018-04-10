var mysql  = require("mysql")
var connection = mysql.createConnection({
    host     : '106.15.226.6',
    user     : 'root',
    password : 'magpieBridge',
    database : 'es'
});

connection.connect(function (err,result) {
    console.log("err: " + err);
    console.log("result: " + result);
});

// `id`           INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
// `acountid`     INT UNSIGNED NOT NULL,
// `uuid`         VARCHAR(33) NOT NULL,
// `rqtime`       DOUBLE NOT NULL,
// `lp`           VARCHAR(30) NOT NULL,
// `symbol`       VARCHAR(30) NOT NULL,
// `amount`       DECIMAL(30,8) NOT NULL,
// `price`        DECIMAL(30,8) NOT NULL,
// `side`         VARCHAR(30) NOT NULL,
// INDEX `idx_acountid_uuid` (`acountid`, `uuid`)
var table = "order_req";
var ti = Date.now();
var insertData = {
    "acountid": "123456",
    "uuid":"0123456789012345678" + ti,
    "rqtime":Date.now(),
    "lp":"okex",
    "symbol":"btc_usdt",
    "side":"buy_market",
    "price":0,
    "amount":0.001,
    "orderStatus":"1"
}
var key = ""
var value = ""
for(var v in insertData){
    key += (",`" + v + "`");
    value += (",\"" + insertData[v] + "\"");
}
key = key.substr(1,key.length)
value = value.substr(1,value.length)
console.log("str: " + key)
console.log("str: " + value)
var table = 't_zy_productid'
//查询
connection.query('SELECT * from ' + table, function(err, result) {
    if (err) throw err;
    console.log(result);
})
//connection.query('delete from '+ table +  ' where uuid =' + '"01234567890123456781512893724170"' , function(err, result) {
//    if (err) throw err;
//    console.log(result);
//})