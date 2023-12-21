function totalCount(fruits, animals, boxCount) {
    let results = [];
    let totalFruits = 0;
    let maxFruits = 0;

    for (let fruit in fruits) {
        totalFruits += fruits[fruit] * boxCount;
        if (fruits[fruit] * boxCount > maxFruits) {
            maxFruits = fruits[fruit] * boxCount;
        }
    }

    for (let animal in animals) {
        let times = 0;
        if (animal === '기린') {
            times = Math.ceil(maxFruits / animals[animal].eat);
        } else {
            times = Math.ceil(totalFruits / animals[animal].eat);
        }
        results.push(`${animal}(${animals[animal].count}마리)는 ${times}번 먹어야 합니다.`);
    }

    return results;
}

let fruits = {
    '사과': 15,
    '딸기': 20,
    '바나나': 6,
    '귤': 10
};

let animals = {
    '코끼리': { count: 1, eat: 9 },
    '기린': { count: 1, eat: 5 },
    '원숭이': { count: 1, eat: 3 }
};

let boxCount = 3;

console.log(totalCount(fruits, animals, boxCount));
