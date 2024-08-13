import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SearchHistory: React.FC = () => {
  const { user } = useUser();
  const [searchHistories, setSearchHistories] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchSearchHistory();
    }
  }, [user]);

  const fetchSearchHistory = () => {
    setLoading(true);
    fetch(`https://x-plore.onrender.com/api/search-histories?userId=${user?.id}`)
      .then(async response => {
        if (response.ok) {
          try {
            const data = await response.json();
            setSearchHistories(data);
          } catch (jsonError) {
            setError('Error parsing search history data.');
          }
        } else {
          setError('Failed to fetch search history.');
        }
      })
      .catch(() => {
        setError('Failed to fetch search history. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClearHistory = () => {
    if (user?.id) {
      if (searchHistories.length === 0) {
        setAlertSeverity('error');
        setAlertMessage('Search history is already empty.');
        setSnackbarOpen(true);
      } else {
        setLoading(true);
        fetch(`https://x-plore.onrender.com/api/search-histories?userId=${user.id}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (response.ok) {
              setSearchHistories([]); // Clear history
              setAlertSeverity('success');
              setAlertMessage('Search history cleared successfully.');
            } else {
              setAlertSeverity('error');
              setAlertMessage('Failed to clear search history.');
            }
            setSnackbarOpen(true);
          })
          .catch(() => {
            setAlertSeverity('error');
            setAlertMessage('Failed to clear search history. Please try again later.');
            setSnackbarOpen(true);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  const handleGoBack = () => {
    navigate('/'); // Redirect to the homepage
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close Snackbar
  };

  return (
    <div className="p-4 text-white flex flex-col items-center w-full">
      <div className='w-full max-w-[90vw] mt-0 flex justify-between items-center'>
        <button
          onClick={handleGoBack}
          className="hidden sm:inline-block bg-gradient-to-r from-neutral-400 to-stone-500 text-white p-3 rounded-full mb-4 hover:opacity-90 transition-opacity duration-300"
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
        
        <h2 className="text-xl sm:text-2xl font-light mb-4 text-center tracking-wider ">
          Search History
        </h2>
        
        <span 
          onClick={handleClearHistory}
          className="border border-gray-400 rounded-[.5rem] p-1.5 mb-[1rem] sm:p-2 text-xs sm:text-sm cursor-pointer bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text hover:text-white transition-colors tracking-wider">
          Clear History
        </span>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {!loading && (
        <>
          {error && <p className="text-red-500">{error}</p>}

          {searchHistories.length === 0 ? (
            <p className='mt-4 text-center tracking-wider'>Nothing to show.</p>
          ) : (
            <div className="w-[70vw] overflow-x-auto rounded-xl border ">
              <table className="min-w-full bg-gray-800 border border-white rounded-xl shadow-lg bg-gradient-to-r from-neutral-300 to-stone-400 text-transparent bg-clip-text overflow-hidden">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="py-2 px-4 border-b text-left tracking-wider">Searched</th>
                    <th className="py-2 px-4 border-b text-left tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {searchHistories.map(history => (
                    <tr key={history._id}>
                      <td className="py-2 px-4 border-b tracking-wider">{history.query}</td>
                      <td className="py-2 px-4 border-b tracking-widest">{new Date(history.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Snackbar with Dynamic Alert */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SearchHistory;
