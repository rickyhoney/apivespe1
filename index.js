
//install express framework (for web app)
var express = require ("express");

//permit to access unkown website
var cors = require("cors");

//!!!!!!!!!! installare le dipendeze con NPM INSTALL EXPRESS / NPM INSTSALL CORS

//------------------------------------------

var apiServer = express();
var port = 3000;

apiServer.use((cors()));

//SERVER PARTITO - http://127.0.0.1:3000/

//metto il server in ascolto sulla porta
apiServer.listen(port, () => {

    console.log("server running on port: ",port);

});


//get su /info 
apiServer.get("/info", (req,res) => {

    console.log("got by link");
    res.send("informazioni ottenute da /info sul link");

});

// utente: /operation?a=1&b=2
apiServer.get("/operation", (req,res) => {

    //stampo la richiesta
    console.log("richiesta: ", req.query);

    //controllo che sono state inserite tutte le informazioni nella richiesta ( valori di a e b )
    if(req.query.a && req.query.b){

        var ris = req.query.a -(-req.query.b); // non posso usare il più quindi lo ottengo inserendo due meno  --=+  +!=+

        //stampo la risposta
        console.log("ris= ", ris);

        //creo una variabile per la risposta del server
        var result = {"risultato": ris};

        //imposto l'http per la risposta con un numero id 
        res.status(200)

        //ivio la risposta
        res.json(result);
    
    }else{

        console.log("error: incorrect parameters");
        res.send("incorrect parameters");

    }

});

apiServer.get("/login", (req,res)=> {

console.log("login");
if(req.query.log&&req.query.psw){

console.log("login: "+req.query.log); 
console.log("password: "+req.query.psw);   
res.send("Benvenuto "+req.query.log);


res.status(200);

} else {

res.send("invalid parameters");
res.status(500);

}
});


apiServer.get("/mioNome", (req,res)=> {

    console.log("Mio Nome");
    if(req.query.name){
    
    console.log("nome: "+req.query.name); 
    res.status(200);    
    res.json(JSON.stringify("name:"+req.query.name)) ;    
    } else {
    
    res.send("invalid parameters");
    res.status(500);
    

    }
    });

    apiServer.post("/mioNomePOST", (req,res) => {



        //stampo la risposta
        if(req.body.name){
    
            console.log("nome: "+req.body.name); 
            res.send("Done!");
            res.status(200);
            } else {
            
            res.send("dati incorretti");
            res.status(500);
            }


            });
    