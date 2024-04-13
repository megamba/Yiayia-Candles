import Image from "next/image";
import Link from "next/link";

// components
import Navbar from "@/components/navbar/navbar";


export default function Shop() {
  return (
    <main className="">

        <Navbar />
      
        <p>Shop</p>

        <Link href={'/'}>Go to Home page</Link>

    </main>
  );
}
