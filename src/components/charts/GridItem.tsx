import React, { ReactNode } from 'react';

interface GridItemProps {
  title: string;
  children: ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-indigo-400 bg-indigo-500/30 rounded-xl h-[450px] w-[800px]">
      <h3 className="text-2xl font-semibold text-indigo">{title}</h3>
      {children}
    </div>
  );
};

export default GridItem;