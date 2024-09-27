import { TTB_KEY } from '../env.js';

export const baseUrl = 'http://www.aladin.co.kr/ttb/api';
export const baseParams = {
  ttbkey: TTB_KEY,
  output: 'js',
  version: 20131101,
  searchTarget: 'Book', // http://www.aladin.co.kr/ttb/api/ItemList.aspx 여기에는 필요 없는데 넣어도 상관 없어서 추가
  itemIdType: 'ISBN', // http://www.aladin.co.kr/ttb/api/ItemList.aspx 여기에만 필요한데 넣어도 상관 없어서 추가
};
