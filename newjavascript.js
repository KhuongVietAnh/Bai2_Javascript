//Initialize the start value move of the popup 
var move =-200;
//
var startPopUp;
//contain object of class call
var listImgItems;
//contain object of class call
var listItems;
/*Attach the flag to each element in the list. 
 value =0 when close menu
 value =1 when show menu
 */
var flag = [];
// Arry contain images close menu
var imgItems = ["about1_mb.jpg", "about2_mb.jpg", "about3_mb.jpg", "about4_mb.jpg", "about5_mb.jpg"];
//Array contain images show menu
var imgItemsHover = ["about1_mb_hover.jpg", "about2_mb_hover.jpg", "about3_mb_hover.jpg", "about4_mb_hover.jpg", "about5_mb_hover.jpg"];
/*Funtion set style:none
 
 */
function setStyleNone(listItems, listImgItems, imgItems) {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = "none";
        listImgItems[i].setAttribute('src', 'images/' + imgItems[i]);
    }
    if (flag.length === 0)
    {
        for (var i = 0; i < listItems.length; i++) {
            flag.push(0);
        }
    }
}
;
/* set 0 for each menu do not show */
function addFlag(input) {
    for (var i = 0; i < flag.length; i++) {
        if (i !== input) {
            flag[i] = 0;
        }
    }
}
;
// Action when click to menu, set object
function clickButton(x) {
    listItems = document.getElementsByClassName("js__list__content");
    listImgItems = document.getElementsByClassName("js__list__img__menu");
    setStyleNone(listItems, listImgItems, imgItems);
    hidePopup();
    if (flag[x - 1] === 0)
    {
        flag[x - 1] = 1;
        addFlag(x - 1);
        showMenu(listItems[x - 1], listImgItems[x - 1], x - 1);
    } else if (flag[x - 1] === 1)
    {
        flag[x - 1] = 0;
    }
}
;
/*funtion show monu 

*/
function showMenu(listItems, listImgItems, x) {
    setStyleNone(listItems, listImgItems, imgItems);
    listImgItems.setAttribute('src', 'images/' + imgItemsHover[x]);
    listItems.setAttribute('style', 'height:10px;');
    listItems.style.display = "block";
    $(listItems).animate({height: '200px'}, 500, function () {
    });
}
;
//Hide popup when click other menu
function setStyleNonePopup(list) {
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }
}
;
//funtion start run pop up
function runPopUp(popUp) {
    startPopUp = setInterval(function () {
        move = move + 1;
        popUp.style.display = "block";
        popUp.style.top = move + 'px';
        stopPopUp();
    }, 5);
}
;
//funtion stop run popup
function stopPopUp() {
    if (move >= 50)
    {
        clearInterval(startPopUp);
        move = 0;
    }
}
;
//funtion showPopUp of event onclick 
function showPopUP(x) {
    var listItemsPopUp = document.getElementsByClassName("popup");
    setStyleNonePopup(listItemsPopUp);
    if (x % 2 !== 0) {
        runPopUp(listItemsPopUp[0]);
    } else {
        runPopUp(listItemsPopUp[1]);
    }
}
;
// funtion Hide popup of event onclick 
function hidePopup() {
    var listItemsPopUp = document.getElementsByClassName("popup");
    for (var i = 0; i < listItemsPopUp.length; i++)
    {
        listItemsPopUp[i].style.top = "-300px";
    }
    $('.popup').hide();
}