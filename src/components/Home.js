import React from 'react'
import image from '../IMG_1778.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="it me, Karl :)" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-500 font-bold leading-none lg:leading-snug home-name">Hello, world. I'm Karl</h1>
            </section>
        </main>
    )
}