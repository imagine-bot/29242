import React, { useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

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
      <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
        {/* existing table code */}
        {showInput && (
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleInputChange}
                onKeyDown={handleAddUser}
                className="w-full border-2 border-gray-300 rounded-md p-2 mx-2"
              />
            </td>
            <td>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                onKeyDown={handleAddUser}
                className="w-full border-2 border-gray-300 rounded-md p-2 mx-2"
              />
            </td>
            <td>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={newUser.phone}
                onChange={handleInputChange}
                onKeyDown={handleAddUser}
                className="w-full border-2 border-gray-300 rounded-md p-2 mx-2"
              />
            </td>
          </tr>
        )}
      </table>
      <div className="flex items-center mt-4">
        <PlusIcon className="hover:text-blue-500 cursor-pointer" onClick={() => setShowInput(true)} />
      </div>
    </div>
  );
};

export default UserList;