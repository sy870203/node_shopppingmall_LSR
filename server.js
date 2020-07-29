// express라는 라이브러리를 사용한다
const express = require('express'); 

const app = express();

const PORT = 8000;

app.listen(PORT, console.log("server started !!"));