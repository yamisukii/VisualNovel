namespace VisualNovel {

    /**
    * For using this class:
    * 1.
    * --> give CanvasElement in HTML 'id = "screen"'
    * --> give sceneElemen in HTML 'id = "scene"'
    * 
    * 2. create new Instance with the videoPath 
    *  --> let video: VideoCreator = new VideoCreator("_videoPath");
    * 
    * 3. start the Instance with 
    *  --> video.start()
    * 
    * 4. insert some Text with 
    * -->  await ƒS.Speech.tell()
    * otherwise it will skip the video 
    * 
    * 5. remove the videoElemen after the line frome step 4 
    * --> video.remove()
    */
    export class VideoCreator {

        private scene: HTMLElement;
        private video: HTMLVideoElement;
        private src: HTMLElement;
        private canvas: HTMLCanvasElement;

        constructor(_url: string) {
            this.scene = <HTMLElement>document.getElementById("scene");
            this.video = <HTMLVideoElement>document.createElement("video");
            this.src = <HTMLElement>document.createElement("source");
            this.canvas = <HTMLCanvasElement>document.getElementById("screen");
            this.set(_url);

        }

        private set(_url: string) {
            this.src.setAttribute("src", _url);
            this.src.setAttribute("type", "video/mp4");
        }
        private buildPath(): void {
            this.video.appendChild(this.src);
            this.scene.prepend(this.video);
        }

        private changeCanvasStyle(): void {
            this.canvas.style.position = "fixed";
        }

        /**
         * enable the sound again
         */
        public soundOn(): void {
            this.video.muted = false;
        }

        /**
         *By deafult autoplay and sound muted 
         */
        public configVideo(_loop?: boolean): void {
            this.video.autoplay = true;
            this.video.muted = true;
            if (_loop == null) {
                this.video.loop = true;
            } else this.video.loop = _loop;
            this.video.load();
        }

        public start(): void {
            this.buildPath();
            this.configVideo();
            this.changeCanvasStyle();
        }

        public remove(): void {
            this.video.remove();
            this.canvas.style.removeProperty("position");
        }

    }
}