import './Header.css';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
        {/* <img className='header_logo' src="https://pngimg.com/image/61222" alt="amazon logo" /> */}
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon Logo White - Amazon Logo Png On Black, Transparent Png@kindpng.com"></img>


        <div className='header_search'>
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className='header_nav'>

              <div className="header_option">
                <div className="header_optionLineOne">Hello Guest</div>
                <div className="header_optionLineTwo">Sign In</div>
              </div>  

              <div className="header_option">
                <div className="header_optionLineOne">Returns</div>
                <div className="header_optionLineTwo">& Orders</div>
              </div>
        
              <div className="header_option">
                <div className="header_optionLineOne">Your</div>
                <div className="header_optionLineTwo">Prime</div>
              </div>

        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>

    </div>
  )
}

export default Header;