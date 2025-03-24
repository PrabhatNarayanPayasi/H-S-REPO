const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
 
app.use(express.static(path.join(__dirname, 'public')));
 
app.set('view engine', 'ejs');
 
app.get('/', (req, res) => {
  res.render("Home.ejs");
});


app.get("/Dashboard" , (req , res)=>{
  res.render("Dashboard.ejs")
})


app.get("/setting" , (req,res)=>{
  res.render("setting.ejs")
})
app.listen(port, () => {
  console.log(`Server chal raha hai http://localhost:${port}`);
});
