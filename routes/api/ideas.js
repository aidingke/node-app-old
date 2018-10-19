const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = express.Router();
const pubFun = require('../../config/public');
// const ideas = require("../../models/Idea");
const passport = require("passport");
const validateIdeasInput = require("../../validation/ideas");
// const {ensureAuthenticated} = require('../helpers/auth');
// const ueditor = require("ueditor");


// $route  GET api/profile/test
// @desc   返回的请求的json数据
// @access public
router.get("/test",(req,res) => {
  res.json({msg:"ideas works"})
})

// 引入模型
require("../../models/Idea");
const Ideas = mongoose.model('ideas');

// body-parser middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

//文章列表list,登录者授权
router.get("/listAll",(req,res)=>{
  Ideas.find({checkT:true})
    .sort({date:"desc"})
    .populate('user',["name"])
    .then(ideas=>{
      res.json(ideas)
    })
    .catch(err => res.status(404).json({msg:"查询出错了!"}))
  })

//文章列表list,当前登录者的
router.get("/list",passport.authenticate('jwt', { session: false }),(req,res)=>{
  Ideas.find({user:req.user.id})
    .populate('user',["name"])
    .sort({date:"desc"})
    .then(ideas=>{

      res.json(ideas)
      // console.log(ideas)
      return false
    })
  })


// $route  POST api/ideas/add
// @desc   创建一个发文章接口
// @access Private
// router.post("/",ensureAuthenticated,(req,res)=>{
router.post("/add",passport.authenticate('jwt', { session: false }),(req,res) => {
  const {errors,isValid} = validateIdeasInput(req.body);
  // 判断isValid是否通过
  if(!isValid){
    return res.status(400).json(errors);
  }

  var timestamp=new Date().getTime();
  var timeNow = pubFun.dateFormat(timestamp,'Y年m月d日 H时i分s秒');

  const newInfo= {
    title:req.body.title,
    details:req.body.details,
    description:req.body.description,
    user:req.user.id,
    checkT:req.body.checkT,
    date:timeNow
  }

  new Ideas(newInfo)
    .save()
    .then(ideas => {
      // req.flash("success_msg","数据添加成功!");
      res.json({"success_msg":"文章添加成功!"})
    })
    .catch(err => res.status(404).json({msg:"文章没添加成功!"}))
})

//去到查看页面查看详情
router.get("/details/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
  Ideas.findOne({
    _id:req.params.id
  })
  .populate('user',["name"])
  .then( ideas => {
    res.json(ideas)

    // if(ideas.user != req.user.id){
    //   res.json({"error_msg":"非法操作~!"})
    //   // req.flash("error_msg","非法操作~!");
    //   // res.redirect("/ideas");
    // }else{
    //   res.json(ideas)
    // }
  })  
})


//去到查看编辑页面详情
router.get("/artedit/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
  Ideas.findOne({
    _id:req.params.id
  })
  .then( ideas => {
    if(ideas.user != req.user.id){
      res.json({"msg":"不是本人的非法操作~!",code:400})
      return false
    }
    res.json(ideas)
    // res.json({ideas,code:1000})
  })
  .catch(err => res.status(404).json({msg:"查询出错再试一次!"}))
})

// $route  POST api/ideas/edit
// @desc   创建一个编辑文章接口
// @access Private
// router.post("/",ensureAuthenticated,(req,res)=>{
  router.post("/edit/:id",passport.authenticate('jwt', { session: false }),(req,res) => {
    const {errors,isValid} = validateIdeasInput(req.body);
    // 判断isValid是否通过
    if(!isValid){
      return res.status(400).json(errors);
    }
  
    var timestamp=new Date().getTime();
    var timeNow = pubFun.dateFormat(timestamp,'Y年m月d日 H时i分s秒');
    Ideas.findOne({
      _id:req.params.id
    })
    .then(idea=>{
      idea.title = req.body.title;
      idea.details = req.body.details;
      idea.description = req.body.description;
      idea.checkT=req.body.checkT;
      idea.date = timeNow;
      idea.save()
        .then(idea => {
          res.json({"success_msg":"文章编辑成功!"})
      })
      .catch(err => res.status(404).json({msg:"文章没编辑成功!"}))
    })
  })


// $route  POST api/ideas/checkT
// @desc   创建一个编辑文章展示的接口
// @access Private
  router.post("/checkT/:id",passport.authenticate('jwt', { session: false }),(req,res) => {

    Ideas.findOne({
      _id:req.params.id
    })
    .then(idea=>{
      if(idea.user != req.user.id){
        res.json({"msg":"非法操作~!"})
        return false
      }

      idea.checkT = !idea.checkT;
      idea.save()
        .then(idea => {
          res.json({"success_msg":"操作成功!"})
      })
      .catch(err => res.status(404).json({msg:"操作没成功!"}))
    })
  })


// $route  delete api/ideas/delete
// @desc   创建一个删除文章接口
// @access Private
router.delete("/delete/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
  Ideas.findOne({
    _id:req.params.id
  })
  .then( ideas => {
    if(ideas.user != req.user.id){
      res.json({"msg":"非法操作~!"})
    }else{
      ideas.remove({
        _id:req.params.id
      })
      .then(() => {
        res.json({"msg":"数据删除成功!"});
        // res.redirect("/ideas");
      })
      .catch(err => res.status(404).json({msg:"没有该文章信息"}))
    }
  }) 
})

module.exports = router;