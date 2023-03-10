import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "@/components";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/");
    }, 3000);

    () => clearTimeout(t);
  }, []);
  
  return (
    <Layout>
      <section className="not-found">
        <h1>Ooops..</h1>
        <p>This page not Found!!</p>
        <Link href="/">Go back to the home page</Link>
      </section>
    </Layout>
  );
}
