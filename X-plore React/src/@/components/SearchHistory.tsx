import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

const SearchHistory: React.FC = () => {
  const { user } = useUser();
  const [searchHistories, setSearchHistories] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      fetch(`/api/search-histories?userId=${user.id}`)
        .then(async response => {
          console.log('Response Headers:', response.headers.get('content-type'));
          console.log('Response:', response);

          if (response.ok && response.headers.get('content-type')?.includes('application/json')) {
            try {
              const data = await response.json();
              console.log('Data:', data); // Log the data to verify correct format
              setSearchHistories(data);
            } catch (jsonError) {
              if (jsonError instanceof Error) {
                throw new Error('Error parsing JSON: ' + jsonError.message);
              } else {
                throw new Error('Unknown error parsing JSON');
              }
            }
          } else {
            throw new Error('Invalid response format');
          }
        })
        .catch(error => {
          console.error('Error fetching search histories:', error);
          setError('Failed to fetch search history. Please try again later.');
        });
    }
  }, [user]);

  return (
    <div className="p-1 text-white ">
      <h2 className="text-2xl font-bold mb-4 text-center">Search History</h2>
      {error && <p className="text-red-500">{error}</p>}
      {searchHistories.length === 0 ? (
        <p>No search history available.</p>
      ) : (
        <table className="min-w-full bg-gray-800 border border-white  rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-2 px-4 border-b">Searched</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {searchHistories.map(history => (
              <tr key={history.id}>
                <td className="py-2 px-4 border-b text-center">{history.query}</td>
                <td className="py-2 px-4 border-b text-center">{new Date(history.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchHistory;
