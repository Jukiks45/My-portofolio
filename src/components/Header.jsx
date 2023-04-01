import React from 'react';
// images
import Logo from "../assets/logo.svg";
const Header = () => {
  // const style = {
  //   background:"linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)",
  //   font: "20px"
  // };
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href={() => false}>
              <h1 className='text-[55px] font-bold logo-atas'>Jakk</h1>
              {/* <br />
              <h1 className='text-[55px] font-bold'>45</h1> */}
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work With me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
