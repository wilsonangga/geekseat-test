import React from 'react'
import { useRouter } from 'next/navigation'

const People = ({ people }) => {
    const router = useRouter()

    return (
        <ul className="list-disc mb-1 w-fit">
            <li className='cursor-pointer hover:font-bold' onClick={() => router.push("/" + people?.url?.split("/")[5])}>
                <p>{people?.name} ({people?.birth_year})</p>
                <p>{people?.mass} kg</p>
                <p>{people?.height} cm</p>
                <p>{people?.eye_color} eye</p>
            </li>
        </ul>
    )
}

export default People