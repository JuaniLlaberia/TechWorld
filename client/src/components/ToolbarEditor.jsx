import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuList,
  LuCode2,
  LuItalic,
  LuType,
  LuAlignVerticalJustifyCenter,
} from 'react-icons/lu';
import ToolbarItem from './ToolbarItem';
import { memo } from 'react';

const ToolbarEditor = ({ editor }) => {
  return (
    <ul className='sticky top-2.5 z-50 flex gap-2 just bg-dark-2 py-2 my-3 justify-center rounded-lg border border-dark-1-border xl:gap-4 w-full lg:w-[70vw] xl:w-[40vw]'>
      <ToolbarItem
        method={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        icon={<LuHeading1 />}
        condition={editor?.isActive('heading', { level: 1 })}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        icon={<LuHeading2 />}
        condition={editor?.isActive('heading', { level: 2 })}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().setParagraph().run()}
        icon={<LuType />}
        condition={editor?.isActive('paragraph')}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().toggleBold().run()}
        icon={<LuBold />}
        condition={editor?.isActive('bold')}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().toggleItalic().run()}
        icon={<LuItalic />}
        condition={editor?.isActive('italic')}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().toggleBulletList().run()}
        icon={<LuList />}
        condition={editor?.isActive('bulletList')}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().toggleCodeBlock().run()}
        icon={<LuCode2 />}
        condition={editor?.isActive('codeBlock')}
      />
      <ToolbarItem
        method={() => editor?.chain().focus().setHardBreak().run()}
        icon={<LuAlignVerticalJustifyCenter />}
      />
    </ul>
  );
};

export default memo(ToolbarEditor);
