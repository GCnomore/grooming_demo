import React from 'react';

interface AvatarProps {
   size: number;
   name: string;
   clickAction?: ()=> void
}

const Avatar: React.FC<AvatarProps> = ({ size, name, clickAction }) => {

   return (
      <div 
         className='rounded-full bg-slate-600 text-white font-bold flex justify-center items-center cursor-pointer flex-shrink-0' 
         style={{ width: size + 'px', height: size + 'px' }}
         onClick={clickAction}
      >
         <p className='text-sm xs:text-base text-white font-bold'>{ name[0].toUpperCase() } </p>
      </div>
   )
}

export default Avatar;