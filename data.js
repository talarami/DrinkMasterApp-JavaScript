const Drink = class 
{
    constructor(type, name, ingredients, recipe) 
    {
      this.type = type;
      this.name = name;
      this.ingredients = ingredients;
      this.recipe = recipe;
    }
}

// enumerators
const Pages = {
    StartPage: 0,
    IngredientsPage: 1,
    ResultsPage: 2,
}

const AlcoholIng = {
    Rum: "rum",
    Vodka: "vodka",
    Gin: "gin",
    Prosecco: "prosecco",
    Whiskey: "whiskey",
    Tequila: "tequila",
    Limoncello: "limoncello"
}

const LiqueurIng = {
    BlueCuracao: "blue curacao",
    Grenadine: "grenadine"
}
const JuiceIng = {
    OrangeJuice: "orange juice",
    AppleJuice: "apple juice",
    PineappleJuice: "pineapple juice",
    GrapefruitJuice: "grapefruit juice",
    LemonJuice: "lemon juice",
    CranberryJuice: "cranberry juice",
    Cola: "cola",
    Sprite: "sprite"
}
const OtherIng = {
    SodaWater: "soda water", 
    Tonic: "tonic",
    BrownSugar: "brown sugar",
    Mint: "mint",
    Honey: "honey",
    Lime: "lime",
    Lemon: "lemon"
}
  var currentPage = Pages.StartPage;
  var selectedAlcoholicOption = false;
  var listOfIngredients = [];

let cubaLibre = new Drink("alcoholic", "Cuba Libre", [AlcoholIng.Rum, JuiceIng.Cola, OtherIng.Lime], "Fill a highball glass with ice and add the rum (2 ounces). Squeeze in the juice from 1/4 of a lime and drop in the spent peel. Top with the cola, then give a brief and gentle stir. Garnish with a lime wheel.")

let mojito = new Drink("alcoholic", "Mojito", [AlcoholIng.Rum, OtherIng.SodaWater, OtherIng.BrownSugar, OtherIng.Mint], "Place mint leaves, lime slices, and sugar (2 tsp) in the bottom of a glass and muddle with a spoon until mint is crushed. Fill the glass with ice cubes. Pour rum (2 ounces) then top with soda over the ice; stir.")

let tomCollins = new Drink("alcoholic", "Tom Collins", [AlcoholIng.Gin, JuiceIng.LemonJuice, OtherIng.SodaWater], "Build the drink over plenty of ice in a glass (2 ounces of gin, 1 ounces of lemon juice, top with soda water), stir gently and garnish with a slice of lemon.")

let capeCod = new Drink("alcoholic", "Cape Cod", "vodka, cranberry juice, lemon", "In a highball glass with ice cubes, pour the vodka (2 ounces) and cranberry juice (3 ounces). Garnish with slice of lemon.")

let ginTonic = new Drink("alcoholic", "Gin Tonic", "gin, tonic, lemon", "Fill a glass with ice and add the gin(2 ounces) and tonic water(4 ounces). Stir gently to combine. Garnish with a silce of lemon.")

let sexOnTheBeach = new Drink("alcoholic", "Sex on the beach", "vodka, orange juice, cranberry juice, tonic", "Fill a glass with ice. Pour vodka (2 ounces) and tonic (2 ounces) over top of the ice. Add cranberry juice (2 ounces), followed by orange juice (2 ounces). For Garnish: Fresh fruit is always a win.")

let hotToddy = new Drink("alcoholic", "Hot Toddy", "whiskey, honey, lemon", "Squeeze the lemon wedge into a mug (1/4 lemon) and leave it in the bottom. Add honey (1 tbsp), whiskey (2 ounces), and top with hot water.")

let whiskeySour = new Drink("alcoholic", "Whiskey Sour", "whiskey, honey, lemon juice", "Use 2 ounces of whiskey, 1 ounce of honey and 1 ounce of freshly squeezed lemon juice. Shake all ingredients with ice until chilled, strain, and serve straight up.")

let blinker = new Drink("alcoholic", "Blinker", "whiskey, grapefruit juice, cranberry juice", "Use 2 ounces of whiskey, 1/2 ounce of grapefruit juice and 1/2 ounce of cranberry juice. Shake all ingredients together in a shaker with ice. Shake, then strain into a chilled cocktail glass.")

let hugo = new Drink("alcoholic", "Hugo", "prosecco, soda water, mint, lime", "Add the mint leaves, lime wedge and plenty of ice to a glass. Add soda water (2 ounces) then top up the rest of the glass with a generous serving of prosecco.")

let limoncelloSpritz = new Drink("alcoholic", "Limoncello Spritz", "prosecco, limoncello, soda water", "Add prosecco (2 ounces), limoncello (2 ounces) and top with soda water")



const alcohols = [AlcoholIng.Vodka, AlcoholIng.Gin, AlcoholIng.Rum, AlcoholIng.Prosecco, AlcoholIng.Whiskey, AlcoholIng.Tequila, AlcoholIng.Limoncello]
const liqueurs = [LiqueurIng.BlueCuracao, LiqueurIng.Grenadine]
const juices = [JuiceIng.OrangeJuice, JuiceIng.AppleJuice, JuiceIng.PineappleJuice, JuiceIng.GrapefruitJuice, JuiceIng.LemonJuice, JuiceIng.CranberryJuice, JuiceIng.Cola, JuiceIng.Sprite]  
const other = [OtherIng.SodaWater, OtherIng.Tonic, OtherIng.BrownSugar, OtherIng.Mint, OtherIng.Honey, OtherIng.Lime, OtherIng.Lemon]

let listOfDrinks = []

listOfDrinks.push(cubaLibre)
listOfDrinks.push(mojito)
listOfDrinks.push(tomCollins)