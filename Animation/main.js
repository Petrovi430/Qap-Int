/***** Variables *****/
var clickButton = [], section = [],
	clickMine = [],	messageMine = [], 
	clickCat = [], messageCat = [],	catContainer = [], 
	clickCaption = [], submarine = [], bubbles = [], 
	clickIceberg = [], torpedo = [],
	i, j;

/***** Control *****/
clickButton = document.getElementsByTagName('button');
section = document.getElementsByTagName('section');

function showFirst(){
	section[0].className = "close";
	section[1].className = "close";
	section[2].className = "open";
	section[3].className = "close";
	clickCaption[0].style.cursor = "default";
	location.reload();

}

function showTwo(){
	section[0].className = "close";
	section[1].className = "close";
	section[2].className = "close";
	section[3].className = "open";
	clickCaption[0].style.cursor = "default";
}

function showThree(){
	section[0].className = "open";
	section[1].className = "close";
	section[2].className = "close";
	section[3].className = "close";
	clickCaption[0].style.cursor = "pointer";
}

function showFour(){
	section[0].className = "close";
	section[1].className = "open";
	section[2].className = "close";
	section[3].className = "close";
	clickCaption[0].style.cursor = "default";
}

	clickButton[0].onclick = showFirst;
	clickButton[1].onclick = showTwo;
	clickButton[2].onclick = showThree;
	clickButton[3].onclick = showFour;

/***** Mine *****/
clickMine = document.getElementsByClassName('mine-click');
messageMine = document.getElementsByClassName('message-mine');

function clickOnMine(){
	messageMine[0].style.opacity = "1";
	setTimeout(clearClassMine, 5000);
}

function clearClassMine(){
	messageMine[0].style.opacity = "0"; 
}

clickMine[0].onclick = clickOnMine;

/***** Cat *****/
clickCat = document.getElementsByClassName('cat-message');
messageCat = document.getElementsByClassName('message');
catContainer = document.getElementsByClassName('cat-container');

function clickOnCat(){
	/*if(messageCat[0].className == "message"){
		catContainer[0].className += " stop";
		messageCat[0].className = "message show"; 
	}*/
	catContainer[0].className += " stop";
	messageCat[0].style.opacity = "1";
	setTimeout(clearClassCat, 5000);
} 

function clearClassCat(){
	catContainer[0].className = "cat-container";
	messageCat[0].style.opacity = "0"; 
}

clickCat[0].onclick = clickOnCat;

/***** Submarine *****/
clickCaption = document.getElementsByTagName('h1');
submarine = document.getElementsByClassName('submarine');
bubbles = document.getElementsByClassName('bubbles');

function clickOnCaption(){
	submarine[0].className = "submarine motion";
	bubbles[0].className = "bubbles start";
	setTimeout(clearClassSubmarine, 10000); 
}

function clearClassSubmarine(){
	submarine[0].className = "submarine";
	bubbles[0].className = "bubbles";
}

clickCaption[0].onclick = clickOnCaption;

/***** Sink iceberg *****/
clickIceberg = document.getElementsByClassName('iceberg');
torpedo = document.getElementsByClassName('torpedo');

function clickOnIceberg(){
	for(i = 0; i < torpedo.length; i++){
		torpedo[i].className = "torpedo start-"+(i+1);
	}
	clickIceberg[0].className = "iceberg sink";
	setTimeout(clearClassIceberg, 10000);
}

function clearClassIceberg(){
	for(j = 0; j < torpedo.length; j++){
		torpedo[j].className = "torpedo";
	}
	clickIceberg[0].className = "iceberg";
}

clickIceberg[0].onclick = clickOnIceberg;