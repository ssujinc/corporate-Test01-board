# SUJIN_making board

## 사용 기술스택

### Javascript

### Express

### MySql

### Prisma



# API 명세서 
```shell
http://localhost:10010/api-docs
```
![image](https://user-images.githubusercontent.com/103615884/183025788-a90c9f92-4407-4378-a9aa-6c2841b742b2.png)




- 원티드 지원 과제 내용 포함
  - 해당 프로젝트는 아래내용을 기반으로 만들었습니다.
    - 게시글 카테고리가 있습니다.
    - 게시글 검색 기능이 있습니다.
    - 게시글에서 특정 키워드를 검색하면, 게시글 제목, 게시글 본문, 게시글 댓글, 게시글 작성자 이름 에서 모두 검색하여, 해당 게시물을 표출합니다.
      ex) 노드 를 검색
    - 대댓글(1 depth)
      댓글에는 대댓글을 달 수 있습니다.
      1 depth는 필수이지만, 2, 3중으로 대댓글을 계속해서 추가할 수 있다면 가산점이 있습니다.
      댓글/대댓글 pagination
    - 게시글 읽힘 수
      같은 User가 게시글을 읽는 경우 count 수 증가하면 안 됩니다.
    - Restful API 규칙에 따라 설계합니다.
    - Unit Test 를 추가합니다.
    - 1000만건 이상의 데이터를 넣고 성능테스트 진행 결과 필요합니다.

- 게시글 카테고리의 종류는 JUSTCODE, 자유게시판, 프론트엔드, 백엔드, stackoverflow, articles, 채용공고가 있습니다.

- 게시글 검색
  - GET /boards API를 를 사용하여 검색 하실수 있습니다. keyword는 자유자재로 작성 가능합니다. 게시글 제목, 게시글 본문, 게시글 댓글, 게시글 작성자 이름에서 모두 검색 가능하며, 표출됩니다.
  
- 대댓글(1 depth)
    - 대댓글 pagination
      - 기본 댓글은 0 depth, 대댓글은 1의 depth를 가지고있습니다. 대댓글의 페이지네이션은 GET /board/2?page 에서 확인하실수 있으며, 게시판 조회할때, 댓글 페이지네이션을 지정하여 확인가능합니다.
