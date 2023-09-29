import { useState } from 'react';
import { HiOutlinePlus, HiOutlineXMark } from 'react-icons/hi2';
import { useUpdateMe } from '../../hooks/useUpdateMe';
import Input from '../../components/Input';
import ItemsList from '../../components/ItemsList';
import SaveBtn from '../../components/SaveBtn';
import { SkillItem } from './SkillItem';

const UpdateListForm = ({ onClose, current, field = 'skills' }) => {
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
    updateProfile({ [field]: items });
    onClose();
  };

  return (
    <>
      <h1 className='text-light-2 font-semibold mb-3 lg:text-xl'>
        Your skills
      </h1>
      <div className='relative mb-3'>
        <Input
          placeholder='Add new skills'
          value={itemToAdd}
          onChange={e => setItemToAdd(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className='absolute right-0 bottom-[50%] translate-y-[50%] bg-[#58575775] p-2.5 rounded-sm text-lg border-l-[1px] border-light-3 2xl:p-5'
        >
          <HiOutlinePlus />
        </button>
      </div>
      <ItemsList
        items={items}
        render={(el, i) => (
          <SkillItem
            el={el}
            i={i}
            handleRemoveItem={handleRemoveItem}
          />
        )}
      />
      <SaveBtn
        isUpdating={isUpdating}
        onClick={handleSave}
      />
    </>
  );
};

export default UpdateListForm;
