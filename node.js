require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const multer = require("multer");

const app = express();
const port = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path);
  },
  filename: (req, res, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });

app.post("/up", upload.single("ufile"), (req, res) => {
  console.log(req.file);
  res.send(
    '<script>alert("파일 업로드 완료");location.replace("index.html")</script>'
  );
});
app.get("/", function (req, res) {
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var request = require("request");
  var options = {
    url: api_url,
    form: { source: "ko", target: "en", text: query },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let no = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      console.log(no);
      res.end(no.message.result.translatedText);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(port, () => {
  console.log(port + "로 연결되었습니다.");
});
