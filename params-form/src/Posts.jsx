// file: params-form/src/Posts.jsx
import { Link, useSearchParams } from "react-router-dom";

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  return (
    <>
      <h1>POSTS</h1>
      <br />
      <Link to={"/"}>Home</Link>
      <div>
        <label className="posts_label" htmlFor="q">
          Enter search text
        </label>
        <input
          onChange={(event) =>
            setSearchParams(
              (prev) => {
                prev.set("q", event.target.value);
                return prev;
              },
              { replace: true }
            )
          }
          value={q}
          id="q"
          className="posts_input"
          type="text"
        />
      </div>
      <p>
        Navigate to last page, then forward again. This should return to this
        page with the last search text request you entered. Your search becomes
        part of the history, and holds state.
      </p>
    </>
  );
};

export default Posts;
