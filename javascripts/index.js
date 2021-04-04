var shares = 183000000;
var invested = 20;
var holdings = $("#holdings")[0];
var value = $("#value")[0];
var initial = $("#initial")[0];
var gain = $("#gain")[0];

holdings.innerText = shares.toLocaleString();
initial.innerText = "$" + invested;

checkPrice();

function checkPrice() {
	$.ajax({
		url: "https://api.dex.guru/v1/tokens/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3-bsc/",
		dataType: "json",
		timeout: 30000,
		success: function(data) {
			$("#price").html("$" + data.priceUSD.toFixed(10));
			value.innerText = "$" + (data.priceUSD * shares).toFixed(2);
			gain.innerText = (((data.priceUSD * shares) / invested) * 100).toFixed(2) + "%";
			checkPrice();
		},
		error: function() {
			checkPrice();
		}
	});
}