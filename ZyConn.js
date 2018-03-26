var commidity = {
    "c13fc98a-a025-4ac4-87d3-1f5e73cf7613":"CL1805"
}
commidityNamekey = {}


for(var t in commidity)
{
    commidityNamekey[commidity[t]] = t;
}
for(var t in commidityNamekey)
{
   // console.log(t);
}

let pako = require('pako');
var ev = require('./bowEvent')

const io = require('socket.io-client');
// or with import syntax
//import io from 'socket.io-client';
var socket = io.connect('http://183.131.180.105:55118',{query:{loginName:'quota_user04',password:'cjle4aly'}});
socket.on('connect', function(msg){
    console.log("connect: " + msg)
    setTimeout(function(){
        socket.emit("subscribe-price",[commidityNamekey["CL1805"]]);
        socket.emit("load-produt")
        console.log("emit")
    },3000);
});
socket.on("load-produt",function (data) {
    console.log(data)
    J_data = JSON.parse(data);
    if(J_data.content)
    {
        var con_ = J_data.content;
        var j_con = JSON.parse(con_);
        j_con.forEach(function (t) {
            // console.log(commidity[t])
        })
    }

})

socket.on("publish-price",function(data){
    var b64 = new Buffer(data, 'base64')
    var json = pako.inflate(new Uint8Array(b64), {to: 'string'});
    var sss = decodeURIComponent(json)
    console.log(sss)
    ev.evE.emit("ticker",sss);
})
socket.on("subscribe-price",function (data) {
    console.log("subscribe-price: " +  data);
})
socket.on("error",function (err) {
    console.log("error:" + err)
})
socket.on("disconnect",function () {
    console.log('disconnect')
})