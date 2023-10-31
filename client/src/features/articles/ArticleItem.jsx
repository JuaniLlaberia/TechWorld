import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDates';

const ArticleItem = ({ article }) => {
  const { author, tag, title, _id, createdAt } = article;

  return (
    <li className='relative border-b border-dark-1-border'>
      <Link
        to={`/articles/${_id}`}
        className=' text-light-1 flex flex-col gap-4 px-1 py-4 xl:py-5 xl:px-6'
      >
        <section className='w-full'>
          <div className='flex items-center gap-2 mb-2'>
            <img
              loading='lazy'
              src={author?.image}
              className='w-7 h-7 rounded-full bg-light-3 xl:w-10 xl:h-10'
              alt='Profile picture'
            />
            <h1 className='text-light-2 text-sm lg:text-lg'>
              {author?.fullName} · {formatDate(new Date(createdAt))}
            </h1>
          </div>
          <h2 className='text-lg font-semibold break-keep mb-2 lg:text-2xl 2xl:text-[1.35rem] line-clamp-2 hover:underline'>
            {title}
          </h2>
          <ul className='py-1 mt-5 flex gap-3'>
            <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2 lg:text-base'>
              {tag}
            </li>
          </ul>
        </section>
      </Link>
    </li>
  );
};

export default ArticleItem;
