import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        profilePic={faker.image.avatar()} //pass props
        author="Sam"
        timeAgo="Today at 4:50PM"
        comment="Nice"
      />
      <CommentDetail
        profilePic={faker.image.avatar()}
        author="Jane"
        timeAgo="Today at 2:00AM"
        comment="Ok"
      />
      <CommentDetail
        profilePic={faker.image.avatar()}
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        comment="Nope"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
