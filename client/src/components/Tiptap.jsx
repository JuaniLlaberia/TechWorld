import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { useState } from 'react';
import ToolbarEditor from './ToolbarEditor';
import Button from './Button';
import { useCreateArticle } from '../features/articles/useCreateArticle';

const Tiptap = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const { createArticle, isCreating } = useCreateArticle();

  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: content,
    editorProps: {
      attributes: {
        class:
          'min-h-[80vh] mb-3 rounded-md bg-transparent text-light-1 border border-dark-1-border outline-none p-2 [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:text-[0.8rem] [&>pre]:rounded-md [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-3xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6',
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
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='w-full bg-transparent text-light-1 text-xl py-5 outline-none placeholder:text-light-2 placeholder:text-2xl'
          placeholder='Title'
        />
        <input
          value={tag}
          onChange={e => setTag(e.target.value)}
          className='w-full bg-transparent text-light-1 text-lg py-1 mb-5 outline-none placeholder:text-light-2 placeholder:text-xl'
          placeholder='Add a tag'
        />
        <EditorContent editor={editor} />
        <section className='mb-20 flex justify-end gap-3'>
          <Button color='inverted'>Save</Button>
          <Button>Publish</Button>
        </section>
      </form>
    </>
  );
};

export default Tiptap;
