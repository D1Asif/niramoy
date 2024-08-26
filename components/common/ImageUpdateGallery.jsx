import ImageUpdateGalleryItem from "./ImageUpdateGalleryItem";


export default function ImageUpdateGallery({ images, setImagesArray }) {
    return (
        <div className="flex flex-wrap rounded-md border border-black/10 dark:border-white/15 mt-4 w-fit p-2">
            {
                images?.map((image) => (
                    <ImageUpdateGalleryItem
                        key={image}
                        image={image}
                        images={images}
                        setImagesArray={setImagesArray}
                    />
                ))
            }
        </div>
    )
}
