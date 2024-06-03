const express = require("express");
const app = express()

app.listen(6000, (err)=>{
	if(err)
{
	console.log("error while running server : ",err)
}else{
	console.log("server is running on port 6000")
}
})