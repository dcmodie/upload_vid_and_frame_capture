
(function localFileVideoPlayer() {

	function captureFrame(){
    	var video = document.getElementById('video')
      console.log ("video")
      console.log (video)
      console.log ("width")
      console.log (video.videoWidth)
      console.log ("height")
      console.log (video.videoHeight)
      var $canvas = $('<canvas></canvas>');
      $canvas.css("width", video.videoWidth)
      var $canvasContainer = $('#canvas-container');
      $canvasContainer.empty();
      $canvasContainer.append($canvas);
//			$canvas[0].getContext('2d').drawImage(video, 0, 0,video.videoWidth, video.videoHeight);
			$canvas[0].getContext('2d').drawImage(video, 0, 0,video.videoWidth, video.videoHeight,0,0,video.videoWidth, video.videoHeight);
  
  
  
  }
	$("#captureButton").on('click', captureFrame);

  //upload video data to browser
	function uploadVideoFile (event) {
      function dataUploaded(){
        console.log ('data uploaded')
        console.log (fr.result)
      }
      var file = this.files[0]
      var fr = new FileReader();
      fr.onloadend = dataUploaded;
      //fr.readAsText(file);
      fr.readAsDataURL(file);
  }
  
  //play vid when changed 
  function playSelectedFile (event) {
      var URL = window.URL || window.webkitURL
      var displayMessage = function (message, isError) {
        var element = document.querySelector('#message')
        element.innerHTML = message
        element.className = isError ? 'error' : 'info'
      }

      var file = this.files[0]
      var type = file.type
      var videoNode = document.querySelector('video')
      var canPlay = videoNode.canPlayType(type)
      if (canPlay === '') canPlay = 'no'
      var message = 'Can play type "' + type + '": ' + canPlay
      var isError = canPlay === 'no'
      //displayMessage(message, isError)

      if (isError) {
        return
      }
      var fileURL = URL.createObjectURL(file)
      videoNode.src = fileURL
  
  }  
  
  // add play or upload event listenter here
  var $inputNode = $('.video-input')
  $inputNode[0].addEventListener('change', playSelectedFile, false)


})();












