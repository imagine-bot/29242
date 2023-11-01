import React from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Phone
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user, personIdx) => (
          <tr key={personIdx}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.phone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;