import { useLogout } from '../hooks/useLogout';

const Profile = () => {
  const { logout, isLoading } = useLogout();

  return (
    <>
      <h1>profileeeeeeeeeeeeeeeeee</h1>
      <button
        onClick={logout}
        className='bg-[red]'
      >
        Logout
      </button>
    </>
  );
};

export default Profile;
