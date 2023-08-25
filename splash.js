var splashes = [
	["Istnieje od 2018!"],
	["Prosty jak zawsze!"],
	["'Babciu, to jest zajebiste!'"],
	["Miało 'bezpieczną' dyskujse!"]
	["Jesteśmy open-source!"],
	["Kukanq to kasztan!"],
	["Switch your default search engine to Microsoft Bing in Chrome!"],
	["A-A-A-A-ATTENSIOOOOOON! *DZWIĘKI TRĄBKI*"],
	["Pamiętajcie aby dzień święty święcić!"],
	["Super. Jak napiszesz trzy kropki albo pięćset wykrzykników to też uważasz, że wiadomo o co ci chodzi?"]
	["Pamiętajcie aby aktualizować wasze systemy Windows! (Albo nie będziesz mieć internetu!)"]
	["'Dawaj Maniek to sie kameruje!'"]
	["'Mam na to certyfikaty cztery!'"]
	["'Cześć. Jeżeli lubisz moje filmy, to zapraszam cię do wspierania mnie na patronite. link w opisie!'"]
	["Używamy pzplUI!"]
];

var chosenSplash = Math.floor(Math.random() * splashes.length);

document.getElementById("splash").innerText=(chosenSplash);
