export const modAbout=(function(){
    const content=document.querySelector("#content");

    function displayAbout(){
        const container= document.createElement("div");
        container.className="container";
        content.append(container);

        const aboutHead= document.createElement("div");
        aboutHead.className="homeHead";
        aboutHead.textContent= "MAISON LAMELOISE ,a place of sharing";

        const text1= document.createElement("div");
        text1.className="text1";
        text1.textContent= "Since 1921, Maison Lameloise has generously continued to pass on the art of hospitality.";

        const text2= document.createElement("div");
        text2.className="text2";
        text2.textContent="The hotel is located in a former post house at the heart of Burgundy, a modest and welcoming haven where you can relax and disconnect.";

        const text3= document.createElement("div");
        text3.className="text3";
        text3.textContent="The small village of Chagny provides a natural stopover between Paris and the Mediterranean; it sits on Route Nationale 6 (now D906), which runs through France from north to south via Dijon, Beaune and the Rhone Valley.";

        container.append( aboutHead,text1,text2,text3);
    }
    return{ displayAbout};
}) ();