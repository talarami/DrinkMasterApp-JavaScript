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
  
  function displayIngredientsPage() {
    
    selectedAlcoholicOption = document.getElementById("alcoholSelect") ? 
        document.getElementById("alcoholSelect").value : 
        selectedAlcoholicOption;
    document.getElementById("headerContainer").innerHTML = "You chose " + selectedAlcoholicOption.toLowerCase() + " drinks." ;
    document.getElementById("headerQuestion").innerHTML = "Please choose your ingredients:"

    let body = document.getElementById("body");
    body.classList.add("container")
    
    let bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.innerHTML ="";
 
    if(selectedAlcoholicOption.toLowerCase() == "alcoholic") {
      addCheckboxes(alcohols, bodyContainer);
      addCheckboxes(liqueurs, bodyContainer);
    }

    addCheckboxes(juices, bodyContainer);
    addCheckboxes(other, bodyContainer);
  }
 
  function displayResultsPage() {
    
    listOfIngredients = [];
    let container = document.getElementById("bodyContainer");
    let options = container.children;
    for (i = 0; i < options.length; i++)
    {
      if (options[i].children[0].checked == true)
        listOfIngredients.push(options[i].children[0].id)
    }
    container.innerHTML = "";
    
    document.getElementById("headerContainer").innerHTML = "You chose the following ingredients: " + listOfIngredients;

    document.getElementById("headerQuestion").innerHTML = "LIST OF DRINKS"
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