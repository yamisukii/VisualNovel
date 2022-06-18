namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

// **** DATEN DIE GESPEICHERT WERDEN SOLLEN ****
  export let dataForSave = {
    nameProtaginst: "",
    aisakaScore: 70,
    scoreForAisaka: "",
    revengeIsPicked: false,
  };

  
  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      // { scene: Intro, name: "First Scene" },
      { scene: Choices, name: "DecisionNextScene" },
      { id: "Revenge", scene: Revenge, name: "Revenge for killed Girlfirend" },
      // { scene: HowToMakeChoices, name: 'Choices' },
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}