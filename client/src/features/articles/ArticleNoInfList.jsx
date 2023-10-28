import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import DropDownOptMenu from '../../components/DropDownOptMenu';
import { formatDate } from '../../utils/formatDates';

const ArticleNoInfList = ({ articles }) => {
  return (
    <ul className='mb-20'>
      {articles.map(article => (
        <li
          key={article._id}
          className='relative border-b border-dark-1-border text-light-1 flex flex-col gap-4 py-4 xl:py-5 xl:px-6'
        >
          <Link
            to={`/articles/${article._id}`}
            className='text-lg font-semibold break-keep lg:text-2xl 2xl:text-[1.35rem] line-clamp-2 lg:hover:underline'
          >
            {article.title}
          </Link>
          <DropDownOptMenu>
            <section className='flex justify-between items-center mt-4'>
              <ul className='py-1 flex items-center gap-3'>
                <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2 lg:text-base'>
                  {article.tag}
                </li>
                <li className='text-light-2 text-sm'>
                  {formatDate(new Date(article.createdAt))}
                </li>
              </ul>
              <DropDownOptMenu.Opener opensId={article._id} />
            </section>
            <DropDownOptMenu.Menu menuId={article._id}>
              <ul className='flex gap-3'>
                <DropDownOptMenu.Item>
                  <HiOutlinePencil />
                </DropDownOptMenu.Item>

                <DropDownOptMenu.Item>
                  <HiOutlineTrash />
                </DropDownOptMenu.Item>
              </ul>
            </DropDownOptMenu.Menu>
          </DropDownOptMenu>
        </li>
      ))}
    </ul>
  );
};

export default ArticleNoInfList;
