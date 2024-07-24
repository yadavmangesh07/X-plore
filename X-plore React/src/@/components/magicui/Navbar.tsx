export const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full ">
            <nav className="h-[4rem] w-full border-b-[.1px] border-gray-600 bg-gray-900 flex justify-between items-center text-xl p-[1rem]">
                <div className="tracking-widest font-light w-full text-center sm:text-left  pl-0 sm:pl-10 md:pl-20 lg:pl-40 bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text">
                    X-plore.
                </div>

                <div className="hidden sm:flex gap-2 sm:gap-4 pr-4 sm:pr-10 md:pr-20 lg:pr-40">
                    <div className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-lg tracking-widest font-light">
                        <span className="border border-gray-300 rounded-[.5rem] p-2 text-sm">
                            Login
                        </span>
                    </div>
                    <div className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-lg tracking-widest font-light">
                        <span className="border border-gray-300 rounded-[.5rem] p-2 text-sm">
                            SignUp
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};
