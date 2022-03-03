export function scrollMenu() {
    document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
        const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
            const header = document.querySelector('.header') // находим header и записываем в константу
            let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
            let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
            window.addEventListener('scroll', () => { // при прокрутке страницы
                currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
                const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
                if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                    header.classList.add('header_hidden'); // то скрываем header
                    header.classList.remove('header__background-color');
                }
                if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                    header.classList.remove('header_hidden'); // то отображаем header
                    header.classList.add('header__background-color');
                }
                if (window.pageYOffset == 0) {
                    header.classList.remove('header_hidden');
                    header.classList.remove('header__background-color');
                }
                prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
            })
        }
        onScrollHeader() // вызываем основную функцию onScrollHeader
    });

    // var show;
    // window.openMenuCatalog = function (node) {
    //     var subMenu = node.parentNode.getElementsByTagName("ul")[0];
    //     subMenu.classList.toggle('catalogMenu__hidden');
    //     if (show) show.classList.add('catalogMenu__hidden')
    //     else subMenu.classList.remove('catalogMenu__hidden');
    //     show = subMenu;
    // }

    var showFooter;
    window.openMenuFooter = function (node) {
        var subMenu = node.parentNode.getElementsByTagName("ul")[0];
        subMenu.classList.toggle('menu-li-footer__hidden');
        if (showFooter) showFooter.classList.add('menu-li-footer__hidden')
        else subMenu.classList.remove('menu-li-footer__hidden');
        showFooter = subMenu;
    }

    let catalogButtonWrapper = document.querySelectorAll(".catalog-button-wrapper");
    for (let i = 0; i < catalogButtonWrapper.length; i++) {
        catalogButtonWrapper[i].addEventListener("click", function () {
            document.querySelector(".catalogMenu").classList.toggle('catalogMenu__hidden');
            document.querySelector(".wrapper").classList.toggle('wrapper-shadow');
        })
    }
}

