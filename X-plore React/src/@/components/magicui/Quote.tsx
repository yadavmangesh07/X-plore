import SearchBar from "./SearchBar";

const Quote = () => {
  return (
    <>
      <div className="  mt-[3rem] p-8 w-full h-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl pb-3  text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-[-0.8rem]  font-light bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text outline-1">
          Your Search, Our Expertise.
        </h1>

        <h1 className="text-3xl w-full pb-3 text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 inline-block text-transparent bg-clip-text">
          Find what you're looking for, <span className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-3xl w-full pb-3 text-center sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl">faster.</span>
        </h1>
      </div>
      <SearchBar />



    </>
  );
};

export default Quote;
