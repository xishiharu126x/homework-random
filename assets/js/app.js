//  let btn = document.getElementById(`btn`);
//  btn.addEventListener(`click`, function(){
//   //  alert(`Hello, world!`);
//   console.log(btn);
//  });

//  let btn = document.getElementById('btn');

// btn.addEventListener('click', omikuji);

// function omikuji() {
//   // 0 ~ 4
//   let res = ['赤', '青', '緑', 'ピンク', '黒'];
//   let randomNum = Math.random();
//   let result = document.getElementById('result');

//   // Math.floor
//   // Math.ceil
//   // Math.round
//   // 0, 1, 2, 3, 4

//   // console.log(Math.floor(randomNum * res.length));
//   let num = Math.floor(randomNum * res.length);

//   result.textContent = res[num];
// }
//  1未満～０の乱数を使ってだす
//  Math.random 0.99~~~0 みたいな
//  おみくじの場合は５つに分けないといけない

let btn = document.getElementById('btn');
btn.addEventListener('click', luckcolor);
function luckcolor() {
  // 0 ~ 4
  // let res = ['赤', '青', '黒', '白', '紫', '緑']; //結果の配列
  let res = { 0: ['lightblue', 'バッチメイト'], 1: ['pink', 'English Teacher'], 2: ['lightgreen', '55期プログラミング'], 3: ['darkgray', '英語コース'], 4: ['plum', 'プログラミングの先生'], 5: ['moccasin', '話したことない人']}; //結果の配列
  let randomNum = Math.random();
  let result = document.getElementById('result');
  let resultContainer = document.getElementById('result-container');
  // Math.floor
  // Math.ceil
  // Math.round
  // 0, 1, 2, 3, 4
  // console.log(Math.floor(randomNum * res.length));
  let num = Math.floor(randomNum * Object.keys(res).length);
  result.textContent = res[num][1];
  resultContainer.style.backgroundColor = res[num][0];

  var hitokoto = document.getElementById('hitokoto');
  var hitokotoContainer = document.getElementById('hitokoto-container');
 var hitokotonum = [ ['lightblue', '明日のこと'],
 ['pink', '恋愛のこと'],
 ['lightgreen', '昨日の出来事'],
 ['darkgray', '授業のこと'],
 ['plum', '英語のこと'],
 ['moccasin', '週末のこと']
];

//  ('なんか良いことあるって！','意外となんとかなるんでない？','気にすんなって！','やるっきゃない！','そんな無理することかい？','みなぎっている！','あふれてるね！');
 var nam = Math.floor(Math.random() * hitokotonum.length);
 hitokotoContainer.style.backgroundColor = res[nam][0];
 hitokoto.textContent = hitokotonum[nam][1];
}

// var images = [
//   ['img01.jpg', 'これは1枚目の画像'],
//   ['img02.jpg', 'これは2枚目の画像'],
//   ['img03.jpg', 'これは3枚目の画像']
// ];
// var randImg = images[Math.floor(Math.random() * images.length)];
// $('.random').attr({'src':randImg[0], 'alt':randImg[1]});
