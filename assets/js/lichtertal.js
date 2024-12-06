function lichtertal_layers() {

    var lichtertal_wichtige_orte = L.layerGroup([
        marker([63,-77], "Spawn", "spawn"),
        marker([24,-69], "Rathaus", "rathaus"),
        marker([42,-70], "RefSport", "shop"),
        marker([48,-43], "Adventskalender", "weihnachtsbaum"),
        marker([-6,-49], "Gemeindezentrum", "rathaus"),
        marker([156,-159], "Uno", "alt_karten"),
        marker([159,-191], "Schach", "schach"),
        marker([133,-208], "Mensch ärgere dich nicht", "würfel"),
        marker([92,-214], "Skip-Bo", "karten"),

        marker([68,-39], "Santa's Shop", "shop"),
        marker([55,-28], "Möbel", "shop"),
        marker([60,-55], "Hutstand von larachen_nom", "shop"),
        marker([44,-28], "Losbude", "shop"),

        marker([44,-91], "Farmwelt", "farmwelt"),

        marker([-214,-119], "Kirche zum heiligen Wasserfall", "kirche"),

        marker([121,29], "Detektei K&E", "detektei"),
        marker([189,24], "Zeitung Lichtertaler Perspektive", "zeitung"),
        marker([139,6], "Darkingu Post", "post"),
        marker([79,114], "Café Winterglanz", "cafe"),
        marker([-41,14], "Café Röstwerk", "cafe"),

        marker([50,-104], "Skilift »Waldlift«", "gondel"),
        marker([50,-321], "Skilift »Waldlift«", "gondel"),
        marker([387,108], "Nordbahnhof", "zug"),
        marker([85,-270], "Westbahnhof", "zug"),
        marker([-205,-136], "Südwestbahnhof", "zug"),
        marker([-300,224], "Südbahnhof", "zug"),
        marker([7,442], "Ostbahnhof", "zug"),
    ]);

    var lichtertal_spieler = L.layerGroup([
        marker([94,-8], "MisterCookie1234"),
        marker([40,20], "Myronis"),
        marker([-59,14], "Modde"),
        marker([-95,-5], "Blindus"),
        marker([-83,35], "JBin"),
        marker([-101,66], "Yodie"),
        marker([-107,106], "finn_ost"),
        marker([-149,91], "zGecco"),
        marker([-154,38], "EinKuenstler"),
        marker([-209,111], "_Backfisch_"),
        marker([-138,131], "TeufelmichaHD"),
        marker([-173,162], "Nyxxoos"),
        marker([-120,174], "byFiliz"),
        marker([-78,163], "v_Nessq,<br>Flying_Cr0w"),
        marker([-40,164], "KptnZurSee"),
        marker([-5,165], "scaryta"),
        marker([88,51], "Sherl0ck1889"),
        marker([196,95], "FOX414141"),
        marker([186,140], "datoQT"),
        marker([155,43], "AndreSpeed"),
        marker([189,7], "SeeYaJDS"),
        marker([177,-16], "TheVenom_"),
        marker([118,2], "Felix_Schriever"),
        marker([259,4], "Mine_SlimeHD,<br>Adolar0042,<br>PalleySum"),
        marker([405,-27], "Einzig_D_Panda,<br>Peridiena"),
        marker([412,12], "Fantasenf"),
        marker([451,-15], "LightArrow25"),
        marker([434,-69], "TCMLangerLachs"),
        marker([462,-55], "Tristalia"),
        marker([477,-77], "Lenz_88"),
        marker([519,-71], "Create07"),
        marker([531,-255], "NaxoG"),
        marker([530,-534], "LordToniGHG,<br>VaniBani"),
        marker([108,42], "KinqPhilipp,<br>enricol0l,<br>fiiini"),
        marker([127,115], "zLeqitKnxck"),
        marker([121,136], "Blu3W0lfLP"),
        marker([254,138], "Jodohane"),
        marker([265,185], "aemo0n"),
        marker([285,227], "PacBot,<br>Lyphion"),
        marker([312,125], "Bornebju,<br>FeHlErPixEl"),
        marker([339,155], "Mytra,<br>Maxxx161,<br>DeepCrimsonRose"),
        marker([362,132], "Zorrocra"),
        marker([400,78], "RainbowGreeper_4"),
        marker([444,75], "Frazixitis"),
        marker([317,40], "Schlingelman"),
        marker([370,93], "Create07"),
        marker([339,92], "PexyFNA,<br>lucychan2004"),
        marker([263,91], "GandalfLP"),
        marker([190,206], "zeitspiel"),
        marker([180,188], "lunofe"),
        marker([244,244], "HebrewYehudi"),
        marker([203,238], "DonGrenny"),
        marker([162,247], "7Justin"),
        marker([128,200], "luuskyy_"),
        marker([76,199], "Zoppelchen"),
        marker([82,137], "Freelex_Playz"),
        marker([98,164], "Tenou"),
        marker([128,172], "Bloocki"),
        marker([162,141], "AceeZen"),
        marker([114,296], "HarryBoo187,<br>hamsterbacke_03"),
        marker([109,335], "Darkholen"),
        marker([156,342], "Umolade"),
        marker([226,317], "Rayleth621"),
        marker([76,96], "itsjamesight"),
        marker([203,456], "touyainblue"),
        marker([247,460], "ruffyonepiece2"),
        marker([235,421], "Ninjaknecht"),
        marker([310,459], "Tiger_rarwww"),
        marker([378,492], "osswald,<br>SquirrelTV"),
        marker([247,460], "ruffyonepiece2"),
        marker([94,433], "lPingu"),
        marker([57,337], "BlackSn0W910"),
        marker([45,286], "larachen_nom"),
        marker([53,255], "MaxH667"),
        marker([-7,250], "Weddn"),
        marker([-18,213], "PAEAET"),
        marker([-49,199], "rene5001000,<br>MaSterMinD"),
        marker([-248,148], "asap_mono"),
        marker([-192,80], "El_Da_Bebe_,<br>Saschko02,<br>yev_xx"),
        marker([-218,24], "NetFX92,<br>BeastBugBoy"),
        marker([-266,72], "DerSpezilord"),
        marker([-247,222], "HerrNightfury"),
        marker([-274,260], "Xaschas"),
        marker([-239,305], "fuenfsechszwei"),
        marker([-182,289], "annabelldt"),
        marker([-206,255], "kucki228"),
        marker([-177,259], "kucki229"),
        marker([103,230], "JuleMC,<br>Chocho"),
        marker([224,34], "tabsibea,<br>Danny_ow"),
        marker([155,15], "Darkholen"),
        marker([-72,-45], "HeyAlex_"),
        marker([-97,-96], "Guison_LP,<br>Nikii1506"),
        marker([-104,-49], "Prace"),
        marker([-139,-12], "pain3322"),
        marker([-116,22], "MalleDe99"),
        marker([-129,45], "DarkvoiceLP"),
        marker([-36,-394], "SuicideG0at"),
        marker([-80,-413], "alexandra_____"),
        marker([8,-500], "OniiiGhost9316"),
        marker([-495,-364], "bashforfun,<br>hamsterbacke_03,<br>HarryBoo187,<br>Hishichi_,<br>Ja_NaTuerlich,<br>MaSterMinD,<br>ozTeck_"),
        marker([124,247], "JuleMC"),
        marker([-235,-61], "HalbVampir,<br>kestlp"),
        marker([-189,346], "KeinBergNo"),
    ]);

    var lichtertal_strecken = L.layerGroup([
        // Zugstrecke
        linie("#F8AC2C", [[305,-102],[305,14]]),
        kurve("#F8AC2C", [[305,14],[312,29],[322,24],[347,22],[358,31],[374,51],[389,73],[393,89]], "10,10"),
        linie("#F8AC2C", [[393,89],[393,130]]),
        kurve("#F8AC2C", [[393,130],[385,148],[367,165],[353,187],[339,208],[336,225],[325,235],[323,275]], "10,10"),
        linie("#F8AC2C", [[323,275],[322,485]]),
        kurve("#F8AC2C", [[322,485],[318, 491],[314,491],[307,501],[297,523],[277,534],[243,530]], "10,10"),
        linie("#F8AC2C", [[243,530],[134,530]]),
        kurve("#F8AC2C", [[134,530],[127, 525],[113, 517],[93, 515]], "10,10"),
        linie("#F8AC2C", [[93,515],[52,515]]),
        kurve("#F8AC2C", [[52,515],[46,507],[37,502],[21,504],[12,499]], "10,10"),
        linie("#F8AC2C", [[12,499],[12,472]]),
        kurve("#F8AC2C", [[12,472],[9,460],[5,444],[-7,430],[-18,426],[-29,425],[-42,429],[-59, 430]], "10,10"),
        linie("#F8AC2C", [[-59,430],[-195,430]]),
        kurve("#F8AC2C", [[-195,430],[-202,423],[-208,413],[-214,400],[-243,377],[-265,363],[-282,356],[-293, 348]], "10,10"),
        linie("#F8AC2C", [[-293,348],[-293,279]]),
        linie("#F8AC2C", [[-293,279],[-293,256]]),
        kurve("#F8AC2C", [[-293,256],[-297,245],[-303,228],[-314,223],[-335,202],[-337,180],[-335,169],[-336,156],[-337,144]], "10,10"),
        linie("#F8AC2C", [[-337,144],[-337,118]]),
        kurve("#F8AC2C", [[-337,118],[-337,104],[-330,91],[-337,80],[-337,57],[-333,34],[-327,28],[-327,18],[-332,11],[-332,-20]], "10,10"),
        linie("#F8AC2C", [[-332,-20],[-263,-90],[-263,-90]]),
        linie("#F8AC2C", [[-263,-90],[-258,-105]]),
        linie("#F8AC2C", [[-258,-105],[-245,-129]]),
        kurve("#F8AC2C", [[-245,-129],[-231,-139],[-212,-137],[-193,-135],[-185,-131],[-170,-137],[-156,-143],[-143,-150],[-131,-156],[-116,-164],[-106,-183],[-101,-194],[-98,-204],[-99,-210],[-97,-215]], "10,10"),
        linie("#F8AC2C", [[-97,-215],[-55,-258]]),
        kurve("#F8AC2C", [[-55,-258],[-40,-261],[-34,-260],[-25,-266],[-17,-271],[-7,-272],[9,-272],[22,-275],[53,-276],[66,-275],[87,-272],[102,-265],[119,-256],[133,-255],[148,-253],[163,-249],[168,-246]], "10,10"),
        linie("#F8AC2C", [[168,-246],[187,-228]]),
        kurve("#F8AC2C", [[187,-228],[198,-223],[221,-194],[246,-180],[256,-166],[274,-160],[278,-152],[292,-139],[305,-102]], "10,10"),

        // Skilift
        linie("#FFFD6B", [[50,-104],[50,-321]]),

        // Steigberger Schlucht
        marker([59,-310], "Steigberger Schlucht", "schlitten"),
        kurve("#82F96A", [[61,-309],[78,-305],[96,-313],[102,-305],[104,-290]], "5,10", "3"),
        kurve("#82F96A", [[104,-290],[109,-277],[116,-266],[112,-259],[102,-264],[93,-277],[84,-280]], "", "2"),
        kurve("#64CF4B", [[84,-280],[66,-285],[50,-285]], "5,10", "3"),
        kurve("#45A52B", [[50,-285],[38,-281],[30,-267],[40,-257],[67,-258],[92,-256],[105,-243],[114,-230],[128,-221],[141,-216],[150,-199],[157,-177],[162,-156],[162,-140],[155,-121],[146,-110],[137,-98],[133,-83],[133,-69]], "", "2"),
        marker([133,-69], "Steigberger Schlucht", "ziel"),

        // Lichtertal Südabfahrt
        marker([31,-312], "Lichtertal Südabfahrt", "schlitten"),
        kurve("#4B5EF9", [[32,-310],[27,-328],[36,-348],[57,-364],[65,-371],[66,-378],[58,-380],[38,-369],[16,-358],[7,-345],[6,-338]], "", "2"),
        kurve("#4B5EF9", [[6,-338],[13,-309],[28,-277],[35,-259],[35,-250]], "5,10", "3"),
        kurve("#4B5EF9", [[35,-250],[33,-237],[26,-218],[37,-198],[45,-178],[46,-158],[55,-144],[69,-132],[78,-113],[82,-95]], "", "2"),
        marker([82,-95], "Lichtertal Südabfahrt", "ziel"),

        // Refmayr Piste
        marker([14,-319], "Refmayr Piste", "schlitten"),
        kurve("#C9412B", [[14,-319],[58,-359],[67,-367],[72,-375],[79,-381],[88,-382],[99,-387],[112,-395],[126,-403],[134,-409],[143,-410]], "", "2"),
        kurve("#C9412B", [[143,-410],[171,-398],[200,-396]], "5,10", "3"),
        kurve("#C9412B", [[200,-396],[208,-390],[216,-378],[227,-367],[240,-353],[246,-334],[244,-317],[242,-305],[245,-297],[255,-287],[283,-261],[315,-227],[345,-200],[362,-168],[370,-134],[371,-107],[366,-89],[352,-80],[341,-79],[334,-76],[327,-69],[316,-64],[307,-62]], "", "2"),
        linie("#C9412B", [[307,-62],[301,-60]], "5,10", "3"),
        kurve("#C9412B", [[301,-60],[288,-53],[278,-43],[261,-38],[237,-40],[187,-53]], "", "2"),
        marker([187,-53], "Refmayr Piste", "ziel"),

        // Weg zum Westbahnhof
        kurve("#9E2AA5", [[65,-101],[77,-129],[72,-142]], "1,10", "6"),
        // Weg in den Westen
        linie("#9E2AA5", [[-21,-386],[-55,-269],[-2,-199],[12,-132]], "1,10", "6"),
        // Weg in den Südwesten
        linie("#9E2AA5", [[-160,-72],[-160,-180],[-351,-180],[-351,-380],[-427,-380]], "1,10", "6"),
        // Weg zu den Minispielen
        kurve("#9E2AA5", [[122,-109],[128,-119],[139,-126],[144,-146],[155,-158],[159,-190],[136,-206],[134,-208],[134,-217],[92,-214]], "1,10", "6"),
    ]);

    var lichtertal_meta = L.layerGroup([
        L.polygon([[192,-608],[192,-592],[240,-592],[241,-575],[272,-575],[272,-560],[304,-559],[304,-544],[336,-543],[336,-528],[352,-527],[352,-512],[384,-511],[384,-496],[401,-495],[401,-480],[416,-479],[417,-463],[431,-463],[432,-448],[448,-448],[448,-432],[464,-431],[464,-415],[480,-415],[480,-400],[496,-399],[496,-385],[513,-383],[512,-367],[527,-367],[528,-352],[543,-351],[544,-335],[560,-335],[560,-321],[576,-320],[577,-288],[591,-287],[592,-271],[608,-271],[608,-239],[624,-239],[625,-207],[639,-208],[640,-144],[656,-143],[657,-128],[672,-127],[672,-96],[688,-95],[689,-63],[703,-63],[704,-31],[720,-31],[720,256],[705,257],[703,288],[689,289],[687,320],[672,320],[671,336],[656,336],[656,592],[640,592],[639,624],[624,625],[623,656],[608,656],[607,671],[592,673],[591,704],[575,704],[575,720],[559,720],[560,736],[545,736],[543,752],[528,753],[527,768],[513,769],[512,784],[497,784],[496,800],[464,800],[463,816],[448,816],[447,831],[416,832],[415,848],[384,848],[383,864],[32,864],[32,848],[-64,848],[-64,832],[-96,832],[-96,816],[-128,816],[-127,800],[-160,800],[-160,783],[-176,784],[-176,768],[-206,769],[-208,753],[-304,752],[-304,737],[-336,736],[-335,721],[-368,720],[-367,704],[-384,704],[-384,688],[-415,688],[-416,672],[-432,672],[-431,656],[-447,656],[-447,640],[-464,640],[-464,624],[-496,624],[-496,608],[-511,608],[-511,591],[-528,592],[-528,576],[-543,576],[-544,561],[-560,560],[-560,529],[-576,528],[-576,512],[-591,512],[-592,480],[-609,479],[-608,448],[-623,448],[-624,369],[-640,368],[-640,338],[-656,336],[-656,304],[-672,303],[-672,-48],[-657,-48],[-656,-128],[-640,-128],[-640,-160],[-624,-159],[-624,-192],[-609,-192],[-608,-208],[-593,-208],[-592,-240],[-576,-240],[-577,-256],[-560,-256],[-560,-272],[-545,-272],[-545,-304],[-528,-304],[-528,-321],[-512,-321],[-512,-352],[-496,-352],[-496,-368],[-480,-368],[-480,-384],[-465,-384],[-464,-400],[-433,-401],[-432,-417],[-416,-416],[-416,-432],[-385,-431],[-384,-448],[-353,-448],[-352,-464],[-321,-464],[-320,-481],[-305,-480],[-305,-496],[-289,-497],[-289,-512],[-273,-512],[-273,-529],[-241,-528],[-240,-544],[-225,-544],[-224,-560],[-192,-560],[-191,-576],[-161,-576],[-161,-592],[-113,-592],[-112,-607],[192,-608]], { color: "black" }),
    ]);

    return [
        L.control.layers(null, { "Wichtige Orte": lichtertal_wichtige_orte, "Spieler": lichtertal_spieler, "Strecken": lichtertal_strecken, "Meta": lichtertal_meta }),
        lichtertal_wichtige_orte,
        lichtertal_spieler,
        lichtertal_strecken
    ];
}
