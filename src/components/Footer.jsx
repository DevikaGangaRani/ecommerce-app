import {
  EmailOutlined,
  FacebookOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
} from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const Footer = () => {
  const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';

  const footerStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background_1258-54481.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px',
  };
  return (
    <footer style={footerStyle} className="p-4">
      <div className="flex items-center justify-between p-2 mobile:flex-col mobile:items-start">
        <div className="flex-1 flex flex-col flex-wrap p-2 pr-[200px]  gap-[20px]">
          <h1 className="text-[25px]">
            GET AHEAD OF THE FASHION GAME AND BE THE FIRST TO OUR LATEST
            COLLECTION
          </h1>
          <p>
            Sign up for early access and discover worls of fashion before anyone
            else.Don't miss out on your chance to evaluate your wardrobe with
            our exclusive designs
          </p>
          <div className="flex items-center justify-center mt-3 self-start">
            <div className={socialStyle + ` bg-blue-700`}>
              <a href="http://facebook.com">
                <FacebookOutlined />
              </a>
            </div>
            <div className={socialStyle + ` bg-orange-500`}>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </div>
            <div className={socialStyle + ` bg-sky-400`}>
              <a href="http://twitter.com">
                <TwitterIcon />
              </a>
            </div>
            <div className={socialStyle + ` bg-red-600`}>
              <a href="http://pinterest.com">
                <Pinterest />
              </a>
            </div>
          </div>
        </div>

        <div className=" flex flex-1 flex-col  pl-[30px]">
          <div className="flex m-3">
            <LocationOnOutlined className="text-[#8a4af3]" />
            <p className="pl-3">India</p>
          </div>
          <div className="flex m-3">
            <LocalPhoneOutlined className="text-[#521da8]" />
            <p className="pl-3">+91 9012345678</p>
          </div>
          <div className="flex m-3">
            <EmailOutlined className="text-[#8a4af3]" />
            <p className="pl-3">test123@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
