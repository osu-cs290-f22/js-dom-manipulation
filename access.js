console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)

var nav = body.childNodes[3]
console.log("== nav.parentNode:", nav.parentNode)

var photoCardContainer = document.getElementById("photo-card-container")
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = document.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)
for (var i = 0; i < photoCards.length; i++) {
    console.log("  -- photoCards[" + i + "]:", photoCards[i])
}

var images = document.getElementsByTagName("img")
console.log("== images:", images)

var rightNavitem = document.querySelector(".navitem.right")
console.log("== rightNavitem:", rightNavitem)

var allNavitems = document.querySelectorAll("li.navitem")
console.log("== allNavitems:", allNavitems)

var firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML)
console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent)

console.log("== images[0].src:", images[0].src)
images[0].src = "http://placekitten.com/480/480"
console.log("== images[0].src:", images[0].src)

var firstCaption = firstPhotoCard.getElementsByClassName("caption")[0]
console.log("== firstCaption:", firstCaption)

// var newCaption = "Luke as a kitty"
// var newCaption = "<p>Luke as a kitty</p>"
var newCaption = "<img src=x onerror='alert(\"You were hacked ☠️\")' />"
// firstCaption.innerHTML = newCaption
firstCaption.textContent = newCaption
