/*
    <section class="photo-card">
        <div class="img-container">
          <img class="person-photo-img" src="{{photoUrl}}" />
        </div>
        <div class="caption">
          {{caption}}
        </div>
    </section>
*/
function addPhotoCard(photoUrl, caption) {
    var photoCardSection = document.createElement("section")
    photoCardSection.classList.add("photo-card")
    photoCardSection.classList.add("second-class")
    photoCardSection.classList.add("third-class")
    photoCardSection.classList.remove("second-class")

    var imgContainerDiv = document.createElement("div")
    imgContainerDiv.classList.add("img-container")
    photoCardSection.appendChild(imgContainerDiv)

    var personPhotoImg = document.createElement("img")
    personPhotoImg.classList.add("person-photo-img")
    personPhotoImg.src = photoUrl
    imgContainerDiv.appendChild(personPhotoImg)

    console.log("== photoCardSection:", photoCardSection)

    var photoCardContainer = document.getElementById("photo-card-container")
    photoCardContainer.appendChild(photoCardSection)
}
