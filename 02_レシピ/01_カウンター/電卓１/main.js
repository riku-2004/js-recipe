const plusButton = document.getElementById("plusbutton")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let result = document.getElementById("result")

let num1 = 0
let num2 = 0
const logValue1 = function (e) {
  num1 = Number(e.target.value)
  console.log(e.target.value)
}

const logValue2 = function (e) {
  num2 = Number(e.target.value)
  console.log(e.target.value)
}

input1.oninput = logValue1
input2.oninput = logValue2

plusButton.onclick = function () {
  const sum = num1 + num2
  result.textContent = "計算結果は" + sum
  console.log(sum)
}
