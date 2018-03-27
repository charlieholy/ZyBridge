var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server
wss = new WebSocketServer({ port: 10001 });
var ev = require("./bowEvent")
//'open', 'error', 'close', 'message'
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log("msg: " + message);
        //broadCase("num: " + num);
        try{
            var jsub = JSON.parse(message)
            if("subtick" == jsub.event)
            {
                if("open" == jsub.status) {
                    ws.isSub = true
                }
                else if("close" == jsub.status)
                {
                    ws.isSub = false
                }
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

var broadCase = function (msg) {
    wss.clients.forEach(function (ws) {
        //if(ws.isSub)
        //{
        try{
            ws.send(msg);
        }catch (e)
        {
            console.log("err: " + e);
        }

        // }
    })
}

ev.evE.on("ticker",function (ticker) {
    broadCase(ticker)
})
