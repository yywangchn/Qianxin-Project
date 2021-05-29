let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
let tag3 = document.getElementById("tag3");
let tag4 = document.getElementById("tag4");
let tag5 = document.getElementById("tag5");
let tag6 = document.getElementById("tag6");

let container1 = document.getElementById("gt-tab-container1");
let container2 = document.getElementById("gt-tab-container2");
let container3 = document.getElementById("gt-tab-container3");
let container4 = document.getElementById("gt-tab-container4");
let container5 = document.getElementById("gt-tab-container5");
let container6 = document.getElementById("gt-tab-container6");

tags = [tag1,tag2,tag3,tag4,tag5,tag6];
containers = [container1,container2,container3,container4,container5,container6];
curs = ["cur1","cur2","cur3","cur4","cur5","cur6"];

function changeTag(cur){
	for(let i = 0;i < curs.length;i++){
		for(let j = 0;j<curs.length;j++){
			tags[i].className = "";
			containers[i].style.display = "none";
		}
		if(cur==curs[i]){
			tags[i].className = "gt-current";
			containers[i].style.display = "block";
		}
	}
}