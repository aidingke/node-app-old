const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  details:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"users"
  },
  // user:{
  //   type: String,
  //   required:true
  // },
  date:{
    type: String,
    required:true
  },
  checkT:{
    type:Boolean,
    default:true
  }
})

mongoose.model('ideas',IdeaSchema);