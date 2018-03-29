
var url = "ws://localhost:10002"
let WebSocket = require('ws');

const socket = new WebSocket(url); //如果symbol = 'btccny'或者'ltccny' 请使用wss://api.huobi.com/ws
socket.onerror = function (e) {
    console.log("e: " + e);
}

var req = {
    "event":"getCommdity"
}

socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(JSON.stringify(req))
};

socket.onmessage = function (event) {
    let raw_data = event.data;
    //console.log(raw_data);
    try {
        var j_d = JSON.parse(raw_data)
        if(j_d.channel == "commodity")
        {
            var data = j_d.data;
            let i = 0
            for(var v in data)
            {
                i++;
                console.log("id: " + v + " productname: " + data[v].ProductName)
            }
            console.log(i);
        }
        else if(j_d.channel == "tick")
        {
            //console.log(raw_data)
        }
    }
    catch (e)
    {
    }
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};
