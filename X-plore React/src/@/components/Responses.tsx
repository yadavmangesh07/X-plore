import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get('q');
  const backendAddress = 'http://localhost:8080' || import.meta.env.VITE_BACKEND_HOST_ADDRESS  ;

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        try {
          const response = await axios.get<Resource[]>(`${backendAddress}/search/api?query=${query}`);
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

  const handleGoBack = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="w-screen m-[2rem] mt-[-2rem] overflow-y-scroll">
      {loading && (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {!loading && (
        <>
          <button
            onClick={handleGoBack}
            className=" bg-gradient-to-r from-neutral-400 to-stone-500 text-white p-3 rounded-full mb-4 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

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
        </>
      )}
    </div>
  );
};

export default Response;
