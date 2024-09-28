import axios from 'axios';
import { baseUrl, baseParams } from '../../utils/constants.js';
import { cachingDecorator, getBooksFromData } from '../../utils/utils.js';

export const searchBook = cachingDecorator(async (req, res) => {
  const url = `${baseUrl}/ItemSearch.aspx`; // http://www.aladin.co.kr/ttb/api/ItemSearch.aspx
  const params = { ...baseParams, ...req.query }; // ?ttbkey=TTBKEY&output=js&version=20131101&query=QUERY&queryType=QUERYTYPE&cover=Big&maxResults=10&searchTarget=Book
  try {
    const { data } = await axios.get(url, { params, timeout: 10_000 });
    const books = getBooksFromData(data);
    res.json(books);
    return books;
  } catch (err) {
    console.error('Error:', err);
  }
}, 300_000);
