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
    queryType: 'ItemNewAll',
    maxResults: 10,
    searchTarget: 'Book',
    cover: 'Big',
  };

  if (
    lastUpdateTime + TIME_DIFF > Date.now() &&
    Object.keys(cacheBooks).length > 0
  ) {
    console.log('Cached books');
    return res.json(cacheBooks);
  }

  try {
    const { data } = await axios.get(url, { params });
    cacheBooks = data;
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
    itemId: isbn13,
    cover: 'big',
  };

  if (
    lastUpdateTime + TIME_DIFF > Date.now() &&
    Object.keys(cacheBook).length > 0
  ) {
    console.log('Cached book');
    return res.json(cacheBook);
  }

  try {
    const { data } = await axios.get(url, { params });
    cacheBook = data;
    console.log('Fetched book');
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
};
