import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();

    return (
        <div className='flex gap-4 bg-slate-200 px-10 py-4'>
            <p className='cursor-pointer' onClick={() => router.push("/")}>Home</p>
        </div>
    )
}

export default Navbar