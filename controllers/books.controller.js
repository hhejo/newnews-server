import axios from 'axios';
import { TTB_KEY } from '../env.mjs';

const TIME_DIFF = 600_000; // 10분
const lastUpdateTime = Date.now();
let cacheBooks = [];
let cacheBook = {};

const baseParams = { ttbkey: TTB_KEY, output: 'js', version: 20131101 };

export const getBooksNew = async (req, res) => {
  const url = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx';
  const params = {
    ...baseParams,
    QueryType: 'ItemNewAll',
    MaxResults: 10,
    start: 1,
    SearchTarget: 'Book',
    Cover: 'Big',
  };
  // const headers = {};
  if (
    lastUpdateTime + TIME_DIFF > Date.now() &&
    Object.keys(cacheBooks).length > 0
  ) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log('Cached books');
    return res.json(cacheBooks);
  }
  try {
    const { data } = await axios.get(url, { params });
    cacheBooks = data;
    res.header('Access-Control-Allow-Origin', '*');
    console.log('Fetched books');
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
};

export const getBook = async (req, res) => {
  const url = 'http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx';
  const { isbn13 } = req.params;
  const params = {
    ...baseParams,
    itemIdType: 'ISBN',
    ItemId: isbn13,
    Cover: 'big',
  };
  // const headers = {};
  if (
    lastUpdateTime + TIME_DIFF > Date.now() &&
    Object.keys(cacheBook).length > 0
  ) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log('Cached book');
    return res.json(cacheBook);
  }
  try {
    const { data } = await axios.get(url, { params });
    cacheBook = data;
    res.header('Access-Control-Allow-Origin', '*');
    console.log('Fetched book');
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
};
