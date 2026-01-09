let count1 = 0;
let count2 = 0;

const button1 = document.getElementById("clickBtn1");
const button2 = document.getElementById("clickBtn2");

const text1 = document.getElementById("count1");
const text2 = document.getElementById("count2");

button1.onclick = function () {
  count1 = count1 + 1;
  text1.textContent = count1;
};

button2.onclick = function () {
  count2 = count2 + 1;
  text2.textContent = count2;
};
