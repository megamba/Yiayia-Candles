import React from 'react';
import Image from 'next/image';

export default function Logo() {
    return (
        <div>

        <div className='logo-symbol'>
            <Image src="/assets/Yiayia_Symbol.svg" width={37} height={47.17} alt="yiayia logo icon candle small"/>
        </div>

        <div className='logo-title'>
            <Image src="/assets/Yiayia_Title.svg" width={116.02} height={42} alt="yiayia logo title"/>
        </div>

        </div>
    );
}
