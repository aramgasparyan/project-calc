function calc(e) {
    e.preventDefault();
    let a = +document.querySelector('.i-1').value;
    let b = +document.querySelector('.i-2').value;
    let sign = document.querySelector('.i-3').value;
    let out = document.querySelector('.out');

    if (sign === '+') {
        out.innerHTML = a + b;
    }
    else if (sign == '-') {
        out.innerHTML = a - b;
    }
    else if (sign == '*') {
        out.innerHTML = a * b;
    }
    else if (sign == '/') {
        out.innerHTML = a / b;
    }
    else if (sign == '%') {
        out.innerHTML = a * b / 100;
    }
    else {
        out.innerHTML = "Hi, how are you ? It's empty here or something wrong!!!";
    }

    // console.log(out);
    // console.log(a, b, sign);
}

document.querySelector('.btn').onclick = calc;
