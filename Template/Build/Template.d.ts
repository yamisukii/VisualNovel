declare namespace VisualNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        dystopian: string;
    };
    let locations: {
        nightpark: {
            name: string;
            background: string;
        };
        starry: {
            name: string;
            background: string;
        };
        nightStreets: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        kohana: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        peter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                walk: string;
            };
        };
    };
    let items: any;
}
declare namespace VisualNovel {
    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean;
    let inventory: ƒS.Inventory;
    let dataForSave: {
        nameProtaginst: string;
        score: number;
    };
    function showCredits(): void;
    let inGameMenuButtons: {
        save: string;
        load: string;
        close: string;
        credits: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
    let uiElement: HTMLElement;
}
declare namespace VisualNovel {
    function HowToMakeChoices(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Intro(): ƒS.SceneReturn;
}
