import Image from "next/image";
import Link from "next/link";

// components
import Navbar from "@/components/navbar/navbar";


export default function Contact() {
  return (
    <main className="">
      
      <p>Contact</p>

      <Link href={'/home'}>Go to Home page</Link>

    </main>
  );
}
