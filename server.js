// express라는 라이브러리를 사용한다
const express = require('express'); 

const bodyParser = require('body-parser');

const app = express();

const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

// middleware 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/product", productRoute);
app.use("/order", orderRoute);

const PORT = 8000;

app.listen(PORT, console.log("server started !!"));