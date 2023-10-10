import Button from './Button';

const DeleteModal = ({ onClose, onDelete }) => {
  const deleteItem = e => {
    e.preventDefault();
    onDelete();
    onClose();
  };

  return (
    <form>
      <p className='mb-6 lg:text-lg xl:text-xl xl:mb-8'>
        Are you sure you want to delete this job? This action is permanent.
      </p>
      <div className='flex gap-2 justify-end'>
        <Button
          color='inverted'
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          color='alert'
          onClick={deleteItem}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default DeleteModal;
