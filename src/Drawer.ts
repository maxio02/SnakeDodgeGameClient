import { Vector } from "vector2d";
import { backgroundCanvas, backgroundCanvasCtx, gridSize } from "./index";
import { currentRoom } from "./MenuManager/login";

export function drawGrid() {

    const scaleX = backgroundCanvasCtx.canvas.width / (currentRoom ? currentRoom.settings.arenaSize : 2000);
    const scaleY = backgroundCanvasCtx.canvas.height / (currentRoom ? currentRoom.settings.arenaSize : 2000);


    backgroundCanvasCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    backgroundCanvasCtx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    backgroundCanvasCtx.lineWidth = 2;
    for (let x = gridSize * scaleX; x < backgroundCanvas.width; x += gridSize * scaleX) {
        backgroundCanvasCtx.beginPath();
        backgroundCanvasCtx.moveTo(x , 0);
        backgroundCanvasCtx.lineTo(x , backgroundCanvas.height);
        backgroundCanvasCtx.stroke();
    }
    for (let y = gridSize * scaleY; y < backgroundCanvas.height; y += gridSize * scaleY) {
        backgroundCanvasCtx.beginPath();
        backgroundCanvasCtx.moveTo(0, y);
        backgroundCanvasCtx.lineTo(backgroundCanvas.width, y);
        backgroundCanvasCtx.stroke();
    }
}

export function drawDot(dotX: number, dotY: number, dotSize: number, color: string) {
    backgroundCanvasCtx.beginPath();
    backgroundCanvasCtx.arc(
        dotX,
        dotY,
        dotSize,
        0,
        2 * Math.PI,
        false
    );

    backgroundCanvasCtx.fillStyle = color;
    backgroundCanvasCtx.fill();

    backgroundCanvasCtx.closePath();
}

export function drawArc(dotX: number, dotY: number, radius: number, startAngle: number, endAngle: number, counterClockwise: boolean) {
    backgroundCanvasCtx.lineCap = "round";
    backgroundCanvasCtx.strokeStyle = "#3466aa";
    backgroundCanvasCtx.beginPath();
    backgroundCanvasCtx.arc(dotX, dotY, radius, 0, 2 * Math.PI, counterClockwise);

    backgroundCanvasCtx.lineWidth = 5;
    backgroundCanvasCtx.stroke();

    backgroundCanvasCtx.closePath();
}




export function drawArrow(ctx: CanvasRenderingContext2D, from: Vector, to: Vector, color: string, width: number) {
    if (from.x != to.x && from.y != to.y) {
        let angle = Math.atan2(to.y - from.y, to.x - from.x);
        let headLength = 10;
        let new_to = new Vector(to.x, to.y);
        // This makes it so the end of the arrow head is located at tox, toy
        new_to.x -= Math.cos(angle) * ((width * 1.15));
        new_to.y -= Math.sin(angle) * ((width * 1.15));



        //starting path of the arrow from the start square to the end square and drawing the stroke
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(new_to.x, new_to.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();

        //starting a new path from the head of the arrow to one of the sides of the point
        ctx.beginPath();
        ctx.moveTo(new_to.x, new_to.y);
        ctx.lineTo(new_to.x - headLength * Math.cos(angle - Math.PI / 7), new_to.y - headLength * Math.sin(angle - Math.PI / 7));

        //path from the side point of the arrow, to the other side point
        ctx.lineTo(new_to.x - headLength * Math.cos(angle + Math.PI / 7), new_to.y - headLength * Math.sin(angle + Math.PI / 7));

        //path from the side point back to the tip of the arrow, and then again to the opposite side point
        ctx.lineTo(new_to.x, new_to.y);
        ctx.lineTo(new_to.x - headLength * Math.cos(angle - Math.PI / 7), new_to.y - headLength * Math.sin(angle - Math.PI / 7));

        //draws the paths created above
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}