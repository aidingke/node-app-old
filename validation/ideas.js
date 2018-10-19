const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.details = !isEmpty(data.details) ? data.details : '';

  if(!Validator.isLength(data.title,{min:2,max:50})){
    errors.title = "标题不能少于2个字符且不能大于50个!";
  }

  if(Validator.isEmpty(data.title)){
    errors.title = "标题不能为空!";
  }

  if(!Validator.isLength(data.description,{min:5,max:10000})){
    errors.description = "摘要不能少于5个字符且不能大于10000!";
  }

  if(Validator.isEmpty(data.description)){
    errors.description = "摘要不能为空!";
  }

  if(!Validator.isLength(data.details,{min:2,max:70000})){
    errors.details = "文章不能少于2个字符且不能大于70000!";
  }

  if(Validator.isEmpty(data.details)){
    errors.details = "文章不能为空!";
  }

  return {
    errors,
    isValid:isEmpty(errors)
  };
}