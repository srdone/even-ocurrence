var evenOcurrence = function (arr) {
  var counts = arr.reduce(function(prev, curr) {
    if (prev[curr]) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }

    return prev;
  },{});

  for (key in counts) {
    if (counts[key] % 2 === 0) { return key;}
  }
  
  return null;
};
