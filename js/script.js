// search bar
function search_menu() {
    let inputValue = document.getElementById('searchbar').value;
    inputValue = inputValue.toLowerCase();
    let itemName = document.getElementsByClassName('menu-item-name');
    let menuItem = document.getElementsByClassName('menu-item');
    let itemDescription = document.getElementsByClassName('menu-item-description');
      
    for (i = 0; i < menuItem.length; i++) { 
        if (!itemName[i].innerHTML.toLowerCase().includes(inputValue) && !itemDescription[i].innerHTML.toLowerCase().includes(inputValue)) {
            menuItem[i].style.display="none";
        }
        else {
            menuItem[i].style.display="flex";                 
        }
    }
}