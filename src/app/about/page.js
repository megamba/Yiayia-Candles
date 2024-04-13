import Image from "next/image";
import Link from "next/link";

// components
import Navbar from "@/components/navbar/navbar";


export default function About() {
  return (
    <main className="">
      
      <p>About</p>

      <Link href={'/home'}>Go to Home page</Link>

    </main>
  );
}
