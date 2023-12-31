const ItemsList = ({ items, render }) => {
  return (
    <ul className='max-h-[350px] overflow-y-scroll pr-1 pb-4 mb-4 scrollbar-thin scrollbar-thumb-light-3'>
      {items.map(render)}
    </ul>
  );
};

export default ItemsList;
