import React from 'react'
import Pricinghero from '../components/pricinghero/Pricinghero'
import Plans from '../components/Plans/Plans'
import Footer from '../components/Footer/Footer'
import Addcharacter from '../components/Addcharacter/Addcharacter'

export default function page() {
    return (
        <div>
            <Pricinghero />
            <Addcharacter />
            <Plans />
            <Footer />
        </div>
    )
}
