export class View {

    assign (results) {
        this.results = results;
    }

    renderImages () {
        const folder = 'images/';
        for (let result of this.results){
            let image = new Image();
            image.src = folder;
            image.src += (result) ? 'head.png' : 'tails.png';
            document.body.appendChild(image);
        }
    }

}