var docListData = [
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" },
    { name: "Article Name", info: "Authors, name of edition, publishing year,(moreinfo?)" }
];
    
var linkListData = [
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" }
];

var scienceListData = [
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" },
    { name: "Article Name", info: "www address (moreinfo?) second line of text" }
    ];
    
var list = document.getElementsByClassName('unstyled');
var addAll = [];
var removeAll = [];
var countChecked = 0;

/*For function addRow*/
var masCheckedList = [];
var tr = document.getElementsByTagName('tr');
var nextTR;

/*view list docListData*/
var doc = list[0].getElementsByTagName('li');
var p = doc[0].getElementsByTagName('p');
p = p[0];
var span = doc[0].getElementsByTagName('span');
span = span[2];
p.textContent = docListData[0].name;
span.textContent = docListData[0].info;

for (var j=1; j<docListData.length;j++){
    var clone = doc[0].cloneNode(true);
    var column = clone.getElementsByClassName('checkbox-icon');
    var dataset1 = column[0].dataset.element = j+1;
    p = clone.getElementsByTagName('p');
    p = p[0];
    span = clone.getElementsByTagName('span');
    span = span[2];
    p.textContent = docListData[j].name;
    span.textContent = docListData[j].info;
    list[0].appendChild(clone);
};

/*view list linkListData*/
var doc = list[1].getElementsByTagName('li');
var p = doc[0].getElementsByTagName('p');
p = p[0];
var span = doc[0].getElementsByTagName('span');
span = span[2];
p.textContent = linkListData[0].name;
span.textContent = linkListData[0].info;

for (var j=1; j<linkListData.length;j++){
    var clone = doc[0].cloneNode(true);
    var column = clone.getElementsByClassName('checkbox-icon');
    var dataset1 = column[0].dataset.element = j+1;
    p = clone.getElementsByTagName('p');
    p = p[0];
    span = clone.getElementsByTagName('span');
    span = span[2];
    p.textContent = linkListData[j].name;
    span.textContent = linkListData[j].info;
    list[1].appendChild(clone);
};

/*view list scienceListData*/
var doc = list[2].getElementsByTagName('li');
var p = doc[0].getElementsByTagName('p');
p = p[0];
var span = doc[0].getElementsByTagName('span');
span = span[2];
p.textContent = scienceListData[0].name;
span.textContent = scienceListData[0].info;

for (var j=1; j<scienceListData.length;j++){
    var clone = doc[0].cloneNode(true);
    var column = clone.getElementsByClassName('checkbox-icon');
    var dataset1 = column[0].dataset.element = j+1;
    p = clone.getElementsByTagName('p');
    p = p[0];
    span = clone.getElementsByTagName('span');
    span = span[2];
    p.textContent = scienceListData[j].name;
    span.textContent = scienceListData[j].info;
    list[2].appendChild(clone);
};

/*find click icon*/
for (var i=0; i<list.length; i++){
    click = list[i].getElementsByClassName('checkbox');

        for (var j=0; j<click.length; j++){
            click[j].onclick = findClick;
        };
};

function findClick() {
                    var checkedElement;
                    var count = 0;
                    var columnNumber;
                    var elementNumber;
                    var listElements;
                    var row = document.getElementsByTagName('tr');

                    if(this.className == "checkbox"){
                        this.className += " checked";
                        checkedElement = this.getElementsByClassName('checkbox-icon');
                        checkedElement[0].dataset.checked = true;
                        columnNumber = checkedElement[0].dataset.column;
                        listElements = list[columnNumber-1].getElementsByClassName('checkbox-icon');
                        count = 0;
                        for(var n=0; n<listElements.length; n++){
                            if(listElements[n].dataset.checked  == "true"){
                                count += 1;
                            }; 
                        };
                        if(count == listElements.length){
                            addAll[columnNumber-1].style.visibility = "hidden";
                            removeAll[columnNumber-1].style.visibility = "visible";
                        }else{
                            addAll[columnNumber-1].style.visibility = "visible";
                            removeAll[columnNumber-1].style.visibility = "hidden";
                        };
                        
                   }else{
                        this.className = "checkbox";
                        checkedElement = this.getElementsByClassName('checkbox-icon');
                        checkedElement[0].dataset.checked = false;
                        columnNumber = checkedElement[0].dataset.column;
                        elementNumber = checkedElement[0].dataset.element;
                        
                        for(var m=0; m<row.length; m++){
                            if((+row[m].dataset.column == +columnNumber) && (+row[m].dataset.element == +elementNumber)){
                                
                                for(var i=0; i<masCheckedList.length; i++){
                                    if(masCheckedList[i] == row[m]){
                                        masCheckedList.splice(i, 1);
                                    };
                                };

                            };
                        };
                        tr[0] = row[0].cloneNode(true);
                        listElements = list[columnNumber-1].getElementsByClassName('checkbox-icon');
                        count = 0;

                        for(var n=0; n<listElements.length; n++){
                            if(listElements[n].dataset.checked == "false"){
                                count += 1;
                            }; 
                        };

                        if(count != listElements.length){
                            addAll[columnNumber-1].style.visibility = "visible";
                            removeAll[columnNumber-1].style.visibility = "hidden";
                        };
                    };
                    countCheckedAll();
                    addRow(checkedElement[0]);
                    createTable();
};

/*Add and remove all*/

function numberColumn(name){
        if(name == docListData){return 0;};
        if(name == linkListData){return 1;};
        if(name == scienceListData){return 2;};
    };

var click; 
function listCheckbox(name) {
    click = list[numberColumn(name)].getElementsByClassName('checkbox');
};

addAll = document.getElementsByClassName('add-all');
removeAll = document.getElementsByClassName('remove-all');


addAll[0].onclick = ad0;
addAll[1].onclick = ad1;
addAll[2].onclick = ad2;
removeAll[0].onclick = rem0;
removeAll[1].onclick = rem1;
removeAll[2].onclick = rem2;

function ad0(){
    add(0, docListData);
};
function ad1(){
    add(1, linkListData);
};
function ad2(){
    add(2, scienceListData);
};
function rem0(){
    remove(0, docListData);
};
function rem1(){
    remove(1, linkListData);
};
function rem2(){
    remove(2, scienceListData);
};

function checkedALL(name){
    var count = 0;
    var column;
    
    for(var i=0; i<list.length; i++){    
        column = list[i].getElementsByClassName('checkbox-icon');
        
        for(var j=0; j<column.length;j++){
                if(column[j].dataset.checked == "true")
                    {count += 1;};
        };
    }; 

    var number;
    if(count == name.length){
        number = numberColumn(name);
        add(number, name);
    }else{
        number = numberColumn(name);
        remove(number, name);
    };
};

checkedALL(docListData);
checkedALL(linkListData);
checkedALL(scienceListData);


function add(number, name){
        addAll[number].style.visibility = "hidden";
        removeAll[number].style.visibility = "visible";
        listCheckbox(name);
        var checkedElement;

        
        for(var j=0; j<name.length;j++){
            checkedElement = click[j].getElementsByClassName('checkbox-icon');
            var column = checkedElement[0].dataset.column;
            var element = checkedElement[0].dataset.element;
            

            for(var i=0; i<masCheckedList.length;i++){
                if((masCheckedList[i].dataset.column == column) && (masCheckedList[i].dataset.element == element)){
                    masCheckedList.splice(i, 1);
                };
            };

            click[j].className += " checked";
            checkedElement = click[j].getElementsByClassName('checkbox-icon');
            checkedElement[0].dataset.checked = true;
            var elem = checkedElement[0];
            countCheckedAll();
            addRow(elem);
        };

        createTable();
};

function remove(number, name){ 
        removeAll[number].style.visibility = "hidden";
        addAll[number].style.visibility = "visible";
        listCheckbox(name);
        var checkedElement;
        var columnNumber;
        var row = document.getElementsByTagName('tr');
       
        for(var j=0; j<name.length; j++){
            checkedElement = click[j].getElementsByClassName('checkbox-icon');
            columnNumber = checkedElement[0].dataset.column;
            
            for(var m=0; m<row.length; m++){
                if(+row[m].dataset.column == +columnNumber){
                    
                    for(var i=0; i<masCheckedList.length; i++){
                        if(masCheckedList[i] == row[m]){
                            masCheckedList.splice(i, 1);
                            i -= 1;
                        };
                    };

                };
            };

            click[j].className = "checkbox";
            checkedElement[0].dataset.checked = false;
            tr[0] = row[0].cloneNode(true);
            var elem = checkedElement[0];
            countCheckedAll();
            addRow(elem);
        };
        createTable();
};


function countCheckedAll(){
    var checkboxAll = document.getElementsByClassName('checkbox-icon');
    countChecked = 0;
    
    for (var i=0; i<checkboxAll.length; i++){
        var testChecked = checkboxAll[i].dataset.checked;
        if(testChecked == "true"){
            countChecked += 1;
        };
    };
    
    countCheckedElements(countChecked);
};

function countCheckedElements(countChecked){
    var h2 = document.getElementsByTagName('h2');
    var  plural = document.getElementsByClassName('plural');
    tr = document.getElementsByTagName('tr');
    if(countChecked == 0){
        h2[3].style.visibility = "hidden";
        tr[0].style.visibility = "hidden";
    }else{
        h2[3].style.visibility = "visible";

        tr[0].style.visibility = "visible";
        var  s = document.getElementsByClassName('count');
        s[0].textContent = countChecked;
        if(countChecked == 1){
            plural[0].style.visibility = "hidden";
        }else{
            plural[0].style.visibility = "visible";
        };
    };
}

/*add item*/
function addRow (elem){
        name1 = elem.dataset.column;
        nextTR = tr[0].cloneNode(true);
        var icon = nextTR.getElementsByClassName('icon');
        var span1 = nextTR.getElementsByClassName('name');
        var span2 = nextTR.getElementsByClassName('info');
        var row = elem.dataset.checked;
        var number = +elem.dataset.element;
        nextTR.dataset.column = name1;
        nextTR.dataset.element = number;
        
    if(row == "true"){
        if(name1 == "1"){
            icon[0].className += " document";
            span1[0].textContent = docListData[number-1].name + ", ";
            span2[0].textContent = docListData[number-1].info;

        };
        if(name1 == "2"){
            icon[0].className += " link";
            span1[0].textContent = linkListData[number-1].name + ", ";
            span2[0].textContent = linkListData[number-1].info;
        };
        if(name1 == "3"){
            icon[0].className += " science";
            span1[0].textContent = scienceListData[number-1].name + ", ";
            span2[0].textContent = scienceListData[number-1].info;
        };
        nextTR.onclick = deleteElement;
        masCheckedList.push(nextTR);
     }else{
         icon[0].className = "icon";
         span1[0].textContent = "";
         span2[0].textContent = "";
     };
    
};

function createTable(){
    var tbody = document.getElementsByTagName('tbody');
    tbody[0].innerHTML = "";
   
    for(var i=0; i<masCheckedList.length; i++){
        tbody[0].appendChild(masCheckedList[i]);
    };

    var row = tbody[0].getElementsByTagName('tr');

    for(var i=0; i<row.length; i++){
        var n = row[i].dataset.column;
        if(n == "1"){
           var x = row[i].getElementsByClassName('icon')
           x[0].className = "icon document";
        };
        if(n == "2"){
           var x = row[i].getElementsByClassName('icon')
           x[0].className = "icon link";
        };
        if(n == "3"){
           var x = row[i].getElementsByClassName('icon')
           x[0].className = "icon science";
        };
    };
    
};

function deleteElement(){

    for(var i=0; i<masCheckedList.length; i++){
        if(masCheckedList[i] == this){
            var column = masCheckedList[i].dataset.column;
            var element = masCheckedList[i].dataset.element;
            var changeClass = document.getElementsByClassName('checkbox checked');
            
            for(var j=0; j<changeClass.length; j++){
                var rewriteChecked = changeClass[j].getElementsByClassName('checkbox-icon');
                if((rewriteChecked[0].dataset.column == column) && (rewriteChecked[0].dataset.element == element)){
                    rewriteChecked[0].dataset.checked = false;
                    changeClass[j].className = "checkbox";
                };
            };
           
            masCheckedList.splice(i, 1);
        };
    };
    countCheckedAll();
    createTable();
    var checked = list[column-1].getElementsByClassName('checkbox-checked');
    var countElement = list[column-1].getElementsByClassName('checkbox-icon');
    if(checked.length < countElement.length){
        removeAll[column-1].style.visibility = "hidden";
        addAll[column-1].style.visibility = "visible";
    };
};