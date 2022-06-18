namespace VisualNovel{

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
    purgatory: {
      name: "Purgatory", 
      background: "/Template/Images/BG/DescisionWorld.jpg"
    },
    alleyEv: {
      name: "alleyEvening",
      background: "/Template/Images/BG/alley_evening.png"
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
}