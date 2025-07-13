export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: {
    title: string;
  };
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

/**
 * Fetches users from the API with pagination support.
 * @param limit Number of users to fetch per page
 * @param skip Number of users to skip (offset)
 */
export async function fetchUsers(limit: number, skip: number): Promise<UsersResponse> {
  const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();
  return data as UsersResponse;
}
