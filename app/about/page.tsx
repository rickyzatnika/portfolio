import About from '@/components/shared/aboutMe';
import { Metadata } from 'next';
import React from 'react'



export const metadata: Metadata = {
    title: "Ricky Zatnika - About",
    description: "a freelance web developer, creating beautiful and functional digital experiences.",
};


const AboutPage = () => {
    return (
        <About />
    )
}

export default AboutPage