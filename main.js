//

btn_element = document.querySelector(".bitcoin-btn-core").getBoundingClientRect();

var a;
var b;
var c;
var d;

const click = (x, y) => {
    const ev = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true,
      'screenX': x,
      'screenY': y
    });
    const el = document.elementFromPoint(x, y);
    el.dispatchEvent(ev);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while(true){
    await sleep(1);
    a = parseInt(document.querySelectorAll(".css-w39bvu")[0].innerHTML)
    b = parseInt(document.querySelectorAll(".css-w39bvu")[1].innerHTML)
    c = parseInt(document.querySelectorAll(".css-w39bvu")[2].innerHTML)
    d = parseInt(document.querySelectorAll(".css-w39bvu")[3].innerHTML)

    if (a<=0) {
        if (b<=0) {
            if (c<=0) {
                if (0<d<=9) {
                    click(btn_element.x, btn_element.y);
                }
            }
        }
    }
}
