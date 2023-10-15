import React, { useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { useInView } from 'react-intersection-observer';
import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';
import NoJobsCard from './NoJobsCard';

const JobsInfinite = ({ queryData }) => {
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

  if (data?.pages[0].count < 1) return <NoJobsCard link='/jobs' />;
  if (status === 'loading') return <ItemSkeleton amount={5} />;

  return (
    <>
      <ul
        className='overflow-y-scroll h-[80vh] md:h-[87.5vh] scrollbar-thin scrollbar-thumb-light-2 scrollbar-track-transparent hover:scrollbar-thumb-light-1'
        ref={listRef}
      >
        <h2 className='px-3 pt-3 text-light-2'>
          Found {queryData.data?.pages[0].count} results
        </h2>
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
  );
};

export default JobsInfinite;
