export class Svg {
    constructor(width, height) {
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
    }
    add(element) {
        this.svg += element.get();
        return this;
    }
    get() {
        return this.svg + "</svg>";
    }
}
export class SvgElement {
    get() {
        return this.svg;
    }
}
export class Path extends SvgElement {
    constructor(path) {
        super();
        this.svg = `<path d="${path}" />`;
    }
}
export class Circle extends SvgElement {
    constructor(x, y, radius, fill, stroke) {
        super();
        this.svg = `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${stroke}" />`;
    }
}
export class Rectangle extends SvgElement {
    constructor(x, y, width, height, color) {
        super();
        this.svg = `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}" />`;
    }
}
export class RoundedLine extends SvgElement {
    constructor(x1, y1, x2, y2, stroke) {
        super();
        this.svg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-linecap="round" stroke-width="20" />`;
    }
}
export class Line extends SvgElement {
    constructor(x1, y1, x2, y2, stroke) {
        super();
        this.svg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" />`;
    }
}
export class Text extends SvgElement {
    constructor(x, y, text, font) {
        super();
        this.svg = `<text x="${x}" y="${y}" font-family="${font}">${text}</text>`;
    }
}
