export class View {

    constructor () {
        this.statsElem = document.querySelector('.stats');
    }

    renderImage (result) {
        const folder = 'images/';
        console.log(result);
        let image = new Image();
        image.src = folder;
        image.src += (result) ? 'head.png' : 'tails.png';
        image.alt = (result) ? "Fej" : "Írás";
        document.body.insertBefore(image, this.statsElem);
    }

    renderStats (stats) {
        this.statsElem.innerHTML = `Összes pénz feldobás: ${stats.all}, amelyből fej: ${stats.heads} (${stats.headPercent}%), 
                           írás ${stats.tails} (${stats.tailsPercent}%)`
    }

}