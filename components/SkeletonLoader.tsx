// components/SkeletonLoader.tsx
export const SkeletonLoader = () => (
  <div className="p-4 border rounded shadow mb-2 animate-pulse flex gap-4 items-center">
    <div className="bg-gray-300 w-16 h-16 rounded-full" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  </div>
);
