var images = [{"title":"1","url":"img/1.jpg"},
			{"title":"2","url":"img/2.jpg"},
			{"title":"3","url":"img/3.jpg"},
			{"title":"4","url":"img/4.jpg"},
			{"title":"5","url":"img/5.jpg"},
			{"title":"6","url":"img/6.jpg"},
			{"title":"7","url":"img/7.jpg"},
			{"title":"8","url":"img/8.jpg"},
			{"title":"9","url":"img/9.jpg"},
			{"title":"10","url":"img/10.jpg"},
			{"title":"11","url":"img/11.jpg"}];

var form = document.getElementsByClassName('form')
var button = form[0].getElementsByTagName('button');
button[0].onclick = addImage;
var data = document.getElementsByTagName('input');
function addImage() {
	images[images.length] = {"title":"","url":""};
	images[images.length - 1].title = data[0].value;
	images[images.length - 1].url = data[1].value;
	data[0].value = "";
	data[1].value = "";
	addPreview();
	preClick[preClick.length -1].click();
}

var slide = document.getElementsByClassName('slide');
button[1].onclick = removeImage;
function removeImage() {
	images.splice(+slide[0].dataset.index, 1);
	addPreview();
	preClick[+slide[0].dataset.index - 1].click();
}

var preview = document.getElementsByClassName('images');
function addPreview() {
	if(images.length>0){
		preview[0].innerHTML = "";
		var fragment, currentDiv;
		fragment = document.createDocumentFragment();
		images.forEach(function (argument, index) {
			currentDiv = document.createElement('div');
			currentDiv.setAttribute("class", "preview");
			currentDiv.setAttribute("data-index", index);
			if(argument.url){
				var bg = 'url(' + argument.url + ') center center no-repeat';
				currentDiv.style.background = bg;
				currentDiv.style.backgroundSize = "cover";
			}
			fragment.appendChild(currentDiv);			
		});
		preview[0].appendChild(fragment);
		preview[0].style.width = (images.length - 1)*98 + 83 + "px";
	}
	findSelectImage();
}
addPreview();

preview[0].parentNode.addEventListener('wheel',	scrollPreview);
function scrollPreview(e, delta) {
	    if(e.deltaY == 100) {
	        this.scrollLeft -= 15;
	    }
	    else {
	        this.scrollLeft += 15;
	    }
	}

var preClick;
function findSelectImage() {
	preClick = document.getElementsByClassName('preview');
	for(var i=0; i<preClick.length; i++){
		preClick[i].onclick = selectImage;
	}
}
findSelectImage();

var title = document.getElementsByTagName('h2');
if(images.length>0){
	preClick[0].click();
}
function selectImage() {
	var bg = 'url(' + images[this.dataset.index].url + ') center center no-repeat';
	slide[0].style.background = bg;
	slide[0].setAttribute("data-index", this.dataset.index);
	title[0].innerText = images[this.dataset.index].title;
	this.className = "preview selected";
	for(var i=0; i<preClick.length; i++){
		if(preClick[i] != this){
			preClick[i].className = "preview notselected";
		}else{
			continue;
		}
	}

	this.parentNode.parentNode.scrollLeft = +this.dataset.index * 20;
}

var leftToggle = document.getElementsByClassName('left-toggle');
leftToggle[0].onclick = prevImage;
function prevImage() {
	if(+slide[0].dataset.index > 0){
		preClick[+slide[0].dataset.index - 1].click();
	}
}

var rightToggle = document.getElementsByClassName('right-toggle');
rightToggle[0].onclick = nextImage;
function nextImage() {
	if(+slide[0].dataset.index < images.length - 1){
		preClick[+slide[0].dataset.index + 1].click();
	}
}