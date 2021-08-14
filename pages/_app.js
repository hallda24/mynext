import Layout from "../component/layout";
import "tailwindcss/tailwind.css";
import "../Styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
