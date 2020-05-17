var budgetController = (function() {
  var x = 10;
  var add = function(a) {
    return x + a;
  };
  return {
    publicTestFun: function(b) {
      return add(b);
    }
  };
})();

var UICSontroller = (function() {
  //some code
  return {
    uiFunction: function() {
      console.log('UICSontroller');
    }
  };
})();

var AppController = (function(budgetCtrl) {
  var z = budgetCtrl.publicTestFun(12);
  return {
    anotherPublic: function() {
      console.log('App !!!', z);
    }
  };
})(budgetController);
