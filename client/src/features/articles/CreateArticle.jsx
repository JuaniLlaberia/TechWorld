import BackBtn from '../../components/BackBtn';
import ArticleForm from './ArticleForm';

const CreateArticle = () => {
  return (
    <>
      <BackBtn />
      <section className='flex flex-col items-center'>
        <ArticleForm />
      </section>
    </>
  );
};

export default CreateArticle;
