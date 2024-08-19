// app/users/page.tsx

import styles from '../page.module.css';
import users from './user_data.json';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className={styles.main}>Users Page</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user?.name?.first_name.slice(0, 1).toUpperCase()}.{' '}
                {user?.name?.last_name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
