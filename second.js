// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수가 두번 이상이라면 'nice'를 return 하는 solution 함수를 완성해 주세요.



const checkOccurrences = (myString, pat) => {
    // let count = 0;
    // let pos = myString.indexOf(pat);
    // while (pos !== -1) {
    //     count++;
    //     pos = myString.indexOf(pat, pos + 1);
    //     if (count > 1) {
    //         return 'nice';
    //     }
    // }
    let count = 0;
    let checkCount = 0;
    while(count !== -1){
        if(myString.indexOf(pat,count)!==-1){
            count = myString.indexOf(pat,count)+1;
            checkCount++; 
        }else{
            count = -1
        }
    }
    console.log(myString,checkCount)
    return checkCount > 1 ? 'nice' : '';
};

const runTests = () => {
    const testCases = [
        { myString: "ababcabc", pat: "abc", expected: 'nice' },
        { myString: "aaaaa", pat: "aa", expected: 'nice' },
        { myString: "hello world", pat: "o", expected: '' },
        { myString: "ababababa", pat: "aba", expected: 'nice' },
        { myString: "test case", pat: "test", expected: '' },
        { myString: "nothing here", pat: "absent", expected: '' },
        { myString: "", pat: "empty", expected: '' },
        { myString: "aaaa", pat: "a", expected: 'nice' }
    ];

    testCases.forEach(({ myString, pat, expected }, index) => {
        const result = checkOccurrences(myString, pat);
        if (result === expected) {
            console.log(`Test case ${index + 1} passed: checkOccurrences("${myString}", "${pat}") === "${expected}"`);
        } else {
            console.error(`Test case ${index + 1} failed: checkOccurrences("${myString}", "${pat}") === "${result}", expected "${expected}"`);
        }
    });
};

runTests()