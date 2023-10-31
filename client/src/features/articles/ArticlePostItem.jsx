import { Link } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import TiptapRead from '../../components/TiptapRead';
import PostSkeleton from '../../components/PostSkeleton';
import { useGetArticle } from './useGetArticle';
import { formatDate } from '../../utils/formatDates';

export const ArticlePostItem = () => {
  const { article, isLoading } = useGetArticle();

  if (isLoading) return <PostSkeleton />;

  const { content, title, author, createdAt } = article?.data?.article;

  return (
    <>
      <header className='w-full lg:w-[70vw] xl:w-[40vw]'>
        <BackBtn />
        <h1 className='text-light-1 text-3xl xl:text-4xl font-semibold py-1 my-5 xl:mb-8'>
          {title}
        </h1>
        <div className='flex items-center gap-2 pb-6 mb-4 border-b border-light-3'>
          <img
            loading='lazy'
            src={author.image}
            className='w-10 h-10 rounded-full bg-light-2 lg:w-12 lg:h-12'
            alt='profile picture'
          />
          <Link
            to={`/user/${author._id}`}
            className='text-light-2 lg:text-lg'
          >
            {author.fullName} ·{' '}
            <span className='text-sm lg:text-base'>
              {formatDate(new Date(createdAt))}
            </span>
          </Link>
        </div>
      </header>
      <TiptapRead content={content} />
    </>
  );
};
