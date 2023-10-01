"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { usePathname } from 'next/navigation'
import PeopleDetail from '../components/PeopleDetail'

const Page = () => {
    const pathname = usePathname()
    const [people, setPeople] = useState("")

    const fetchDetailPeople = async () => {
        await axios.get("https://swapi.dev/api/people/" + pathname)
            .then((resp) => { setPeople(resp?.data) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchDetailPeople()
    }, [])

    return (
        <div>
            <Navbar />
            <PeopleDetail people={people} />
        </div>
    )
}

export default Page