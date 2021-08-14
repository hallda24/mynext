import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>HomePage</h1>
        <p></p>
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
    </>
  );
}
