const express = require('express')
const app = express();
const path = require('path')


app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(3000, ()=>{
  console.log('listening on 3k');
});
