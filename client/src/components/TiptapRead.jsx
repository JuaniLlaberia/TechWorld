import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';

const TiptapRead = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class:
          'mb-24 bg-transparent text-light-1 lg:w-[70vw] xl:w-[40vw] [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:rounded-md [&>pre]:text-[0.8rem] [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-2xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6 lg:[&>h1]:text-3xl xl:[&>h1]:text-4xl lg:[&>h2]:text-2xl lg:[&>p]:text-lg xl:[&>p]:text-xl lg:[&>pre]:text-[1rem] xl:[&>pre]:text-[1.2rem] lg:[&>pre]:p-3 xl:[&>pre]:p-4 [&>pre]:overflow-x-auto',
      },
    },
  });
  return <EditorContent editor={editor} />;
};

export default TiptapRead;
