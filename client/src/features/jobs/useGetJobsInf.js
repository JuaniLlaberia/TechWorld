import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getJobs } from '../../api/jobApi';
import { useAuthContext } from '../../context/AuthContext';

export const useGetJobsInf = (searchQuery, locationQuery, showPosts) => {
  const { isAuth } = useAuthContext();
  const [searchParams] = useSearchParams();

  //Getting filters from the URL
  const experience = searchParams.get('level') || 'All';
  const jobType = searchParams.get('type') || 'All';
  const place = searchParams.get('place') || 'All';
  const query = searchQuery || searchParams.get('search') || '';
  const location = locationQuery || searchParams.get('location') || '';

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    useInfiniteQuery({
      queryKey: ['jobs-inf', experience, jobType, place, query, location],
      queryFn: ({ pageParam = 1 }) =>
        getJobs({
          page: pageParam,
          experience,
          jobType,
          place,
          query,
          location,
        }),
      maxPages: 2,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) =>
        pages.length < lastPage.pages ? pages.length + 1 : null,
      enabled: showPosts || isAuth,
    });

  return { data, fetchNextPage, isFetchingNextPage, hasNextPage, status };
};
