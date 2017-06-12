
for ( var k = 0 ; k < 3 ; k++) {
  var a = prompt('Enter base of triangle'),
      h = prompt('Enter height of triangle');

  if ((isNaN(a) || isNaN(h)) || ((a <= 0) || (h <= 0))) {
    console.log('Triangle parameters are wrong'); //triangle parameters checking
  } else {
  function getTriangleArea(a, h) {                //function for triangle area calculation
    return (a * h / 2);                  
  }
  var triangleArea = getTriangleArea(a, h)
  console.log(k + 1 + ' triangle ' + 'field with base a: ' + a + ' and height h: ' + h 
  	+ ' is equal to: ' + getTriangleArea(a, h));
  }
}