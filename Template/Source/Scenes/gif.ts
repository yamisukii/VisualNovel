namespace VisualNovel {
    export async function GifAnimator(): ƒS.SceneReturn {

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.nightpark);
        await ƒS.update();
        let scene: HTMLElement = <HTMLElement>document.getElementById("form");
        // let image: HTMLElement = <HTMLElement>document.createElement("image");
        // image.setAttribute("type", "splash");
         let video: HTMLVideoElement = <HTMLVideoElement>document.createElement("video");
         video.autoplay = true;
         video.loop = true;
         video.load();
         let src: HTMLElement = <HTMLElement>document.createElement("source");
         src.setAttribute("src", "/Template/Videos/Space.mp4");
         src.setAttribute("type", "video/mp4");
         video.appendChild(src);
        //  video.setAttribute("autolay");
        scene.prepend(video);
        await ƒS.Speech.tell(characters.peter, "text.Peter.T0000");
        video.remove();

    
    }


}