function getTriangleArea(a, h) {
  return a > 0 && h > 0 ? a * h / 2 : 'Nieprawidłowe dane';
};

console.log('triangle1Area = ' + getTriangleArea(14, 23));
console.log('triangle2Area = ' + getTriangleArea(0, 12));
console.log('triangle3Area = ' + getTriangleArea(19, 15));