export class View {

    assign (stats) {
        this.stats = stats;
    }

    renderImages (results) {
        const folder = 'images/';
        results.subscribe((result) => {
            let image = new Image();
            image.src = folder;
            image.src += (result) ? 'head.png' : 'tails.png';
            document.body.appendChild(image);
        });
    }

}