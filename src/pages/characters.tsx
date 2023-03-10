import { Layout } from "@/components";
import styles from "@/styles/Character.module.css";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const characters = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      characters,
    },
  };
}

export default function Characters({ characters }: { characters: any }) {
  console.log(characters);
  return (
    <Layout>
      <section>
        <h2>See all characters</h2>
        {characters.results.map((character: any) => {
          return <div className={styles.character} key={character.id}>{character.name}</div>;
        })}
      </section>
    </Layout>
  );
}
