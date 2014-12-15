'use strict';

/* Controllers */

var shoppingCart = angular.module('shoppingCart', []);

shoppingCart.controller('ShoppingCartCtrl', function($scope) {
  $scope.carts = [
    {
      "img": "img/01.jpg",
      "text": "What kind of jobs do software engineers who earn $500k per year do?",
      "link": "http://www.quora.com/What-kind-of-jobs-do-software-engineers-who-earn-500k-per-year-do"
    },
    {
      "img": "img/02.jpg",
      "text": "What is a coder's worst nightmare?",
      "link": "http://www.quora.com/What-is-a-coders-worst-nightmare"
    },
    {
      "img": "img/03.jpg",
      "text": "Who is the unluckiest physicist ever?",
      "link": "http://www.quora.com/Who-is-the-unluckiest-physicist-ever"
    },
    {
      "img": "img/04.jpg",
      "text": "What are valuable skills that many young people are losing?",
      "link": "http://www.quora.com/What-are-valuable-skills-that-many-young-people-are-losing"
    },
    {
      "img": "img/05.jpg",
      "text": "What are some interesting facts about working at Google?",
      "link": "http://www.quora.com/What-are-some-interesting-facts-about-working-at-Google"
    },
    {
      "img": "img/06.jpg",
      "text": "What are the stupidest decisions ever made in Silicon Valley?",
      "link": "http://www.quora.com/What-are-the-stupidest-decisions-ever-made-in-Silicon-Valley"
    }
  ];
});