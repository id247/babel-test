;(function(){

  "use strict";
  let arr = {key: 10};

  const func = () => {
    console.log(arr);
    arr = {
      ...arr,
      key: arr.key + arr.key * 2
    };
  }

  func();
  func();
  func();
  
}());