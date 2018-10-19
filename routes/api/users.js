// @login & register 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const keys = require("../../config/keys");
const passport = require("passport");
const pubFun = require('../../config/public');

const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const User = require("../../models/User");

// 引入验证方法
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// $route  GET api/users/test
// @desc   返回的请求的json数据
// @access public
router.get("/test",(req,res) => {
  res.json({msg:"login works"})
})

// $route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
router.post("/register",(req,res) => {

  const {errors,isValid} = validateRegisterInput(req.body);

  // 判断isValid是否通过
  if(!isValid){
    return res.status(400).json(errors);
  }

  // 查询数据库中是否拥有邮箱
  User.findOne({email:req.body.email})
      .then((user) => {
        if(user){
          return res.status(400).json({email:"邮箱已被注册!"})
        }else{
          // const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
          var avatar = 'head.jpg';  
          var timestamp=new Date().getTime();
          var timeNow = pubFun.dateFormat(timestamp,'Y年m月d日 H时i分s秒');

          const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            avatar:avatar,
            date:timeNow,
            password:req.body.password
          })

          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;

                newUser.password = hash;

                newUser.save()
                       .then(user => res.json(user))
                       .catch(err => console.log(err));
            });
          });


        }
      })
})



//上传业务逻辑处理
router.post("/setavator/:id",urlencodedParser,(req,res,next) => { 
  // console.log(req.params.id)
  // 用ID 作后缀
  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname + '/../../client/static/avatar');
  form.parse(req, (err, fields, files) => {
    var oldpath = files.avator.path;
    var newpath = path.normalize(__dirname + '/../../client/static/avatar') + '/' + req.params.id + '.jpg';
    fs.rename(oldpath, newpath, (err) => {
      if (err) {
        res.send('失败！');
        return;
      }
      var avatar = req.params.id + '.jpg';
      //更改数据库当前用户的avatar这个值

      // console.log(req.params.id)
      // return false
      User.findOne({
        _id:req.params.id
      })
      .then(user=>{
        
        user.avatar = avatar;
        // console.log(user)
        // return false
        user.save().then(user=>{
          // req.flash("success_msg","头像更新成功");
          // res.json(user);
          res.redirect('/dashboard?avatar='+avatar);
          res.json(user);
        })
      })
    });
  });
})


// $route  POST api/users/login
// @desc   返回token jwt passport
// @access public

router.post("/login",(req,res) => {
  const {errors,isValid} = validateLoginInput(req.body);

  // 判断isValid是否通过
  if(!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  User.findOne({email})
      .then(user => {
        if(!user){
          return res.status(404).json({email:"用户不存在!"});
        }

        // 密码匹配
        bcrypt.compare(password, user.password)
              .then(isMatch => {
                if(isMatch){
                  const rule = {id:user.id,name:user.name,avatar:user.avatar};
                  jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token) => {
                    if(err) throw err;
                    res.json({
                      success:true,
                      token:"Bearer " + token
                    });
                  })
                  // res.json({msg:"success"});
                }else{
                  return res.status(400).json({password:"密码错误!"});
                }
              })
      })
})

// $route  GET api/users/current
// @desc   return current user
// @access Private
router.get("/current",passport.authenticate('jwt', { session: false }),(req,res) => {
  res.json({
    id:req.user.id,
    name:req.user.name,
    avatar:req.user.avatar,
    email:req.user.email
  });
})

module.exports = router;