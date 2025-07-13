// index.js
import React, { useCallback } from 'react';
import { FixedSizeList as List, ListOnItemsRenderedProps } from 'react-window';
import { useInfiniteUsers } from '@/hooks/useInfiniteUsers';
import { UserCard } from '@/components/UserCard';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const ITEM_HEIGHT = 100;

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, error } = useInfiniteUsers();

  const users = data ? data.pages.flatMap(page => page.users) : [];

  const handleItemsRendered = useCallback((props: ListOnItemsRenderedProps) => {
    const { visibleStopIndex } = props;
    if (hasNextPage && visibleStopIndex >= users.length - 2) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, users.length]);

  if (error) return <div className="p-6 text-red-600">Failed to load users.</div>;

  return (
    <ErrorBoundary>
      <a
  href="#main"
  className="absolute left-[-999px] focus:left-4 focus:top-4 bg-white text-black p-2 z-50 rounded shadow no-underline hover:no-underline focus:no-underline"
>
  Skip to content
</a>

      <main id="main" className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Feed</h1>

        {isLoading && [...Array(5)].map((_, i) => <SkeletonLoader key={i} />)}

        {!isLoading && (
          <List
            height={600}
            itemCount={users.length + (hasNextPage ? 1 : 0)}
            itemSize={ITEM_HEIGHT}
            width="100%"
            onItemsRendered={handleItemsRendered}
            overscanCount={5}
          >
            {({ index, style }) => {
              if (index === users.length) {
                return (
                  <div style={style}>
                    {isFetchingNextPage ? <SkeletonLoader /> : null}
                  </div>
                );
              }
              const user = users[index];
              return (
                <UserCard key={user.id} user={user} style={style} /> // Pass the style prop directly
              );
            }}
          </List>
        )}
      </main>
    </ErrorBoundary>
  );
}