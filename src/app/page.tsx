import WhyUsBanner from "@/components/whyUsBanner/whyUsBanner";



export default function Home() {
  return (
    <main className="">

      <div>
        <p className="text-4xl">
          hero goes here
        </p>
      </div>

      <div>
        <h1>welcome to yiayia</h1>
        <p>
          Step into our world of light and tradition, where each product is a tribute 
          to Yiayia's legacy. Handcrafted with care and infused with scents that evoke 
          memories and spirits, our candles and soaps bring comfort, connection, and a 
          touch of magic to every moment.
        </p>
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
