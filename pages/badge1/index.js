import Head from "next/head";

export default function Badge1() {
  return (
    <div>
      <Head>
        <title>Badge1</title>
        <meta
          name="description"
          content="I've supported UkraineNow and earned new badge. Try it with me ;)"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="Get your badge with Donuts"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="User1 get Badge1"
          data-react-helmet="true"
        />
        <meta property="og:type" content="article" data-react-helmet="true" />
        <meta
          property="og:url"
          content="https://joindonutsapi.site"
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content="https://clon-demo.s3.amazonaws.com/badge1.png"
          data-react-helmet="true"
        />
      </Head>
      Badge1
    </div>
  );
}
