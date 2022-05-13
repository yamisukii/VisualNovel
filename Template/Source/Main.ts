namespace VisualNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // **** DEFINITIONEN ****
  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "/Template/FreeTransitions/jigsaw_06.jpg",
      edge: 1
    }
  };

  export let sound = {
    // themes
    nightclub: "/Template/Audio/Nightclub.ogg",
    dystopian: "/Template/Audio/Dystopian.ogg"

    // SFX
    // click: "Pfad"
  };

  export let locations = {
    nightpark: {
      name: "Nightpark",
      // background: "/Template/Images/Backgrounds/starry.gif"
      background: "/Template/Images/Backgrounds/Bedroom_Night.png"
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

  export let characters = {
    narrator: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "/Template/Images/Characters/aisaka_angry.png",
        happy: "/Template/Images/Characters/aisaka_happy.png",
        upset: ""
      }
    },
    kohana: {
      name: "Kohana",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "/Template/Images/Characters/kohana_happy.png",
        upset: "/Template/Images/Characters/kohana_upset.png"
      }
    },
    peter: {
      name: "Peter",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        walk: "/Template/Images/Characters/peter.png",
      }
    }
  };

  export let items: any = {
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
  }





  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: Intro, name: "First Scene" },
      // { scene: HowToMakeChoices, name: 'Choices' },
      // { scene: HowToText, name: "Text Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}