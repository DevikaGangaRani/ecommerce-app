import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';

const Navbar = () => {
  const style = 'text-[14px] cursor-pointer ml-[25px]';
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pb-[10px] pt-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none" />
            <Search className="" style={{ fontSize: '16px' }} />
          </div>
        </div>
        <div className="center flex-1 text-center ">
          {/* log0 */}
          <div className="logo font-bold text-lg">Summer Kings</div>
        </div>
        {/* right div  */}
        <div className="right flex flex-1 item-center justify-end ">
          <div className={style}>Register</div>
          <div className={style}>Sign in </div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
