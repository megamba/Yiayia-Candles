import React from "react";

interface WhyUsBubbleInfo {
    title: string;
    image: string;
}

const whyUsBannerInfo: WhyUsBubbleInfo[] = [
  {
    title: 'vegan soy and coconut wax',
    image: ''
  },
  {
    title: 'handmade',
    image: ''
  },
  {
    title: 'sustainably made',
    image: ''
  },
  {
    title: 'organic ingredients',
    image: ''
  },
  {
    title: 'woman-owned business',
    image: ''
  },
]



export default function WhyUsBanner() {

  return(
    <div>
      <h2>Why Us?</h2>

      {/* bubble coontainier */}
      <div className="border-black border-2 ">
        <ul className="border-slate-50 border-2 flex flex-row justify-between">
          {whyUsBannerInfo.map((info) => (
            <li>{info.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );

}