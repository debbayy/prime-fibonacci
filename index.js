const x = parseInt(prompt("Enter X: "));
const y = parseInt(prompt("Enter Y: "));

// looping from x to y
for (let i = x; i <= y; i++) {
  const fibonacci = (i) => {
    let valueArray = [2, 3];

    for (let l = 1; l <= i; l++) {
      const value1 = valueArray[valueArray.length - 2];
      const value2 = valueArray[valueArray.length - 1];

      console.log(`ambil nilai value1 = ${value1}`);
      console.log(`ambil nilai value2 = ${value2}`);

      valueArray.push(value1 + value2);
      console.log(
        `Push nilai terbaru(${value1} + ${value2}) = ${value1 + value2}`
      );
    }

    return valueArray;
  };

  console.log(fibonacci(i));

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const myPrimeArray = fibonacci(i).filter(isPrime);
  console.log(myPrimeArray);
}
