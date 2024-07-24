import img from '../../../assets/search.png'
const SearchBar = () => {
  return (
    <div className=" flex justify-center items-center  font-[Montserrat]">
      <input 
        type="text" 
        className="rounded-full  font-light shadow-[0_2px_8px_rgba(8,_112,_184,_0.7)] border-2 border-gray-300 bg-gray-200 h-11 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[32rem] px-5 pr-16   text-sm sm:text-lg md:text-xl focus:outline-none" 
        placeholder="Search Here. . ."
      />
      <button className="flex  text-white  px-3 size- py-2 ml-2 font-semibold lg:w-[4rem]  ">
       <img src={img} alt="" className='h-[2.5rem]' />
      </button>
    </div>
  );
}

export default SearchBar;
