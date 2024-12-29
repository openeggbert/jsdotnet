export class TimeSpan {
    constructor(hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
        this.milliseconds = milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000;
    }

    static fromMilliseconds(milliseconds) {
        return new TimeSpan(0, 0, 0, milliseconds);
    }

    static fromSeconds(seconds) {
        return new TimeSpan(0, 0, seconds);
    }

    static fromMinutes(minutes) {
        return new TimeSpan(0, minutes);
    }

    static fromHours(hours) {
        return new TimeSpan(hours);
    }

    static fromDays(days) {
        return new TimeSpan(days * 24);
    }

    get totalMilliseconds() {
        return this.milliseconds;
    }

    get totalSeconds() {
        return this.milliseconds / 1000;
    }

    get totalMinutes() {
        return this.milliseconds / 60000;
    }

    get totalHours() {
        return this.milliseconds / 3600000;
    }

    get totalDays() {
        return this.milliseconds / 86400000;
    }

    get millisecondsPart() {
        return this.milliseconds % 1000;
    }

    get secondsPart() {
        return Math.floor(this.milliseconds / 1000) % 60;
    }

    get minutesPart() {
        return Math.floor(this.milliseconds / 60000) % 60;
    }

    get hoursPart() {
        return Math.floor(this.milliseconds / 3600000) % 24;
    }

    get daysPart() {
        return Math.floor(this.milliseconds / 86400000);
    }

    get ticks() {
        return this.milliseconds * 10000;
    }

    add(timeSpan) {
        return TimeSpan.fromMilliseconds(this.milliseconds + timeSpan.totalMilliseconds);
    }

    subtract(timeSpan) {
        return TimeSpan.fromMilliseconds(this.milliseconds - timeSpan.totalMilliseconds);
    }

    toString() {
        const pad = (n) => n.toString().padStart(2, '0');
        return `${this.daysPart > 0 ? this.daysPart + '.' : ''}${pad(this.hoursPart)}:${pad(this.minutesPart)}:${pad(this.secondsPart)}.${this.millisecondsPart}`;
    }
}

/*
const span1 = new TimeSpan(1, 30, 15, 500);
console.log(span1.toString());

const span2 = TimeSpan.fromMinutes(90);
console.log(span2.toString());

const sum = span1.add(span2);
console.log(sum.toString());
*/
