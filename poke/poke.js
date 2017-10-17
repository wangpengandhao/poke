$(function(){
	let color=['c','d','h','s'];
	let poke=[];
	let flag={};
	while(poke.length<52){
		let hua=color[Math.floor(Math.random()*color.length)];
		let num=Math.floor(Math.random()*13+1);
		if(!flag[`${hua}_${num}`]){
			poke.push({hua,num});
			flag[`${hua}_${num}`]=true;
		}
	}
	let index=0;
	for(let i=0;i<7;i++){
		for(let j=0;j<=i;j++){
			let left=300-50*i+100*j,
				top=50*i;
			$('<div>').addClass('poke')
			.css('background-image',`url(img/${poke[index].num}${poke[index].hua}.jpg)`)
			.appendTo('.zhuozi').delay(index*10)
			.animate({left,top,opacity:1});
			index++;
		}
	}
	for(;index<poke.length;index++){
		$('<div>').addClass('poke')
			.css('background-image',`url(img/${poke[index].num}${poke[index].hua}.jpg)`)
			.appendTo('.zhuozi').delay(index*10)
			.animate({left:0,top:460,opacity:1});
	}

})
