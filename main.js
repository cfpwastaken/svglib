export class Svg {
    constructor(width, height) {
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
    }

    add(element) {
        this.svg += element.get();
        return this;
    }

    get() {
        return this.svg;
    }
}

export class Path {
    constructor(path) {
        this.svg = `<path d="${path}" />`;
    }

    get() {
        return this.svg;
    }
}

export class Circle {
    constructor(x, y, radius) {
        this.svg = `<circle cx="${x}" cy="${y}" r="${radius}" />`;
    }

    get() {
        return this.svg;
    }
}

export class Rectangle {
    constructor(x, y, width, height) {
        this.svg = `<rect x="${x}" y="${y}" width="${width}" height="${height}" />`;
    }

    get() {
        return this.svg;
    }
}

export class Line {
    constructor(x1, y1, x2, y2) {
        this.svg = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
    }

    get() {
        return this.svg;
    }
}

export class Text {
    constructor(x, y, text) {
        this.svg = `<text x="${x}" y="${y}">${text}</text>`;
    }

    get() {
        return this.svg;
    }
}