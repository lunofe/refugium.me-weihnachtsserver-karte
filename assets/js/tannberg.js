function tannberg_layers() {

    var tannberg_wichtige_orte = L.layerGroup([
        marker([-150, -400], "spawn", "Spawn"),
        marker([-141, -412], "farmwelt", "Farmwelt"),
        marker([-132, -405], "zug", "Bahnhof Tannenwald"),

        marker([-212, -367], "weihnachtsbaum", "Nordkreuzplatz"),
        marker([-390, -222], "rathaus", "Gemeindezentrum"),
        marker([-300, -291], "detektei", "Detektei K&E"),
        marker([-342, -270], "shop", "Phil's Hofladen"),
        marker([-147, -266], "bowling", "Modde's Partykeller"),
        marker([-333, -143], "shop", "Pferdeverkauf"),

        marker([34, -80], "zug", "Nordbahnhof"),
        marker([-24, -241], "zug", "Haltepunkt Oberdorf"),
        marker([-453, -100], "zug", "Ostbahnhof"),
        marker([-280, -565], "zug", "Westbahnhof"),

        marker([-471, -530], "berg", "Fuchsspitze"),
        marker([-457, -427], "gondel", "Gondelstation"),
        marker([-457, -120], "gondel", "Gondelstation"),

        marker([-401, -144], "weihnachtsbaum", "Adventskalender"),
        marker([-417, -103], "shop", "Hutladen"),
        marker([-418, -131], "shop", "Luki's Kellogsstube"),
        marker([-396, -96], "shop", "Models & More"),
        marker([-373, -44], "shop", "RefSport"),
        marker([-381, -37], "rathaus", "Rathaus")
    ]);

    var tannberg_spieler = L.layerGroup([
        marker([-241, -369], "pin", "lunofe"),
        marker([-253, -351], "pin", "zeitspiel"),
        marker([-237, -400], "pin", "Choco & JuleMC"),
        marker([-209, -439], "pin", "Tenou"),
        marker([-235, -458], "pin", "byFiliz"),
        marker([-266, -460], "pin", "ScottMcKey"),
        marker([-314, -448], "pin", "ZenterZyon"),
        marker([-269, -521], "pin", "Q6167"),
        marker([-221, -522], "pin", "CalamarisHD & thilthil"),
        marker([-201, -488], "pin", "Maxloe"),
        marker([-221, -331], "pin", "Schluckspecht"),
        marker([-271, -313], "pin", "SeeYaJDS"),
        marker([-271, -284], "pin", "AlbertAllrad"),
        marker([-319, -297], "pin", "KinqPhilippHD & enricol0l"),
        marker([-303, -261], "pin", "No_MajLP"),
        marker([-333, -266], "pin", "bergmaenchen"),
        marker([-365, -295], "pin", "Rayleth621"),
        marker([-361, -268], "pin", "AndreSpeed"),
        marker([-354, -326], "pin", "tabsibea & Danny_ow"),
        marker([-376, -338], "pin", "Adolar0042 & Mineslime"),
        marker([-332, -388], "pin", "EinWildesPika"),
        marker([-404, -335], "pin", "Aveil"),
        marker([-394, -306], "pin", "GandalfLP"),
        marker([-195, -402], "pin", "aemo0n"),
        marker([-400, -269], "pin", "jakobjr"),
        marker([-358, -223], "pin", "KptnZurSee"),
        marker([-357, -197], "pin", "Alpha_Schneemann"),
        marker([-332, -124], "pin", "NetFX92 & BeastBugBoy"),
        marker([-176, -347], "pin", "MalleDe99"),
        marker([-244, -289], "pin", "Mytra"),
        marker([-218, -279], "pin", "fiiini"),
        marker([-163, -314], "pin", "ParzevallSprout"),
        marker([-212, -203], "pin", "MaximusOktopus"),
        marker([-137, -253], "pin", "ModdeAT"),
        marker([-96, -255], "pin", "HalbVampir"),
        marker([-60, -274], "pin", "Niki1i506"),
        marker([-4, -339], "pin", "Ironwaffel"),
        marker([-70, -400], "pin", "troyoyal"),
        marker([-91, -356], "pin", "Blindus"),
        marker([-124, -651], "pin", "scaryta"),
        marker([28, -621], "pin", "rene5001000"),
        marker([10, -428], "pin", "weronr"),
        marker([383, 405], "pin", "The_T0m2k"),
        marker([-132, -475], "pin", "Dark_cookielord"),
        marker([-321, -233], "pin", "Felix_Schriever"),
        marker([-261, -129], "pin", "BananeKirsch"),
        marker([-604, 228], "pin", "Schluckspecht"),
        marker([-683, 203], "pin", "larachen_nom"),
        marker([-719, 236], "pin", "Eltonoo"),
        marker([-759, 141], "pin", "MaxH667"),
        marker([-629, 298], "pin", "Chunker"),
        marker([-708, 309], "pin", "PAEAET"),
        marker([-289, -30], "pin", "Schwaewe"),
        marker([-323, -37], "pin", "EinKuenstler"),
        marker([-316, -88], "pin", "Ironwaffel"),
        marker([-341, -90], "pin", "mchawk2001"),
        marker([-330, -169], "pin", "Nicostar3000, Yodie & finn_ost"),
        marker([-430, -234], "pin", "BananaPizz"),
        marker([-95, -221], "pin", "Mooshroomhead"),
        marker([-125, -323], "pin", "Cuz_Im_Sarah"),
        marker([-235, -617], "pin", "heaasy"),
        marker([-197, -666], "pin", "Flunggi"),
        marker([-323, -608], "pin", "7Justin"),
        marker([-289, -225], "pin", "zGecco"),
        marker([243, -279], "pin", "Mytra"),
        marker([147, -51], "pin", "NaxoG"),
        marker([-246, -317], "pin", "lPingu"),
        marker([-334, -296], "pin", "ParzevallSprout"),
        marker([-275, 379], "pin", "Beautiful Botte Clan")
    ]);

    var tannberg_strecken = L.layerGroup([
        // Gondel
        L.polyline([[-457, -427], [-457, -120]], { color: "#BC3220", dashArray: "1, 5" }),
        // Schlitten
        marker([-482, -427], "schlitten", "Strecke Gipfelmulde"),
        L.polyline(turf.bezierSpline(turf.lineString([[-482, -427], [-499, -388], [-522, -372], [-546, -343], [-573, -326], [-596, -295], [-581, -279], [-563, -279], [-518, -299], [-495, -297], [-460, -250], [-457, -220], [-448, -200], [-427, -180]])).geometry.coordinates, { color: "#43BCBA" }).bindPopup("Strecke Gipfelmulde"),
        marker([-486, -432], "schlitten", "Strecke Fuchsloch"),
        L.polyline(turf.bezierSpline(turf.lineString([[-486, -432], [-502, -404], [-528, -397], [-552, -390], [-576, -360], [-599, -339], [-600, -295], [-585, -275], [-563, -267], [-557, -252], [-574, -241], [-607, -201], [-607, -182], [-627, -150], [-662, -152], [-667, -135], [-666, -115], [-646, -91], [-627, -69], [-615, -70], [-589, -94], [-562, -105], [-551, -131], [-531, -170], [-518, -190], [-462, -205], [-452, -200], [-432, -177]])).geometry.coordinates, { color: "#F4A300" }).bindPopup("Strecke Fuchsloch"),
        // BBC
        L.polyline([[-275, 101], [-275, 342]], { color: "#365083", dashArray: "1, 5" }),
        // Zugtunnel
        L.polyline(turf.bezierSpline(turf.lineString([[-77, -538], [-97, -557], [-164, -556]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" }),
        L.polyline(turf.bezierSpline(turf.lineString([[-132, -405], [-128, -417], [-104, -430], [-71, -442], [-66, -450]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" }),
        L.polyline(turf.bezierSpline(turf.lineString([[-132, -405], [-124, -366], [-101, -353], [-81, -340], [-62, -333]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" }),
        L.polyline(turf.bezierSpline(turf.lineString([[-35, -338], [-28, -329], [5, -266]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" }),
        L.polyline(turf.bezierSpline(turf.lineString([[-156, 17], [-212, 45], [-221, 32], [-226, 8], [-223, -9], [-230, -19]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" }),
        L.polyline(turf.bezierSpline(turf.lineString([[-448, -101], [-470, -101], [-476, -104], [-481, -107]])).geometry.coordinates, { color: "#000000", dashArray: "1, 5" })
    ]);

    return [
        L.control.layers(null, { "Wichtige Orte": tannberg_wichtige_orte, "Spieler": tannberg_spieler, "Strecken": tannberg_strecken }),
        tannberg_wichtige_orte,
        tannberg_spieler,
        tannberg_strecken
    ];
}
