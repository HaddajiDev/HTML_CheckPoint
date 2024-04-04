const arr = [1, 2, 3, 4, 5];

function Arr(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr[index]);
        }, 1000)
    });
}

async function Debug_arr() {
    for (let i = 0; i < arr.length; i++) {
        var res = await Arr(i);
        console.log(res);
    }
}

async function fetchData() {
    try {
        const data_ = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await data_.json();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}


var urls = [fetch("https://jsonplaceholder.typicode.com/users"), fetch("https://jsonplaceholder.typicode.com/users")]
async function PromiseAll_task() {
    const res = await Promise.all(urls);
    console.log(res);
}