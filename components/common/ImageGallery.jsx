"use client"

import Image from "next/image";
import { useState } from "react";

export default function ImageGallery({ images, imageOf }) {
    const [selectedImage, setSelectedImage] = useState(images?.length > 0 ? images[0] : "/no-image.jpg");

    return (
        <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl mb-10">
            <Image
                className="w-full p-2 object-contain max-h-[300px] lg:max-h-[500px]"
                src={selectedImage}
                height={500}
                width={500}
                alt="Patient Image"
            />
            {
                images?.length > 1 && (
                    <div className="flex flex-wrap justify-center mt-2 gap-3">
                        {
                            !!images?.length && (
                                images.map((image) => (
                                    <Image
                                        key={image}
                                        src={image}
                                        alt={`Image of ${imageOf}`}
                                        height={200}
                                        width={200}
                                        className={`hover:border-green-400 hover:border-4 hover:rounded-md border-4  rounded-md object-cover max-w-[100px] md:max-w-[200px] ${selectedImage === image ? "border-green-400" : "border-transparent"}`}
                                        onClick={() => setSelectedImage(image)}
                                    />
                                ))
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
