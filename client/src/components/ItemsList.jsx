const ItemsList = ({ items, render }) => {
  return (
    <ul className='max-h-[250px] overflow-y-scroll pr-1 pb-4 mb-4'>
      {items.map(render)}
    </ul>
  );
};

export default ItemsList;
