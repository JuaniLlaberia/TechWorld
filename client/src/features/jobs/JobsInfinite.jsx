import React, { memo, useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { useInView } from 'react-intersection-observer';
import ItemSkeleton from '../../components/ItemSkeleton';
import JobItem from './JobItem';
import NoJobsCard from './NoJobsCard';

const JobsInfinite = ({ queryData }) => {
  const listRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0.5,
    root: listRef.current,
  });

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    queryData;

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage && inView) fetchNextPage();
  }, [inView]);

  if (data?.pages[0].count < 1) return <NoJobsCard link='/jobs/all' />;
  if (status === 'loading') return <ItemSkeleton amount={5} />;

  return (
    <>
      <h2 className='px-3 pt-3 text-light-2'>
        Found {queryData.data?.pages[0].count} results
      </h2>
      <ul
        className='overflow-y-scroll h-[75vh] md:h-[87.5vh] scrollbar-thin scrollbar-thumb-light-2 scrollbar-track-transparent hover:scrollbar-thumb-light-1'
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
        {hasNextPage && (
          <li
            ref={ref}
            className='h-1'
          ></li>
        )}
        {isFetchingNextPage && (
          <li className='flex justify-center items-center'>
            <ClipLoader
              color='white'
              size={30}
            />
          </li>
        )}
      </ul>
    </>
  );
};

export default memo(JobsInfinite);
