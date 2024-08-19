import { useState, useEffect } from 'react';

const Secret = ({ navigate }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch(
        'https://authwcookies.onrender.com/auth/status',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          mode: 'cors',
        }
      );
      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        setAuthenticated(true);
      } else if (response.status === 403) {
        const json = await response.json();
        console.log(json);
        setAuthenticated(false);
        navigate('/signin');
      } else {
        const json = await response.json();
        console.log(json);
        setAuthenticated(false);
        navigate('/signin');
      }
    }
    checkAuth();
  }, [authenticated]);

  return (
    authenticated && (
      <div className="secret">
        <h1 className="secret__header">This is a secret page</h1>
        <div className="secret__icon">🤫</div>
        <p className="secret__text">This is where we keep our secrets.</p>
      </div>
    )
  );
};

export default Secret;
