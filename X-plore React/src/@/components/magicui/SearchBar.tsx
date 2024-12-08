import img from '../../../assets/search.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();
  const HistoryBackend =import.meta.env.VITE_HISTORY_BACKEND_HOST_ADDRESS || "http://localhost:5001" ;


  const handleSearch = async () => {
    if (isSignedIn && user) {
      if (query.trim()) {
        try {
          // Replace with your deployed backend service URL
          await fetch(`${HistoryBackend}/api/search-histories`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.id,
              query: query.trim(),
            }),
          });

          // Navigate to search results page
          navigate(`/search-results?q=${encodeURIComponent(query)}`);
        } catch (error) {
          console.error('Error saving search history:', error);
        }
      }
    } else {
      navigate('/sign-in'); // Redirect to login if not signed in
    }
  };

  return (
    <div className="flex justify-center items-center font-[Montserrat]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full font-light shadow-[0_2px_8px_rgba(8,_112,_184,_0.7)] border-2 border-gray-300 bg-gray-200 h-11 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[32rem] px-5 pr-16 text-sm sm:text-lg md:text-xl focus:outline-none"
        placeholder="Search Here. . ."
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="flex text-white px-3 py-2 ml-2 font-semibold lg:w-[4rem]"
      >
        <img src={img} alt="Search" className='h-[2.5rem]' />
      </button>
    </div>
  );
}

export default SearchBar;
