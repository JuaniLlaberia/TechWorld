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
          '[&>p]:text-base mb-10 bg-transparent text-light-1 outline-none py-2 [&>pre]:bg-dark-2 [&>pre]:text-light-1 [&>pre]:text-[0.8rem] [&>pre]:rounded-md [&>pre]:p-2 [&>pre]:m-3 [&>h1]:text-2xl [&>h1]:font-semibold [&>h2]:text-xl [&>h2]:font-semibold [&>ul]:px-6 [&>ul]:list-disc lg:[&>h1]:text-3xl xl:[&>h1]:text-4xl lg:[&>h2]:text-2xl lg:[&>p]:text-lg xl:[&>p]:text-xl lg:[&>pre]:text-[1rem] xl:[&>pre]:text-[1.2rem] lg:[&>pre]:p-3 xl:[&>pre]:p-4',
      },
    },
  });
  return <EditorContent editor={editor} />;
};

export default TiptapRead;
