// module.exports = {
//   mongoURI: "mongodb://mern:abc123@ds127841.mlab.com:27841/restful-api-mern",
//   secretOrKey: "secret"
// }
if(process.env.NODE_ENV=="production"){
	module.exports = 
	{
		// mongoURI:"mongodb://mister:1234@ds139715.mlab.com:39715/node-app-prod"
	}
}else{
  module.exports = {mongoURI:"mongodb://localhost/teachdbs",secretOrKey: "secret"}
}
