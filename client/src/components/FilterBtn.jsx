import Drawer from './Drawer';

const FilterBtn = ({ children }) => {
  return (
    <Drawer>
      <Drawer.Opener
        label='All filters'
        opens='filters-jobs'
      />
      {children}
    </Drawer>
  );
};

export default FilterBtn;
