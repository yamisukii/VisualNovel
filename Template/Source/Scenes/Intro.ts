namespace VisualNovel {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Let's text!");

    let text = {
      Narrator: {
        T0000: "",
        T0001: "",
        T0002: ""
      },
      Peter: {
        T0000: "Hurensohn!!",
        T0001: "Kleiner Scherz, willkommen zum Tutorial!"
      }
    };

    // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.nightStreets);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Character.show(characters.peter, characters.peter.pose.walk, ƒS.positionPercent(60, 160));
    // await ƒS.Character.
    await ƒS.update(2);
    // await ƒS.Character.show(characters.Peter, characters.Peter.pose.happy, ƒS.positionPercent(170, 10));
    ƒS.Character.hide(characters.peter);
    // ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.peter, text.Peter.T0000);
    await ƒS.Speech.tell(characters.peter, text.Peter.T0001);
    ƒS.Speech.hide();

  }
}   