import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import { useParams } from 'react-router-dom'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0])).catch(console.error)
    }, [slug])

    if (!singlePost) return <div> Loading... </div>

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg">
                <header className="relative">
                    <div className="absolute w-full flex items-center justify-center p-12">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className="w-10 h-10 rounded-full" />
                                <p className="flex items-center pl-2 text-2xl">{singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }} />
                    <div className="px-16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
                        <h5 className="text-black text-xs space-x-4">{new Date(singlePost.publishedAt).toLocaleDateString("en-US")}</h5>
                        <BlockContent blocks={singlePost.body}
                            projectId="xw5z4ks5"
                            dataset="production" />
                    </div>
                </header>
            </article>
        </main>
    )
}