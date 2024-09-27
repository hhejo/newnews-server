import axios from 'axios';
import {
  baseUrl,
  baseParams,
  getBooksFromData,
  getBookFromData,
  cachingDecorator,
} from './books.utils.js';

export const getBooks = cachingDecorator(async (req, res) => {
  const url = `${baseUrl}/ItemList.aspx`; // http://www.aladin.co.kr/ttb/api/ItemList.aspx
  const params = { ...baseParams, ...req.query, searchTarget: 'Book' }; // ?ttbkey=TTBKEY&output=js&version=20131101&queryType=ItemNewAll&cover=Big&maxResults=10&searchTarget=Book
  try {
    const { data } = await axios.get(url, { params, timeout: 10_000 });
    const books = getBooksFromData(data);
    res.json(books);
    return books;
  } catch (err) {
    console.error('Error:', err);
  }
}, 300_000);

export const getBook = cachingDecorator(async (req, res) => {
  const url = `${baseUrl}/ItemLookUp.aspx`; // http://www.aladin.co.kr/ttb/api/ItemList.aspx
  const itemId = req.params.isbn13;
  const params = { ...baseParams, ...req.query, itemId, itemIdType: 'ISBN' }; // ?ttbkey=TTBKEY&output=js&version=20131101&itemIdType=ISBN&cover=big&itemId=ITEMID
  try {
    const { data } = await axios.get(url, { params, timeout: 10_000 });
    const book = getBookFromData(data);
    res.json(book);
    return book;
  } catch (err) {
    console.error('Error:', err);
  }
}, 300_000);
