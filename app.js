$(document).ready(function () {
	fetch('./listing-data.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			list=data.offerList;
			list.map((item) => {
				renderLists(item);
			});
		})
		.catch( error => {
			console.log('Error:', error);
		})
	
	function renderLists(item) {
		$('.list-wrapper').append('<div class="list">'+
		'<div class="img-wrapper"><img src='+item.ImagePath+' /></div>'+
		'<div class="description-wrapper">'+
			'<div class="product-desc">'+item.ProductDesc+'</div>'+
			'<div class="firm-name">'+item.FirmName+
			(item.popoverContent ? 
				'<i class="fa fa-question-circle-o"></i>'+
				'<div class="popover">'+item.popoverContent.map((popItem)=>(
					'<div class="title">'+popItem.Title+'</div>'+
					'<div>'+popItem.Description+'</div>'
					))+'</div>' : '')+
			'</div>'+	
		'</div>'+
		'<div class="price-wrapper">'+
		(item.QuotaInfo.HasDiscount ? '<div class="old-price">Peşin <span>'+item.Cash.toLocaleString('tr-TR')+' TL</span></div>' :'')+
		'<div class="current-price">'+(item.QuotaInfo.HasDiscount ? item.QuotaInfo.PremiumWithDiscount.toLocaleString('tr-TR') : item.Cash.toLocaleString('tr-TR'))+' TL</div>'+
		'<div class="buy-wrapper">'+(item.SaleClosed ? '<button class="inline">TELEFONDA SATIN AL <a href="tel:444 24 00">444 24 00</a></button>' : '<button>SATIN AL</button>')+'</div>'+
		'</div></div>'
		)
	}
});