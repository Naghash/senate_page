function datatable(){
	var members = data.results[0].members;
	var table = document.getElementById("senate-data");
	var tbody = document.createElement("tbody");
	var header = document.createElement("thead");
	var trtitles = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");		
	var th3 = document.createElement("th");	
	var th4 = document.createElement("th");	
	var th5 = document.createElement("th");
	var th1text = document.createTextNode("Name");	
	var th2text = document.createTextNode("Party");
	var th3text = document.createTextNode("State");
	var th4text = document.createTextNode("Seniority");
	var th5text = document.createTextNode("Votes");
	
	table.appendChild(header);
	table.appendChild(tbody);
	header.appendChild(trtitles);
	trtitles.appendChild(th1);
	trtitles.appendChild(th2);
	trtitles.appendChild(th3);
	trtitles.appendChild(th4);
	trtitles.appendChild(th5);
	th1.appendChild(th1text);
	th2.appendChild(th2text);
	th3.appendChild(th3text);
	th4.appendChild(th4text);
	th5.appendChild(th5text);
	
for(i = 0; i < members.length; i++){
var tr = document.createElement("tr");
	tbody.appendChild(tr);
var tdnames = document.createElement("td");
	tr.appendChild(tdnames);	
	
	
var	a = document.createElement("a")
	
var midname = members[i].middle_name;
if (midname == null){
	a.textContent = members[i].first_name + " " + members[i].last_name;
}
	else {
	a.textContent = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
}

a.href = members[i].url;
tdnames.appendChild(a);
	
var tdparty = document.createElement("td");
	tr.appendChild(tdparty);
var tdstate = document.createElement("td");
	tr.appendChild(tdstate);
var tdseniority = document.createElement("td");
	tr.appendChild(tdseniority);
var tdvotes = document.createElement("td");
	tr.appendChild(tdvotes);
		tdparty.textContent = members[i].party;
	tdstate.textContent = members[i].state;
	tdseniority.textContent = members[i].seniority;
	tdvotes.textContent = members[i].votes_with_party_pct;
}

}
datatable();