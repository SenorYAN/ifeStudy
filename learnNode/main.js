/*
视口宽高
@param {object}
*/

const getViewportSize = (w = window) => {
    if (w.innerHeight) {
        return {
            width: w.innerWidth,
            height: w.innerHeight
        }
    }

    const d = w.document;
    if (document.compatMode === 'CSS1Comppat') {
        return {
            width: d.documentElement.clientWidth,
            height: d.documentElement.clientHeight
        }
    }

    return {
        width: d.body.clientWidth,
        height: d.body.clientHeight
    }
}

console.log(getViewportSize())

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = [];

const flagArr = Array.from({length: data.length}).map((item) => false);

const out = (arr) => {
    let t = arr.slice().filter((item, index) => flagArr[index]);
    t.length && res.push(t);
}

const search = (arr, length, temp, target) => {
    if (target === 0) {
        out(arr, length)
    } else {
        if (temp === length) {
            return null;
        } else {
            flagArr[temp] = true;
            // 没超
            if (target - arr[temp] >= 0) {
                search(arr, length, temp + 1, target - arr[temp]);
            }
            // 超了
            // flag恢复原状
            flagArr[temp] = false;
            if (target >= 0) {
                search(arr, length, temp + 1, target);
            }
        }
    }
}

search(data, data.length, 0, 10)

console.log(res);

/* var findSubstring = function () {
    var rlt = []; // 结果
    var path = [];
    allSort([1, 2, 3, 7], rlt, path, 0, 4);
    console.log(rlt);
};

var allSort = function (arr, rlt, path, k, l) {
    if (k === l) {
        rlt.push(path.slice());
        return;
    }
    for (var i = 0; i < l; i++) {
        console.log(path);
        path.push(arr[i]);
        allSort(arr, rlt, path, k + 1, l);
        path.pop();
    }
}
findSubstring(); */
