const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// TRY: 練習問題１
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const riku = {
  name: "りく",
  age: 20,
  hobby: ["ゲーム、音楽、歌"],
  aisatu: function () {
    console.log("こんにちは")
  },
}
// const me = { name: 'あなたのなまえ' }
console.log(riku.age) // => riku.age
// ブラウザのコンソールを開いてオブジェクトが正しく作れているか確認してみましょう👀

// console.log(me)

// TRY: 練習問題２
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
console.log(hikakin.sayHello())

console.dir(document)
console.dir(window)

const character = {
  name: "riku",
  mother: { name: "eiko", age: 55 },
  hobbies: ["ゲーム", "運動"],
}
console.log(character.hobbies[0])
if (" ") {
  console.log("a")
}

for (let n = 2; n <= 10; ) {
  console.log(n)
  n += 2
}
