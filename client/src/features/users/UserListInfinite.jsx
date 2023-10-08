import React from 'react';
import { ClipLoader } from 'react-spinners';
import ItemSkeleton from '../../components/ItemSkeleton';
import UserItem from './UserItem';

const UserListInfinite = ({ status, users, isFetchingNextPage }) => {
  return (
    <>
      {status === 'loading' ? (
        <ItemSkeleton amount={5} />
      ) : (
        <>
          <h2 className='text-light-2'>
            Found {users?.pages[0].count} results
          </h2>
          <ul className='mb-4'>
            {users?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.data.users.map(user => (
                  <UserItem key={user._id} item={user} />
                ))}
              </React.Fragment>
            ))}
          </ul>
          {isFetchingNextPage && (
            <div className='flex justify-center items-center'>
              <ClipLoader color='white' size={30} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserListInfinite;
