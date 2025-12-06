let links = document.querySelectorAll('.menu__link');

for (let link of links) {
  link.onclick = function () {
    let parentItem = link.closest('.menu__item');
    let subMenu = parentItem.querySelector('.menu_sub');

    if (!subMenu) {
      return true;
    }

    let isActive = subMenu.classList.contains('menu_active');

    let allSubMenus = document.querySelectorAll('.menu_sub');
    for (let menu of allSubMenus) {
      menu.classList.remove('menu_active');
    }

    if (!isActive) {
      subMenu.classList.add('menu_active');
    }

    return false;
  };
}
