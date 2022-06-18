namespace VisualNovel {
    export async function Revenge(): ƒS.SceneReturn {
      console.log("Let's text!");
  
      let text = {
        Friend: {
          T0000: "",
          T0001: "",
          T0002: ""
        },
        Jay: {
          T0000: "Baka!!",
          T0001: "Kleiner Scherz, willkommen zum Tutorial!"
        }
      };
  
      // ƒS.Sound.fade(sound.dystopian, 2, 7, true);
      ƒS.Speech.hide();
      for (let i = 0; i < 6; i++) {
        ƒS.Inventory.add(items.a);
      }
      console.log()
      
      // let meterbar:any = document.getElementById("aisakaMeter");
      // meterbar.value = 10;
      dataForSave.aisakaScore += 10;
      console.log(dataForSave.aisakaScore);
      await ƒS.Location.show(locations.alleyEv);
      await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
      await ƒS.Character.show(characters.peter, characters.peter.pose.walk, ƒS.positionPercent(60, 160));
      // await ƒS.Character.
      await ƒS.update(2);
      // await ƒS.Character.show(characters.Peter, characters.Peter.pose.happy, ƒS.positionPercent(170, 10));
      ƒS.Character.hide(characters.peter);
      // ƒS.Character.hideAll();
      await ƒS.Speech.tell(characters.peter, text.Jay.T0000);
      await ƒS.Speech.tell(characters.peter, text.Jay.T0001);
      ƒS.Speech.hide();
  
    }
  }   