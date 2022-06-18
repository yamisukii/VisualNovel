namespace VisualNovel {
  export let gameMenu: ƒS.Menu;
  export let menuIsOpen: boolean = true;
  export let inventory: ƒS.Inventory;

  // **** CREDITS ****
  export function showCredits(): void {
    ƒS.Text.setClass("class2");
    ƒS.Text.print("Halleluja");
  }

  // **** MENÜ ****
  // Buttons
  export let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        showCredits();
    }
  }

  document.addEventListener("keydown", hndKeyPress);
  export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("Open Inventory");
        await ƒS.Inventory.open();
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("Close Inventory");
        ƒS.Inventory.close();
        // ƒS.Inventory.close();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }
  export let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}
