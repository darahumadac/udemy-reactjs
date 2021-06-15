import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          profilePic={faker.image.avatar()} //pass props
          author="Sam"
          timeAgo="Today at 4:50PM"
          comment="Nice"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          profilePic={faker.image.avatar()}
          author="Jane"
          timeAgo="Today at 2:00AM"
          comment="Ok"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          profilePic={faker.image.avatar()}
          author="Alex"
          timeAgo="Yesterday at 5:00PM"
          comment="Nope"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
