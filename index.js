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

    /*
    const choices = ["alcoholic", "non-alcoholic"];
    choices.forEach(value => {
      const option = document.createElement('option')
      option.innerHTML = value
      selectList.appendChild(option)
    })
    */
  }

  function addCheckboxes(listOfElements, container) {
    for (var i = 0; i < listOfElements.length; i++) {
          var listItem = document.createElement("li")
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox"
          checkbox.id = listOfElements[i];
          checkbox.checked = listOfIngredients.includes(listOfElements[i]) ? true : false;
          var label = document.createElement("label");
          label.htmlFor = "id";
          label.appendChild(document.createTextNode(listOfElements[i]));
          listItem.appendChild(checkbox);
          listItem.appendChild(label);
          container.appendChild(listItem);
          }
  } 
  
  function displayIngredientsPage() {
    
    selectedAlcoholicOption = document.getElementById("alcoholSelect") ? 
        document.getElementById("alcoholSelect").value : 
        selectedAlcoholicOption;
    document.getElementById("headerContainer").innerHTML = "You chose " + selectedAlcoholicOption.toLowerCase() + " drinks." ;
    document.getElementById("headerQuestion").innerHTML = "Please choose your ingredients:"

    
    let bodyContainer = document.getElementById("bodyContainer");
    let container = document.createElement("ul");
    container.id = "bodyContainer";
    bodyContainer.replaceWith(container);
    if(selectedAlcoholicOption.toLowerCase() == "alcoholic") {
      addCheckboxes(alcohols, container);
      addCheckboxes(liqueurs, container);
    }

    addCheckboxes(juices, container);
    addCheckboxes(other, container);
    bodyContainer.innerHTML = "non alcoholic was chosens"
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