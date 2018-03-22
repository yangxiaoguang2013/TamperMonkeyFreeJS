// ==UserScript==
// @name         大麦商品页面
// @namespace    https://piao.damai.cn/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://piao.damai.cn/145760.html*
// @grant        none
// ==/UserScript==
var performid = '9038680'; //日期ID
var priceid = '12202848'; //价格ID
var person = '2'; //人数，大麦网规定一张身份证最多购买两张票
var isEnd = 0;
(function() {
    setTimeout(loopDothg,1000);
})();
function loopDothg(){
    dothg();
    if (isEnd == 0) {
        setTimeout(loopDothg,1000);
    }
}
function dothg() {
  var buy = document.getElementById('btnBuyNow');
  var Xuanzuo = document.getElementById('btnXuanzuo');
  if (buy !== null) {
    var Buytext = buy.innerHTML;
    if (Buytext == '立即购买' || Buytext == '立即预定') {
      if(qiang() == 1){
          isEnd = 1;
      }
    } else {
      document.location.reload();
    }
  } else if (Xuanzuo !== null) {
    var Xuanzuotext = Xuanzuo.innerHTML;
    if (Xuanzuotext == '选座购买') {
      Xuanzuo.click();
    } else {
      document.location.reload();
    }
  } else {
    document.location.reload();
  }
}
function qiang() {
  var firstperform = document.getElementById('firstperform');
  if (firstperform.className !== 'itm  itm-sel') {
      firstperform.childNodes[0].click();
  }
  var priceList = document.getElementById('priceList').children[1].children[0].children;
  var len = priceList.length;
  var hasQiang = 0;
  for (var i=0; i<len; i++) {
      if (priceList[i].getAttribute('data-priceid') == priceid && priceList[i].className == 'itm') {
          priceList[i].childNodes[0].click();
          hasQiang = 1;
      }
  }
  if (hasQiang == 0) {
      return 0;
  }
  inputNum();
  return 1;
}
function inputNum(){
    var infoBody = document.getElementById('cartList').children[1].children[0].children[0];
    if (infoBody == undefined) {
        setTimeout(inputNum,1000);
    }else{
        var peopleNum = document.getElementById('cartList').children[1].children[0].children[0].children[2].children[1];
        peopleNum.value = person;
        var bt = document.getElementById('btnBuyNow');
        bt.click();
    }
}
