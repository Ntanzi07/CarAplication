"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { updateSearchParams } from "@/utils"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"/>
  </button>
)

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    handleUpdateParams('model', model.toLowerCase());
    handleUpdateParams('manufacturer', manufacturer.toLowerCase());
  }

  const handleUpdateParams = (title: string, value: string) => {
    const newPathName = updateSearchParams(title, value);

    router.push(newPathName, {scroll: false});
  } 

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setmanufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
         src="/model-icon.png"
         width={25}
         height={25}
         className="absolute w-[20px] h-[20px] ml-4"
         alt="car modal"
        />
        <input 
        type="text" 
        name="model" 
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Tiguan"
        className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar