var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.

var lastItem = campingItems.pop();
console.log(lastItem);

// 14. Add two new items to lastItem, one at the beginning and one at the end.

var lastItem = [lastItem];
lastItem.push("ice");
lastItem.unshift("drinks");
console.log(lastItem);
