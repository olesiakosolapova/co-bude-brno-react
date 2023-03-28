import { Link } from "react-router-dom";
import { ContentContainer, ContentText } from "./components/content/Content";

export default function NotFound() {
  return (
    <ContentContainer>
      <h1>Oops! You seem to be lost.</h1>
      <h2>404 - Page Not Found</h2>
      <ContentText>
        <Link to="/">
          <a>Go back to the homepage!</a>
        </Link>
      </ContentText>
    </ContentContainer>
  );
}
