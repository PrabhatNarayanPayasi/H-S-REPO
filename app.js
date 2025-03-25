const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
 
 
app.set('view engine', 'ejs');  // Set the EJS view engine

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('Home.ejs'); // Render your ejs views normally
});


app.get("/Dashboard" , (req , res)=>{
  res.render("Dashboard.ejs")
})

app.get("/inventory" , (req , res)=>{
  res.render("inventory.ejs")
})

app.get("/Integration" , (req , res)=>{
  res.render("Integration.ejs")
})
app.get('/setting', (req, res) => {
  res.render('setting.ejs'); // Render the setting.ejs view
});

app.listen(port, () => {
  console.log(`Server chal raha hai http://localhost:${port}`);
});
