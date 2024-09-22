import express from 'express';
import axios from 'axios';
import { TTB_KEY } from './env.mjs';

const app = express();
const port = 3000;

const TIME_DIFF = 300_000;
const lastUpdateTime = Date.now();
let cacheData = {};

app.get('/api/books/new', async (req, res) => {
  const url = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx';
  const params = {
    ttbkey: TTB_KEY,
    QueryType: 'ItemNewAll',
    MaxResults: 10,
    start: 1,
    SearchTarget: 'Book',
    output: 'js',
    Version: 20131101,
  };
  const headers = {};
  try {
    const { data } = await axios.get(url, { params, headers });
    res.header('Access-Control-Allow-Origin', '*');
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
});

// app.get('/api/news', async (req, res) => {
//   if (
//     Object.keys(cacheData).length > 0 &&
//     lastUpdateTime + TIME_DIFF > Date.now()
//   ) {
//     console.log('send cacheData');
//     res.header('Access-Control-Allow-Origin', '*');
//     return res.json(cacheData);
//   }
//   const { query } = req.query;
//   const url = `https://openapi.naver.com/v1/search/news.json`;
//   const headers = {
//     'X-Naver-Client-Id': CLIENT_ID,
//     'X-Naver-Client-Secret': CLIENT_SECRET,
//   };
//   try {
//     const { data } = await axios.get(url, {
//       params: { query, display: 20 },
//       headers,
//     });
//     cacheData = data;
//     console.log('Data:', cacheData);
//     res.header('Access-Control-Allow-Origin', '*');
//     return res.json(cacheData);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
