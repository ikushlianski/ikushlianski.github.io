// Model
var model = {
  listOfCats: [
    cat1 = {
      name: 'Rex',
      imageSrc: 'https://iheartcats.com/wp-content/uploads/2015/07/cat-179842_640.jpg',
      numClicked: 0
    },
    cat2 = {
      name: 'Cutty',
      imageSrc: 'https://s-media-cache-ak0.pinimg.com/originals/27/e9/0b/27e90b7870d50004bfd80dc827c9f96c.jpg',
      numClicked: 0
    },
    cat3 = {
      name: 'Willy',
      imageSrc: 'https://pbs.twimg.com/media/C-s-uDdXcAA_UoF.jpg',
      numClicked: 0
    }
  ]
};

// Controller
var controller = {
  init: function() {
    var catNameElement = document.getElementById("catName"),
        catImageElement = document.getElementById("catImage"),
        catClicksElement = document.getElementById("numClicked"),
        currentCat = model.listOfCats[0];
    catNameElement.innerHTML = currentCat.name;
    catImageElement.src = currentCat.imageSrc;
    catClicksElement.innerHTML = currentCat.numClicked;

    // Listen to click events on the image
    catImageElement.addEventListener("click", function(){
      var currentCat = controller.getCurrentCat();
      currentCat.numClicked++;
      view.render();
    });


    // Ask the view to print the list of cats
    view.printListOfCats();

    // Listen to click events on li items on cats list
    $("#catlist").children().click(function(){
      let initialCatsList = controller.getListOfCats();
      let orderNumberOfCatClicked = parseInt($(this).attr('id'));
      document.getElementById("catImage").src = initialCatsList[orderNumberOfCatClicked].imageSrc;
      document.getElementById("catName").innerHTML = initialCatsList[orderNumberOfCatClicked].name;
      document.getElementById("numClicked").innerHTML = initialCatsList[orderNumberOfCatClicked].numClicked;
      view.render();
    });

  },
  getListOfCats: function(){
    return model.listOfCats;
  },
  getCurrentCat: function() {
    let currentCatImageSrc = document.getElementById("catImage").src;
    for (var i=0; i<model.listOfCats.length; i++) {
      if (currentCatImageSrc == model.listOfCats[i].imageSrc){
        return model.listOfCats[i];
      }
    }
  }
};

// The View
var view = {
  printListOfCats: function(){
    var allCatsList = controller.getListOfCats();
    var catListElement = document.getElementById("catlist");
    for (var i=0; i<allCatsList.length; i++) {
      let liNode = document.createElement("LI");
      let li = catListElement.appendChild(liNode);
      let t = document.createTextNode(allCatsList[i].name);
      li.appendChild(t);
      li.setAttribute("id", i+"catListItem");
    }
  },
  render: function(){
    // Change number of clicks
    let currentCat = controller.getCurrentCat();
    document.getElementById("numClicked").innerHTML = currentCat.numClicked;
    // Change picture
    document.getElementById("catImage").innerHTML = currentCat.imageSrc;
    // Change curent cat's name displayed
    document.getElementById("catName").innerHTML = currentCat.name;
  }
};
