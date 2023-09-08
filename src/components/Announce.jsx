import { Close } from '@mui/icons-material';
import React, { useState } from 'react';

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    'bg-[#8a4af3] font-bold text-white flex items-center justify-center h-[30px]'
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + ' hidden');
  };
  return (
    <div className={announceStyle}>
      <h2 className="mr-[15px]">Sales Upto 40% off Hurry Up!</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
};

export default Announce;
