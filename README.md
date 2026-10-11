# 유신경영아카데미 홈페이지

전문직 시험 전문 독서실 유신경영아카데미의 한 페이지짜리 홈페이지입니다.
설치할 것 없이 파일을 그대로 올리면 동작합니다.

## 파일 구성

| 파일 | 내용 |
| --- | --- |
| `index.html` | 페이지 본문 (문구, 가격, 링크) |
| `assets/style.css` | 디자인 (색, 글씨, 배치, PC·모바일 구분) |
| `assets/main.js` | 동작 (메뉴, 스크롤 모션, 사진 전환, 설명회 자동 숨김) |
| `assets/img/room-1.jpg`, `room-2.jpg` | 열람실 사진 |
| `assets/img/og.jpg` | 카카오톡·SNS에 링크를 붙였을 때 보이는 미리보기 사진 |
| `favicon.svg` | 브라우저 탭 아이콘 |
| `.nojekyll` | 깃허브 페이지용 빈 파일 (지우지 마세요) |

## 깃허브 페이지로 올리기

### 방법 A. 웹에서 올리기

1. 깃허브에서 새 저장소를 만듭니다. Public으로 설정합니다.
   - 통과: 빈 저장소 화면이 보입니다.
2. `uploading an existing file`을 누르고, 이 폴더 **안의 내용물 전체**를 끌어다 놓습니다. 폴더째가 아니라 `index.html`이 맨 위에 오도록 올립니다.
   - 통과: 저장소 첫 화면에 `index.html`, `assets`, `favicon.svg`가 보입니다.
   - 중단: `yusin-academy-web/index.html`처럼 폴더 안에 들어가 있으면 지우고 다시 올립니다.
   - 참고: `.nojekyll`은 숨김 파일이라 끌어다 놓을 때 빠질 수 있습니다. 빠졌으면 `Add file → Create new file`에서 이름을 `.nojekyll`로 하고 내용 없이 저장합니다.
3. `Settings → Pages`에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 고르고 Save를 누릅니다.
   - 통과: 1~2분 뒤 같은 화면 위쪽에 `Your site is live at https://아이디.github.io/저장소이름/` 이 뜹니다.
4. 그 주소를 폰과 PC에서 엽니다.
   - 통과: 첫 화면에 열람실 사진이 보이고, 모바일에서 아래로 내리면 하단에 전화·카톡·7일 무료 신청 바가 올라옵니다.
   - 중단: 글자만 보이고 디자인이 없으면 `assets` 폴더가 빠진 것입니다. 2번을 다시 확인합니다.

### 방법 B. 터미널에서 올리기

이 폴더 안에서 아래를 그대로 붙여 넣습니다. `아이디`와 `저장소이름`만 바꿉니다.

```bash
git init -b main
git add -A
git commit -m "유신경영아카데미 홈페이지 첫 배포"
git remote add origin https://github.com/아이디/저장소이름.git
git push -u origin main
```

- 통과: 마지막 줄에 `branch 'main' set up to track 'origin/main'`이 나옵니다.
- 그다음 방법 A의 3번부터 진행합니다.

## 도메인을 연결할 때

1. `Settings → Pages → Custom domain`에 도메인을 입력하고 Save를 누릅니다.
2. 도메인 구입처의 DNS 설정에서 `www`에 CNAME 레코드로 `아이디.github.io`를 넣습니다.
3. `index.html`의 `og:image` 값을 전체 주소로 바꿉니다. 카카오톡 미리보기 사진은 전체 주소여야 나옵니다.

```html
<meta property="og:image" content="https://도메인/assets/img/og.jpg">
```

## 자주 고칠 곳 (`index.html`)

파일을 열고 아래 글자를 검색하면 해당 위치로 갑니다.

| 고칠 내용 | 검색어 |
| --- | --- |
| 이용 요금 | `25만원`, `35만원` |
| 온라인 공부 PT 가격 | `150,000` |
| 멘토 이력 | `이력 준비 중` |
| 멘토 사진 | `사진<br>준비 중` |
| 전화번호 | `010-2822-5408`, `01028225408` |
| 상담 신청서 주소 | `forms.gle` |
| 카카오톡 주소 | `open.kakao.com` |
| 주소·오시는 길 | `논현로79길` |
| 설명회 문구 | `설명회` |

### 설명회 안내

설명회 띠와 설명회 섹션은 2026년 10월 19일 21시가 지나면 자동으로 숨겨집니다.
다음 설명회를 열 때는 `index.html`의 날짜 문구와 `assets/main.js`의 아래 날짜를 함께 바꿉니다.

```js
new Date('2026-10-19T21:00:00+09:00')
```

### 멘토 사진 넣기

사진 파일을 `assets/img/`에 넣고, `index.html`에서 해당 멘토의 아래 줄을

```html
<div class="ph">사진<br>준비 중</div>
```

이렇게 바꿉니다. 세로 3:4 비율 사진이 가장 잘 맞습니다.

```html
<img class="ph" src="assets/img/파일이름.jpg" alt="유경민 회계사" style="padding:0;object-fit:cover">
```

## 알아둘 점

- 카카오톡·네이버·구글 폼 아이콘은 공식 파일이 아니라 직접 그린 그림입니다. 각 회사의 공식 로고 파일로 바꾸려면 `index.html` 위쪽의 `<symbol id="i-kakao">` 등 다섯 개를 교체합니다.
- 오시는 길의 지도는 직접 그린 약도입니다. 실제 네이버 지도를 넣으려면 네이버 클라우드에서 지도 API 키를 발급받아야 합니다.
- 방문자의 기기가 다크 모드이면 밝은 구역도 어두운 색으로 바뀝니다.
- 글씨체는 구글 폰트(Noto Sans KR)를 인터넷에서 불러옵니다.
