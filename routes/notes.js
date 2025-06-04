var express = require('express');
var router = express.Router();


const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://sol:OsaruHoma7706@cluster0.bflifih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async(req, res) => {
//データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

//idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;