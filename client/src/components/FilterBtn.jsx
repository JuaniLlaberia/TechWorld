import Drawer from './Drawer';

const FilterBtn = ({ children }) => {
  return (
    <Drawer>
      <Drawer.Opener opens='filters-jobs' />
      {children}
    </Drawer>
  );
};

export default FilterBtn;
