import Head from 'next/head';

import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Button from './components/Button';
import Footer from './components/Footer';
import Search from './components/Search';

export async function getStaticProps() {
  let gifResults = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=6`)
  gifResults = await gifResults.json()
  return { props: { gifResults } }
}

export default function Home(initialData) {
  const [formInput, setFormInput] = useState();
  const [searchTerm, setSearchTerm] = useState(' ');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(initialData.gifResults.data)
  }, [initialData])

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  }

  const search = async (event) => {
    event.preventDefault();
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInput.searchTerm}&api_key=6ZOZ8geuyPBawFszzYyR08t0jV1w568h&limit=6`);
    giphys = await giphys.json();
    setSearchResults(giphys.data);
    setSearchTerm(formInput.searchTerm);
  }

  return (
    <div className="bg-neutral-900">
      <Head>
        <title>Giphy API</title>
      </Head>
      <div className="container mx-auto content-center">
        <Navbar />
        <Hero />
        <form onSubmit={search} className="lg:py-10 md:py-6 py-4 text-center">
          <input
            name="searchTerm"
            onChange={handleInputs}
            type="text"
            required
            className="py-1 px-2 md:w-10/12 w:7/12"
          />
          <Button />
        </form>
        <Search searchTerm={searchTerm} />
        <div className="flex flex-wrap gap-4 justify-center">
          {searchResults.map((each, index) => {
            return (
              <div key={index} className="md:w-[30%] w-[40%]">
                <img
                  src={each.images.original.url} alt={each.title}
                  className="w-full"
                />
              </div>
            )
          })}
        </div>
        <Footer />
      </div>
    </div>
  )
}