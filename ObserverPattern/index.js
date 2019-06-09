const { log } = console;

class ObserverList {
  // You can't use if else statements inside the constructor funcion
  constructor(observerList) {
    this.observerList = observerList ? observerList : [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  count() {
    return this.observerList.length;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  indexOf(obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) return i;
      i++;
    }

    return -1;
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  }
}

// const a = new ObserverList();
// a.add({ aloha: "Hey!" });
// log(a.get(0));
// log(a.indexOf({ xy: "tick" }));

class Subject {
  constructor() {
    this.observers = new ObserverList();
    this.notify = this.notify.bind(this);
    this.addObserver = this.addObserver.bind(this);
    this.removeObserver = this.removeObserver.bind(this);
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify(context) {
    let observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

// The Observer
function Observer() {
  this.update = function() {
    // ...
  };
}

// Need to remember this method
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

const controlCheckbox = document.getElementById("mainCheckbox"),
  addBtn = document.getElementById("addNewObserver"),
  container = document.getElementById("observersContainer");

// Concrete Subject
// Extend the controlling checkbox with the Subject class

extend(controlCheckbox, new Subject());

// Checking if observers are in the list and also just looking to all methods and values
// for (var key in controlCheckbox) {
//   log(key, " - key, value - ", controlCheckbox[key]);
// }

// Checking if the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;

function addNewObserver() {
  // Create a checkbox to be added
  let check = document.createElement("input");
  check.type = "checkbox";

  // Extends the checkBox with the Observer Class
  extend(check, new Observer());

  check.update = function(value) {
    this.checked = value;
  };

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(check);
  log(controlCheckbox.observers.count());
  // Append the item to the container
  container.appendChild(check);
}
