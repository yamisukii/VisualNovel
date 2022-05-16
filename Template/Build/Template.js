"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // **** DEFINITIONEN ****
    // define transitions
    VisualNovel.transitions = {
        puzzle: {
            duration: 1,
            alpha: "/Template/FreeTransitions/jigsaw_06.jpg",
            edge: 1
        }
    };
    VisualNovel.sound = {
        // themes
        nightclub: "/Template/Audio/Nightclub.ogg",
        dystopian: "/Template/Audio/Dystopian.ogg"
        // SFX
        // click: "Pfad"
    };
    VisualNovel.locations = {
        nightpark: {
            name: "Nightpark",
            // background: "/Template/Images/Backgrounds/starry.gif"
            background: "/Template/Images/Backgrounds/Bedroom.png"
        },
        starry: {
            name: "Starry",
            background: "/Template/Images/Backgrounds/bg_city_sunset.png"
        },
        nightStreets: {
            name: "Starry",
            background: "/Template/Images/Backgrounds/nightStreets.jpg"
        }
    };
    VisualNovel.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Template/Images/Characters/aisaka_angry.png",
                happy: "/Template/Images/Characters/aisaka_happy.png",
                upset: ""
            }
        },
        kohana: {
            name: "Kohana",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "/Template/Images/Characters/kohana_happy.png",
                upset: "/Template/Images/Characters/kohana_upset.png"
            }
        },
        peter: {
            name: "Peter",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                walk: "/Template/Images/Characters/peter.png",
            }
        }
    };
    VisualNovel.items = {
        a: {
            name: "DeathNote",
            description: "Schreib nicht dein eigenen Namen rein! ",
            image: "/Template/Images/Items/book.png",
            // static: true
        },
        b: {
            name: "DeathNote",
            description: "Schreib nicht dein eigenen Namen rein! ",
            image: "/Template/Images/Items/book.png",
            static: true
        },
        class: {
            name: "DeathNote",
            description: "Schreib nicht dein eigenen Namen rein! ",
            image: "/Template/Images/Items/book.png",
            static: true
        },
        d: {
            name: "DeathNote",
            description: "Schreib nicht dein eigenen Namen rein! ",
            image: "/Template/Images/Items/book.png",
            static: true
        },
        e: {
            name: "DeathNote",
            description: "Schreib nicht dein eigenen Namen rein! ",
            image: "/Template/Images/Items/book.png",
            static: true
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        VisualNovel.gameMenu = VisualNovel.ƒS.Menu.create(VisualNovel.inGameMenuButtons, VisualNovel.buttonFunctionalities, "gameMenuCSSclass");
        VisualNovel.buttonFunctionalities("Close");
        let scenes = [
            // { scene: Intro, name: "First Scene" },
            { scene: VisualNovel.GifAnimator, name: "Text Scene" },
            { scene: VisualNovel.HowToMakeChoices, name: 'Choices' },
        ];
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.menuIsOpen = true;
    // **** DATEN DIE GESPEICHERT WERDEN SOLLEN ****
    VisualNovel.dataForSave = {
        nameProtaginst: "",
        score: 0
    };
    // **** CREDITS ****
    function showCredits() {
        VisualNovel.ƒS.Text.setClass("class2");
        VisualNovel.ƒS.Text.print("Halleluja");
    }
    VisualNovel.showCredits = showCredits;
    // **** MENÜ ****
    // Buttons
    VisualNovel.inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case VisualNovel.inGameMenuButtons.save:
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.inGameMenuButtons.load:
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.inGameMenuButtons.close:
                VisualNovel.gameMenu.close();
                VisualNovel.menuIsOpen = false;
                break;
            case VisualNovel.inGameMenuButtons.credits:
                showCredits();
        }
    }
    VisualNovel.buttonFunctionalities = buttonFunctionalities;
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VisualNovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.I:
                console.log("Open Inventory");
                await VisualNovel.ƒS.Inventory.open();
            case VisualNovel.ƒ.KEYBOARD_CODE.ESC:
                console.log("Close Inventory");
                VisualNovel.ƒS.Inventory.close();
                // ƒS.Inventory.close();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.M:
                if (VisualNovel.menuIsOpen) {
                    console.log("Close");
                    VisualNovel.gameMenu.close();
                    VisualNovel.menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    VisualNovel.gameMenu.open();
                    VisualNovel.menuIsOpen = true;
                }
                break;
        }
    }
    VisualNovel.hndKeyPress = hndKeyPress;
    VisualNovel.uiElement = document.querySelector("[type=interface]");
    VisualNovel.dataForSave = VisualNovel.ƒS.Progress.setData(VisualNovel.dataForSave, VisualNovel.uiElement);
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    /**
    * For using this class:
    * 1.
    * --> give CanvasElement in HTML 'id = "screen"'
    * --> give sceneElemen in HTML 'id = "scene"'
    *
    * 2. create new Instance with the videoPath
    *  --> let video: VideoCreator = new VideoCreator("_videoPath");
    *
    * 3. start the Instance with
    *  --> video.start()
    *
    * 4. insert some Text with
    * -->  await ƒS.Speech.tell()
    * otherwise it will skip the video
    *
    * 5. remove the videoElemen after the line frome step 4
    * --> video.remove()
    */
    class VideoCreator {
        scene;
        video;
        src;
        canvas;
        constructor(_url) {
            this.scene = document.getElementById("scene");
            this.video = document.createElement("video");
            this.src = document.createElement("source");
            this.canvas = document.getElementById("screen");
            this.set(_url);
        }
        set(_url) {
            this.src.setAttribute("src", _url);
            this.src.setAttribute("type", "video/mp4");
        }
        buildPath() {
            this.video.appendChild(this.src);
            this.scene.prepend(this.video);
        }
        changeCanvasStyle() {
            this.canvas.style.position = "fixed";
        }
        /**
         * enable the sound again
         */
        soundOn() {
            this.video.muted = false;
        }
        /**
         *By deafult autoplay and sound muted
         */
        configVideo(_loop) {
            this.video.autoplay = true;
            this.video.muted = true;
            if (_loop == null) {
                this.video.loop = true;
            }
            else
                this.video.loop = _loop;
            this.video.load();
        }
        start() {
            this.buildPath();
            this.configVideo();
            this.changeCanvasStyle();
        }
        remove() {
            this.video.remove();
            this.canvas.style.removeProperty("position");
        }
    }
    VisualNovel.VideoCreator = VideoCreator;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function HowToMakeChoices() {
        console.log("Let's make some choices!");
        let text = {
            Narrator: {
                T0000: "",
                T0001: "",
                T0002: ""
            },
            Aisaka: {
                T0000: "Heute wird sich alles um Auswahlmöglichkeiten drehen.",
                T0001: "Schön, dass du dabei warst!"
            }
        };
        // ƒS.Sound.fade(sound.dystopian, 3, 5, true);
        // ƒS.Sound.fade(sound.nightclub, 0, 5);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.nightpark);
        await VisualNovel.ƒS.update(VisualNovel.transitions.puzzle.duration, VisualNovel.transitions.puzzle.alpha, VisualNovel.transitions.puzzle.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aisaka, VisualNovel.characters.aisaka.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aisaka, VisualNovel.characters.aisaka.pose.happy, VisualNovel.ƒS.positionPercent(70, 100));
        // ƒS.Character.hide(characters.aisaka);
        // ƒS.Character.hideAll();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aisaka, text.Aisaka.T0000);
        VisualNovel.ƒS.Speech.clear();
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.update();
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein."
        };
        let firstDialogueElement = await VisualNovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aisaka, "Hi");
                VisualNovel.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                // continue path here
                await VisualNovel.ƒS.Character.show(VisualNovel.characters.kohana, VisualNovel.characters.kohana.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.aisaka);
                await VisualNovel.ƒS.update(3);
                break;
            case firstDialogueElementAnswers.iSayNo:
                // continue path here
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aisaka, "Hi");
                VisualNovel.ƒS.Speech.clear();
                break;
        }
        // You can continue your story right after the choice definitions
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aisaka, text.Aisaka.T0001);
    }
    VisualNovel.HowToMakeChoices = HowToMakeChoices;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function Intro() {
        console.log("Let's text!");
        let text = {
            Narrator: {
                T0000: "",
                T0001: "",
                T0002: ""
            },
            Peter: {
                T0000: "Baka!!",
                T0001: "Kleiner Scherz, willkommen zum Tutorial!"
            }
        };
        // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
        VisualNovel.ƒS.Speech.hide();
        for (let i = 0; i < 6; i++) {
            VisualNovel.ƒS.Inventory.add(VisualNovel.items.a);
        }
        console.log();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.nightStreets);
        await VisualNovel.ƒS.update(VisualNovel.transitions.puzzle.duration, VisualNovel.transitions.puzzle.alpha, VisualNovel.transitions.puzzle.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.peter, VisualNovel.characters.peter.pose.walk, VisualNovel.ƒS.positionPercent(60, 160));
        // await ƒS.Character.
        await VisualNovel.ƒS.update(2);
        // await ƒS.Character.show(characters.Peter, characters.Peter.pose.happy, ƒS.positionPercent(170, 10));
        VisualNovel.ƒS.Character.hide(VisualNovel.characters.peter);
        // ƒS.Character.hideAll();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.peter, text.Peter.T0000);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.peter, text.Peter.T0001);
        VisualNovel.ƒS.Speech.hide();
    }
    VisualNovel.Intro = Intro;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function GifAnimator() {
        let video = new VisualNovel.VideoCreator("/Template/Videos/Butterfly.mp4");
        video.start();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.peter, "text.Peter.T0000");
        video.remove();
    }
    VisualNovel.GifAnimator = GifAnimator;
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=Template.js.map