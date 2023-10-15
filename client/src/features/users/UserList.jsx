import ItemSkeleton from '../../components/ItemSkeleton';
import UserItem from './UserItem';

const UserList = ({ users, isLoading }) => {
  if (isLoading) return <ItemSkeleton amount={5} />;

  return (
    <>
      {users?.length > 0 ? (
        <ul>
          {users.map(job => (
            <UserItem item={job} key={job._id} />
          ))}
        </ul>
      ) : (
        <section>
          <h2 className='text-light-1 mt-4 pb-4'>
            Could not find any user based on your search. Try searching another
            keyword.
          </h2>
        </section>
      )}
    </>
  );
};

export default UserList;
