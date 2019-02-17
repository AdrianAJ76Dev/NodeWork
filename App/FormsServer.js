// Create Node Webserver
const webServer = require('express');
const formsServer = webServer();

// Setup routing
formsServer.get('/',function(req,res){
    res.sendFile('/Forms/form1.html');
});

formsServer.post('/VoterBallot/Results', function(req,res){
    res.send(req.body);
});

formsServer.listen(3000, function(){console.log('Listening on port 3000');});