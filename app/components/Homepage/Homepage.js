import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import Hero from '../Hero/Hero';
import Personalstorybook from '../Personalstorybook/Personalstorybook';
import Canvaapp from '../Canvaapp/Canvaapp';
import Plans from '../Plans/Plans';
import Aigenerated from '../Aigenerated/Aigenerated';
import Yourown from '../Yourown/Yourown';
import Watchvideo from '../Watchvideo/Watchvideo';
import Footer from '../Footer/Footer';
export default function Homepage() {





    return (
        <>
            <div className='flex flex-col'>

                <Hero />
                <Personalstorybook />
                <Canvaapp />
                <Plans />
                <Aigenerated />
                <Yourown />
                <Watchvideo />
                <Footer />
            </div>
        </>
    )
}
