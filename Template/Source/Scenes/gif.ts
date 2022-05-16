namespace VisualNovel {
    export async function GifAnimator(): ƒS.SceneReturn {

        let video: VideoCreator = new VideoCreator("/Template/Videos/Butterfly.mp4");
        video.start();
        await ƒS.Speech.tell(characters.peter, "text.Peter.T0000");
        video.remove();
    }


}