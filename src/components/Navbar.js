import React from 'react'
import navbar from '../css/navbar.css'
import logo from '../img/logo.png'


export default function Navbar() {
    return (


        <div id="navbar1">
            <div className="container">

                {/*logo*/}
                <div className='navbar navbar-expand-lg navbar-light' id="navbar2">
                    <img src={logo} alt="BEST BUY" class="logomain"></img>
                    
                    {/*logo end*/}


                    {/*category*/}
                    <div className='searchbody'>
                        
                     
                        
                        
                        <select class="select-category">
                            <option value="All" >All </option>
                            <option value="Accessories" >Accessories</option>
                            <option value="Air Conditioners" >Air Conditioners</option>
                            <option value="Audios & Theaters" >Audios & Theaters</option>
                            <option value="Audio & Video" >Audio & Video</option>
                            <option value="Babies & Moms" >Babies & Moms</option>
                            <option value="Bags" >Bags</option>
                            <option value="Books & Office" >Books & Office</option>
                            <option value="Cars & Motocycles" >Cars & Motocycles</option>
                            <option value="Clothing & Apparel" >Clothing & Apparel</option>
                            <option value="Computers & Technologies" >Computers & Technologies</option>
                            <option value="Desktop PC" >Desktop PC</option>
                            <option value="Kid Fashion" >Kid Fashion</option>
                            <option value="Mens" >Mens</option>
                            <option value="Shoes" >Shoes</option>
                            <option value="Sunglasses" >Sunglasses</option>
                            <option value="Womens" >Womens</option>
                            <option value="Laptop" >Laptop</option>
                            <option value="Smartphones" >Smartphones</option>
                            <option value="Consumer Electrics" >Consumer Electrics</option>
                            <option value="Type Hanging Cell" >Type Hanging Cell</option>
                            <option value="Headphone" >Headphone</option>
                            <option value="Home Theater System" >Home Theater System</option>
                            <option value="Speakers" >Speakers</option>
                            <option value="Car Electronics" >Car Electronics</option>
                            <option value="Car Security" >Car Security</option>
                            <option value="Radar Detector" >Radar Detector</option>
                            <option value="Vehicle GPS" >Vehicle GPS</option>
                            <option value="Office Electronics" >Office Electronics</option>
                            <option value="Printers" >Printers</option>
                            <option value="Projectors" >Projectors</option>
                            <option value="Scanners" >Scanners</option>
                            <option value="Store & Business" >Store & Business</option>
                            <option value="Refrigerators" >Refrigerators</option>
                            <option value="TV Televisions" >TV Televisions</option>
                            <option value="4K Ultra HD TVs" >4K Ultra HD TVs</option>
                            <option value="LED TVs" >LED TVs</option>
                            <option value="OLED TVs" >OLED TVs</option>
                            <option value="Washing Machines" >Washing Machines</option>
                            <option value="Type Drying Clothes" >Type Drying Clothes</option>
                            <option value="Type Horizontal" >Type Horizontal</option>
                            <option value="Type Vertical" >Type Vertical</option>
                            <option value="Garden & Kitchen" >Garden & Kitchen</option>
                            <option value="Cookware" >Cookware</option>
                            <option value="Decoration" >Decoration</option>
                            <option value="Furniture" >Furniture</option>
                            <option value="Garden Tools" >Garden Tools</option>
                            <option value="Home Improvement" >Home Improvement</option>
                            <option value="Powers And Hand Tools" >Powers And Hand Tools</option>
                            <option value="Utensil & Gadget" >Utensil & Gadget</option>
                            <option value="Health & Beauty" >Health & Beauty</option>
                            <option value="Equipments" >Equipments</option>
                            <option value="Hair Care" >Hair Care</option>
                            <option value="Perfumer" >Perfumer</option>
                            <option value="Wine Cabinets" >Wine Cabinets</option>
                        </select>

                        {/*category end*/}





                        {/*search start*/}
                        <input type="text" id="search-product" placeholder="I'm shopping for..." name="fname"></input>

                        {/*search end*/}





                        {/*search button start*/}
                        <button type='submit' id="buttonid" title='Search Now'>Search</button>
                        {/*search button end*/}

                        
                    </div>

                    {/*cart and login*/}
                    <div className='d-flex cart-login'>
                        <div class="text-center">
                            <i class="fa-solid fa-heart"><span id="favourite-counter">0</span></i>
                            <a href="#" class="cart">Favourite</a>
                        </div>



                        <div class="text-center ps-3">
                            <i class="fa-solid fa-cart-shopping"><span id="cart-counter">0</span></i>
                            <a href="#" class="cart">Wishlist</a>
                        </div>



                        <div class="text-center ps-3">
                            <i class="fa-solid fa-user "></i><a href="#" class="cart">Login/Signup</a>
                           
                        </div>

                   
                    </div>
                        {/*cart and login end*/}
                </div>











            </div>
        </div>
    )
}
