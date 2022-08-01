# SUJIN_making board

# 기업과제 설명 및 구현

<aside>
📝 아래 요구사항에 맞춰 게시판 Restful API를 개발합니다.

</aside>

- 기업 선호 기술스택: python flask, mashmallow, mongoengine
- 필수 사용 데이터베이스: mongodb

---

- 대체 가능 기술 스택 : Express.js, typeorm
- 대체 가능 데이터베이스 : mysql

### **[필수 포함 사항]**

- READ.ME 작성
- 프로젝트 빌드, 자세한 실행 방법 명시
- 구현 방법과 이유에 대한 간략한 설명
- 프론트엔드 구현 대신 Swagger 이용하여 API 테스트 가능하도록 구현

### [개발 요구사항]

- 참고 : [wecommunity 게시판](https://community.wecode.co.kr/)
- 게시글 카테고리가 있습니다.
- 게시글 검색 기능이 있습니다.
- 게시글에서 특정 키워드를 검색하면, 게시글 제목, 게시글 본문, 게시글 댓글, 게시글 작성자 이름 에서 모두 검색하여, 해당 게시물을 표출합니다.
- ex) `노드` 를 검색
- 대댓글(1 depth)
- 댓글에는 대댓글을 달 수 있습니다.
- 1 depth는 필수이지만, 2, 3중으로 대댓글을 계속해서 추가할 수 있다면 가산점이 있습니다.
- 댓글/대댓글 pagination
- 게시글 읽힘 수
- 같은 User가 게시글을 읽는 경우 count 수 증가하면 안 됩니다.
- Restful API 규칙에 따라 설계합니다.
- Unit Test 를 추가합니다.
- 1000만건 이상의 데이터를 넣고 성능테스트 진행 결과 필요합니다.
