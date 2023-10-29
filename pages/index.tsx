import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserList from '../components/UserList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const users = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
    // Add more users as needed
  ]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-white ${inter.className}`}
    >
      <UserList users={users} />
    </main>
  )
}