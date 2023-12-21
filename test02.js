function totalCount(fruits, animals, boxCount) {
    let results = [];
    let totalFruits = 0;

    for (let fruit in fruits) {
        totalFruits += fruits[fruit] * boxCount;
    }

    for (let animal in animals) {
        let times;
        if (animal === '기린') {
            times = 0;
            for (let fruit in fruits) {
                times += Math.ceil(fruits[fruit] * boxCount / animals[animal].count / animals[animal].eat);
            }
        } else {
            times = Math.ceil(totalFruits / animals[animal].count / animals[animal].eat);
        }
        results.push(`${animal}(${animals[animal].count}마리)는 ${times}번 먹어야 합니다.`);
    }

    return results;
}

let fruits = {
    '사과': 26,
    '딸기': 27,
    '바나나': 61,
    '귤': 138
};

let animals = {
    '코끼리': { count: 1, eat: 9 },
    '기린': { count: 2, eat: 5 },
    '원숭이': { count: 3, eat: 3 }
};

let boxCount = 3;
console.log(totalCount(fruits, animals, boxCount));
