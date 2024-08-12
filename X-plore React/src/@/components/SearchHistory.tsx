import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SearchHistory: React.FC = () => {
  const { user } = useUser();
  const [searchHistories, setSearchHistories] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      setLoading(true);
      fetch(`http://localhost:5001/api/search-histories?userId=${user.id}`)
        .then(async response => {
          console.log('Response status:', response.status);
          console.log('Response headers:', response.headers.get('content-type'));

          if (response.ok) {
            try {
              const data = await response.json();
              console.log('Fetched data:', data); // Log the data for debugging
              setSearchHistories(data);
            } catch (jsonError) {
              console.error('Error parsing JSON:', jsonError);
              setError('Error parsing search history data.');
            }
          } else {
            setError('Failed to fetch search history.');
          }
        })
        .catch(error => {
          console.error('Error fetching search histories:', error);
          setError('Failed to fetch search history. Please try again later.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  const handleGoBack = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="p-1 text-white overflow-scroll">
      <button
            onClick={handleGoBack}
            className="  bg-gradient-to-r from-neutral-400 to-stone-500 text-white p-3 rounded-full mb-4 hover:opacity-90 transition-opacity duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
      <h2 className="text-2xl font-bold mb-4 text-center">Search History</h2>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {!loading && (
        <>
          

          {error && <p className="text-red-500">{error}</p>}

          {searchHistories.length === 0 ? (
            <p>No search history available.</p>
          ) : (
            <table className="min-w-full bg-gray-800 border border-white rounded-xl shadow-lg bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text overflow-hidden">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="py-2 px-4 border-b">Searched</th>
                  <th className="py-2 px-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {searchHistories.map(history => (
                  <tr key={history._id}>
                    <td className="py-2 px-4 border-b text-center">{history.query}</td>
                    <td className="py-2 px-4 border-b text-center">{new Date(history.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default SearchHistory;
