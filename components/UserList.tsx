import React, { useState } from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';

type User = {
  name: string;
  email: string;
  phone: string;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [newUser, setNewUser] = useState<User>({ name: '', email: '', phone: '' });
  const [userList, setUserList] = useState<User[]>(users);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setUserList([...userList, newUser]);
      setNewUser({ name: '', email: '', phone: '' });
      setShowInput(false);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <PlusCircledIcon className="hover:text-blue-500 cursor-pointer" onClick={() => setShowInput(true)} />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
            </tr>
          ))}
          {showInput && (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  onKeyDown={handleAddUser}
                  className="border-2 border-gray-300 rounded-md p-2 w-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  onKeyDown={handleAddUser}
                  className="border-2 border-gray-300 rounded-md p-2 w-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={newUser.phone}
                  onChange={handleInputChange}
                  onKeyDown={handleAddUser}
                  className="border-2 border-gray-300 rounded-md p-2 w-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;