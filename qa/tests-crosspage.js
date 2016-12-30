//cross browser tests
var Browser = require('zombie'), assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
  // setup takes a function that will get executed by the test framework before each test is run
  setup(function(){
    browser = new Browser();
  });

  //checks that the referrer is populated correctly if routed from a product page
  test('requesting a group rate quote from the hood river tour page' + 'should populate the referrer field', function(done){
    var referrer = 'http://localhost:3000/tours/hood-river'; browser.visit(referrer, function(){
      browser.clickLink('.requestGroupRate', function(){
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  //checks that the referrer is populated correctly if routed from a product page
  test('requesting a group rate from the oregon coast tour page should ' + 'populate the referrer field', function(done){
    var referrer = 'http://localhost:3000/tours/oregon-coast';
    browser.visit(referrer, function(){
      browser.clickLink('.requestGroupRate', function(){
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  test('visiting the "request group rate" page dirctly should result ' + 'in an empty referrer field', function(done){
    browser.visit('http://localhost:3000/tours/request-group-rate', function(){
      assert(browser.field('referrer').value === '');
      done();
    });
  });

});
