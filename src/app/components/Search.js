"use client"

// search context
import { useContext } from "react";
import { SearchContext } from "../context/search";

// Components
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";

const Search = () => {
    const {searchActive} = useContext(SearchContext);      

    return (
        <div
            className={`${
                searchActive
                ? 'bg-white rounded-none xl:h-[80px]'
                : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] hidden xl:block'
                } w-full relative shadow-lg`}
            >
            {/* Contenido del componente */}
            <div className="xl:h-full flex items-center px-6 xl:px-0">
                <LocationSelection/>
                <DateSelection />
            </div>
        </div>
    )

}

export default Search