'use strict';

/* jasmine specs for controllers go here */
describe('ShoppingCart controllers', function() {

  describe('ShoppingCartCtrl', function(){
    var scope, ctrl;

    beforeEach(module('shoppingCart'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('ShoppingCartCtrl', {$scope:scope});
    }));


    it('should create "carts" model with 6 carts', function() {
      expect(scope.carts.length).toBe(6);
    });

  });
});
