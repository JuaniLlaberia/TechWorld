import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <>
      {users?.length > 0 ? (
        <ul className='last-of-type:border-0'>
          {users.map(job => (
            <UserItem
              item={job}
              key={job._id}
            />
          ))}
        </ul>
      ) : (
        <section>
          <h2 className='text-light-1 mt-4'>
            Could not find any user based on your search.
          </h2>
        </section>
      )}
    </>
  );
};

export default UserList;
