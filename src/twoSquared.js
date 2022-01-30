const twoSquared = (n) => {
    let x = 0, y = Math.floor(Math.sqrt(n));
    while(x <= y){
       if (x * x + y * y === n) {
          return (`x=${x} and y=${y}`);
       } else if (x * x + y * y < n) {
          x++;
          } else {
             y--;
       };
    };
    return false;
 };

 module.exports = twoSquared;
 