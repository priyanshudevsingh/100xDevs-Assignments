let cnt = 1;

function helper() {
    console.clear();
    console.log(cnt);
    cnt++;
    setTimeout(helper, 1000);
}

setTimeout(helper, 1000);