"use client"

import { useParams } from "next/navigation"

export default function NotFound() {
    const params = useParams();

    return (
        <div className='container flex justify-center h-[75vh] items-center'>
            <div className='flex items-center flex-col'>
                <h2 className='text-xl font-semibold py-3'>
                This patient entry with ID: {params?.id} does not exist!
                </h2>
                
            </div>

        </div>
    )
}