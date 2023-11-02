import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import ToolbarEditor from './ToolbarEditor';

const Tiptap = ({ content, handleContent }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: content,
    editorProps: {
      attributes: {
        class:
          'min-h-[60vh] [&>p]:text-base mb-3 rounded-md bg-transparent text-light-1 outline-none py-2 [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:text-[0.8rem] [&>pre]:rounded-md [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-2xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6 [&>ul]:list-disc lg:[&>h1]:text-3xl xl:[&>h1]:text-4xl lg:[&>h2]:text-2xl lg:[&>p]:text-lg xl:[&>p]:text-xl lg:[&>pre]:text-[1rem] xl:[&>pre]:text-[1.2rem] lg:[&>pre]:p-3 xl:[&>pre]:p-4  w-full lg:w-[70vw] xl:w-[40vw]',
      },
    },
    onBlur({ editor }) {
      handleContent(editor.getHTML());
    },
  });

  return (
    <>
      <ToolbarEditor editor={editor} />
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
    </>
  );
};

export default Tiptap;
