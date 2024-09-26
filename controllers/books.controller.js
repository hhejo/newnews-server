import axios from 'axios';
import { TTB_KEY } from '../env.mjs';
import { getBooksFromData } from './books-functions.js';

const TIME_DIFF = 600_000; // 10분
const lastUpdateTime = Date.now();
let cachedBooks = [];
let cachedBook = {};

const baseUrl = 'http://www.aladin.co.kr/ttb/api';
const baseParams = { ttbkey: TTB_KEY, output: 'js', version: 20131101 };

export const getBooks = async (req, res) => {
  if (lastUpdateTime + TIME_DIFF > Date.now() && cachedBooks.length > 0)
    return res.json(cachedBooks);

  const url = `${baseUrl}/ItemList.aspx`;
  const params = { ...baseParams, ...req.query, searchTarget: 'Book' };
  try {
    const { data } = await axios.get(url, { params });
    const books = getBooksFromData(data);
    cachedBooks = books;
    return res.json(books);
  } catch (err) {
    console.error('Error:', err);
  }
};

export const getBook = async (req, res) => {
  if (
    lastUpdateTime + TIME_DIFF > Date.now() &&
    Object.keys(cachedBook).length > 0
  )
    return res.json(cachedBook);

  const url = `${baseUrl}/ItemLookUp.aspx`;
  const { isbn13 } = req.params;
  // const params = { ...baseParams, itemIdType: 'ISBN', itemId: isbn13, cover: 'big' };
  const params = {
    ...baseParams,
    itemIdType: 'ISBN',
    itemId: isbn13,
    cover: 'big',
  };

  try {
    const { data } = await axios.get(url, { params });
    cachedBook = data;
    console.log('Fetched book');
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
};
