declare namespace VisualNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtaginst: string;
        aisakaScore: number;
        scoreForAisaka: string;
        revengeIsPicked: boolean;
    };
}
declare namespace VisualNovel {
    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean;
    let inventory: ƒS.Inventory;
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
        purgatory: {
            name: string;
            background: string;
        };
        alleyEv: {
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
        private scene;
        private video;
        private src;
        private canvas;
        constructor(_url: string);
        private set;
        private buildPath;
        private changeCanvasStyle;
        /**
         * enable the sound again
         */
        soundOn(): void;
        /**
         *By deafult autoplay and sound muted
         */
        configVideo(_loop?: boolean): void;
        start(): void;
        remove(): void;
    }
}
declare namespace VisualNovel {
    function Choices(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function HowToMakeChoices(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Intro(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function GifAnimator(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function Revenge(): ƒS.SceneReturn;
}
