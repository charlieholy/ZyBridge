var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server
wss = new WebSocketServer({ port: 10002 });
var ev = require("./bowEvent")
//'open', 'error', 'close', 'message'
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log("msg: " + message);
        try{
            var jsub = JSON.parse(message)
            if("getCommdity" == jsub.event)                //获取品种信息
            {
               ev.evE.emit("getCommdity",ws)
            }
            else if("subCommdity" == jsub.event)          //订阅品种
            {
                var productId = jsub.data
                ev.evE.emit("subCommdity",productId,ws)
            }
        }catch (e)
        {
            console.log("ws msg err: ",e)
        }
    });
    ws.on('close', function (ws) {
        console.log("onclose");

    });
    ws.on('error',function (err) {
        console.log("err",err);
    })
    ws.on('open',function () {
        console.log("onopen");
    })

});

ev.evE.on("getCommdityRes",function (ws,msg) {
    sendtoClent(ws,msg)
})

var sendtoClent = function (ws,msg) {
    ws.send(msg);
}

var broadCase = function (msg) {
    wss.clients.forEach(function (ws) {
        try{
            ws.send(msg);
        }catch (e) {
            console.log("err: " + e);
        }
    })
}

ev.evE.on("tick",function (ticker) {
    broadCase(ticker)
})
