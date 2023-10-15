import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { useInView } from 'react-intersection-observer';
import ItemSkeleton from '../../components/ItemSkeleton';
import UserItem from './UserItem';

const UserListInfinite = ({ queryData }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { users, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    queryData;

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage && inView) fetchNextPage();
  }, [inView]);

  if (status === 'loading') return <ItemSkeleton amount={5} />;

  return (
    <>
      <ul className='px-2 mb-20 min-h-[75vh] md:mb-4'>
        <h2 className='px-3 text-light-2'>
          Found {users?.pages[0].count} results
        </h2>
        {users?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.users.map(user => (
              <UserItem
                key={user._id}
                item={user}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && (
          <div className='flex justify-center items-center'>
            <ClipLoader
              color='white'
              size={30}
            />
          </div>
        )}
      </ul>
      <div ref={ref}></div>
    </>
  );
};

export default UserListInfinite;
