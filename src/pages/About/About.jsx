import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
