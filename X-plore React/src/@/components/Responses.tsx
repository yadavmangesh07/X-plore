import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
}

const Response: React.FC = () => {
  const [results, setResults] = useState<Resource[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        try {
          const response = await axios.get<Resource[]>(`https://x-plore-production.up.railway.app/search/api?query=${query}`);
          setResults(response.data);
          setError('');
        } catch (error) {
          setError('An error occurred while fetching the results.');
          console.error('Error fetching search results:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }
  }, [query]);

  return (
    <div className="w-screen m-[2rem] mt-[-2rem] overflow-y-scroll ">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {results.length > 0 ? (
        <ul>
          {results.map((resource) => (
            <li key={resource.id} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-300">
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {resource.title}
                </a>
              </h3>
              <p className="text-gray-400">{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                {resource.url}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-red-400">No results found.</p>
      )}
    </div>
  );
};

export default Response;
