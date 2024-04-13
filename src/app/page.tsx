import Image from "next/image";
import Link from "next/link";

// components
import Navbar from "@/components/navbar/navbar";


export default function Home() {
  return (
    <main className="">
      

      <Link href={'/home'}>Go to Home page</Link>

      <div>
        logo component goes here
      </div>

      <Navbar />

      <div>
        hero goes here
      </div>

      <div>
        welcome to yiayia
      </div>

      
    </main>
  );
}
