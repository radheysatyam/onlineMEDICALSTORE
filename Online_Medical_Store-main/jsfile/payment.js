
var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

console.log(cartdata)

var cartvalue = cartdata.reduce(function (acc, item) {
    return acc + item.price
}, 0)
console.log(cartvalue)
let cartvalue1 = cartvalue.toFixed(2)
var strikedtotal = cartdata.reduce(function (acc, item) {
    return acc + item.strikeOffPrice
}, 0)
var newstrik = strikedtotal.toFixed(2)

var save = newstrik - cartvalue1

document.querySelector("#itemrealPrice").innerText = cartvalue1

var newtotal1 = Number(cartvalue1 + 10)
document.querySelector("#totalSavings").innerText = "Total Savings of " + save.toFixed(2) + " on this order";
document.querySelector("#totalprice").innerText = 10 + Number(newtotal1.toFixed(2));




document.querySelector("#submit").addEventListener("click", submitFun);
function submitFun() {
    if (
        document.querySelector("#cardNumber").value.length == 16 &&
        document.querySelector("#cvv").value.length == 3
    ) {

        console.log("someone clicked");
        document.querySelector("#cardbox").innerHTML = ""
        document.querySelector("#otpwala").style.display = "block"

    } else {
        document.querySelector(".popupMsg").innerHTML = "Enter valid details";
        document.querySelector("#submit").style.background = "#959595";
    }
}
document.querySelector("#cardNumber").addEventListener("mouseenter", paybuttoncolor);

function paybuttoncolor() {
    document.querySelector("#submit").style.background = "#10847e";
}




document.querySelector("#crdit").addEventListener("click", function () {
    document.querySelector("#cardbox").style.display = "block"
});

document.querySelector("#button1020").addEventListener('click', function () {
    window.location = "sucess.html"
})

