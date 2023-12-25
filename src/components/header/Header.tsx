'use client';

import React, { useState } from 'react';
import Nav from './nav/Nav';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
	const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    if(!isActive){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  }
  
	return (
		<>
			<div
				onClick={handleClick}
				className='fixed right-0 m-[20px] z-20 w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-[50%] bg-[#455CE9] cursor-pointer flex flex-col items-center justify-center'
			>
				<div
					className={`w-[40%] h-[1px] bg-white relative top-[-3px] md:top-[-5px] ${
						isActive ? 'rotate-[45deg] top-[-0.4px] md:top-[-1px]' : ''
					} transitiion-transform duration-300`}
				></div>
				<div
					className={`w-[40%] h-[1px] bg-white relative top-[3px] md:top-[5px] ${
						isActive ? 'rotate-[-45deg] top-[-0.8px] md:top-[-2px]' : ''
					} transitiion-transform duration-300`}
				></div>
			</div>

			<AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
		</>
	);
};
export default Header;
