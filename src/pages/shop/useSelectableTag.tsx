import { cn } from '@/lib/utils.ts';
import { useState, type ReactNode } from 'react';

export default function useSelectableTag({
  tags
}: {
  tags: string[];
}): readonly [string, () => ReactNode] {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const renderSelectableTag = (): ReactNode => {
    return (
      <div className='m-5 ms-5 flex flex-wrap justify-center gap-5 sm:ms-0 sm:justify-start sm:gap-10'>
        {tags.map((tag) => (
          <button
            key={tag}
            className={cn(
              'w-[7rem] cursor-pointer rounded-full bg-tertiary-color px-5 py-1 hover:bg-secondary-color  hover:text-white',
              {
                'bg-primary-color text-white hover:bg-secondary-color':
                  selectedTag === tag
              }
            )}
            type='button'
            onClick={() => {
              setSelectedTag(selectedTag === tag ? '' : tag);
            }}
          >
            <span className='text-center'>{tag}</span>
          </button>
        ))}
      </div>
    );
  };
  return [selectedTag, renderSelectableTag] as const;
}
