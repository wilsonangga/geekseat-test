"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import PeopleList from './components/PeopleList'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [people, setPeople] = useState([])
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      setPeople(resp?.data?.results);
      setNext(resp?.data?.next);
      setPrev(resp?.data?.previous);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPeople = () => {
    fetchData('https://swapi.dev/api/people');
  };

  const nextPage = () => {
    fetchData(next);
  };

  const prevPage = () => {
    fetchData(prev);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      <Navbar />
      <Pagination nextPage={nextPage} prevPage={prevPage} isLoading={isLoading} next={next} prev={prev} />
      <PeopleList people={people} isLoading={isLoading} />
    </div>
  )
}
