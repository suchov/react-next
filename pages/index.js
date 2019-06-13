import Header from "../components/header";
import withMui from "../shared/MUI/withMui";
import "isomorphic-fetch";
import { Card, CardHeader, CardText } from "material-ui/Card";
import RaiseButton from "material-ui/RaisedButton";
import Link from "next/link";

const Index = ({ posts }) => (
  <div>
    <Header />
    {posts.map(x => (
      <Card key={x.id}>
        <CardHeader title={x.title} />
        <CardText>
          <RaiseButton fullWidth={true} primary={true}>
            <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
              <a>Click to view post!</a>
            </Link>
          </RaiseButton>
        </CardText>
      </Card>
    ))}
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { posts: data.items };
};

export default withMui(Index);
