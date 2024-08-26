import Image from "next/image";
import { MdDelete } from "react-icons/md";

export default function ImageUpdateGalleryItem({image, images, setImagesArray}) {
    return (
        <div className="relative">
            <button 
                className="text-gray-500 hover:text-red-500 absolute text-2xl top-3 right-3"
                onClick={() => {
                    const updatedArray = images.filter((item) => item !== image)
                    setImagesArray([...updatedArray]);
                }}
            >
                <MdDelete />
            </button>
            <Image
                className="w-[115px] object-cover h-[100px] rounded-md m-2"
                src={image}
                height={100}
                width={100}
                alt="Patient Image"
            />
        </div>
    )
}
