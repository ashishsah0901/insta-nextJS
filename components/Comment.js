import Moment from "react-moment";

const Comment = ({ image, comment, username, timestamp }) => {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <img src={image} alt="" className="h-7 rounded-full" />
      <p className="text-sm flex-1">
        <span className="font-bold">{username} </span> {comment}
      </p>
      <Moment fromNow className="pr-5 text-xs">
        {timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export default Comment;
