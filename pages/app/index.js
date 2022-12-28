import Head from 'next/head'

export default function App() {
  return (
    <div>
      <Head>
        <title>Badge</title>
        <meta
          name="description"
          content="Home de la tienda"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="titulo para el home de la tienda"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="esta es la decripcion del home de la tienda"
          data-react-helmet="true"
        />
        <meta property="og:type" content="article" data-react-helmet="true" />
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612"
          data-react-helmet="true"
        />
      </Head>
      App
    </div>
  );
}
