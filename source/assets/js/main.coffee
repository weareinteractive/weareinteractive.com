#= require jquery/jquery
#= require ajaxchimp/jquery.ajaxchimp
#= require sass-bootstrap/js/transition
#= require sass-bootstrap/js/scrollspy
#= require sass-bootstrap/js/collapse
#= require sass-bootstrap/js/modal

$(document).ready ->

  theme = Math.floor(Math.random() * 4)
  themeColors = ['#ae2c3c', '#569dd4', '#95a13b', '#e4980b']

  # --- theme  ---
  $('body').addClass('theme-' + (theme + 1))

  # --- google maps ---
  latlng = new google.maps.LatLng(48.12882, 11.584729)
  myOptions =
    zoom: 16
    center: latlng
    scrollwheel: false
    mapTypeId: google.maps.MapTypeId.ROADMAP

  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions)
  styles = [stylers: [hue: themeColors[theme]]]
  map.setOptions styles: styles
  image = new google.maps.MarkerImage("/assets/img/gmaps/image.png", new google.maps.Size(38, 48), new google.maps.Point(0, 0), new google.maps.Point(19, 48))
  shadow = new google.maps.MarkerImage("/assets/img/gmaps/shadow.png", new google.maps.Size(66, 48), new google.maps.Point(0, 0), new google.maps.Point(19, 48))
  shape =
    coord: [23, 0, 26, 1, 28, 2, 29, 3, 30, 4, 31, 5, 32, 6, 33, 7, 34, 8, 34, 9, 35, 10, 35, 11, 36, 12, 36, 13, 36, 14, 36, 15, 37, 16, 37, 17, 37, 18, 36, 19, 36, 20, 36, 21, 36, 22, 35, 23, 35, 24, 34, 25, 34, 26, 33, 27, 33, 28, 32, 29, 31, 30, 31, 31, 30, 32, 29, 33, 29, 34, 28, 35, 27, 36, 27, 37, 26, 38, 25, 39, 24, 40, 24, 41, 23, 42, 22, 43, 21, 44, 20, 45, 20, 46, 19, 47, 18, 47, 17, 46, 16, 45, 15, 44, 14, 43, 14, 42, 13, 41, 12, 40, 11, 39, 11, 38, 10, 37, 9, 36, 9, 35, 8, 34, 7, 33, 7, 32, 6, 31, 5, 30, 5, 29, 4, 28, 4, 27, 3, 26, 3, 25, 2, 24, 2, 23, 1, 22, 1, 21, 1, 20, 1, 19, 0, 18, 0, 17, 0, 16, 1, 15, 1, 14, 1, 13, 1, 12, 1, 11, 2, 10, 2, 9, 3, 8, 4, 7, 5, 6, 5, 5, 6, 4, 8, 3, 9, 2, 11, 1, 14, 0, 23, 0]
    type: "poly"

  marker = new google.maps.Marker(
    position: latlng
    icon: image
    shadow: shadow
    shape: shape
    map: map
    title: "We Are Interactive"
  )

  # --- scrollspy  ---

  $('body').scrollspy({ target: '#header', offset: 60 })
  $("#header nav a[href^='#']").on('click', (e) ->
    e.preventDefault()
    $('html, body').animate({scrollTop: $(@hash).offset().top - 55}, 300)
  )