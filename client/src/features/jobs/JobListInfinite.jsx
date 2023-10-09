import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';

const JobListInfinite = ({ queryData }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    queryData;

  if (data?.pages[0].count < 1)
    return (
      <section>
        <h2 className='text-light-1 mt-4'>
          Could not find any related job.{' '}
          <Link
            to='/jobs/all'
            className='font-semibold underline'
          >
            See more jobs
          </Link>
        </h2>
      </section>
    );

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage && inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      {status === 'loading' ? (
        <ItemSkeleton amount={5} />
      ) : (
        <>
          <h2 className='text-light-2'>Found {data?.pages[0].count} results</h2>
          <ul>
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.data.jobs.map(job => (
                  <JobItem
                    key={job._id}
                    item={job}
                  />
                ))}
              </React.Fragment>
            ))}
          </ul>
          <div ref={ref}></div>
          {isFetchingNextPage && (
            <div className='flex justify-center items-center'>
              <ClipLoader
                color='white'
                size={30}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default JobListInfinite;
