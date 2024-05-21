const Header = () => { 
    return `  
    <div>
        <header>
            <div class="menuWrap">
                <div class="menuIcon">
                    <img src="https://www.havmor.com/themes/havmornew/images/menu-icon.png">
                </div>
                <div class="menuDetailsWrap" style="display: none; background-color: #A0D629; min-height: 100vh;">
                    <div class="menuCloseBtn">
                        <img src="https://www.havmor.com/themes/havmornew/images/menu-close-img.webp">
                    </div>
                    <div class="menuDetailsContainer d-flex ">
                        <div class="menuImg col-4">
                            <img src="https://www.havmor.com/themes/havmornew/images/menu-img.webp">
                        </div>
                        <div class="menuListWrap col-8">
                            <div>
                                <ul class="d-flex">
                                    <div class="col-5 headerafter">
                                        <li><a href="#" class=""><span>CHOOSE YOUR</span> Flavour</a></li>
                                        <li class="surpriseme"><a href="../index.html/#surpriseme">Surprise <span>ME</span></a></li>
                                        <li><a href="#">Meet our <span>SHOWRUNNERS</span></a></li>
                                        <li><a href="#">Contest</a></li>
                                    </div>
                                    <div class="col-6 pt-5">
                                        <li><a href="../pages/aboutus.html">Know Us <span>BETTER</span></a></li>
                                        <li><a href="../pages/closeBy.html"><span class="text-center">WE’RE</span> Close by</a></li>
                                        <li><a href="../pages/contactUs.html">Reach <span>OUT TO US</span></a></li>
                                    </div>
                                </ul>
                            </div>
                            <div class="d-flex align-items-center CustomerCare">
                                <div class="col-6 CustomerCareAfter">
                                    <p class="ps-5 pt-4"><a href="tel:+022 42460606" class="text-decoration-none fs-4" style="color: #010101;">Customer Care</a>
                                        <span class="contactHome">
                                            <a href="tel:+022 42460606 ">
                                                <img src="https://www.havmor.com/themes/havmornew/images/call-icon-header.webp">
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div class="menuCustomerCare col-6">
                                    <div class="menuSocialIconWrap">
                                        <ul class="d-flex p-0 py-4">
                                            <li><a href="https://www.facebook.com/HavmorIcecreams" target="_blank" class="socialIcon fbIcon"><i class="bi bi-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/HavmorIceCreams" target="_blank" class="socialIcon twitterIcon"><i class="bi bi-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/havmoricecreams/" target="_blank" class="socialIcon instaIcon"><i class="bi bi-instagram"></i></a></li>
                                            <li><a href="https://www.youtube.com/user/HAVMORICECREAM" target="_blank" class="socialIcon youtubeIcon"><i class="bi bi-youtube"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/havmor-ice-cream-ltd/" target="_blank" class="socialIcon linkedinIcon"><i class="bi bi-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logo">
                <a href="../index.html"><img src="https://www.havmor.com/themes/havmornew/images/logo.png" alt=""></a>
            </div>
        </header>
    </div>
    <div class="stickyIcon">
        <ul>
            <li>
                <a href="#" class="searchIcon" id="searchIcon">
                    <i class="bi bi-search"></i>
                </a>
            </li>
            <li>
                <a href="/pages/closeBy.html" class="searchIcon">
                    <i class="bi bi-geo-alt"></i>
                </a>
            </li>
            <li>
                <a href="./index.html/#surpriseme" class="searchIcon">
                    <i class="bi bi-person-arms-up"></i>
                </a>
            </li>
        </ul>
    </div>
    <div id="searchpopup" style="display: none;">
        <div>
            <div class="searchBoxWrap">
                <div class="searchBoxContainer">
                    <div class="searchBoxInputField">
                        <input type="text" placeholder="Search your favorite ice cream flavor" id="searchInputPopup">
                    </div>
                    <span class="searchIcon">
                        <i class="bi bi-search"></i>
                    </span>
                    <div class="searchClose"><a href="javascript:;" id="closeSearch">Close Search</a></div>
                </div>
                <div class="searchBoxOverLay"></div>
            </div>
        </div>
    </div>`;
};

export default Header;

