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
        nightclub: "/Template/Audio/Nightclub.ogg"
        // SFX
        // click: "Pfad"
    };
    VisualNovel.locations = {
        nightpark: {
            name: "Nightpark",
            // background: "/Template/Images/Backgrounds/starry.gif"
            background: "/Template/Images/Backgrounds/Bedroom_Night.png"
        }
        // starry: {
        //   name: "Starry",
        //   background: "Pfad"
        // }
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
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        VisualNovel.gameMenu = VisualNovel.ƒS.Menu.create(VisualNovel.inGameMenuButtons, VisualNovel.buttonFunctionalities, "gameMenuCSSclass");
        VisualNovel.buttonFunctionalities("Close");
        let scenes = [
            { scene: VisualNovel.HowToText, name: "Text Scene" },
            // { scene: HowToMakeChoices, name: 'Choices' },
            // { scene: HowToText, name: "Text Scene" }
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
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.nightclub, 1, 2, true);
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
        await VisualNovel.ƒS.update(3);
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
                await VisualNovel.ƒS.Character.show(VisualNovel.characters.aisaka, VisualNovel.characters.aisaka.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
                VisualNovel.ƒS.Character.hide(VisualNovel.characters.aisaka);
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
    async function HowToText() {
        console.log("Let's text!");
        let text = {
            Narrator: {
                T0000: "",
                T0001: "",
                T0002: ""
            },
            Aisaka: {
                T0000: "Hurensohn!!",
                T0001: "Kleiner Scherz, willkommen zum Tutorial!"
            }
        };
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.nightclub, 5, 100, true);
        VisualNovel.ƒS.Speech.hide();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.nightpark);
        await VisualNovel.ƒS.update(VisualNovel.transitions.puzzle.duration, VisualNovel.transitions.puzzle.alpha, VisualNovel.transitions.puzzle.edge);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.aisaka, VisualNovel.characters.aisaka.pose.happy, VisualNovel.ƒS.positions.bottomcenter);
        await VisualNovel.ƒS.update(2);
        // await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(170, 10));
        // ƒS.Character.hide(characters.aisaka);
        // ƒS.Character.hideAll();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.aisaka, text.Aisaka.T0000);
        VisualNovel.ƒS.Speech.clear();
        VisualNovel.ƒS.Speech.hide();
    }
    VisualNovel.HowToText = HowToText;
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=Template.js.map