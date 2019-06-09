let { log } = console;

// Singleton

let mySingleton = (function() {
  // stores a reference to the singleton
  let instance;

  function init() {
    // Private methods and variables
    function privateMethod() {
      log("I am private method");
    }

    let privateVar = "I am private var";

    let privateRandomNum = Math.random();

    return {
      publicMethod: () => {
        log("Public Method");
      },

      publicProp: "Public Property",

      getRandomNum: () => {
        return privateRandomNum;
      }
    };
  }

  return {
    // Get instance if one exist or create one
    getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

let single1 = mySingleton.getInstance().getRandomNum();
let single2 = mySingleton.getInstance().getRandomNum();
// log(
//   single1 === single2 ? "Yes, it is. true" : "No, it isn't",
//   mySingleton.getInstance().getRandomNum()
// );

// Just making something
let RandomNumberSingleton = (function() {
  let instance;

  function init() {
    const a = Math.random();
    return a;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = init();
      } else {
        log("Instance of RandNumber already defined and is equal: ", instance);
      }
      return instance;
    }
  };
})();

let instanceOfRandNum = RandomNumberSingleton.getInstance();
let instanceOfRandNum2 = RandomNumberSingleton.getInstance();
log(instanceOfRandNum, instanceOfRandNum2);

/* It is important to note the difference between a static instance of a class (object)
// and a Singleton: whilst a Singleton can be implemented as a static instance, it can also
 be constructed lazily, without the need for resources nor memory until this is actually needed.
*/

/* In practice, the Singleton pattern is useful when exactly one object is needed to coordinate
 others across a system. Here is one example with the pattern being used in this context:
*/
