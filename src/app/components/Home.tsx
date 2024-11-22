import { Button } from '../../lib/components/Button';
import { useQuery } from '@tanstack/react-query';
import { Users } from 'lucide-react';

export function Home() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-space_cadet-100 to-amaranth_purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-space_cadet">Dashboard</h1>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            users?.map((user: any) => (
              <div key={user._id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-space_cadet">{user.name}</h3>
                <p className="text-ash_gray-700">{user.email}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}