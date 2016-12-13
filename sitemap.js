function buildMap(idName) {
    var id = document.getElementById(idName);
    var sitemap = document.createElement("ul");
    sitemap.id = "sitemap";
    
    id.appendChild(sitemap);
    
    //list items
    addListItem("Home", "homeList", "https://perryma.tk/arowe01", "sitemap");
    addListItem("Biography", "bioList", "https://perryma.tk/arowe01/bio.html", "sitemap");
    addListItem("Class Projects","classProjects", null, "sitemap");
    
    //makes list under "Class Projects"
    var cPList = document.createElement("ul");
    var classProjects = document.getElementById("classProjects");
    cPList.id = "classProjectsList";
    classProjects.appendChild(cPList);
    
    //list items under "Class Projects"
    addListItem("Breakout", "breakoutList", "https://perryma.tk/arowe01/breakout.html", "classProjectsList");
    addListItem("Gallery", "galleryList", "https://perryma.tk/arowe01/popup.html", "classProjectsList");
    addListItem("Javascript Color", "javaColorList", "https://perryma.tk/arowe01/colors.html", "classProjectsList");
    addListItem("To Do List", "toDoListList", "https://perryma.tk/arowe01/todolist.html", "classProjectsList");
    addListItem("Chalkboard", "chalkboardList", "https://perryma.tk/arowe01/chalkboard.html", "classProjectsList");
    addListItem("Tic-Tac-Toe", "ticTacToeList", "https://perryma.tk/arowe01/tictactoe.html", "classProjectsList");
    addListItem("Multiplication", "multiList", "https://perryma.tk/arowe01/multiplication.html", "classProjectsList");
    addListItem("More Multiplication", "multi2List", "https://perryma.tk/arowe01/multiplication2.html", "classProjectsList");
    addListItem("HTML Test", "htmlTestList", "https://perryma.tk/arowe01/htmltest.html", "classProjectsList");
    addListItem("Cone Volume", "coneVolList", "https://perryma.tk/arowe01/cone-volume.html", "classProjectsList");
    addListItem("Calendar", "calendarList", "https://perryma.tk/arowe01/calendar.html", "classProjectsList");
    
    
    
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


