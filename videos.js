
fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1PfLOks6pxvkQAFFp6_gOA&order=date&maxResults=5&key=AIzaSyADqjMbkZz0kgjcuFNzGdY42ve0VSeGfbc")
.then((result)=>{
	return result.json()
}).then((data)=>{
	console.log(data)
	let videos = data.items
	let videoContainer = document.querySelector(".youtube-stuff")
	for(video of videos){
		videoContainer.innerHTML += `
  			<h3>${video.snippet.title}</h3>
  			<img src="${video.snippet.thumbnails.high.url}">
  		`
		console.log(video.snippet.title)
	}
})
