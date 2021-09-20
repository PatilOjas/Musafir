function imageFetcher(i){
	var url = "https://source.unsplash.com/1600x900/?nature,water,places,travel";
	// console.log(url)
	console.log(i)
	i++
	if (i<25){
		document.getElementById('imageContainer')
        ocument.getElementById('body').appendChild(img);
		imageFetcher(i)	
	}
	return
}
imageFetcher(0)
// var img = new Image();
// img.src = 'https://source.unsplash.com/1600x900/?nature,water,places,travel';
// document.getElementById('imageContainer').appendChild(img);