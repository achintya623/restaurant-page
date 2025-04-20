export const modHome= (function(){
    const content=document.querySelector("#content");

		function displayHome(){
			const container= document.createElement("div");
			container.className="container";
			content.append(container);

			const homeHead= document.createElement("div");
			homeHead.className="homeHead";
			homeHead.textContent= "THE ART OF WELCOMING YOU,since 1921";

			const text1= document.createElement("div");
			text1.className="text1";
			text1.textContent= "The restaurant's four rooms vary in size and ambiance. The architecture of the building defines the interior spaces, and their layout has evolved over time.";

			const text2= document.createElement("div");
			text2.className="text2";
			text2.textContent="The spirit of the hotel lies with our attentive staff, a tight team dedicated to the Lameloise ethos, who are steeped in this hospitality and help pass it on from generation to generation.";

			container.append(homeHead,text1,text2);
		};
		return{ displayHome};
}) ();