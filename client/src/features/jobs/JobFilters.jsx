import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Accordion from '../../components/Accordion';
import FilterItem from '../../components/FilterItem';
import {
  filterExperience,
  filterJobPlace,
  filterJobType,
} from '../../utils/filters';
import Button from '../../components/Button';

const JobFilters = ({ onClose }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      experience: searchParams.get('level') || 'All',
      type: searchParams.get('type') || 'All',
      place: searchParams.get('place') || 'All',
    },
  });

  const onSubmit = ({ experience, type, place }) => {
    searchParams.set('level', experience);
    searchParams.set('type', type);
    searchParams.set('place', place);

    onClose();
    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <Accordion>
        <Accordion.Opener
          title='Experience level'
          opens='level'
        />
        <Accordion.Body id='level'>
          <fieldset id='experience'>
            {filterExperience.map(el => (
              <FilterItem
                key={el}
                value={el}
                radioGroup='experience'
                register={register('experience')}
              />
            ))}
          </fieldset>
        </Accordion.Body>
        <Accordion.Opener
          title='Job type'
          opens='type'
        />
        <Accordion.Body id='type'>
          <fieldset id='type'>
            {filterJobType.map(el => (
              <FilterItem
                key={el}
                value={el}
                radioGroup='type'
                register={register('type')}
              />
            ))}
          </fieldset>
        </Accordion.Body>
        <Accordion.Opener
          title='Work place'
          opens='date'
        />
        <Accordion.Body id='date'>
          <fieldset id='place'>
            {filterJobPlace.map(el => (
              <FilterItem
                key={el}
                value={el}
                radioGroup='place'
                register={register('place')}
              />
            ))}
          </fieldset>
        </Accordion.Body>
      </Accordion>
      <Button color='inverted'>Apply all</Button>
    </form>
  );
};

export default JobFilters;
