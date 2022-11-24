export interface Api {
  statusCode: number;
  message: string;
}

export interface LoginApi extends Api {
  email?: string;
  redirect?: boolean;
  data?: {
    userId: number;
  };
}

export interface Comments {
  content: string; // 본문 내용
  createdAt: string; // 올린 시간
  commentId: number; // 이 댓글의 고유 아이디
  userId: number; // 유저 고유 번호
  userName: string; // 유저의 닉네임
  userProfile: string; // 유저의 프로필 이미지 경로
}

export interface CommentApi extends Api {
  data: {
    comments: [Comments];
    next_max_id: number;
  };
  next_max_id: number;
}

export interface NewCommentApi extends Api {
  data?: {
    commentId: number;
  };
}

export interface NewPostApi extends Api {
  data: {
    boardId: number;
  };
}

export interface Board {
  id: string;
  content: string;
  isStreet: boolean;
  like: number;
  comment: number;
  createAt: string;
  location: string | null;
  // nextMaxId: number;
  photos: {
    url: string[];
  };
  user: {
    id: number;
    name: string;
    profileUrl: string;
  };
}

export interface BoardApi extends Api {
  data?: {
    boards: [Board];
    nextMaxId: number;
    count: number;
  };
}

export interface LikeListApi extends Api {
  data?: {
    users: {
      id: number;
      name: string;
      profileUrl: string;
    };
  };
}
