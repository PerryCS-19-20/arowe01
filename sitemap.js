function buildMap(idName) {
    var id = document.getElementById(idName);
    var sitemap = document.createElement("ul");
    sitemap.id = sitemap;
    
    id.appendChild(sitemap);
    
    //list items
    addListItem("Home", "home", "https://perryma.tk/arowe01", sitemap);
    addListItem("Biography", "bio", "https://perryma.tk/arowe01/bio.html", sitemap);
    addListItem("Class Projects", "classProjects", null, sitemap);
    
    //list items under "Class Projects"
    addListItem("Breakout", "breakout", "https://perryma.tk/arowe01/breakout.html", classProjects);
    addListItem("Gallery", "gallery", "https://perryma.tk/arowe01/popup.html", classProjects);
    addListItem("Javascript Color", "color", "https://perryma.tk/arowe01/colors.html", classProjects);
    addListItem("To Do List", "toDo", "https://perryma.tk/arowe01/todolist.html", classProjects);
    addListItem("Chalkboard", "chalk", "https://perryma.tk/arowe01/chalkboard.html", classProjects);
    addListItem("Tic-Tac-Toe", "tictactoe", "https://perryma.tk/arowe01/tictactoe.html", classProjects);
    addListItem("Multiplication", "multi", "https://perryma.tk/arowe01/multiplication.html", classProjects);
    addListItem("More Multiplication", "multi2", "https://perryma.tk/arowe01/multiplication2.html", classProjects);
    addListItem("HTML Test", "htmlTest", "https://perryma.tk/arowe01/htmltest.html", classProjects);
    
    
}

function addListItem(itemName, itemId, itemLink, parentId) {
    var item = document.createElement("li");
    var parent = document.getElementById(parentId);
    item.id = itemId;
    parent.appendChild(item);
    
    if (itemLink != null) {
    var link = document.createElement("a");
    link.textContent = itemName;
    link.href = itemLink;
    item.appendChild(link);
    } 
}


