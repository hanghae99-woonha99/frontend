export const RESP = {
  // 회원가입 POST
  SIGN_UP: [
    // 성공시
    {
      success: true,
      data: {
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
        msg: "회원가입 완료",
      },
      error: null,
    },

    // 실패시
    {
      success: false,
      data: null,
      error: {
        code: "HttpStatus",
        msg: "회원가입 실패",
      },
    },
  ],

  // 로그인 POST
  LOG_IN: [
    //성공시
    {
      success: true,
      data: {
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
        msg: "로그인 완료",
      },
      error: null,
    },

    //실패시
    {
      success: false,
      data: null,
      error: {
        code: "HttpStatus",
        msg: "아이디 또는 비밀번호가 일치하지 않습니다.",
      },
    },
  ],

  // 아이디 유효성 검사 POST
  VALIDATE_NICKNAME: [
    //검증 성공시
    {
      success: true,
      data: {
        msg: "사용 가능한 아이디입니다.",
      },
      error: null,
    },

    //검증 실패시
    {
      success: false,
      data: null,
      error: {
        code: "HttpStatus",
        msg: "중복된 아이디입니다. or 형식에 맞지 않는 아이디입니다.",
      },
    },
  ],

  // 로그아웃 POST
  LOG_OUT: [
    {
      suceess: true,
      data: {
        msg: "로그아웃 되었습니다.",
      },
      error: null,
    },
  ],

  // 게시글 작성 POST
  AUTH_POSTS: [
    {
      success: true,
      data: {
        msg: "게시글 등록 성공",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/3c6efc51-2684-44f7-b37f-186e33acc790/image.png",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 게시글 수정 PUT
  AUTH_POSTS_UPDATE: [
    {
      success: true,
      data: {
        postId: 1,
        msg: "게시글 수정 성공",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 게시글 삭제 DELETE
  AUTH_POST_DELETE: [
    {
      success: true,
      data: {
        postId: 1,
        msg: "게시글 삭제 성공",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 게시글 전체 조회 GET
  API_POSTS: [
    {
      success: true,
      data: {
        postId: 1,
        title: "제목입니다1",
        descript: "천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png",
        postLikeCnt: 30,
        commentCnt: 20,
        author: "nickname",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
    {
      success: true,
      data: {
        postId: 2,
        title: "제목입니다2",
        descript: "천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png",
        postLikeCnt: 30,
        commentCnt: 20,
        author: "nickname",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
    {
      success: true,
      data: {
        postId: 3,
        title: "제목입니다3",
        descript: "천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png",
        postLikeCnt: 30,
        commentCnt: 20,
        author: "nickname",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
    {
      success: true,
      data: {
        postId: 4,
        title: "제목입니다4",
        descript: "천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png",
        postLikeCnt: 30,
        commentCnt: 20,
        author: "nickname",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
    {
      success: true,
      data: {
        postId: 5,
        title: "제목입니다5",
        descript: "천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은",
        imgUrl: "https://velog.velcdn.com/images/hahbr88/post/67aab3ec-2a82-425e-bd2d-8108805e8389/image.png",
        postLikeCnt: 30,
        commentCnt: 20,
        author: "nickname",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 게시글 상세 조회 GET
  API_POSTS_POSTID: [
    {
      success: true,
      data: {
        postId: 2,
        title: "제목입니다.2",
        descript: "내용입니다.2",
        imgUrl: "http//:~~~.~~~",
        author: "nickname",
        postLikeCnt: 30,
        commentCnt: 20,
        comments: [
          {
            postId: 2,
            commentId: 1,
            author: "nickname",
            descript: "댓글입니다.",
            commentLikeCnt: 30,
            createdAt: "2022-07-28T00:15:20.954309",
            modifiedAt: "2022-07-28T00:15:20.954309",
          },
        ],
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 게시글 좋아요 POST
  API_AUTH_POST_POSTID_LIKES: [
    {
      success: true,
      data: {
        postId: 1,
        isLike: true,
        msg: "게시글 좋아요 성공",
      },
      error: null,
    },

    {
      success: true,
      data: {
        postId: 1,
        isLike: false,
        msg: "게시글 좋아요 취소",
      },
      error: null,
    },
  ],

  // 댓글 좋아요 POST
  API_AUTH_COMMNENTS_COMMENTID_LIKES: [
    {
      success: true,
      data: {
          postId: 1,
          commentId: 1,
          isLike: true,
          msg: "댓글 좋아요 성공"
       },
      error: null
  },

  {
      success: true,
      data: {
          postId: 1,
          commentId: 1,
          isLike: false,
          msg: "게시글 좋아요 취소"
       },
      error: null
  }
  ],

  // 댓글 작성 POST
  API_AUTH_POST_POSTID_COMMENTS: [
    {
      success: true,
      data: {
        postId: 1,
        msg: "댓글 작성 성공",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],

  // 댓글 삭제 DELETE
  API_AUTH_POSTS_POSTID_COMMNENTS_COMMENTID: [
    {
      success: true,
      data: {
        postId: 1,
        commentId: 1,
        msg: "댓글 삭제 성공",
        createdAt: "2022-07-28T00:13:16.136823",
        modifiedAt: "2022-07-28T00:13:46.925643",
      },
      error: null,
    },
  ],
};
