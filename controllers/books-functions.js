export function getBooksFromData(data) {
  const { item } = data;
  const books = [];
  for (let it of item) {
    const book = {
      title: it.title, // 제목
      link: it.link, // 책 상세정보 링크
      author: it.author, // 저자
      pubDate: it.pubDate, // 출간일
      description: it.description, // 책 설명. 빈 문자열?
      isbn13: it.isbn13, // ISBN-13
      itemId: it.itemId, // 알라딘에서의 책 ID
      priceSales: it.priceSales, // 할인가
      priceStandard: it.priceStandard, // 정상가
      stockStatus: it.stockStatus, // 재고
      mileage: it.mileage, // 마일리지
      cover: it.cover, // 책 커버 이미지
      categoryId: it.categoryId, // 카테고리 ID
      categoryName: it.categoryName, // 카테고리 명
      publisher: it.publisher, // 출판사
      adult: it.adult, // 성인 여부
      subTitle: null, // 부제목
      originalTitle: null, // 원제목
      itemPage: null, // 쪽 수
    };
    books.push(book);
  }
  return books;
}
