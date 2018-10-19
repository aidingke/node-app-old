const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const app = express();

// 引入users.js
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const ideas = require("./routes/api/ideas");

// DB config
const db = require("./config/keys").mongoURI;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// Connect to mongodb
mongoose.connect(db)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log(err));


// 使用中间件实现允许跨域
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
})




// passport 初始化
app.use(passport.initialize());

require("./config/passport")(passport);

// app.get("/",(req,res) => {
//   res.send("Hello World!");
// })

// 使用routes
app.use("/api/users",users);
app.use("/api/profile",profile);
app.use("/api/posts",posts);
app.use("/api/ideas",ideas);


//百度编辑器配置
// 使用静态文件,不用就找不到路径
app.use(express.static(path.join(__dirname,'public')));
//加载ueditor 模块
var ueditor = require("ueditor");

//使用模块
app.use("/api/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) { 
  // console.log('啊啊')
  // ueditor 客户发起上传图片请求
  if (req.query.action === 'uploadimage') {
    var foo = req.ueditor;

    var imgname = req.ueditor.filename;

    var img_url = '/images/ueditor/';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    res.setHeader('Content-Type', 'text/html');//IE8下载需要设置返回头尾text/html 不然json返回文件会被直接下载打开
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
      var dir_url = '/images/ueditor/';
      res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
      // console.log('config.json')
      res.setHeader('Content-Type', 'application/json');
      res.redirect('/ueditor/jsp/config.json');
  }
}));






const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log(`Server running on port ${port}`);
})