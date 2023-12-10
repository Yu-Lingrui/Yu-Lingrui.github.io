document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("custom-cursor");
    let cursorVisible = false; // 初始光标不可见
    document.addEventListener("mousemove", function (e) {
        // 移动光标的位置
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
        // 显示光标
        if (!cursorVisible) {
            cursor.style.display = "block";
            cursorVisible = true;
        }
        // 设置一个定时器，在一定时间后隐藏光标（例如，500毫秒）
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(function () {
            cursor.style.display = "none";
            cursorVisible = false;
        }, 10);
        // 设置一个定时器，在一定时间后改变颜色（例如，1000毫秒）
        clearTimeout(colorChangeTimeout);
        colorChangeTimeout = setTimeout(function () {
            const randomColor = getRandomColor();
            cursor.style.backgroundColor = randomColor;
        }, 100);
});

let cursorTimeout;
let colorChangeTimeout;
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
});