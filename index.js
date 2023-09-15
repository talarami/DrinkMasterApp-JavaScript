  
  function displayStartPage(){
    document.getElementById("headerQuestion").innerHTML = "Which drinks would you like to make?"
    document.getElementById("headerContainer").innerHTML = []
    
    let container = document.getElementById("bodyContainer");
    container.innerHTML ="Select one from given options: ";

    let selectList = document.createElement("select");
    selectList.id = "alcoholSelect";

    let alcoholicOption = document.createElement("option");
    alcoholicOption.innerHTML = "alcoholic";
    selectList.appendChild(alcoholicOption);

    let nonAlcoholicOption = document.createElement("option");
    nonAlcoholicOption.innerHTML = "non-alcoholic";
    selectList.appendChild(nonAlcoholicOption);
    container.appendChild(selectList);
  }
  
  function addCheckboxes(listOfElements, container) {
    for (let i = 0; i < listOfElements.length; i++) {
        let label = document.createElement("label");
        label.classList.add("control")
        label.classList.add("control--checkbox")
        label.innerHTML = listOfElements[i];

        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = listOfElements[i];

        let div =  document.createElement("div");
        div.classList.add("control__indicator")

        label.appendChild(input);
        label.appendChild(div)
        container.appendChild(label)
    }
  } 

  function addListOfDrinks(listOfElements, container) {
    for (let i=0; i < listOfElements.length; i++) {
      let li = document.createElement("li");
      li.style="--i: " + (i + 1)

      let h3 = document.createElement("h3")    
      h3.innerHTML = listOfElements[i].name

      let h4 = document.createElement("h4")
      h4.innerHTML = "List of ingredients: " + listOfElements[i].ingredients 

      let p = document.createElement("p")
      p.innerHTML = listOfElements[i].recipe

      li.appendChild(h3)
      li.appendChild(h4)
      li.appendChild(p)
      container.appendChild(li)
    }
  }

  function displayIngredientsPage() {
    
    selectedAlcoholicOption = document.getElementById("alcoholSelect") ? 
        document.getElementById("alcoholSelect").value : 
        selectedAlcoholicOption;
    document.getElementById("headerContainer").innerHTML = "You chose " + selectedAlcoholicOption.toLowerCase() + " drinks." ;
    document.getElementById("headerQuestion").innerHTML = "Please choose your ingredients:"

    let body = document.getElementById("body");
    body.classList.add("bodyContainer")
    
    let bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.innerHTML ="";
 
    if(selectedAlcoholicOption.toLowerCase() == "alcoholic") 
    {
      addCheckboxes(alcohols, bodyContainer);
      addCheckboxes(liqueurs, bodyContainer);
    }

    addCheckboxes(juices, bodyContainer);
    addCheckboxes(other, bodyContainer);
  }
 
  function displayResultsPage() {
    
    let listOfAvailableDrinks = []
    listOfAvailableIngredients = [];
    let bodyContainer = document.getElementById("bodyContainer");
    let options = bodyContainer.children;
    for (let i = 0; i < options.length; i++)
    {
      if (options[i].children[0].checked == true)
        listOfAvailableIngredients.push(options[i].children[0].id)
    }
    bodyContainer.innerHTML = "";

    let index = listOfDrinks.length - 1
    do 
    {
      if (listOfDrinks[index].ingredients.every(x => listOfAvailableIngredients.includes(x)))
      { 
        listOfAvailableDrinks.push(listOfDrinks[index])
      }
      index--
    }
    while(index>=0)
    

    if (listOfAvailableIngredients.length == 0) {
      document.getElementById("headerQuestion").innerHTML = "You didn't choose any ingredients"
    }
    else if (listOfAvailableIngredients.length >= 1 && listOfAvailableDrinks.length == 0) {
      document.getElementById("headerContainer").innerHTML = "You chose the following ingredients: " + listOfAvailableIngredients; 
      document.getElementById("headerQuestion").innerHTML = "No drinks matching your ingredients"
    } else {
      document.getElementById("headerContainer").innerHTML = "You chose the following ingredients: " + listOfAvailableIngredients;
      document.getElementById("headerQuestion").innerHTML = "List of drinks: "
    }
    
    

    let ol = document.createElement("ol")
    //ol.setAttribute("role", "list")
    ol.role = "list"
    ol.style = "--length: " + listOfAvailableDrinks.length
    addListOfDrinks(listOfAvailableDrinks, ol);

    bodyContainer.appendChild(ol)

  }

  function goBack(){
    switch(currentPage)
    {
      case Pages.StartPage:
        currentPage = Pages.StartPage;
        break;
      case Pages.IngredientsPage:
        displayStartPage();
        currentPage = Pages.StartPage;
        break;
      case Pages.ResultsPage:
        displayIngredientsPage();
        currentPage = Pages.IngredientsPage;
        break;
      default:
        displayStartPage();
        currentPage = Pages.StartPage;
        break;
    }   
  }

  function proceed(){
    switch(currentPage)
    {
      case Pages.StartPage:
        displayIngredientsPage();
        currentPage = Pages.IngredientsPage;
        break;
      case Pages.IngredientsPage:
        displayResultsPage();
        currentPage = Pages.ResultsPage;
        break;
      case Pages.ResultsPage:
        currentPage = Pages.ResultsPage;
        break;
      default:
        displayStartPage();
        currentPage = Pages.StartPage;
        break;
    }   
  }
  displayStartPage();