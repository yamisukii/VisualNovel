namespace VisualNovel {
    export async function Choices(): ƒS.SceneReturn {
      console.log("Choices!");
  
      let text = {
        Speaker: {
          T0000: "Bitte suche dir den nächsten Fall aus",
        },   
      };
  
      let pickYourNextCase = {
        revenge: "Rachemord",
        accident: "Unfall",
        bullying: "Mobbing",
        iSayBla: "Bla"
      };
  
      let pickedRevenge: boolean;
      let pickedAccident: boolean;
      let pickedBullying: boolean;
      let pickedBla: boolean;
      
      await ƒS.Location.show(locations.purgatory);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.peter, text.Speaker.T0000);
  
        // if (pickedAccident || pickedBla || pickedNo || pickedRevenge || pickedAccident) {
        //   delete pBullyingkYourNextCase..BullyingayYes;
        // }
        if (pickedRevenge) {
          delete pickYourNextCase.revenge;
        }
        else if (pickedAccident) {
          delete pickYourNextCase.accident;
        }
        else if (pickedBullying) {
          delete pickYourNextCase.bullying;
        }
        else if (pickedBla) {
          delete pickYourNextCase.iSayBla;
        }
  
        let firstDialogueElement = await ƒS.Menu.getInput(pickYourNextCase, "choicesCSSclass");
  
        switch (firstDialogueElement) {
          case pickYourNextCase.revenge:
            dataForSave.revengeIsPicked = true;
            return "Gif"
          case pickYourNextCase.accident:
            dataForSave.revengeIsPicked = true;
            return "Accident"
          case pickYourNextCase.bullying:
            dataForSave.revengeIsPicked = true;
            return "Bullying"
          case pickYourNextCase.iSayBla:
            dataForSave.revengeIsPicked = true;
            return "Bla"
        }
    
    }
  }   
