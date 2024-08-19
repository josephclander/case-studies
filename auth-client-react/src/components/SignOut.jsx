import { useEffect } from 'react';

const SignOut = ({ navigate }) => {
  useEffect(() => {
    async function signOut() {
      const response = await fetch(
        'https://authwcookies.onrender.com/auth/logout',
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
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    }
    signOut();
  }, []);
  return (
    <div>
      <h1 className="form-header">Signing Out</h1>
    </div>
  );
};

export default SignOut;
