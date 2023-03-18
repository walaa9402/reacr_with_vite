import Post from "../Post/Post";
import classes from "./PostsList.module.css";

function PostsList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Walaa" body="any text 1" />
      <Post author="Doaa" body="any text 2" />
      <Post author="Mohamed" body="any text 3" />
    </ul>
  );
}

export default PostsList;
