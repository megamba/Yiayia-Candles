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
          <h1 className="text-1 ">
            Welcome to Yiayiá
          </h1>
          <p>
            Step into our world of light and tradition, where each product is a tribute 
            to Yiayia's legacy. Handcrafted with care and infused with scents that evoke 
            memories and spirits, our candles and soaps bring comfort, connection, and a 
            touch of magic to every moment.
          </p>
        </div>

        <div>
          candle image
        </div>
        
      </div>

      <div>
        <h4>
          Independently owned and operated since 2020,
        </h4>
        <p>
          Yiayiá makes quality scented essentials and great atmosphere in sunny California.
        </p>
      </div>


      <WhyUsBanner />

      
    </main>
  );
}
