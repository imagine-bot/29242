import UserList from '../components/UserList'
import { useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
    // Add more users as needed
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <UserList users={users} />
      </main>
    </div>
  )
}