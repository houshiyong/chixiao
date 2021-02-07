export default function () {
  var deviceWidth = document.documentElement.clientWidth

  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'

  window.onresize = function () {
    var deviceWidthNew = document.documentElement.clientWidth
    document.documentElement.style.fontSize = deviceWidthNew / 7.5 + 'px'
  }

  // 禁止双击放大
  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, false)
  var lastTouchEnd = 0
  document.documentElement.addEventListener('gesturestart', function (event) {
    var now = Date.now()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)
}
