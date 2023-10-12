import React, { useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';

const JobListInfinite = ({ queryData }) => {
  const listRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
    root: listRef.current,
  });

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    queryData;

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage && inView) fetchNextPage();
  }, [inView]);

  if (data?.pages[0].count < 1)
    return (
      <section>
        <h2 className='text-light-1 mt-4 xl:text-xl'>
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

  return (
    <>
      {status === 'loading' ? (
        <ItemSkeleton amount={5} />
      ) : (
        <>
          <ul
            className='overflow-y-scroll h-[75vh] md:h-[90vh]'
            ref={listRef}
          >
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
            <div
              ref={ref}
              className='h-1'
            ></div>
            {isFetchingNextPage && (
              <div className='flex justify-center items-center'>
                <ClipLoader
                  color='white'
                  size={30}
                />
              </div>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default JobListInfinite;
