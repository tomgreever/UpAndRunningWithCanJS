var MenuViewModel = can.Map.extend({
    init: function () {
        this.attr('menuData', {});
    },
    goHome: function (viewModel, element, event) {
        this.attr('menus', null);
        this.attr('restaurant', null);
        event.preventDefault();
    }
});

var siteMenuViewModel = new MenuViewModel();

can.Component.extend({
    tag: "menu",
    template: can.view('components/site_menu/site_menu.stache'),
    scope: siteMenuViewModel
});

SiteMenuModel.findOne({},
    function success(menu) {
        siteMenuViewModel.attr('menuData',  menu);
    },
    function error(xhr) {
        alert(xhr.message);
    });
