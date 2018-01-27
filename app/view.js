export class View {

    constructor () {
        this.statsElem = document.querySelector('.stats');
    }

    renderImage (result) {
        const folder = 'images/';
        let image = new Image();
        image.src = folder;
        image.src += (result.value) ? 'head.png' : 'tails.png';
        image.alt = (result.value) ? "Fej" : "Írás";
        document.body.insertBefore(image, this.statsElem);
    }

    renderStats (stats) {
        this.statsElem.innerHTML = `Összes pénz feldobás: ${stats.all}, amelyből fej: ${stats.heads} (${stats.headPercent}%), 
                           írás ${stats.tails} (${stats.tailsPercent}%)`
    }

}