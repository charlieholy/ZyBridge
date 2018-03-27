//da3a3cf3-5b89-44cb-baad-b979035b7e12	HG1805	2	美铜1805
//e5455583-c2e3-4a3e-8222-57a61a3ecdc2	SL1805	2	美银1805
//e6d78956-bff5-45bc-85c2-72b826cc6614	GC04	2	美黄金1804
//fe1b60d0-6ced-49e2-884a-97d0d5934c3f	HSI1803	6	恒指1803
//22e14b45-2733-40ff-aeea-0e95d7a0b26f	MHI1803	6	小恒指1803
//c13fc98a-a025-4ac4-87d3-1f5e73cf7613	CL1805	2	美原油1805




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
    var jd = {}
    jd = JSON.parse(sss)
    jd.instrumentId = commidity[jd.ProductId];
    var instruData = JSON.stringify(jd)
    console.log(instruData)
    ev.evE.emit("ticker",instruData);
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