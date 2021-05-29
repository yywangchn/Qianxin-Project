const express = require("express");
const mongoose = require("mongoose");
const user = require("./router/user");
const cors = require("cors");

// mongoose.connect("mongodb://localhost/root");

// mongoose.connect(
//   "mongodb+srv://admin:admin123456@cluster0.ucutx.mongodb.net/wyy?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     userFindAndModify: false,
//   }
// );

mongoose.connect(
  "mongodb+srv://admin:admin123456@cluster0.ucutx.mongodb.net/wyy?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", () => {
  console.log("connecte error");
});
db.once("open", () => {
  console.log("connected");
});

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/user", user);
app.use((err, req, res, next) => {
  res.status(500).json(err);
});
app.listen(7777, () => {
  console.log("listening at 7777");
});

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", " 3.2.1");
//   //这段仅仅为了方便返回json而已
//   res.header("Content-Type", "application/json;charset=utf-8");
//   if (req.method == "OPTIONS") {
//     //让options请求快速返回
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
