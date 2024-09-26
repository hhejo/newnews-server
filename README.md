# Newnews - Server

## 1 상품 검색 API

http://www.aladin.co.kr/ttb/api/ItemSearch.aspx

http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=TTBKEY&query=QUERY

querytype

- keyword(기본값): 제목 + 저자
- title: 제목
- author: 저자
- publisher: 출판사

start

- 양의 정수 1 이상, 기본값 1
- 검색 결과 시작 페이지

maxresults

- 양의 정수 1이상 100이하, 기본값 10
- 검색 결과 한 페이지당 최대 출력 개수

sort

- accuracy(기본값): 관련도
- publishtime: 출간일
- title: 제목
- salespoint: 판매량
- customerrating: 고객 평점
- myreviewcount: 마이 리뷰 개수

cover

- big: 너비 200px
- midbig: 너비 150px
- mid: 너비 85px, 기본값
- small: 너비 75px
- mini: 너비 65
- none: 없음

categoryid

- 분야의 고유 번호 양의 정수, 기본값 0(전체)
- 특정 분야로 검색 결과를 제한

outofstockfilter

- 양의 정수, 기본값 0
- 품절, 절판 등 재고 없는 상품 필터링(1이 제외 필터)

recentpublishfilter

- 0 ~ 60 사이 양의 정수, 기본값 0
- 출간일(월단위) 제한 필터링
- 값이 1인 경우 최근 한달 내 출간된 상품만 검색
- 0인 경우 전체 기간 출간 상품 검색

## 2 상품 리스트 API

http://www.aladin.co.kr/ttb/api/ItemList.aspx

http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=TTBKEY&querytype=QUERYTYPE

querytype

- ItemNewAll: 신간 전체 리스트
- ItemNewSpecial: 주목할 만한 신간 리스트
- Bestseller: 베스트셀러

start

- 양의 정수 1 이상, 기본값 1
- 검색 결과 시작 페이지

maxresults

- 양의 정수 1이상 100이하, 기본값 10
- 검색 결과 한 페이지당 최대 출력 개수

cover

- big: 너비 200px
- midbig: 너비 150px
- mid: 너비 85px, 기본값
- small: 너비 75px
- mini: 너비 65
- none: 없음

categoryid

- 분야의 고유 번호 양의 정수, 기본값 0(전체)
- 특정 분야로 검색 결과를 제한

outofstockfilter

- 양의 정수, 기본값 0
- 품절, 절판 등 재고 없는 상품 필터링(1이 제외 필터)

year, month, week

- 베스트셀러를 조회할 주간, 기본값 0
- QueryType=Bestseller인 경우, 베스트셀러를 조회할 주간
- "Year=2022&Month=5&Week=3" 형식으로 요청
- 생략하면 현재 주간의 정보 제공

## 3. 상품 조회 API

http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx

http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=TTBKEY&itemid=ITEMID

itemid

- ISBN: ISBN 10자리, 기본값
- ISBN13: ISBN 13자리
- ItemId: 알라딘 고유의 ItemId 값

cover

- big: 큰 크기
- midbig: 중간 큰 크기
- mid: 중간 크기, 기본값
- small: 작은 크기
- mini: 매우 작은 크기
- none: 없음

## 4. 응답 - 상품검색, 상품리스트, 상품조회

- title: 상품명
- link: 상품 링크 URL
- author: 저자/아티스트
- pubdate: 출간일(출시일). 날짜
- description: 상품설명(요약)
- isbn: 10자리 isbn
- isbn13: 13자리 isbn
- pricesales: 판매가. 정수
- pricestandard: 정가. 정수
- stockstatus: 재고상태(정상유통일 경우 비어있음, 품절/절판 등)
- mileage: 마일리지. 정수
- cover: 커버(표지)
- publisher: 출판사(제작사/출시사)
- salesPoint: 판매지수. 정수
- adult: 성인 등급 여부. bool
- customerReviewRank: 회원 리뷰 평점 0~10점. 정수
- bestDuration: 베스트셀러인 경우만 노출. 베스트셀러 순위 관련 추가 정보
- bestRank: 베스트셀러인 경우만 노출. 베스트셀러 순위 정보

## 5. 응답 - 상품조회

- fullDescription: 책 소개
- fullDescription2: 출판사 제공 책 소개
- categoryIdList < categoryInfo < categoryId: 전체 분야 정보 - 카테고리 ID
- categoryIdList < categoryInfo < categoryName: 전체 분야 정보 - 카테고리 명
- subInfo
  - subTitle: 부제
  - originalTitle: 원제
  - itemPage: 상품의 쪽수
  - toc: 목차
