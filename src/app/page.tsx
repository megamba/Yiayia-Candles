import Image from "next/image";

// components
import WhyUsBanner from "@/components/whyUsBanner/whyUsBanner";



export default function Home() {
  return (
    <main className="">

      <div>
        <p className="text-4xl">
          hero goes here
        </p>
      </div>


      {/* welcome to yiayia section */}
      <div className="border-gray-600 border-2 flex flex-row justify-around">
        

        <div className="flex flex-col justify-evenly w-1/3">
          <h1 className="text-1 text-4xl font-roboto">
            Welcome to Yiayiá
          </h1>
          <p className="text-2 text-xl">
            Step into our world of light and tradition, where each product is a tribute 
            to Yiayia's legacy. Handcrafted with care and infused with scents that evoke 
            memories and spirits, our candles and soaps bring comfort, connection, and a 
            touch of magic to every moment.
          </p>
        </div>

        <div>
          <Image 
            src="/assets/welcomeToYiayia.png" 
            alt="sun and moon candle with beautiful pink flowers"
            width={652}
            height={364}
          />
        </div>
        
      </div>

      <WhyUsBanner />

      <div>
        <h4>
          Independently owned and operated since 2020,
        </h4>
        <p>
          Yiayiá makes quality scented essentials and great atmosphere in sunny California.
        </p>
      </div>


      
    </main>
  );
}
