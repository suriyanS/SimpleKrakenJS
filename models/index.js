'use strict';

module.exports = function IndexModel() {
    return {
        name: 'Suriyan',
        menuList: [
            {name : 'About', route: '/about'},
            {name : 'Menu', route: '/foodItems'},
            {name : 'Contact', route: '/contact'}
        ]
    };
};
