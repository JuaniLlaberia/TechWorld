import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi2';
import { useUpdateMe } from './useUpdateMe';
import Input from '../../components/Input';
import ItemsList from '../../components/ItemsList';
import SaveBtn from '../../components/SaveBtn';
import { SkillItem } from './SkillItem';

const UpdateListForm = ({ onClose, current }) => {
  const { updateProfile, isUpdating } = useUpdateMe();
  const [items, setItems] = useState(current);
  const [itemToAdd, setItemToAdd] = useState('');

  const handleRemoveItem = value => {
    const filteredList = [...items].filter(el => el !== value);
    setItems(filteredList);
  };

  const handleAddItem = () => {
    if (itemToAdd === '') return;
    const filteredList = [...items, itemToAdd];
    setItems(filteredList);
    setItemToAdd('');
  };

  const handleSave = () => {
    updateProfile({ skills: items }, { onSuccess: () => onClose() });
  };

  return (
    <>
      <div className='relative mb-3 flex items-center gap-3'>
        <Input
          placeholder='Add new skills'
          value={itemToAdd}
          onChange={e => setItemToAdd(e.target.value)}
        />
        <button
          aria-label='add'
          onClick={handleAddItem}
          className='bg-light-1 text-dark-1 rounded-md p-2.5 mt-1.5'
        >
          <HiOutlinePlus />
        </button>
      </div>
      <ItemsList
        items={items}
        render={(el, i) => (
          <SkillItem el={el} i={i} handleRemoveItem={handleRemoveItem} />
        )}
      />
      <SaveBtn isUpdating={isUpdating} onClick={handleSave} />
    </>
  );
};

export default UpdateListForm;
