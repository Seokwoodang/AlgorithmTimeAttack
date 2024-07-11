// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

//      입출력 예
//      numbers	       result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	    6

function findMissingNumbersSum(numbers) {
  const allNumbers = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const numbersSet = new Set(numbers);

  let sum = 0;
  for (let num of allNumbers) {
    if (!numbersSet.has(num)) {
      sum += num;
    }
  }
  return sum;
}

function runTests() {
  const testCases = [
    { input: [0, 1, 2, 3, 4, 5, 6, 7, 8], expected: 9 },
    { input: [0, 1, 2, 3, 5, 6, 7, 8, 9], expected: 4 },
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9], expected: 0 },
    { input: [0, 2, 4, 6, 8], expected: 25 },
    { input: [], expected: 45 },
    { input: [0, 9], expected: 36 },
  ];

  let allPassed = true;

  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    const result = findMissingNumbersSum(input);
    if (result !== expected) {
      console.log(
        `Test Case ${index + 1}: Failed (Expected ${expected}, got ${result})`
      );
      allPassed = false;
    } else {
      console.log(`Test Case ${index + 1}: Passed`);
    }
  });

  if (allPassed) {
    console.log("All tests passed!");
  } else {
    console.log("Some tests failed.");
  }
}

// Run the tests
runTests();
