import React from 'react';
import { User } from '@/utils/api';

interface UserCardProps {
  user: User;
  style?: React.CSSProperties;
}

export const UserCard: React.FC<UserCardProps> = ({ user, style }) => (
  // Wrapper only for react-window positioning
  <div style={style}>
    <div
      className="flex items-center gap-4 border rounded shadow px-4 py-4 bg-white focus:outline-none focus:ring focus:ring-blue-300"
      tabIndex={0}
      aria-label={`${user.firstName} ${user.lastName}, ${user.company.title}`}
    >
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold">{user.firstName} {user.lastName}</h3>
        <p className="text-sm text-gray-700">Email: {user.email}</p>
        <p className="text-sm text-gray-700">Company: {user.company.title}</p>
      </div>
    </div>
  </div>
);
