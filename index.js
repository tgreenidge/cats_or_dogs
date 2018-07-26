function toggleVoteContainer(){
  //find the vote container on web page
  var voteContainer = document.getElementById("vote-container");

  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;

  //convert string to integer
  likes = parseInt(likes);

  //increase likes value by 1
  likes += 1;

  //change value of likes on page
  element.innerText = likes;

  //gives an array of all the elements wirh the class name "score"
  var scores = document.getElementsByClassName("score");

  //get the first element of that scores array
  var score = scores[0];

  score.style.color = "orange";
}

//array of links to dog images
var dogImages = ["https://www.mensjournal.com/wp-content/uploads/gettyimages-583596559-e274095b-2e49-481a-b1d1-de6bfee9e588.jpg","https://i.kinja-img.com/gawker-media/image/upload/s--TlvVx0U5--/c_scale,f_auto,fl_progressive,q_80,w_800/zqejgiajqvhl8wwdplgs.jpg", "https://www.hairphysician.com/wp-content/uploads/sites/77/2018/01/dog-hair-issues-houston-texas.jpg"];

//array of links to cat images
var catImages = ["https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg","http://jewel1067.com/wp-content/uploads/cute-kittens.jpg"];

function changeImage(element) {
  var animals = [];

  if(element.id === "cats-carousel") {
    animals = catImages;
  } else {
    animals = dogImages;
  }

  var carousel = document.getElementById(element.id);

  //get img
  var image = carousel.getElementsByTagName('img')[0];

  //get img url on page
  var imageUrl = image.getAttribute('src');

  //get index of image on page in animals array
  var imageIndex = animals.indexOf(imageUrl);

  // add 1 to the index; reset to 0 if last element in animals
  if(imageIndex === animals.length - 1){
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }

  //reset url to the new url using the new index
  imageUrl = animals[imageIndex];

  //change the src for the img element on the web page
  image.src = imageUrl;

}
