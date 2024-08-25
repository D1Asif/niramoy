import CreateNewPatientForm from '@/components/PatientDetails/CreateNewPatientForm';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function PatientDetailsEditPage({ params: { id } }) {
    const response = await fetch(`${process.env.API_BASE_URL}/patients?id=${id}`, { cache: 'no-store' });
    const data = await response.json();

    if (!data[0]) {
        notFound();
    }

    return (
        <div className='container'>
            <CreateNewPatientForm patient={data[0]} />
        </div>
    )
}
