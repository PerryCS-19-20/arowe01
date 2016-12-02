function buildMap(idName) {
    var id = document.getElementById(idName);
    var sitemap = document.createElement("ul");
    sitemap.id = "sitemap";
    
    id.appendChild(sitemap);
    
    //list items
    addListItem("Home", "home", "https://perryma.tk/arowe01", "sitemap");
    addListItem("Biography", "bio", "https://perryma.tk/arowe01/bio.html", "sitemap");
    addListItem("Class Projects", "classProjects", null, "sitemap");
    
    //makes list under "Class Projects"
    var cPList = document.createElement("ul");
    var classProjects = document.getElementById("classProjects");
    cPList.id = "classProjectsList";
    classProjects.appendChild(cPList);
    
    //list items under "Class Projects"
    addListItem("Breakout", "breakout", "https://perryma.tk/arowe01/breakout.html", "classProjectsList");
    addListItem("Gallery", "gallery", "https://perryma.tk/arowe01/popup.html", "classProjectsList");
    addListItem("Javascript Color", "color", "https://perryma.tk/arowe01/colors.html", "classProjectsList");
    addListItem("To Do List", "toDo", "https://perryma.tk/arowe01/todolist.html", "classProjectsList");
    addListItem("Chalkboard", "chalk", "https://perryma.tk/arowe01/chalkboard.html", "classProjectsList");
    addListItem("Tic-Tac-Toe", "tictactoe", "https://perryma.tk/arowe01/tictactoe.html", "classProjectsList");
    addListItem("Multiplication", "multi", "https://perryma.tk/arowe01/multiplication.html", "classProjectsList");
    addListItem("More Multiplication", "multi2", "https://perryma.tk/arowe01/multiplication2.html", "classProjectsList");
    addListItem("HTML Test", "htmlTest", "https://perryma.tk/arowe01/htmltest.html", "classProjectsList");
    addListItem("Cone Volume", "coneVol", "https://perryma.tk/arowe01/cone-volume.html", "classProjectsList");
    
    
    
    
}

function addListItem(itemName, itemId, itemLink, parentId) {
    var item = document.createElement("li");
    var parent = document.getElementById(parentId);
    item.id = itemId;
    parent.appendChild(item);
    
    
    var link = document.createElement("a");
    link.textContent = itemName;
    if (itemLink != null) {
        link.href = itemLink;
    }
    item.appendChild(link);
     
}


