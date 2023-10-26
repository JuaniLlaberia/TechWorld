import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { useState } from 'react';
import ToolbarEditor from './ToolbarEditor';
import Button from './Button';
import InputWrapper from './InputWrapper';
import Input from './Input';
import { useCreateArticle } from '../features/articles/useCreateArticle';

const Tiptap = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const { createArticle, isCreating } = useCreateArticle();

  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: content,
    editable: !isCreating,
    editorProps: {
      attributes: {
        class:
          'min-h-[80vh] mb-3 rounded-md bg-transparent text-light-1 outline-none py-2 [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:text-[0.8rem] [&>pre]:rounded-md [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-3xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6',
      },
    },
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    createArticle({ title, content, tag });
  };

  return (
    <>
      <ToolbarEditor editor={editor} />
      <form onSubmit={handleSubmit}>
        <InputWrapper label='Title'>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Your article heading'
          />
        </InputWrapper>
        <InputWrapper label='Tag'>
          <Input
            value={tag}
            onChange={e => setTag(e.target.value)}
            placeholder='Add a search tag (e.g. JavaScript)'
          />
        </InputWrapper>
        <br />
        <label
          className='text-light-3 text-xl focus-within:text-light-1 xl:text-2xl'
          htmlFor='text-editor'
        >
          Write here
          <EditorContent
            editor={editor}
            id='text-editor'
          />
        </label>

        <section className='mb-24 flex flex-col md:flex-row md:justify-end gap-3 border-t border-dark-1-border pt-3'>
          <Button
            disabled={isCreating}
            full={true}
            color='inverted'
          >
            Save
          </Button>
          <Button
            disabled={isCreating}
            full={true}
          >
            Publish
          </Button>
        </section>
      </form>
    </>
  );
};

export default Tiptap;
