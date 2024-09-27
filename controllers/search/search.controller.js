import axios from 'axios';
import { baseUrl, baseParams } from '../../utils/constants.js';

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
