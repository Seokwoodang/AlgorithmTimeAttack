// 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 
// 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.


function solution(myString) {

    return sortedArray;
}

// 테스트 코드
function runTests() {
    const testCases = [
        { input: "abcxdefxghi", expected: ["abc", "def", "ghi"] },
        { input: "helloxworld", expected: ["hello", "world"] },
        { input: "xhelloxworldx", expected: ["hello", "world"] },
        { input: "x", expected: [] },
        { input: "abc", expected: ["abc"] },
    ];

    testCases.forEach(testCase => {
        const result = solution(testCase.input);
        const isEqual = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test Case: ${isEqual ? 'Passed' : 'Failed'}`);
        console.log(`Input: "${testCase.input}", Expected: ${JSON.stringify(testCase.expected)}, Result: ${JSON.stringify(result)}`);
        console.log("----------------------------------------------");
    });
}

// 테스트 실행
runTests();