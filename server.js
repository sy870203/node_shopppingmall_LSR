// express라는 라이브러리를 사용한다
const express = require('express'); 

const app = express();

// app.use((req, res) => {
//     res.json({
//         message: "ok"
//     })
// })

const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

app.use("/product", productRoute);
app.use("/order", orderRoute);

const PORT = 8000;

app.listen(PORT, console.log("server started !!"));