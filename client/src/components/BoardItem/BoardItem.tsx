import React from 'react';
import { Board } from '../../types/responseData';
import BoardBody from './BoardBody/BoardBody';
import BoardHeader from './BoardHeader/BoardHeader';
import BoardImages from './BoardImages/BoardImages';
import BoardBackground from './BoardItemStyles';

const BoardItem = (props: Board) => {
  const {
    id,
    content,
    isStreet,
    like,
    comment,
    createAt,
    location,
    photos,
    user,
  } = props;
  return (
    <BoardBackground key={id}>
      <BoardHeader
        userId={user.id}
        boardId={id}
        userProfile={user.profileUrl}
        userName={user.name}
        isStreet={isStreet}
        location={location}
      />
      <BoardImages src={photos.url[0]} />
      <BoardBody
        boardId={id}
        content={content}
        like={like}
        comment={comment}
        createAt={createAt}
      />
    </BoardBackground>
  );
};

export default BoardItem;
