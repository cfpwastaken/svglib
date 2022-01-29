export class Svg {
    svg: string;

    constructor(width: number, height: number) {
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
    }

    add(element: SvgElement) {
        this.svg += element.get();
        return this;
    }

    get() {
        return this.svg + "</svg>";
    }
}

export class SvgElement {
    svg: string;

    get() {
        return this.svg;
    }
}

export class Path extends SvgElement {
    constructor(path: string) {
        super();
        this.svg = `<path d="${path}" />`;
    }
}

export class Circle extends SvgElement {
    constructor(x: number, y: number, radius: number, fill: string, stroke: string) {
        super();
        this.svg = `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${stroke}" />`;
    }
}

export class Rectangle extends SvgElement {
    constructor(x: number, y: number, width: number, height: number, color: string) {
        super();
        this.svg = `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}" />`;
    }
}

export class RoundedLine extends SvgElement {
    constructor(x1: number, y1: number, x2: number, y2: number, stroke: string) {
        super();
        this.svg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-linecap="round" stroke-width="20" />`;
    }
}

export class Line extends SvgElement {
    constructor(x1: number, y1: number, x2: number, y2: number, stroke: string) {
        super();
        this.svg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" />`;
    }
}

export class Text extends SvgElement {
    constructor(x: number, y: number, text: string, font: string) {
        super();
        this.svg = `<text x="${x}" y="${y}" font-family="${font}">${text}</text>`;
    }
}
