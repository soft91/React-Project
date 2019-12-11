const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 첫 화면 초기화 시 DB 내용 불러오기
app.get('/', function(req, res){
  connection.query('SELECT * FROM memo', function(err, rows) {
    if(err) throw err;

    res.send(rows);
  });
});

// Memo 저장
app.post('/add', function(req, res){
  const parmas = [req.body.title, req.body.content];

  connection.query('INSERT INTO memo(title,content) VALUES(?,?)', parmas, function(err, rows){
    if(err){
      console.log(err);
    }else{
      console.log(rows.insertId);
      res.send('Insert Complete');
    }
  });
});

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});