import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className=" bg-slate-300 flex flex-row mx-3 px-10  rounded-b-lg h-20  mb-20 items-center">
      <Link href="/Posts">Posts</Link>
    </header>
  );
};

export default Header;
