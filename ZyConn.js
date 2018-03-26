var commidity = {
    "a27fe387-67a9-49df-b7ea-50812cb32e72":	"澳币1806",
    "4f793695-b02c-47d8-bbf2-136c60d87ff9":	"澳币1803",
    "77f8aac0-eccd-44bc-b11c-d679efd1611d":	"英镑1806",
    "d57b175d-5b88-4665-ba62-ac08169731e5":	"英镑1803",
    "7266c1a0-b2c9-406d-a8f5-57d5619a345c":	"加币1806",
    "ad92909f-91a3-42b7-987b-1a06b7a071e5":	"加币1803",
    "8f932868-6cbd-42b0-9d65-02afeead45e4":	"欧元1806",
    "a10c25cb-ae56-4f5b-8d6f-46b401959f02":	"欧元1803",
    "433855e2-8fed-4fa6-b585-a1d6fcab55c5":	"瑞郎1806",
    "6a1982a1-c999-4630-847d-642cc4c049bc":"瑞郎1803",
    "4c1cf956-3375-4bf7-ab1f-2d2f8cfa28a9":	"小SP1806",
    "fd83fdf4-63ad-4f76-858a-da608dd7b600":	"小SP1803",
    "33c0e0b1-2c32-4473-ba00-f4a97c553dfb":	"纽期金1804",
    "da3a3cf3-5b89-44cb-baad-b979035b7e12":	"美铜1805",
    "3a61b036-3b60-4416-9088-6a178ee8e00b":	"小纳指1806",
    "ba362205-1d2f-4b8b-9540-730073cfd57b":	"小纳指1803",
    "e5455583-c2e3-4a3e-8222-57a61a3ecdc2":	"美银1805",
    "3829be3f-897a-40ea-b235-0679234682ab":	"德指1806",
    "0bacc4a4-698f-4d4c-aca6-5f5b334a7b33":	"德指1803",
    "1ad6afa5-759c-4a78-b045-a11c44b4eeeb":	"玉米1805",
    "85692979-906f-4b2d-800f-a99ffaef75be":	"纽元1806",
    "821ca562-1b12-44ce-a164-b3447f3685b8":	"纽元1803",
    "eda47fb0-d7a5-400d-881a-99f97795c51e":	"黄豆1805",
    "8e47a526-361b-4d6d-bd27-3ee90532f682":	"豆油1805",
    "9b36a64d-a0d2-43a3-a1e0-abcd15a06d02":	"德指1803",
    "2822c962-41ce-4d61-82ae-a7f595fa0efc":	"欧元1803",
    "3ff359de-87e9-4a15-877c-850d554f5fd9":	"英镑1803",
    "304807d8-d99f-4b5f-87b3-ec7dfe95765a":	"加元1803",
    "3f8b1d7c-7369-498a-ada7-b6389c192f9d":	"纽元1803",
    "b5fafbbb-7198-42f8-9601-8a3c2fb31401":	"瑞郎1803",
    "4bef77af-77f8-4056-8243-a61dc7da86a0":	"澳元1803",
    "c00bf235-1a51-4413-bd08-3d6dc23b3215":	"小纳指1803",
    "48a62bf3-d5df-4061-8f2a-dded6dfb2501":	"小标普1803",
    "44cd6a87-b9cd-43f0-ad84-879cf43602a9":	"英镑1803",
    "9ce34b36-0687-4d38-a3a0-5b2c5f2646dd":	"欧元1803",
    "72461d98-3ad7-4980-b419-9542ba9af52c":	"纽元1803",
    "087982c7-1e31-49ae-a64c-69e2325798cf":"瑞郎1803",
    "21f5d2fa-228f-4d6c-9738-daba25a9712b":	"德指1803",
    "d7eca6f9-466f-4b24-840c-3cc56a579c64":	"纽期金1804",
    "e6d78956-bff5-45bc-85c2-72b826cc6614":"美黄金1804",
    "4d48fdd5-0c10-4c12-80de-9aebc1de1e43":"美原油1804",
    "1de1e005-10f5-4017-b4af-85d4ba998675":	"天然气1804",
    "cd9aac9c-a1ec-4d2a-86f1-63f978ff687b":	"新富时1803",
    "fe1b60d0-6ced-49e2-884a-97d0d5934c3f":	"恒指1803",
    "22e14b45-2733-40ff-aeea-0e95d7a0b26f":	"小恒指1803",
    "a4e01481-9258-4ded-85d2-a01f036eec65":	"美银1805",
    "285057f7-1d76-4115-89ca-8632e0f85e03":	"美白银1805",
    "c0b06c66-4170-4eb8-a971-7d6de21f1cb6":	"美铜1805",
    "e2a00bfc-437b-4a7a-acd3-a2b403af1ff2":	"CMX铜1805",
    "36d3841e-be79-4fdc-a10a-0c6cfaa4faf2":	"美原油1804",
    "9b95a1f9-3c96-41d3-a6c0-b84ca10df56b": "美原油1804",
    "bf41c75e-d186-4665-864a-57d9a73f26cb":	"美原油1804",
    "c13fc98a-a025-4ac4-87d3-1f5e73cf7613":"美原油1805"
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
        socket.emit("subscribe-price",[commidityNamekey["美原油1805"],commidityNamekey["澳币1806"]]);
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