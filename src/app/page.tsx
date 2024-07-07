import Link from "next/link";
import ApiFetch from "./FetchApi/_FetchApi";
import Posts from "./Posts/page";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8 justify-center items-center h-screen">
      <Link href="/login">
        <button className=" bg-sky-500 text-white w-40 h-10 rounded-lg">
          login
        </button>
      </Link>
      <Link href={"./signup"}>
        <button>sign up</button>
      </Link>
      <div className="hidden">
        <ApiFetch />
      </div>
    </main>
  );
}
