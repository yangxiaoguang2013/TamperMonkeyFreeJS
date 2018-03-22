// ==UserScript==
// @name         大麦支付界面-选银行
// @namespace    https://pay.damai.cn/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pay.damai.cn/paycenter.do*
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
    var paymethods = document.getElementById('paymethods');
    if (paymethods !== null) {
        paymethods.children[0].children[0].children[1].children[0].click();
        paymethods.children[1].children[1].children[1].children[1].children[0].children[0].click();
        var submit2 = document.getElementById('submit2');
        if (submit2 !== null) {
            submit2.click();
            isEnd = 1;
        }
    }
}