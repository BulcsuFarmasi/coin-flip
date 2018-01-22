export class View {

    assign (stats) {
        this.stats = stats;
    }

    renderImages (resultGenerator) {
        const folder = 'images/';
        console.log(resultGenerator.next().done);
        while (!resultGenerator.next().done) {
            let image = new Image();
            image.src = folder;
            image.src += (resultGenerator.next().value) ? 'head.png' : 'tails.png';
            document.body.appendChild(image);
        }
    }

}