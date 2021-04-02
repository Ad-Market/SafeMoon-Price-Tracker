checkPrice();

function checkPrice() {
	$.ajax({
		url: "https://api.dex.guru/v1/tokens/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3-bsc/",
		dataType: "json",
		timeout: 30000,
		success: function(data) {
			$("#price").html("$" + data.priceUSD.toFixed(10));
			checkPrice();
		},
		error: function() {
			checkPrice();
		}
	});
}