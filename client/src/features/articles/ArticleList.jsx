import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ClipLoader } from 'react-spinners';
import ArticleItem from './ArticleItem';
import ItemSkeleton from '../../components/ItemSkeleton';
import { useGetArticles } from './useGetArticles';

const ArticleList = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const { articles, fetchNextPage, isFetchingNextPage, hasNextPage, status } =
    useGetArticles();

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === 'loading') return <ItemSkeleton amount={5} />;
  if (articles.pages[0].pages === 0)
    return <h1 className='text-light-2 text-center'>No articles found</h1>;

  return (
    <ul className='mb-16'>
      {articles?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.articles.map(article => (
            <ArticleItem article={article} key={article._id} />
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && <li ref={ref} className='h-1'></li>}
      {isFetchingNextPage && (
        <li className='flex justify-center items-center'>
          <ClipLoader color='white' size={30} />
        </li>
      )}
    </ul>
  );
};

export default ArticleList;
