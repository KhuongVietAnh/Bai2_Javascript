//show menu type=1, show popup type=2
var type;

//Initialize the start value move of the popup 
var move = -200;
//
var start;
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
    type = 1;
    setStyleNone(listItems, listImgItems, imgItems);
    listImgItems.setAttribute('src', 'images/' + imgItemsHover[x]);
    listItems.setAttribute('style', 'height:10px;');
    listItems.style.display = "block";
    /* $(listItems).animate({height: '200px'}, 500, function () {
     });*/
    runShow(listItems, type);
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
function runShow(typeShow, type) {

    if (type === 1) //show menu
    {
        move = 0;
        typeShow.style.height = 'auto';
        var height = $(typeShow).height();//get height max of tag
        start = setInterval(function () {
            move = move + 2;
            typeShow.style.display = "block";
            typeShow.style.height = move + 'px';
            stopPopUp(typeShow, type, height);
        }, 1);
    } else if (type === 2) { //show popup
        move = -200;
        start = setInterval(function () {
            move = move + 2;
            typeShow.style.display = "block";
            typeShow.style.top = move + 'px';
            stopPopUp(typeShow, type, 500);
        }, 5);
    }
}
;
//funtion stop run popup
function stopPopUp(typeShow, type, height) {
    if (move >= 50 && type === 2)
    {
        clearInterval(start);
        move = -200;
    } else if (move >= height && type === 1) {
        typeShow.style.height = height;
        //alert($(typeShow).height());
        clearInterval(start);
        move = 0;
    }
}
;
//When popup show do funtion 
function PointerEvents(type) {
    var listMenu = document.getElementsByClassName("list");
    if (type === 1) {
        for (var i = 0; i < listMenu.length; i++) {
            listMenu[i].setAttribute('style', 'pointer-events: none;');
        }
    } else
        for (var i = 0; i < listMenu.length; i++) {
            listMenu[i].setAttribute('style', 'pointer-events: auto;');
        }
}
;
//funtion showPopUp of event onclick 
function showPopUP(x) {
    type = 2;
    var listItemsPopUp = document.getElementsByClassName("popup");
    setStyleNonePopup(listItemsPopUp);
    PointerEvents(1);
    if (x % 2 !== 0) {
        runShow(listItemsPopUp[0], type);
    } else {
        runShow(listItemsPopUp[1], type);
    }

}
;

// funtion Hide popup of event onclick 
function hidePopup() {
    var listItemsPopUp = document.getElementsByClassName("popup");
    for (var i = 0; i < listItemsPopUp.length; i++)
    {
        listItemsPopUp[i].style.top = "-300px";
        listItemsPopUp[i].style.display = "none";
    }
    PointerEvents(0);
}