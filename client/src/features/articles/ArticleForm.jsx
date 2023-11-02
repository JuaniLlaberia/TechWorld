import { useRef, useState } from 'react';
import Button from '../../components/Button';
import InputWrapper from '../../components/InputWrapper';
import Input from '../../components/Input';
import Tiptap from '../../components/Tiptap';
import { useCreateArticle } from './useCreateArticle';
import { useUpdateArticle } from './useUpdateArticle';

const ArticleForm = ({ articleToEdit = {} }) => {
  const isEditing = Boolean(articleToEdit);

  const [content, setContent] = useState(
    !isEditing ? '' : articleToEdit.content
  );
  const titleRef = useRef();
  const tagRef = useRef();

  const [view, setView] = useState(false);

  const { createArticle, isCreating } = useCreateArticle();
  const { editArticle, isLoading } = useUpdateArticle();

  const handleSubmit = e => {
    e.preventDefault();

    if (isEditing) {
      editArticle({
        title: titleRef.current.value,
        content,
        tag: tagRef.current.value,
        view: view,
      });
    } else {
      createArticle({
        title: titleRef.current.value,
        content,
        tag: tagRef.current.value,
        view: view,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full lg:w-[70vw] xl:w-[40vw]'
    >
      <InputWrapper label='Title'>
        <Input
          defaultValue={articleToEdit.title}
          reference={titleRef}
          placeholder='Your article heading'
        />
      </InputWrapper>
      <InputWrapper label='Tag'>
        <Input
          defaultValue={articleToEdit.tag}
          reference={tagRef}
          placeholder='Add a search tag (e.g. JavaScript)'
        />
      </InputWrapper>
      <Tiptap
        content={content}
        handleContent={setContent}
      />

      <section className='mb-24 lg:mb-3 flex flex-col md:flex-row md:justify-end gap-3 border-t border-dark-1-border pt-3'>
        <Button
          onClick={() => setView(false)}
          disabled={isCreating || isLoading}
          full={true}
          color='inverted'
        >
          Save draft
        </Button>
        <Button
          onClick={() => setView(true)}
          disabled={isCreating || isLoading}
          full={true}
        >
          Publish
        </Button>
      </section>
    </form>
  );
};

export default ArticleForm;
