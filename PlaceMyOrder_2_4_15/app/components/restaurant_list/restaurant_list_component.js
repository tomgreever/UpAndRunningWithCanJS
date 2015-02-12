var RestaurantListViewModel = can.Map.extend({
    define: {
        currentRestaurant: {
            value: {},
            type: 'number',
            set: function (newValue) {
                return isNaN(newValue) ? newValue : this.attr('restaurants')[(newValue - 1)];
            }
        }
    },
    init: function () {
        this.attr('restaurants', new RestaurantModel.List({}));
        this.attr('currentRestaurant', {});
        this.attr('visible', true);
        this.attr('selected', {});
    },
    showMenu: function () {
        //Sets the restaurant value on the parent scope (AppState)
        this.attr('restaurant', this.currentRestaurant);
    }

});

can.Component.extend({

    tag: 'restaurant-list',
    template: can.view('components/restaurant_list/restaurant_list.stache'),
    scope: RestaurantListViewModel

});
