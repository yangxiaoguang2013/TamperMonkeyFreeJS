// ==UserScript==
// @name         大麦支付界面
// @namespace    https://buy.damai.cn/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://buy.damai.cn/multi/confirm*
// @grant        none
// ==/UserScript==
var isEnd = 0;
(function() {
    loopDothg();
})();

function loopDothg(){
    if (isEnd == 0) {
        setTimeout(dothg,1000);
    }
}
function dothg() {
    var ordersubmit = document.getElementById('orderConfirmSubmit');
    if (ordersubmit !== null) {
        ordersubmit.click();
        isEnd = 1;
    }
}