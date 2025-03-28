var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ColorBase } from "../ColorBase.js";
import { NumberInRange } from "../../Unit/NumberInRange.js";
class LABA extends ColorBase {
    toString() {
        return `laba(${this.L}, ${this.A}, ${this.B}, ${this.Alpha})`;
    }
    constructor(L, A, B, Alpha = 1) {
        super();
        this.type = "lab";
        this.L = L;
        this.A = A;
        this.B = B;
        this.Alpha = Alpha;
    }
}
__decorate([
    NumberInRange(0, 100)
], LABA.prototype, "L", void 0);
__decorate([
    NumberInRange(-128, 127)
], LABA.prototype, "A", void 0);
__decorate([
    NumberInRange(-128, 127)
], LABA.prototype, "B", void 0);
__decorate([
    NumberInRange(0, 1)
], LABA.prototype, "Alpha", void 0);
export { LABA };
