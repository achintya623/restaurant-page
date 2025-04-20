export const modMenu= (function(){
    const content=document.querySelector("#content");

    function displayMenu(){
        const container= document.createElement("div");
        container.className="container";
        content.append(container);

        const menuHead1= document.createElement("div");
        menuHead1.className="menuHead";
        menuHead1.textContent="Menu de l'Instant";
            const dishHead1= document.createElement("div");
            dishHead1.className= "dishHead";
            dishHead1.textContent="Langoustine";
            const dish1= document.createElement("div");
            dish1.className= "dish";
            dish1.textContent= " brown mushroom slices, Artichoke & creamy foie gras | shell infusion with blackcurrant oil";

            const dishHead2= document.createElement("div");
            dishHead2.className= "dishHead";
            dishHead2.textContent="Monkfish";
            const dish2= document.createElement("div");
            dish2.className= "dish";
            dish2.textContent="with cuttlefish ,Caramelized carrot juice | Cazette du Morvan & kumquat";

            const dishHead3= document.createElement("div");
            dishHead3.className= "dishHead";
            dishHead3.textContent="Veal sweetbreads";
            const dish3= document.createElement("div");
            dish3.className= "dish";
            dish3.textContent="in brioche flakes ,White asparagus & morels | soubise | cinnamon-flavored jus";

            const dishHead4= document.createElement("div");
            dishHead4.className= "dishHead";
            dishHead4.textContent="Apples";
            const dish4= document.createElement("div");
            dish4.className= "dish";
            dish4.textContent="thin sheet of caramelized puff pastry | apples candied in salted butter caramel ,Granny Smith & coriander | vanilla ice cream | spicy sauce";
        
        const menuHead2= document.createElement("div");
        menuHead2.className="menuHead";
        menuHead2.textContent="Menu Dégustation";
            const dishHead5= document.createElement("div");
            dishHead5.className= "dishHead";
            dishHead5.textContent="Scallop";
            const dish5= document.createElement("div");
            dish5.className= "dish";
            dish5.textContent="candied scallop & abalones with gonad scallop juice | herb & almond curry ,Green asparagus nectar";

            const dishHead6= document.createElement("div");
            dishHead6.className= "dishHead";
            dishHead6.textContent="Sole";
            const dish6= document.createElement("div");
            dish6.className= "dish";
            dish6.textContent="artichoke | mustard & verbena sabayon | citrus condiment";

            const dishHead7= document.createElement("div");
            dishHead7.className= "dishHead";
            dishHead7.textContent="Blue Lobster";
            const dish7= document.createElement("div");
            dish7.className= "dish";
            dish7.textContent="veiled in coral | morels & peas ,Tarragon & gingerbread";

            const dishHead8= document.createElement("div");
            dishHead8.className= "dishHead";
            dishHead8.textContent="Suckling lamb";
            const dish8= document.createElement("div");
            dish8.className= "dish";
            dish8.textContent="roasted with caramelized garlic | shoulder sausage ,Black garlic | Saffron & wild garlic jus";

        const menuHead3= document.createElement("div");
        menuHead3.className="menuHead";
        menuHead3.textContent="Lunch menu";

            const dishHead9= document.createElement("div");
            dishHead9.className= "dishHead";
            dishHead9.textContent="Green & white asparagus";
            const dish9= document.createElement("div");
            dish9.className= "dish";
            dish9.textContent="veil of milk flavored with Cardamom ,Shellfish & prawns wrapped in beetroot juice | asparagus nectar with herbs";

            const dishHead10= document.createElement("div");
            dishHead10.className= "dishHead";
            dishHead10.textContent='Pigeon "Excellence Miéral", gros-gris snails';
            const dish10= document.createElement("div");
            dish10.className= "dish";
            dish10.textContent="Onion tart | chard & peas | licorice-flavored jus";

            const dishHead11= document.createElement("div");
            dishHead11.className= "dishHead";
            dishHead11.textContent='Lemon';
            const dish11= document.createElement("div");
            dish11.className= "dish";
            dish11.textContent=" on shortbread lemon mousse | whipped cream | jasmine lemon sorbet ,Creamy & meringue leaf";



        container.append(menuHead1, dishHead1, dish1,dishHead2, dish2,dishHead3, dish3,dishHead4, dish4, menuHead2, dishHead5, dish5,dishHead6, dish6,dishHead7, dish7,dishHead8, dish8, menuHead3, dishHead9, dish9,dishHead10, dish10,dishHead11, dish11,);
    };
    return {displayMenu};
}) ();