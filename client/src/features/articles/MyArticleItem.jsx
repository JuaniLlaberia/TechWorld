import { Link, useNavigate } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import DeleteModal from '../../components/DeleteModal';
import Modal from '../../components/Modal';
import DropDownOptMenu from '../../components/DropDownOptMenu';
import { formatDate } from '../../utils/formatDates';
import { useDeleteArticle } from './useDeleteArticle';

const MyArticleItem = ({ article }) => {
  const { deleteArticle } = useDeleteArticle();
  const navigate = useNavigate();
  const { title, tag, createdAt, _id: id } = article;

  return (
    <li className='relative border-b border-dark-1-border text-light-1 flex flex-col gap-4 py-4 xl:py-5 xl:px-6'>
      <Link
        to={`/articles/${id}`}
        className='text-lg font-semibold break-keep lg:text-2xl 2xl:text-[1.35rem] line-clamp-2 lg:hover:underline'
      >
        {title}
      </Link>
      <Modal>
        <DropDownOptMenu>
          <section className='flex justify-between items-center mt-4'>
            <ul className='py-1 flex items-center gap-3'>
              <li className='bg-dark-2 py-1 px-3 rounded-xl text-sm text-light-2 lg:text-base'>
                {tag}
              </li>
              <li className='text-light-2 text-sm'>
                {formatDate(new Date(createdAt))}
              </li>
            </ul>
            <DropDownOptMenu.Opener opensId={id} />
          </section>
          <DropDownOptMenu.Menu menuId={id}>
            <DropDownOptMenu.Item
              onClick={() => navigate(`/me/articles/edit/${id}`)}
              icon={<HiOutlinePencil />}
            >
              Edit
            </DropDownOptMenu.Item>

            <Modal.Open opens='delete-modal'>
              <DropDownOptMenu.Item icon={<HiOutlineTrash />}>
                Remove
              </DropDownOptMenu.Item>
            </Modal.Open>
          </DropDownOptMenu.Menu>
        </DropDownOptMenu>
        <Modal.Window
          title='Delete article'
          windowName='delete-modal'
        >
          <DeleteModal onDelete={() => deleteArticle(id)} />
        </Modal.Window>
      </Modal>
    </li>
  );
};

export default MyArticleItem;
