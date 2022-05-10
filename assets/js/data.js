const games = [
    {
        name: "Dota 2",
        description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
        date: "9 Jul, 2013",
        image: "dota2.jpg",
        video: "dota2.mp4",
        link: "https://store.steampowered.com/app/570/Dota_2/",
        about: ["The most-played game on Steam. Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has truly taken on a life of its own.", "One Battlefield. Infinite Possibilities. When it comes to diversity of heroes, abilities, and powerful items, Dota boasts an endless array—no two games are the same. Any hero can fill multiple roles, and there's an abundance of items to help meet the needs of each game. Dota doesn't provide limitations on how to play, it empowers you to express your own style.", "All heroes are free. Competitive balance is Dota's crown jewel, and to ensure everyone is playing on an even field, the core content of the game—like the vast pool of heroes—is available to all players. Fans can collect cosmetics for heroes and fun add-ons for the world they inhabit, but everything you need to play is already included before you join your first match.", "Bring your friends and party up. Dota is deep, and constantly evolving, but it's never too late to join. Learn the ropes playing co-op vs. bots. Sharpen your skills in the hero demo mode. Jump into the behavior- and skill-based matchmaking system that ensures you'll be matched with the right players each game."],
        system: ["OS: Windows 7 or newer", "Processor: Dual core from Intel or AMD at 2.8 GHz", "Memory: 4 GB RAM", "Graphics: NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600", "DirectX: Version 9.0c", "Network: Broadband Internet connection", "Storage: 15 GB available space", "Sound Card: DirectX Compatible"],
    },
    {
        name: "CS: GO",
        description: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        date: "21 Aug, 2012",
        image: "csgo.jpg",
        video: "csgo.mp4",
        link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
        about: ["Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.", "CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).", "Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999,' said Doug Lombardi at Valve. 'For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.", "Includes intense violence and blood"],
        system: ["OS: Windows® 7/Vista/XP", "Processor: Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better", "Memory: 2 GB RAM", "Graphics: Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0", "DirectX: Version 9.0c", "Storage: 15 GB available space"]
    },
    {
        name: "Half-Life",
        description: "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.",
        date: "8 Nov, 1998",
        image: "hl.jpg",
        video: "hl.mp4",
        link: "https://store.steampowered.com/app/220/HalfLife_2/",
        about: ["Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world."],
        system: ["500 mhz processor", "96mb ram", "16mb video card", "Windows XP", "Mouse", "Keyboard", "Internet Connection"],
    },
    {
        name: "Half-Life 2",
        description: "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide.",
        date: "16 Nov, 2004",
        image: "hl2.jpg",
        video: "hl2.mp4",
        link: "https://store.steampowered.com/app/220/HalfLife_2/",
        about: ["1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide.", "NOW. By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around them, from the physical environment to the behaviors even the emotions of both friends and enemies.", "The player again picks up the crowbar of research scientist Gordon Freeman, who finds himself on an alien-infested Earth being picked to the bone, its resources depleted, its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people he cares about are counting on him.", "The intense, real-time gameplay of Half-Life 2 is made possible only by Source®, Valve's new proprietary engine technology. Source provides major enhancements in:", "Characters: Advanced facial animation system delivers the most sophisticated in-game characters ever seen. With 40 distinct facial 'muscles,' human characters convey the full array of human emotion, and respond to the player with fluidity and intelligence.", "Physics: From pebbles to water to 2-ton trucks respond as expected, as they obey the laws of mass, friction, gravity, and buoyancy.", "buoyancy. Graphics: Source's shader-based renderer, like the one used at Pixar to create movies such as Toy Story® and Monster's, Inc.®, creates the most beautiful and realistic environments ever seen in a video game. AI: Neither friends nor enemies charge blindly into the fray. They can assess threats, navigate tricky terrain, and fashion weapons from whatever is at hand."],
        system: ["500 mhz processor", "96mb ram", "16mb video card", "Windows XP", "Mouse", "Keyboard", "Internet Connection"],
    },
    {
        name: "Left 4 Dead",
        description: "From Valve (the creators of Counter-Strike, Half-Life and more) comes Left 4 Dead, a co-op action horror game for the PC and Xbox 360 that casts up to four players in an epic struggle for survival against swarming zombie hordes and terrifying mutant monsters.",
        date: "17 Nov, 2008",
        image: "l4d.jpg",
        video: "l4d.mp4",
        link: "https://store.steampowered.com/app/500/Left_4_Dead/",
        about: ["From Valve (the creators of Counter-Strike, Half-Life and more) comes Left 4 Dead, a co-op action horror game for the PC and Xbox 360 that casts up to four players in an epic struggle for survival against swarming zombie hordes and terrifying mutant monsters.", "Set in the immediate aftermath of the zombie apocalypse, L4D's survival co-op mode lets you blast a path through the infected in four unique “movies,” guiding your survivors across the rooftops of an abandoned metropolis, through rural ghost towns and pitch-black forests in your quest to escape a devastated Ground Zero crawling with infected enemies. Each 'movie' is comprised of five large maps, and can be played by one to four human players, with an emphasis on team-based strategy and objectives. New technology dubbed 'the AI Director' is used to generate a unique gameplay experience every time you play. The Director tailors the frequency and ferocity of the zombie attacks to your performance, putting you in the middle of a fast-paced, but not overwhelming, Hollywood horror movie.", "Addictive single player, co-op, and multiplayer action gameplay from the makers of Counter-Strike and Half-Life Versus Mode lets you compete four-on-four with friends, playing as a human trying to get rescued, or as a zombie boss monster that will stop at nothing to destroy them.", "See how long you and your friends can hold out against the infected horde in the new Survival Mode An advanced AI director dynamically creates intense and unique experiences every time the game is played 20 maps, 10 weapons and unlimited possibilities in four sprawling 'movies' Matchmaking, stats, rankings, and awards system drive collaborative play Designer's Commentary allows gamers to go 'behind the scenes' of the game Powered by Source and Steam", "'The Sacrifice' is the prequel to 'The Passing,' and takes place from the L4D Survivors' perspective as they make their way South. In addition to advancing the story, 'The Sacrifice' introduces a new style finale featuring 'Sacrificial Gameplay' where players get to decide who will give their life so the others may live."],
        system: ["Supported OS: Windows® 7 32/64-bit / Vista 32/64 / XP", "Processor: Pentium 4 3.0GHz", "Memory: 1 GB", "Graphics: 128 MB, Shader model 2.0, ATI 9600, NVidia 6600 or better", "Hard Drive: At least 7.5 GB of free space", "Sound Card: DirectX 9.0c compatible sound card"],
    },
    {
        name: "Left 4 Dead 2",
        description: "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.",
        date: "17 Nov, 2009",
        image: "l4d2.jpg",
        video: "l4d2.mp4",
        link: "https://store.steampowered.com/app/550/Left_4_Dead_2/",
        about: ["Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans across five expansive campaigns.", "You'll play as one of four new survivors armed with a wide and devastating array of classic and upgraded weapons. In addition to firearms, you'll also get a chance to take out some aggression on infected with a variety of carnage-creating melee weapons, from chainsaws to axes and even the deadly frying pan.", "You'll be putting these weapons to the test against (or playing as in Versus) three horrific and formidable new Special Infected. You'll also encounter five new uncommon common infected, including the terrifying Mudmen.", "Helping to take L4D's frantic, action-packed gameplay to the next level is AI Director 2.0. This improved Director has the ability to procedurally change the weather you'll fight through and the pathways you'll take, in addition to tailoring the enemy population, effects, and sounds to match your performance. L4D2 promises a satisfying and uniquely challenging experience every time the game is played, custom-fitted to your style of play. Next generation co-op action gaming from the makers of Half-Life, Portal, Team Fortress and Counter-Strike. Over 20 new weapons & items headlined by over 10 melee weapons – axe, chainsaw, frying pan, baseball bat – allow you to get up close with the zombies New survivors. New Story. New dialogue.", "Five expansive campaigns for co-operative, Versus and Survival game modes. An all new multiplayer mode.", "Uncommon common infected. Each of the five new campaigns contains at least one new uncommon common zombies which are exclusive to that campaign. AI Director 2.0: Advanced technology dubbed The AI Director drove L4D's unique gameplay – customizing enemy population, effects, and music, based upon the players’ performance. L4D 2 features The AI Director 2.0 which expands the Director’s ability to customize level layout, world objects, weather, and lighting to reflect different times of day.", "Stats, rankings, and awards system drives collaborative play"],
        system: ["OS: Windows® 7 32/64-bit / Vista 32/64 / XP", "Processor: Pentium 4 3.0GHz", "Memory: 2 GB RAM", "Graphics: Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better", "DirectX: Version 9.0c", "Storage: 13 GB available space", "Sound Card: DirectX 9.0c compatible sound card"],
    },
    {
        name: "Portal",
        description: "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
        date: "10 Oct, 2007",
        image: "portal.jpg",
        video: "portal.mp4",
        link: "https://store.steampowered.com/app/400/Portal/",
        about: ["Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.", "The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation.", "Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space."],
        system: ["MINIMUM:1.7 GHz Processor", "512MB RAM", "DirectX® 8.1 level Graphics Card (Requires support for SSE)", " Windows® 7 (32/64-bit)/Vista/XP", "Mouse", "Keyboard", "Internet Connection"],
    },
    {
        name: "Portal 2",
        description: "The 'Perpetual Testing Initiative' has been expanded to allow you to design co-op puzzles for you and your friends!",
        date: "19 Apr, 2011",
        image: "portal2.jpg",
        video: "portal2.mp4",
        link: "https://store.steampowered.com/app/620/Portal_2/",
        about: ["Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.", "The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.", "The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.", "Product Features Extensive single player: Featuring next generation gameplay and a wildly-engrossing story. Complete two-person co-op: Multiplayer game featuring its own dedicated story, characters, and gameplay. Advanced physics: Allows for the creation of a whole new range of interesting challenges, producing a much larger but not harder game.", "Original music. Massive sequel: The original Portal was named 2007's Game of the Year by over 30 publications worldwide. Editing Tools: Portal 2 editing tools will be included."],
        system: ["OS: Windows 7 / Vista / XP", "Processor: 3.0 GHz P4", "Dual Core 2.0 (or higher) or AMD64X2 (or higher)", "Memory: 2 GB RAM", "Graphics: Video card must be 128 MB or more and with support for Pixel Shader 2.0b (ATI Radeon X800 or higher / NVIDIA GeForce 7600 or higher / Intel HD Graphics 2000 or higher)", "DirectX: Version 9.0c", "Storage: 8 GB available space", "Sound Card: DirectX 9.0c compatible"],
    },
    {
        name: "Half-Life: Alyx",
        description: "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.",
        date: "23 Mar, 2020",
        image: "hla.jpg",
        video: "hla.mp4",
        link: "https://store.steampowered.com/app/546560/HalfLife_Alyx/",
        about: ["Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2.", "Playing as Alyx Vance, you are humanity’s only chance for survival. The Combine’s control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth’s greatest scientists: you and your father, Dr. Eli Vance.", "As founders of a fledgling resistance, you’ve continued your clandestine scientific activity—performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine.", "Every day, you learn more about your enemy, and every day you work toward finding a weakness.", "Valve’s return to the Half-Life universe that started it all was built from the ground up for virtual reality. VR was built to enable the gameplay that sits at the heart of Half-Life.", "Immerse yourself in deep environmental interactions, puzzle solving, world exploration, and visceral combat.", "Lean to aim around a broken wall and under a Barnacle to make an impossible shot. Rummage through shelves to find a healing syringe and some shotgun shells. Manipulate tools to hack alien interfaces. Toss a bottle through a window to distract an enemy. Rip a Headcrab off your face and throw it out the window.", "A set of Source 2 tools for building new levels is included with the game, enabling any player to build and contribute new environments for the community to enjoy through Half-Life: Alyx's Steam Workshop. Hammer, Valve’s level authoring tool, has been updated with all of the game's virtual reality gameplay tools and components."],
        system: ["Requires a 64-bit processor and operating system OS: Windows 10", "Processor: Core i5-7500 / Ryzen 5 1600", "Memory: 12 GB RAM", "Graphics: GTX 1060 / RX 580 - 6GB VRAM"],
    }
];




const units = [
    {
        name: "movecommunity",
        title: "Join the Community",
        symbol: "C",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movegames",
        title: "Release your Game",
        symbol: "G",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movehardware",
        title: "Experience Steam Hardware",
        symbol: "H",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movetest",
        title: "Join the Community",
        symbol: "T",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movefun",
        title: "Release your Game",
        symbol: "F",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movedemo",
        title: "Experience Steam Hardware",
        symbol: "D",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "moveboom",
        title: "Join the Community",
        symbol: "B",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "moveall",
        title: "Release your Game",
        symbol: "A",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    },
    {
        name: "movebig",
        title: "Experience Steam Hardware",
        symbol: "B",
        info: ["Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.", "We created the Steam Controller and the VR technologies that power the HTC Vive to making gaming on the PC even better.", "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops."],
        link: "https://steamcommunity.com/",
    }
]

const updates = [
    {
        title: "Steam Client Update, October 14",
        date: "Thu, October 14",
        info: [
            [["General"], ["Fixed Library being unresponsive after startup on machines with thousands of installed games", "Fixed some incorrect URLs used for game news links"]],
            [["Downloads"], ["Fixed issue causing error such as: 'appmanifest_570.acf / Disk write error'"]],
            [["Linux"], ["Fixed checking for execute privileges when picking a Steam Library folder location"]]
        ]
    },
    {
        title: "Steam Client Update, October 6",
        date: "Thu, October 7",
        info: [
            [["General"], ["When Steam detects a game file has been corrupted, it will now try to reuse as much of the corrupted file as possible to save bandwidth when downloading correct data for that file", "Fix bug causing slow reconnect to Steam after resuming from a system suspend"]],
            [["Remote Play"], ["Automatically install the audio drivers on Windows when streaming starts if needed, pass -skipstreamingdrivers on the command line to disable them", "Pipewire desktop capture available on Linux, launch Steam with the -pipewire command line option to enable", "Fixed Linux games seeing multiple controllers when Steam controller configuration support is enabled", "Fixed Linux clients not getting any controller input once streaming starts", "Fixed using multiple PS5 controllers connected via the Steam Link app", "Fixed black screen with PipeWire capture under KDE plasma"]],
            [["Steam Cloud"], ["Fix infinite retry loop for failed background file downloads", "Increased the allowed upload time to enable transferring large save game files for users who have limited upload bandwidth", "Automatically sync Cloud files for installed games at startup", "Fix issue causing extra work on reconnect to Steam"]],
            [["Linux"], ["Reduced sizes of Vulkan pre-caching datasets by splitting and versioning them according to Proton versions and graphics driver capabilities. As a result, the datasets will start from scratch after updating.", "Fix checking for execute privileges when picking a Steam Library folder location"]],
            [["macOS"], ["Add OS support for macOS 12 “Monterey”", "Fix browser user agent causing some web sites to misidentify Steam Overlay web browser"]]
        ]
    },
    {
        title: "Steam Client Update, July 21",
        date: "Thu, July 22",
        info: [
            [["Steam Cloud"], ["Fixed files being deleted from some games which have /../ path fragments in their AutoCloud configuration"]],
        ]
    },
    {
        title: "Steam Client Update, July 13",
        date: "Wed, July 14",
        info: [
            [["General"], ["Fixed temporary UI hang when a game quits in some circumstances", "Fixed crash writing to closed files", "Fixed duplicate events appearing in the app detail activity feed"]],
            [["Steam Input"], ["Added support for the Share button on the PowerA Fusion Pro 2 and the PDP Xbox Series X Afterglow controllers when Xbox Extended Feature Support is enabled.", "Added support for the Amazon Luna Controller", "Added support for the Razer Wolverine Tournament Edition controller", "Added experimental support for the Amazon Luna Controller connected via Bluetooth"]],
            [["SteamNetworkingSockets"], ["Improved performance when there are many P2P connections", "Fixed bug causing NAT traversal to not work for 64-bit applications on Linux", "Reduced route flapping and excessive sending of rendezvous messages for P2P connections", "Improved performance of P2P connections"]],
            [["Steam Cloud"], ["Fixed persistent SteamVR file conflict", "Increased log detail regarding Steam Cloud file conflicts"]],
            [["Remote Play"], ["Added an option to change the overlay hotkey (by default ESC)", "Fixed host crash when ICE negotiation is not enabled or fails", "Fixed video resolution streaming to iPad Pro"]]
        ]
    },
    {
        title: "Steam Client Update, June 7",
        date: "Tue, June 8",
        info: [
            [["General"], ["Fixed bug preventing upload of game download statistics", "Fixed occasional crash on Steam startup", "Fixed bug causing some values in the server browser to show up as negative", "Fixed bug adding library folders on external drives in some cases"]],
            [["Mac"], ["Fixed bug preventing game launches on macOS 10.12", "Fixed intermittent crash in Dota 2 during game startup"]],
            [["Steam Input"], ["Fixed bug with chorded inputs bound to the ABXY buttons", "Fixed bug with square deadzones on joysticks where full deflection would result in mirrored output"]],
            [["Chat"], ["Added an option to upload your last in-game screenshot through the paperclip menu in a chat window", "Fixed popup windows being created with wrong position and size on Windows when running on multiple monitors with different DPI settings"]],
            [["Steam Input"], ["Fixed some cases where modes bound in Action Set Layers would not work or improperly show up as empty", "Fixed issue with repeated events not firing properly for Trackpads bound as a Button Pad", "Added more legacy trigger settings to trigger modes in Steam Input API configurations", "Fixed an issue with binding joystick axis outputs to buttons"]]
        ]
    },
    {
        title: "Steam Client Update, May 17",
        date: "Tue, May 18",
        info: [
            [["General"], ["Fix a possible crash for users with around 25,000 or more games", "Fix a hitch for users with large libraries after clicking past the first page of the install wizard.", "Fixed current step status being truncated in the Library while installing a game", "Fixed a bug with not restoring missing symlinks when verifying integrity of game files"]],
            [["Library"], ["Achievements that track progress will now display progress in their hovers on the game details page"]],
            [["Steam Input"], ["Added options for joystick deadzones sources. Modes can now use no deadzone, the deadzone from the controller’s calibration, or a custom deadzone. Joystick modes bound to joystick outputs will default to have no deadzone.", "Increased responsiveness of Action Set and Action Set Layer changes bound to button presses", "Fixed an issue where radial menus could send the previously highlighted item when clicking before the radial menu is fully on-screen", "Fixed some cases where games rapidly turning on and off rumble could cause hitches for Switch Controllers."]],
            [["Remote Play"], ["Fixed error launching the streaming client on some Windows systems", "Fixed potential streaming client crash when starting the stream", "Use VA-API 0.2 on Linux for optional hardware decode functionality, depends on up to date 32-bit libva packages for your distribution"]],
            [["macOS"], ["Fix mouse input sometimes failing to work in browser window iframes."]],
            [["Linux"], ["Offer better diagnostics when Steam Play tools cannot be removed due to dependencies. Improve overall robustness.", "Updated fossilize layer to be compatible with recent Proton Experimental"]]
        ]
    },
    {
        title: "Steam Client Update, Apr 12",
        date: "Tue, April 13",
        info: [
            [["General"], ["Fix long delay before first game launch of the session for users with thousands of shared screenshots"]],
            [["Remote Play"], ["Added 40 Mbit and 75 Mbit custom bitrate options", "Fixed controller hotplug support for Unity games", "Replaced the menubar with an overlay that comes up when holding the ESC key", "Only show keyboard and controller toasts if there's input from those devices", "Fixed non-breaking-space display in French and German", "Fixed font rendering in Chinese, Japanese, Korean, Thai, and Vietnamese"]],
            [["Steam Cloud"], ["Improve performance by uploading/downloading multiple files in parallel"]],
            [["Soundtracks"], ["Added support for localized album covers"]],
            [["SteamNetworkingSockets"], ["Improved peer-to-peer routing to better utilize relays in data centers not connected to the Valve backbone"]]
        ]
    },
    {
        title: "Steam Client Update, Mar 22",
        date: "Tue, March 23",
        info: [
            [["General"], ["Added spelling suggestions to Library and Steam Chat context menus", "Showing size on disk for DLCs under game properties", "Fixed showing localized game names in pop-up notifications", "The Steamworks SDK redistributable used by dedicated servers has been brought up-to-date with this release"]],
            [["In-Game Overlay"], ["Improved responsiveness of web based UI and of the friends and chat UI inside the in-game overlay", "Fixed overlay support for 32-bit Vulkan applications on Windows"]],
            [["Steam Input"], ["When using Steam Input, active controllers fill in XInput slots in the order they generate input (e.g. the first person to click A will be player 1 in many games", "Fixed issues with game detecting controllers while the overlay is up on Windows", "Fix issue with analog axes in the Windows version of Slay the Spire"]],
            [["Remote Play"], ["By default stream at 1080p to prevent accidental 4K streams", "Added an option to stream up to 8K resolutions (results may vary depending on hardware)", "Added a menubar at the top that gives you an easy way to stop streaming", "Added a toast when you connect a controller that shows how to bring up additional controller features", "Improved audio range when using volume controls"]]
        ]
    },
    {
        title: "Steam Client Update, Mar 3",
        date: "Tue, March 3",
        info: [
            [["General"], ["Fixed temporary UI hang when a game quits in some circumstances", "Fixed crash writing to closed files", "Fixed duplicate events appearing in the app detail activity feed"]],
            [["Steam Input"], ["Added support for the Share button on the PowerA Fusion Pro 2 and the PDP Xbox Series X Afterglow controllers when Xbox Extended Feature Support is enabled.", "Added support for the Amazon Luna Controller", "Added support for the Razer Wolverine Tournament Edition controller", "Added experimental support for the Amazon Luna Controller connected via Bluetooth"]],
            [["SteamNetworkingSockets"], ["Improved performance when there are many P2P connections", "Fixed bug causing NAT traversal to not work for 64-bit applications on Linux", "Reduced route flapping and excessive sending of rendezvous messages for P2P connections", "Improved performance of P2P connections"]],
            [["Steam Cloud"], ["Fixed persistent SteamVR file conflict", "Increased log detail regarding Steam Cloud file conflicts"]],
            [["Remote Play"], ["Added an option to change the overlay hotkey (by default ESC)", "Fixed host crash when ICE negotiation is not enabled or fails", "Fixed video resolution streaming to iPad Pro"]]
        ]
    },
]


const jobs = [
    {
        title: "Art",
        person: [
            ["3D Character Artist", "https://hh.ru/"],
            ["2D Artist", "https://hh.ru/"],
            ["Technical Artist", "https://hh.ru/"],
            ["Animator", "https://hh.ru/"],
            ["3D Environment Artist", "https://hh.ru/"],
            ["Effects Artist", "https://hh.ru/"],
        ]
    },
    {
        title: "Audio",
        person: [
            ["Sound Designer", "https://hh.ru/"],
            ["Acoustic Systems Engineer", "https://hh.ru/"],
            ["Audio Programmer", "https://hh.ru/"],
        ]
    },
    {
        title: "Business Development",
        person: [
            ["Business Development", "https://hh.ru/"],
            ["Steam Partner Technical Account Manager", "https://hh.ru/"],
            ["Business Development", "https://hh.ru/"],
        ]
    },
    {
        title: "Data Science",
        person: [
            ["Economist", "https://hh.ru/"],
            ["Psychologist", "https://hh.ru/"],
            ["Statistician / Data Scientist", "https://hh.ru/"],
        ]
    },
    {
        title: "Game Design",
        person: [
            ["Level Designer", "https://hh.ru/"],
            ["UX Motion Designer", "https://hh.ru/"],
            ["Psychologist", "https://hh.ru/"],
            ["Sound Designer", "https://hh.ru/"],
            ["Technical Artist", "https://hh.ru/"],
            ["Game Development Software Engineer", "https://hh.ru/"],
            ["Writer", "https://hh.ru/"],
            ["Game Design", "https://hh.ru/"],
        ]
    },
    {
        title: "Hardware Engineering",
        person: [
            ["Electrical Engineer", "https://hh.ru/"],
            ["Industrial Designer", "https://hh.ru/"],
            ["Software Engineer for VR & Hardware", "https://hh.ru/"],
            ["Optical Engineer", "https://hh.ru/"],
            ["Mechanical Engineer", "https://hh.ru/"],
            ["Acoustic Systems Engineer", "https://hh.ru/"],
            ["Display Engineer", "https://hh.ru/"],
            ["Hardware Engineering", "https://hh.ru/"],
        ]
    },
    {
        title: "Product Design",
        person: [
            ["Industrial Designer", "https://hh.ru/"],
            ["Visual & User Experience Designer", "https://hh.ru/"],
            ["UX Motion Designer", "https://hh.ru/"],
            ["Design", "https://hh.ru/"],
        ]
    },
    {
        title: "",
        person: [
            ["Anti-Cheat Software Engineer", "https://hh.ru/"],
            ["Steam Software Engineer", "https://hh.ru/"],
            ["Steam Database Administrator", "https://hh.ru/"],
            ["Web Applications Software Engineer", "https://hh.ru/"],
            ["Steam Partner Technical Account Manager", "https://hh.ru/"],
            ["Technical Artist", "https://hh.ru/"],
            ["SteamOS Software Engineer", "https://hh.ru/"],
            ["Software Engineer for VR & Hardware", "https://hh.ru/"],
            ["Game Development Software Engineer", "https://hh.ru/"],
            ["Audio Programmer", "https://hh.ru/"],
            ["Software Engineering", "https://hh.ru/"],
        ]
    }
]









const works = [
    {
        title: 'Joe van den Heuvel. August 2021. "Character Locomotion in Half-Life: Alyx." SIGGRAPH 2021.',
        link: 'http://media.steampowered.com/apps/valve/2021/Half-Life_Alyx_Locomotion_Slides.pdf',
    },
    {
        title: 'Alex Vlachos. March 2016. "Advanced VR Rendering Performance." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2016/Alex_Vlachos_Advanced_VR_Rendering_Performance_GDC2016.pdf',
    },
    {
        title: 'Dan Ginsburg, et al. March 2016. "Practical Development for Vulkan." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2016/Dan_Ginsburg_Source2_Vulkan_Perf_Lessons.pdf',
    },
    {
        title: 'Zach Barth. October 2015. "Developing Room-Scale VR Games." Full Indie Summit.',
        link: 'http://media.steampowered.com/apps/valve/2015/Zach_Barth_Developing_Room-Scale_VR_Games.pdf',
    },
    {
        title: 'Sergiy Migdalskiy. March 2015. "Physics for Game Developers: Physics Optimization Strategies." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2015/Migdalskiy_Sergiy_Physics_Optimization_Strategies.pdf',
    },
    {
        title: 'Dirk Gregorius. March 2015. "Robust Contact Creation for Physics Simulations." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2015/DirkGregorius_Contacts.pdf',
    },
    {
        title: 'Alex Vlachos. March 2015. "Advanced VR Rendering." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2015/Alex_Vlachos_Advanced_VR_Rendering_GDC2015.pdf',
    },
    {
        title: 'Pierre-Loup Griffais, et al. March 2015. "Vulkan: The Future of High-Performance Graphics." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2015/Pierre-Loup_Griffais_and_John_McDonald_Vulkan.pdf',
    },
    {
        title: 'Sergiy Migdalskiy. March 2014. "Physics Debugging Techniques." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2014/Sergiy_Migdalskiy_Debugging_Techniques.pdf',
    },
    {
        title: 'Dirk Gregorius. March 2014. "Implementing QuickHull." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2014/DirkGregorius_ImplementingQuickHull.pdf',
    },
    {
        title: 'Bronwen Grimes. March 2014. "Building the Content that Drives the Counter-Strike: Global Offensive Economy." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2014/gdc_2014_grimes_csgo_econ_content.pdf',
    },
    {
        title: 'Joe Ludwig. March 2013. "Lessons learned porting Team Fortress 2 to Virtual Reality." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2013/Team_Fortress_in_VR_GDC.pdf',
    },
    {
        title: 'Michael Abrash. March 2013. "Why Virtual Reality Is Hard (and where it might be going)." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2013/MAbrashGDC2013.pdf',
    },
    {
        title: 'Dirk Gregorius. March 2013. "The Separating Axis Test Between Convex Polyhedra." Game Developers Conference.',
        link: 'http://media.steampowered.com/apps/valve/2013/DGregorius_GDC2013.zip',
    },
    {
        title: 'Joe Ludwig. March 2012. "TF2 - From The Orange Box to Free to Play in "Just" Four Years!." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2012/TF2_Orange_Box_To_Free_To_Play_GDC2012.pdf',
    },
    {
        title: 'Elan Ruskin. March 2012. "Rule Databases for Contextual Dialog and Game Logic." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2012/GDC2012_Ruskin_Elan_DynamicDialog.pdf',
    },
    {
        title: 'Bruce Dawson. August 2011. "How Valve Makes Games Better with Xperf." Microsoft GameFest.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2011/ValveXperf-Dawson.pdf',
    },
    {
        title: 'Bronwen Grimes. March 2011. "Making and Using Non-Standard Textures: Manipulating UVs through Color Data in Portal 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2011/gdc_2011_grimes_nonstandard_textures.pdf',
    },
    {
        title: 'Mike Ambinder. March 2011. "Biofeedback in Gameplay: How Valve Measures Physiology to Enhance Gaming Experience." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2011/ValveBiofeedback-Ambinder.pdf',
    },
    {
        title: 'Alex Vlachos. June 2010. "Water Flow in Portal 2." SIGGRAPH Course on Advances in Real-Time Rendering in 3D Graphics and Games.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2010/siggraph2010_vlachos_waterflow.pdf',
    },
    {
        title: 'Alex Vlachos. March 2010. "Rendering Wounds in Left 4 Dead 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2010/gdc2010_vlachos_l4d2wounds.pdf',
    },
    {
        title: 'Bronwen Grimes. March 2010. "Shading a Bigger, Better Sequel: Techniques in Left 4 Dead 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2010/GDC10_ShaderTechniquesL4D2.pdf',
    },
    {
        title: 'Michael Booth. 2009. "The AI Systems of Left 4 Dead." Artificial Intelligence and Interactive Digital Entertainment Conference (Stanford University).',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2009/ai_systems_of_l4d_mike_booth.pdf',
    },
    {
        title: 'Michael Booth. March 2009. "Replayable Cooperative Game Design: Left 4 Dead." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2009/GDC2009_ReplayableCooperativeGameDesign_Left4Dead.pdf',
    },
    {
        title: 'Mike Ambinder. March 2009. "Valve’s Approach to Playtesting: The Application of Empiricism." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2009/GDC2009_ValvesApproachToPlaytesting.pdf',
    },
    {
        title: 'Jason Mitchell. November 2008 "Connecting Visuals to Gameplay at Valve." Montreal International Game Summit.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/MIGS08_ConnectingVisualsToGameplay.pdf',
    },
    {
        title: 'Moby Francke and Randy Lundeen. July 2008. "How Valve Connects Art Direction to Gameplay." Microsoft GameFest.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/GameFest08_ArtInSource.pdf',
    },
    {
        title: 'Kim Swift and Erik Wolpaw. February 2008. "Integrating Narrative and Design: A Portal Post-Mortem." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/GDC2008_PortalPostMortem.pdf',
    },
    {
        title: 'Jason Mitchell. February 2008. "Stylization With a Purpose: The Illustrative World of Team Fortress 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/GDC2008_StylizationWithAPurpose_TF2.pdf',
    },
    {
        title: 'Elan Ruskin. February 2008. "How To Go From PC to Cross Platform Development Without Killing Your Studio." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/GDC2008_CrossPlatformDevelopment.pdf',
    },
    {
        title: 'Alex Vlachos. February 2008. "Post Processing in The Orange Box." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2008/GDC2008_PostProcessingInTheOrangeBox.pdf',
    },
    {
        title: 'Jason Mitchell. Moby Francke and Dhabih Eng. 2007. "Illustrative Rendering in Team Fortress 2." International Symposium on Non-Photorealistic Animation and Rendering.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2007/NPAR07_IllustrativeRenderingInTeamFortress2_Slides.pdf',
    },
    {
        title: 'Tom Leonard. March 2007 "Dragged Kicking and Screaming: Source Multicore." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2007/GDC2007_SourceMulticore.pdf',
    },
    {
        title: 'Jason Mitchell. Gary McTaggart and Chris Green. 2006 "Shading in Valve’s Source Engine." SIGGRAPH Course on Advanced Real-Time Rendering in 3D Graphics and Games.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2006/SIGGRAPH06_Course_ShadingInValvesSourceEngine_Slides.pdf',
    },
    {
        title: 'Gary McTaggart. 2006. "HDR in Valve’s Source Engine." SIGGRAPH Course on High-Dynamic-Range Imaging: Theory and Applications.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2006/SIGGRAPH06_Course_HDRInValvesSourceEngine_Slides.pdf',
    },
    {
        title: 'David Speyrer and Brian Jacobson. March 2006. "Valve’s Design Process for Creating Half-Life 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2006/GDC2006_HL2DesignProcess.pdf',
    },
    {
        title: 'Jay Stelly. March 2006. "Physical Gameplay in Half-Life 2." Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2006/GDC2006_PhysicalGameplayInHL2.pdf',
    },
    {
        title: 'Brian Jacobson. 2005. "Sound Practices of Games Business and Design." Australian Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2005/AGDC2005_SoundPractices.pdf',
    },
    {
        title: 'Gary McTaggart. March 2004. "Half-Life 2 / Valve Source Shading." Direct3D Tutorial Day. Game Developers Conference.',
        link: 'https://cdn.akamai.steamstatic.com/apps/valve/2004/GDC2004_Half-Life2_Shading.pdf',
    }
]



const team  = [
    {
        name: "Aaron Barber",
        mail: "person@gmail.com",
        image: "abaddon.png",
        position: "art",
    },
    {
        name: "Ariel Diaz",
        mail: "person@gmail.com",
        image: "alchemist.png",
        position: "art",
    },
    {
        name: "Bram Eulaers",
        mail: "person@gmail.com",
        image: "ancient_apparition.png",
        position: "art",
    },
    {
        name: "Chris Welch",
        mail: "person@gmail.com",
        image: "anti_mage.png",
        position: "art",
    },
    {
        name: "Dan Rosas Paulsen",
        mail: "person@gmail.com",
        image: "arc_warden.png",
        position: "art",
    },
    {
        name: "Eric Kirchmer",
        mail: "person@gmail.com",
        image: "axe.png",
        position: "art",
    },
    {
        name: "Erik Robson",
        mail: "person@gmail.com",
        image: "bane.png",
        position: "art",
    },
    {
        name: "Jason Brashill",
        mail: "person@gmail.com",
        image: "batrider.png",
        position: "art",
    },
    {
        name: "Matt Charlesworth",
        mail: "person@gmail.com",
        image: "beastmaster.png",
        position: "art",
    },
    {
        name: "Max Aristov",
        mail: "person@gmail.com",
        image: "bloodseeker.png",
        position: "art",
    },
    {
        name: "Tristan Reidford",
        mail: "person@gmail.com",
        image: "bounty_hunter.png",
        position: "art",
    },
    {
        name: "Wade Schin",
        mail: "person@gmail.com",
        image: "brewmaster.png",
        position: "art",
    },
    {
        name: "Mike Morasky",
        mail: "person@gmail.com",
        image: "bristleback.png",
        position: "audio",
    },
    {
        name: "Nathaniel Blue",
        mail: "person@gmail.com",
        image: "broodmother.png",
        position: "audio",
    },
    {
        name: "Tim Larkin",
        mail: "person@gmail.com",
        image: "centaur_warrunner.png",
        position: "audio",
    },
    {
        name: "Tobin Buttram",
        mail: "person@gmail.com",
        image: "chaos_knight.png",
        position: "audio",
    },
    {
        name: "Adam Klaff",
        mail: "person@gmail.com",
        image: "chen.png",
        position: "business development",
    },
    {
        name: "Connor Malone",
        mail: "person@gmail.com",
        image: "clinkz.png",
        position: "business development",
    },
    {
        name: "DJ Powers",
        mail: "person@gmail.com",
        image: "clockwerk.png",
        position: "business development",
    },
    {
        name: "Nathaniel Blue",
        mail: "person@gmail.com",
        image: "crystal_maiden.png",
        position: "business development",
    },
    {
        name: "Ricky Uy",
        mail: "person@gmail.com",
        image: "dark_seer.png",
        position: "business development",
    },
    {
        name: "Shreya Liu",
        mail: "person@gmail.com",
        image: "dark_willow.png",
        position: "business development",
    },
    {
        name: "David Underwood",
        mail: "person@gmail.com",
        image: "dazzle.png",
        position: "customer support",
    },
    {
        name: "Jared Christen",
        mail: "person@gmail.com",
        image: "death_prophet.png",
        position: "customer support",
    },
    {
        name: "Jenni Salmi",
        mail: "person@gmail.com",
        image: "disruptor.png",
        position: "customer support",
    },
    {
        name: "Patricia Zavalza",
        mail: "person@gmail.com",
        image: "doom.png",
        position: "customer support",
    },
    {
        name: "John McDonald",
        mail: "person@gmail.com",
        image: "dragon_knight.png",
        position: "data science",
    },
    {
        name: "Kristian Miller",
        mail: "person@gmail.com",
        image: "drow_ranger.png",
        position: "data science",
    },
    {
        name: "Matt Rhoten",
        mail: "person@gmail.com",
        image: "earth_spirit.png",
        position: "data science",
    },
    {
        name: "Mike Ambinder",
        mail: "person@gmail.com",
        image: "earthshaker.png",
        position: "data science",
    },
    {
        name: "Alexander Mark",
        mail: "person@gmail.com",
        image: "elder_titan.png",
        position: "game design",
    },
    {
        name: "Ariel Diaz",
        mail: "person@gmail.com",
        image: "ember_spirit.png",
        position: "game design",
    },
    {
        name: "Brandon Idol",
        mail: "person@gmail.com",
        image: "enchantress.png",
        position: "game design",
    },
    {
        name: "Brett Sanborn",
        mail: "person@gmail.com",
        image: "enigma.png",
        position: "game design",
    },
    {
        name: "Christine Phelan",
        mail: "person@gmail.com",
        image: "faceless_void.png",
        position: "game design",
    },
    {
        name: "Dave Riller",
        mail: "person@gmail.com",
        image: "grimstroke.png",
        position: "game design",
    },
    {
        name: "Eddie Parker",
        mail: "person@gmail.com",
        image: "gyrocopter.png",
        position: "game design",
    },
    {
        name: "Erik Robson",
        mail: "person@gmail.com",
        image: "hoodwink.png",
        position: "game design",
    },
    {
        name: "Greg Cherlin",
        mail: "person@gmail.com",
        image: "huskar.png",
        position: "game design",
    },
    {
        name: "Ido Magal",
        mail: "person@gmail.com",
        image: "io.png",
        position: "game design",
    },
    {
        name: "Iikka Keranen",
        mail: "person@gmail.com",
        image: "jakiro.png",
        position: "game design",
    },
    {
        name: "Jake Rodkin",
        mail: "person@gmail.com",
        image: "juggernaut.png",
        position: "game design",
    },
    {
        name: "Jeff Ballinger",
        mail: "person@gmail.com",
        image: "keeper_of_the_light.png",
        position: "game design",
    },
    {
        name: "Jeff Lane",
        mail: "person@gmail.com",
        image: "kunkka.png",
        position: "game design",
    },
    {
        name: "John Morello",
        mail: "person@gmail.com",
        image: "legion_commander.png",
        position: "game design",
    },
    {
        name: "Karen Prell",
        mail: "person@gmail.com",
        image: "leshrac.png",
        position: "game design",
    },
    {
        name: "Ken Banks",
        mail: "person@gmail.com",
        image: "lich.png",
        position: "game design",
    },
    {
        name: "Kyle Sommer",
        mail: "person@gmail.com",
        image: "lifestealer.png",
        position: "game design",
    },
    {
        name: "Matt Charlesworth",
        mail: "person@gmail.com",
        image: "lina.png",
        position: "game design",
    },
    {
        name: "Matt Logue",
        mail: "person@gmail.com",
        image: "lion.png",
        position: "game design",
    },
    {
        name: "Mike Ambinder",
        mail: "person@gmail.com",
        image: "lone_druid.png",
        position: "game design",
    },
    {
        name: "Mike Belzer",
        mail: "person@gmail.com",
        image: "luna.png",
        position: "game design",
    },
    {
        name: "Miles Estes",
        mail: "person@gmail.com",
        image: "lycan.png",
        position: "game design",
    },
    {
        name: "Phil Co",
        mail: "person@gmail.com",
        image: "magnus.png",
        position: "game design",
    },
    {
        name: "Robin Walker",
        mail: "person@gmail.com",
        image: "medusa.png",
        position: "game design",
    },
    {
        name: "Sean Vanaman",
        mail: "person@gmail.com",
        image: "meepo.png",
        position: "game design",
    },
    {
        name: "Robin Walker",
        mail: "person@gmail.com",
        image: "mirana.png",
        position: "game design",
    },
    {
        name: "Sean Vanaman",
        mail: "person@gmail.com",
        image: "monkey_king.png",
        position: "game design",
    },
    {
        name: "Simonne Brown",
        mail: "person@gmail.com",
        image: "morphling.png",
        position: "game design",
    },
    {
        name: "Tom Bui",
        mail: "person@gmail.com",
        image: "naga_siren.png",
        position: "game design",
    },
    {
        name: "Tristan Reidford",
        mail: "person@gmail.com",
        image: "natures_prophet.png",
        position: "game design",
    },
    {
        name: "Ben Jackson",
        mail: "person@gmail.com",
        image: "night_stalker.png",
        position: "hardware engineering",
    },
    {
        name: "Gordon Stoll",
        mail: "person@gmail.com",
        image: "nyx_assassin.png",
        position: "hardware engineering",
    },
    {
        name: "Jeff Leinbaugh",
        mail: "person@gmail.com",
        image: "ogre_magi.png",
        position: "hardware engineering",
    },
    {
        name: "Jeff Mucha",
        mail: "person@gmail.com",
        image: "omniknight.png",
        position: "hardware engineering",
    },
    {
        name: "Jeremy Selan",
        mail: "person@gmail.com",
        image: "oracle.png",
        position: "hardware engineering",
    },
    {
        name: "Johnny Deng",
        mail: "person@gmail.com",
        image: "outworld_destroyer.png",
        position: "hardware engineering",
    },
    {
        name: "Michael Baseflug",
        mail: "person@gmail.com",
        image: "pangolier.png",
        position: "hardware engineering",
    },
    {
        name: "Mike Ambinder",
        mail: "person@gmail.com",
        image: "phantom_assassin.png",
        position: "hardware engineering",
    },
    {
        name: "Shreya Liu",
        mail: "person@gmail.com",
        image: "phantom_lancer.png",
        position: "hardware engineering",
    },
    {
        name: "Tor Krog",
        mail: "person@gmail.com",
        image: "phoenix.png",
        position: "hardware engineering",
    },
    {
        name: "Amy Baisch",
        mail: "person@gmail.com",
        image: "puck.png",
        position: "human resources",
    },
    {
        name: "Elizabeth Ratto",
        mail: "person@gmail.com",
        image: "pudge.png",
        position: "human resources",
    },
    {
        name: "Sara Charhon",
        mail: "person@gmail.com",
        image: "pugna.png",
        position: "human resources",
    },
    {
        name: "Adam Stevens",
        mail: "person@gmail.com",
        image: "queen_of_pain.png",
        position: "product design",
    },
    {
        name: "Alden Kroll",
        mail: "person@gmail.com",
        image: "razor.png",
        position: "product design",
    },
    {
        name: "Carl Conlee",
        mail: "person@gmail.com",
        image: "riki.png",
        position: "product design",
    },
    {
        name: "Chris Shambaugh",
        mail: "person@gmail.com",
        image: "rubick.png",
        position: "product design",
    },
    {
        name: "Christen Coomer",
        mail: "person@gmail.com",
        image: "sand_king.png",
        position: "product design",
    },
    {
        name: "Dhabih Eng",
        mail: "person@gmail.com",
        image: "shadow_demon.png",
        position: "product design",
    },
    {
        name: "Emily Kent",
        mail: "person@gmail.com",
        image: "shadow_fiend.png",
        position: "product design",
    },
    {
        name: "Greg Coomer",
        mail: "person@gmail.com",
        image: "shadow_shaman.png",
        position: "product design",
    },
    {
        name: "Jay Shaw",
        mail: "person@gmail.com",
        image: "silencer.png",
        position: "product design",
    },
    {
        name: "John Ikeda",
        mail: "person@gmail.com",
        image: "skywrath_mage.png",
        position: "product design",
    },
    {
        name: "Lawrence Yang",
        mail: "person@gmail.com",
        image: "slardar.png",
        position: "product design",
    },
    {
        name: "Mike Ambinder",
        mail: "person@gmail.com",
        image: "slark.png",
        position: "product design",
    },
    {
        name: "Quintin Doroquez",
        mail: "person@gmail.com",
        image: "snapfire.png",
        position: "product design",
    },
    {
        name: "Shawn Zabecki",
        mail: "person@gmail.com",
        image: "sniper.png",
        position: "product design",
    },
    {
        name: "Simonne Brown",
        mail: "person@gmail.com",
        image: "spectre.png",
        position: "product design",
    },
    {
        name: "Tom Bui",
        mail: "person@gmail.com",
        image: "spirit_breaker.png",
        position: "product design",
    },
    {
        name: "Tucker Spofford",
        mail: "person@gmail.com",
        image: "storm_spirit.png",
        position: "product design",
    },
    {
        name: "Adil Sardar",
        mail: "person@gmail.com",
        image: "sven.png",
        position: "software engineering",
    },
    {
        name: "Al Farnsworth",
        mail: "person@gmail.com",
        image: "techies.png",
        position: "software engineering",
    },
    {
        name: "Anish Chandak",
        mail: "person@gmail.com",
        image: "templar_assassin.png",
        position: "software engineering",
    },
    {
        name: "Ben Burbank",
        mail: "person@gmail.com",
        image: "terrorblade.png",
        position: "software engineering",
    },
    {
        name: "Ben Jackson",
        mail: "person@gmail.com",
        image: "tidehunter.png",
        position: "software engineering",
    },
    {
        name: "Brett Sanborn",
        mail: "person@gmail.com",
        image: "timbersaw.png",
        position: "software engineering",
    },
    {
        name: "Brian Jacobson",
        mail: "person@gmail.com",
        image: "tinker.png",
        position: "software engineering",
    },
    {
        name: "Charlie Brown",
        mail: "person@gmail.com",
        image: "tiny.png",
        position: "software engineering",
    },
    {
        name: "Chris Carollo",
        mail: "person@gmail.com",
        image: "treant_protector.png",
        position: "software engineering",
    },
    {
        name: "Chris Kadar",
        mail: "person@gmail.com",
        image: "troll_warlord.png",
        position: "software engineering",
    },
    {
        name: "Jay Pinkerton",
        mail: "person@gmail.com",
        image: "tusk.png",
        position: "writing",
    },
    {
        name: "Jon Blakeley",
        mail: "person@gmail.com",
        image: "underlord.png",
        position: "writing",
    },
    {
        name: "Kaci Aitchison Boyle",
        mail: "person@gmail.com",
        image: "undying.png",
        position: "writing",
    },
    {
        name: "Sean Vanaman",
        mail: "person@gmail.com",
        image: "ursa.png",
        position: "writing",
    },
    {
        name: "Steve Jaros",
        mail: "person@gmail.com",
        image: "vengeful_spirit.png",
        position: "writing",
    },
    {
        name: "Alireza Razmpoosh",
        mail: "person@gmail.com",
        image: "venomancer.png",
        position: "writing",
    },
    {
        name: "Andrew Kim",
        mail: "person@gmail.com",
        image: "viper.png",
        position: "other experts",
    },
    {
        name: "Augusta Butlin",
        mail: "person@gmail.com",
        image: "visage.png",
        position: "other experts",
    },
    {
        name: "Dario Casali",
        mail: "person@gmail.com",
        image: "void_spirit.png",
        position: "other experts",
    },
    {
        name: "David Speyrer",
        mail: "person@gmail.com",
        image: "warlock.png",
        position: "other experts",
    },
    {
        name: "Don Holden",
        mail: "person@gmail.com",
        image: "weaver.png",
        position: "other experts",
    },
    {
        name: "Doug Lombardi",
        mail: "person@gmail.com",
        image: "windranger.png",
        position: "other experts",
    },
    {
        name: "Eric Smith",
        mail: "person@gmail.com",
        image: "winter_wyvern.png",
        position: "other experts",
    },
    {
        name: "Erik Johnson",
        mail: "person@gmail.com",
        image: "witch_doctor.png",
        position: "other experts",
    },
    {
        name: "Scott Lynch",
        mail: "person@gmail.com",
        image: "wraith_king.png",
        position: "other experts",
    },
    {
        name: "Sharon Wang",
        mail: "person@gmail.com",
        image: "zeus.png",
        position: "other experts",
    },
]