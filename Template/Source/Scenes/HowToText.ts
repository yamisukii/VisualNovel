namespace VisualNovel {
  export async function HowToText(): ƒS.SceneReturn {
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

    ƒS.Sound.fade(sound.nightclub, 5, 100, true);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.nightpark);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    // await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(170, 10));
    // ƒS.Character.hide(characters.aisaka);
    // ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000);
    ƒS.Speech.clear();
    ƒS.Speech.hide();

  }
}   