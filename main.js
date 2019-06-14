// 1.一枚目の画像を表示
// 2.一枚目の画像を非表示にしながら、2枚目の画像を表示
// 3.2を繰り返す
// 4.表示している画像が最後の画像の場合、最初の画像を表示
document.addEventListener('DOMContentLoaded', function() {
  // クラス名slide_itemのDOMを取得し、変数に格納する
  var slideItem = document.getElementsByClassName('slide_item');

  var IntervalTime = 3000;

  var activeNum = 0;

  // 最初の画像にappearクラスを付与（最初の画像を表示する）
  slideItem[activeNum].classList.add('appear');

  setInterval(function(){
    if (activeNum < slideItem.length - 1) {
      // 表示されている画像を非表示にする
      slideItem[activeNum].classList.remove('appear');
      // カウンターを1つ増やす
      ++activeNum;
      // 次の画像を表示する
      slideItem[activeNum].classList.add('appear');
    }
    else {
      // 最後のslideItemのとき
      slideItem[activeNum].classList.remove('appear');
      activeNum = 0;
      slideItem[activeNum].classList.add('appear');

    }

  }, IntervalTime)
})
