import Header from '../components/header.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("header").innerHTML = Header();

    // jQuery for menu interaction
    $(".menuCloseBtn").click(function(){
        $(".menuDetailsWrap").css("display", "none");
        $(".menuIcon").css("display", "block");
        // $(".stickyIcon").css("display", "block");
        $(".main-side-nav ").css("display", "block");
        $(".layout-content").css("display", "block");
        // $("#header").css("position", "static");
        $("#footer").css("display", "block");
    });

    $(".menuIcon").click(function(){
        $(".menuDetailsWrap").css("display", "block");
        $(".menuIcon").css("display", "none");
        $(".logo").css("display", "block");
        // $(".stickyIcon").css("display", "none");
        $(".main-side-nav ").css("display", "none");
        $(".layout-content").css("display", "none");
        // $("#header").css("position", "fixed");
        $("#footer").css("display", "none");
    });

    // Vanilla JS for search interaction
    const searchIcon = document.getElementById('searchIcon');
    const searchPopup = document.getElementById('searchpopup');
    const closeSearch = document.getElementById('closeSearch');

    searchIcon.addEventListener('click', function() {
        searchPopup.style.display = 'block';
    });

    closeSearch.addEventListener('click', function() {
        searchPopup.style.display = 'none';
    });

    searchPopup.addEventListener('click', function(event) {
        if (event.target === searchPopup || event.target.className === 'searchBoxOverLay') {
            searchPopup.style.display = 'none';
        }
    });
});
