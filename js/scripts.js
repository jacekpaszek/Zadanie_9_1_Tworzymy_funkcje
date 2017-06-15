function getTriangleArea(a, h) {                //function for triangle area calculation
  if (a > 0 && h > 0) {
    return (a * h / 2);
  } else {
    console.log('Nieprawidłowe dane');
  }
}
console.log('triangle1Area = ' + getTriangleArea(4, 0));
console.log('triangle2Area = ' + getTriangleArea(0, 12));
console.log('triangle3Area = ' + getTriangleArea(9, 15));
