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
let currentPage = Pages.StartPage;
let selectedAlcoholicOption = false;
let listOfAvailableIngredients = [];

let cubaLibre = new Drink("alcoholic", "Cuba Libre", [AlcoholIng.Rum, JuiceIng.Cola, OtherIng.Lime], "Fill a highball glass with ice and add the rum (2 ounces). Squeeze in the juice from 1/4 of a lime and drop in the spent peel. Top with the cola, then give a brief and gentle stir. Garnish with a lime wheel.")

let mojito = new Drink("alcoholic", "Mojito", [AlcoholIng.Rum, OtherIng.SodaWater, OtherIng.BrownSugar, OtherIng.Mint, OtherIng.Lime], "Place mint leaves, lime slices, and sugar (2 tsp) in the bottom of a glass and muddle with a spoon until mint is crushed. Fill the glass with ice cubes. Pour rum (2 ounces) then top with soda over the ice; stir.")

let tomCollins = new Drink("alcoholic", "Tom Collins", [AlcoholIng.Gin, JuiceIng.LemonJuice, OtherIng.SodaWater], "Build the drink over plenty of ice in a glass (2 ounces of gin, 1 ounces of lemon juice, top with soda water), stir gently and garnish with a slice of lemon.")

let capeCod = new Drink("alcoholic", "Cape Cod", [AlcoholIng.Vodka, JuiceIng.CranberryJuice, OtherIng.Lemon], "In a highball glass with ice cubes, pour the vodka (2 ounces) and cranberry juice (3 ounces). Garnish with slice of lemon.")

let ginTonic = new Drink("alcoholic", "Gin Tonic", [AlcoholIng.Gin, OtherIng.Tonic, OtherIng.Lemon], "Fill a glass with ice and add the gin(2 ounces) and tonic water(4 ounces). Stir gently to combine. Garnish with a silce of lemon.")

let sexOnTheBeach = new Drink("alcoholic", "Sex on the beach", [AlcoholIng.Vodka, JuiceIng.OrangeJuice, JuiceIng.CranberryJuice, OtherIng.Tonic], "Fill a glass with ice. Pour vodka (2 ounces) and tonic (2 ounces) over top of the ice. Add cranberry juice (2 ounces), followed by orange juice (2 ounces). For Garnish: Fresh fruit is always a win.")

let hotToddy = new Drink("alcoholic", "Hot Toddy", [AlcoholIng.Whiskey, OtherIng.Honey, OtherIng.Lemon], "Squeeze the lemon wedge into a mug (1/4 lemon) and leave it in the bottom. Add honey (1 tbsp), whiskey (2 ounces), and top with hot water.")

let whiskeySour = new Drink("alcoholic", "Whiskey Sour", [AlcoholIng.Whiskey, OtherIng.Honey, JuiceIng.LemonJuice], "Use 2 ounces of whiskey, 1 ounce of honey and 1 ounce of freshly squeezed lemon juice. Shake all ingredients with ice until chilled, strain, and serve straight up.")

let blinker = new Drink("alcoholic", "Blinker", [AlcoholIng.Whiskey, JuiceIng.GrapefruitJuice, JuiceIng.CranberryJuice], "Use 2 ounces of whiskey, 1/2 ounce of grapefruit juice and 1/2 ounce of cranberry juice. Shake all ingredients together in a shaker with ice. Shake, then strain into a chilled cocktail glass.")

let hugo = new Drink("alcoholic", "Hugo", [AlcoholIng.Prosecco, OtherIng.SodaWater, OtherIng.Mint, OtherIng.Lime], "Add the mint leaves, lime wedge and plenty of ice to a glass. Add soda water (2 ounces) then top up the rest of the glass with a generous serving of prosecco.")

let limoncelloSpritz = new Drink("alcoholic", "Limoncello Spritz", [AlcoholIng.Prosecco, AlcoholIng.Limoncello, OtherIng.SodaWater], "Add prosecco (2 ounces), limoncello (2 ounces) and top with soda water")

let blueHawaii = new Drink("alcoholic", "Blue Hawaii", [AlcoholIng.Rum, AlcoholIng.Vodka, LiqueurIng.BlueCuracao, JuiceIng.PineappleJuice, JuiceIng.LemonJuice], "Place the rum (1 ounce), vodka (1 ounce), blue curacao (3/4 ounce), pineapple juice (2 ounces) and lemon juice (1/2 ounce) in a cocktail shaker. Add 2 handfuls of ice and shake until cold. Strain the drink into a glass filled with crushed ice.")

let tequilaSunrise = new Drink("alcoholic", "Tequila Sunrise", [AlcoholIng.Tequila, JuiceIng.OrangeJuice, LiqueurIng.Grenadine], "Pour the tequila (2 ounces) into your glass over the ice. Next, add the orange juice (3 ounces) to help the ingredients blend together. Pour in the grenadine (1/2 ounce). Stir very gently to get the sunrise effect, or simply leave the syrup to settle at the bottom of the glass")

let appleProseccoPunch = new Drink("alcoholic", "Apple Prosecco Punch", [JuiceIng.AppleJuice, AlcoholIng.Prosecco, AlcoholIng.Vodka, JuiceIng.LemonJuice, OtherIng.Lemon], "Pour the apple juice (4 ounces), vodka (1 ounce) and lemon juice (1 ounce) into a punch bowl and chill for 1-2 hrs. When you’re ready to serve top glass with prosecco, ice and lemon slices to garnish.")

let easyMargarita = new Drink("alcoholic", "Easy Margarita", [AlcoholIng.Tequila, JuiceIng.Sprite, OtherIng.Lime], "All you need to do is mix two ounces of Tequila with four ounces of sprite, pour into a highball glass with crushed ice, and stir. Then run a lime wedge on the rim of your glass to enjoy the drink.")

let sunriseMocktail = new Drink("nonalcoholic", "Sunrise Mocktail", [JuiceIng.OrangeJuice, OtherIng.SodaWater, JuiceIng.CranberryJuice], "In a champagne glass, or glass of your choice, pour equal amounts orange juice and soda water. Take the cranberry juice and slowly pour it into the glass. Enjoy.")

let virginMojito = new Drink("nonalcoholic", "Virgin Mojito", [OtherIng.Lime, OtherIng.Mint, OtherIng.Honey, OtherIng.SodaWater], "Place lime (1, quartered) and honey (1tsp) in a glass. Muddle for about 1 minute to release the juice from the lime. Clap the mint (10 leaves) in your hands a few times to release the scent. Place it in the glass and press gently with the muddler 2-3 times. Top with soda water and ice. Stir.")

let mimosaMocktail = new Drink("nonalcoholic", "Mimosa Mocktail", [JuiceIng.OrangeJuice, OtherIng.SodaWater, OtherIng.Lemon], "Add equal amounts orange juice and soda water to a champagne flute. Garnish with slice of lemon. Enjoy")

let cinderellaMocktail = new Drink("nonalcoholic", "Cinderella Mocktail", [JuiceIng.OrangeJuice, JuiceIng.PineappleJuice, JuiceIng.LemonJuice, JuiceIng.CranberryJuice, OtherIng.SodaWater], "Add the orange, lemon, pineapple juice (2 ounces each) and cranberry juice (1 ounce) to a shaker with ice. Shake to combine. Fill a tall glass with ice and pour mixture in. Top with soda water")


const alcohols = [AlcoholIng.Vodka, AlcoholIng.Gin, AlcoholIng.Rum, AlcoholIng.Prosecco, AlcoholIng.Whiskey, AlcoholIng.Tequila, AlcoholIng.Limoncello]
const liqueurs = [LiqueurIng.BlueCuracao, LiqueurIng.Grenadine]
const juices = [JuiceIng.OrangeJuice, JuiceIng.AppleJuice, JuiceIng.PineappleJuice, JuiceIng.GrapefruitJuice, JuiceIng.LemonJuice, JuiceIng.CranberryJuice, JuiceIng.Cola, JuiceIng.Sprite]  
const other = [OtherIng.SodaWater, OtherIng.Tonic, OtherIng.BrownSugar, OtherIng.Mint, OtherIng.Honey, OtherIng.Lime, OtherIng.Lemon]

let listOfDrinks = []

listOfDrinks.push(cubaLibre)
listOfDrinks.push(mojito)
listOfDrinks.push(tomCollins)
