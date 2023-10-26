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
          'mb-24 bg-transparent text-light-1 [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:rounded-md [&>pre]:text-[0.8rem] [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-3xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6',
      },
    },
  });
  return <EditorContent editor={editor} />;
};

export default TiptapRead;
