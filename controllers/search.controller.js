import axios from 'axios';
import { TTB_KEY } from '../env.mjs';

const baseParams = { ttbkey: TTB_KEY, output: 'js', version: 20131101 };

export const searchBook = async (req, res) => {
  const url = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx';
  const { searchType, searchContent } = req.query;
  const params = {
    ...baseParams,
    query: searchContent,
    queryType: searchType,
    maxResults: 10,
    searchTarget: 'Book',
    cover: 'Big',
  };

  try {
    const { data } = await axios.get(url, { params });
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
  }
};
