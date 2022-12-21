![waving](https://capsule-render.vercel.app/api?type=waving&height=200&fontAlignY=40&text=weKea&color=gradient)

- 감성을 판매하는 가구 브랜드 웹서비스를 구현했습니다.
- 외부 라이브러리를 최소한으로 활용하여 초기세팅부터 직접 구현했습니다
</br>

# 개발 기간

- 22.12.02~22.12.16
</br>

# 깃허브 링크

[팀 프로젝트 프론트엔드 Github](https://github.com/wecode-bootcamp-korea/40-1st-weKea-frontend)

[팀 프로젝트 백엔드 Github](https://github.com/wecode-bootcamp-korea/40-1st-weKea-backend)

</br>

# 개발 인원 및 파트

| 김태윤 (FE) | 네비게이션바, Footer, 카테고리, 장바구니 | <a href="https://github.com/Taeyooooon"><img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/></a> |
| --- | --- | --- |
| 문승훈 (FE) | 로그인, 장바구니 | <a href="https://github.com/Moonseunghun"><img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/></a> |
| 배효빈 (FE) | 회원가입, 메인페이지, 상세 페이지 |  <a href="https://github.com/HyobinBae"><img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/></a> |

</br>

| 윤형준 (BE) | 초기세팅, 모델링, 로그인 / 회원가입 API, 상품 필터링 API, 장바구니 API | <a href="https://github.com/hysy9255"><img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/></a> |
| --- | --- | --- |
| 임다슬 (BE) | 초기세팅, 모델링, 카테고리별 상품 리스트 API, 상세 페이지 API | <a href="https://github.com/gkgkda"><img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/></a> |

</br>

# 기술 스택

### 프론트엔드

|JavaScript|React|Sass|esLint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |


</br>

### 백엔드

|JavaScript|Nodejs|MySql|Rest|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |




# 툴

<div>
<img src="https://img.shields.io/badge/Git-orange?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-D91D57?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-9cf?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-white?style=flat&logo=Notion&logoColor=black"/>
<img src="https://img.shields.io/badge/VSCode-blue?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

</br>

# 데모 영상

</br>

# 구현 기능  FrontEnd

</br>

## 로그인
- 로그인 시 이메일 및 비밀번호 정규표현식을 통한 유효성 검사 구현
- 로그인 시 HTTP 응답으로 담겨오는 JWT를 LocalStorage 저장 로직 구현
- 로그인 성공 시 Main 페이지로 이동

## 회원가입
- 회원가입 시 인풋 데이터 정규표현식을 통한 유효성 검사 구현
- 회원가입 성공 시 Login 페이지로 이동
- 상수데이터 활용해 회원가입 입력창 구현

## 메인페이지
- Flex 기반 메인페이지 레이아웃 구현
- 이미지 슬라이드 캐러셀 구현

## 카테고리
- 카테고리에 따라서 조건부로 data fetching을 받고, 상품리스트 구성이 달라지도록 구현
- 상품리스트의 옵션에 따라 정렬 가능하도록 구현 (쿼리스트링으로 sort option에 따라 data fetching 을 다르게 받도록 구현)
- 상품 Id를 이용해 동적 라우팅을 통해 상세페이지로 이동 가능하게 구현
- 장바구니 버튼을 누르면 해당 상품을 DB의 장바구니 테이블에 저장 후 알림 모달창 슬라이드 구현
- Grid 기반으로 반응형 레이아웃 구현

## 네비게이션바
- 로그인 아이콘 클릭으로 로그인 페이지 이동할 수 있도록 구현
- 메뉴 아이콘 클릭 시 슬라이드 애니메이션 적용한 메뉴 모달창 구현
- 메뉴를 이용해 원하는 카테고리로 이동할 수 있도록 구현
- 화면 너비에 따라 구조가 바뀌는 반응형 레이아웃 구현

## Footer
- 상수데이터를 활용해 전역에서 사용 가능한 Footer 구현

## 상세페이지
- 카테고리 페이지에서 제품 선택 시 해당 제품의 id값을 전달받아 상세페이지 렌더링 구현
- 토큰이 없는 경우 비회원으로 분류되어 장바구니 이용 불가
- 구매 버튼을 누르면 해당 상품을 DB의 장바구니 테이블에 저장

## 장바구니
- Local Storage에 저장된 JWT 확인 후, 장바구니에 담긴 상품 리스트 화면에 렌더링
- 장바구니 상품들의 총 금액 계산을 State끌어올리기를 사용해 표출
- 장바구니 상품들의 수량 변경 및 삭제 시 실시간으로 DB와 통신

