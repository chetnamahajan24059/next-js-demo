import Head from "next/head";

export default function HtmlHead() {
  return (
    <>
    <Head>
      <title>Rick and Morty Show</title>
      <meta
        name="description"
        content="This website displays the list of characters from Rick and Morty Show"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
  );
}
