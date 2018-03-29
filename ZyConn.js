var commidityNamekey = {}


let pako = require('pako');
let ev = require('./bowEvent')
const io = require('socket.io-client');
// or with import syntax
//import io from 'socket.io-client';
var conn = function () {
    var socket = io.connect('http://183.131.180.105:55118',{query:{loginName:'quota_user04',password:'cjle4aly'}});
    socket.on('connect', function(msg){
        console.log("connect: " + msg)
        setTimeout(function(){
            //socket.emit("subscribe-price",[commidityNamekey["美原油1805"],commidityNamekey["澳币1806"]]);
            socket.emit("load-produt")
            console.log("emit")
        },1000);
    });
    socket.on("load-produt",function (data) {
        //打印所有品种ProductId
        console.log(data)
        J_data = JSON.parse(data);
        if(J_data.content)
        {
            var con_ = J_data.content;
            var j_con = JSON.parse(con_);
            console.log("commodity number: " + j_con.length)
            socket.emit("subscribe-price",j_con)
        }
    })
    socket.on("publish-price",function(data){
        var b64 = new Buffer(data, 'base64')
        var json = pako.inflate(new Uint8Array(b64), {to: 'string'});
        var sss = decodeURIComponent(json)
        var jd = {}
        jd = JSON.parse(sss)
        //jd.instrumentId = commidity[jd.ProductId];
        var instruData = JSON.stringify(jd)
        var ProductId = jd.ProductId
        commidityNamekey[ProductId] = jd;

        //打印所有品种行情
        //console.log(instruData)
        var channel = {}
        channel.channel = "tick"
        channel.data = jd
        ev.evE.emit("tick",JSON.stringify(channel));
    })
    socket.on("subscribe-price",function (data) {
        //打印订阅成功信息
        //console.log("subscribe-price: " +  data);
    })
    socket.on("error",function (err) {
        reconn()
        console.log("error:" + err)
    })
    socket.on("disconnect",function () {
        reconn()
        console.log('disconnect')
    })
    var isDis = false;
    var reconn = function(){
        if(!isDis)
        {   console.log("reconn");
            isDis = true;
            setTimeout(conn, 1000);
        }
    }
}

ev.evE.on("getCommdity",function (ws) {
    var channel = {}
    channel.channel = "commodity"
    channel.data = commidityNamekey
    ev.evE.emit("getCommdityRes",ws,JSON.stringify(channel));
})

conn();
