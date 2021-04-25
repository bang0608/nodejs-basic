const express = require('express');
const app = express();
const http = require('http').createServer(app);

const fs = require('fs');
const socket = require('socket.io')(http);


// 라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.
const router = require('./router/main.js')(app, fs, express);

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set("views", __dirname + "/views");

// 서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public/"));

var server = http.listen(3000, function () {
    console.log("Express server has started on port 3000")
});