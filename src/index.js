console.log('%c HI', 'color: firebrick')

function renderAllImages(url) {
    const img = document.createElement("img")
    const div = document.querySelector("div#dog-image-container")
    img.src = url
    div.append(img)
} 


// ********** On Page Load ***********

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((imageArray) => {
        console.log(imageArray);
        imageArray.message.forEach ((imageUrl) => {
            renderAllImages(imageUrl);
        });
    
    })

    
