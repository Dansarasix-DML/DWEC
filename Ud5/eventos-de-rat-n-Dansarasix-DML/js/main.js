/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

{
    const colors = [
        "#9ae3d7", "#c3c0ba", "#a7d4d6",
        "#d99edf", "#a9de9f", "#87f6b1",
        "#f49789", "#f3d289", "#a6cbd7",
        "#cf93ea", "#f3a954", "#e3472d",
        "#e9a794", "#a0ddbe", "#5941e8",
        "#d5fe7f", "#93eaa4", "#d694e9",
    ];

    const init = () => {
        document.oncontextmenu = e => e.preventDefault();

        Array.from(document.getElementsByTagName("canvas")).forEach(canvas => {
            canvas.addEventListener(canvas.id, dibujar.bind(canvas));
            dibujar.bind(canvas)();
        });

    }

    const dibujar = function(event) {
        let color;        

        let context = this.getContext('2d');

        this.width = this.height = 150;
        
        if (context) {
            do {
                color = colors[Math.floor(Math.random()*colors.length)];
            } while (this.dataset.color === color);

            this.dataset.color = color;
            context.fillStyle = color;
            context.fillRect(0, 0, 150, 150);
            context.font = "bold 12px verdana";
            context.fillStyle = "black";
            context.textAlign = "center";

            if (event) {
                context.fillText((`(${event.offsetX}, ${event.offsetY})`), 50, 20);
                context.fillText((`(${event.button}, ${event.buttons})`), 50, 50);
            }
            context.fillText(this.getAttribute("id"), 50, 135);
        }
        
    }

    document.addEventListener("DOMContentLoaded", init);
}