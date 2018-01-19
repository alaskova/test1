const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.urlencoded(
    {
        extended: true
    }));

//TEST MOCK
let arr = [];
let user = {
    username : "username1",
    password : "password1"
};
let user2 = {
    username : "username2",
    password : "password2"
};
arr.push(user);
arr.push(user2);

//ROUTES
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/html/index.html')
});

app.get('/frame', function(req, res) {
    res.sendFile(__dirname + '/src/html/frame.html')
});


app.get('/addUser', (req, res) => {
    res.sendFile(__dirname + '/src/html/addUser.html')
});

app.get('/users', function(req, res) {
    res.send(arr)
});

let id = 0;
app.get('/getNextUser', function(req, res) {
    if (id === arr.length) {
        id = 0;
    }
    res.send(arr[id])
    id++;
});

app.post('/addUser', (req, res) => {
    console.log(req.body)
    arr.push(req.body);
    res.send("Ok")
});

app.listen(80, function() {
    console.log('listening on 3000')
});


