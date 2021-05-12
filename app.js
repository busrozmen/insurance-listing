$(document).ready(function () {
	fetch('./listing-data.json')
	.then((response) => {
			return response.json();
	})
	.then((data) => {
		data=data.offerList;
		data.map((list) => {
			renderLists(list);
		});
	});

    function renderLists(list) {
				$('.list-wrapper').append('<div class="list">'+
				'<div class="img-wrapper"><img src='+list.ImagePath+' /></div>'+
				'<div class="description-wrapper">'+
					'<div class="product-desc">'+list.ProductDesc+'</div>'+
					'<div class="firm-name">'+list.FirmName+
					(list.popoverContent ? 
						'<i class="fa fa-question-circle-o"></i>'+
						'<div class="popover">'+list.popoverContent.map((item)=>(
							'<div class="title">'+item.Title+'</div>'+
							'<div>'+item.Description+'</div>'
							))+'</div>' : '')+
					'</div>'+	
				'</div>'+
				'<div class="price-wrapper">'+
				(list.QuotaInfo.HasDiscount ? '<div class="old-price">Peşin <span>'+list.Cash.toLocaleString('tr-TR')+' TL</span></div>' :'')+
				'<div class="current-price">'+(list.QuotaInfo.HasDiscount ? list.QuotaInfo.PremiumWithDiscount.toLocaleString('tr-TR') : list.Cash.toLocaleString('tr-TR'))+' TL</div>'+
				'<div class="buy-wrapper">'+(list.SaleClosed ? '<button class="inline">TELEFONDA SATIN AL <a href="tel:444 24 00">444 24 00</a></button>' : '<button>SATIN AL</button>')+'</div>'+
				'</div></div>'
				)
    }
});