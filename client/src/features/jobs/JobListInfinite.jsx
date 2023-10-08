import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';

const JobListInfinite = ({ status, data, isFetchingNextPage }) => {
  if (data?.pages[0].count < 1)
    return (
      <section>
        <h2 className='text-light-1 mt-4'>
          Could not find any related job.{' '}
          <Link to='/jobs/all' className='font-semibold underline'>
            See more jobs
          </Link>
        </h2>
      </section>
    );

  return (
    <>
      {status === 'loading' ? (
        <ItemSkeleton amount={5} />
      ) : (
        <>
          <h2 className='text-light-2'>Found {data?.pages[0].count} results</h2>
          <ul className='mb-4'>
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.data.jobs.map(job => (
                  <JobItem key={job._id} item={job} />
                ))}
              </React.Fragment>
            ))}
          </ul>
          {isFetchingNextPage && (
            <div className='flex justify-center items-center'>
              <ClipLoader color='white' size={30} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default JobListInfinite;
