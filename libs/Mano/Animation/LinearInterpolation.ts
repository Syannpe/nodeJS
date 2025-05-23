import {Color} from "../Fillable/Color.js";
import {ColorBase} from "../Fillable/ColorBase.js";
import {RGBA} from "../Fillable/ColorFormat/RGBA.js";
import {HSLA} from "../Fillable/ColorFormat/HSLA.js";
import {HWBA} from "../Fillable/ColorFormat/HWBA.js";
import {LABA} from "../Fillable/ColorFormat/LABA.js";
import {LCHA} from "../Fillable/ColorFormat/LCHA.js";
import {OKLABA} from "../Fillable/ColorFormat/OKLABA.js";
import {OKLCHA} from "../Fillable/ColorFormat/OKLCHA.js";
import {TextFormat} from "../Graphic/TextFormat.js";
import {Shadow} from "../Graphic/Shadow.js";
import {Border} from "../Graphic/Border.js";
import {Font} from "../Graphic/Font.js";
import {FILL_TYPE} from "../Graphic/FILL_TYPE.js";
import {FILL_RULE} from "../Graphic/FILL_RULE.js";
import {Fillable} from "../Fillable/Fillable.js";
import {Parttern} from "../Fillable/Parttern.js";
import {GradientBase} from "../Fillable/GradientBase.js";
import {AnimationFillableMixin} from "../Exception/Animation.FillableMixin.js";

class LinearInterpolation extends EventTarget {
    /*
    * @name getValueAtTime
    * @param v1: 开始点的数值，只能是数字，可以扩展
    * @param v2: 结束点的数值，只能是数字，可以扩展
    * @param t: 时间参数，
    * @param startTime: 动画开始时间，
    * @param duration: 动画持续时间
    * @return: number
    * @desc: 根据线性插值算法取出两个点中的一个值
    * 参数意思下同
    * */
    public getValueAtTime(v1: number, v2: number, t: number, startTime: number, duration: number): number {
        let param = (t - startTime) / duration;
        param = Math.max(0, param);
        param = Math.min(1, param);

        return v1 * (1 - param) + param * v2;
    }

    public getConstantAtTime<T>(v1: any, v2: T, t: number, startTime: number, duration: number): T {
        return v2;
    }

    public getColorAtTime<T extends ColorBase>(color1: T, color2: T, t: number, startTime: number, duration: number): ColorBase {
        let covertToRGB = function (color: ColorBase) {
            if (color instanceof RGBA) return color;
            if (color instanceof HSLA) return Color.HSLAToRGBA(color);
            if (color instanceof HWBA) return Color.HWBAToRGBA(color);
            if (color instanceof LABA) return Color.LABAToRGBA(color);
            if (color instanceof LCHA) return Color.LCHAToRGBA(color);
            if (color instanceof OKLABA) return Color.OKLABAToRGBA(color);
            if (color instanceof OKLCHA) return Color.OKLCHAToRGBA(color);
        };

        let c1 = covertToRGB(color1);
        let c2 = covertToRGB(color2);

        let rr = this.getValueAtTime(c1.R, c2.R, t, startTime, duration);
        let rg = this.getValueAtTime(c1.G, c2.G, t, startTime, duration);
        let rb = this.getValueAtTime(c1.B, c2.B, t, startTime, duration);
        let ra = this.getValueAtTime(c1.Alpha, c2.Alpha, t, startTime, duration);
        return new RGBA(rr, rg, rb, ra);
    }

    public getTextFormatAtTime<T extends TextFormat>(textFormat1: T, textFormat2: T, t: number, startTime: number, duration: number): TextFormat {
        let textAlign = this.getConstantAtTime(textFormat1.textAlign, textFormat2.textAlign, t, startTime, duration);
        let textBaseline = this.getConstantAtTime(textFormat1.textBaseline, textFormat2.textBaseline, t, startTime, duration);
        let textRendering = this.getConstantAtTime(textFormat1.textRendering, textFormat2.textRendering, t, startTime, duration);
        let direction = this.getConstantAtTime(textFormat1.direction, textFormat2.direction, t, startTime, duration);
        let letterSpacingValue = this.getValueAtTime(textFormat1.letterSpacing.value, textFormat2.letterSpacing.value, t, startTime, duration);
        let letterSpacing = new CSSUnitValue(letterSpacingValue, "px");
        let wordSpacingValue = this.getValueAtTime(textFormat1.wordSpacing.value, textFormat2.wordSpacing.value, t, startTime, duration);
        let wordSpacing = new CSSUnitValue(wordSpacingValue, "px");

        return new TextFormat({
            textAlign,
            textBaseline,
            textRendering,
            wordSpacing,
            letterSpacing,
            direction
        });
    }

    public getShadowAtTime<T extends Shadow>(shadow1: T, shadow2: T, t: number, startTime: number, duration: number): Shadow {
        let blur = this.getValueAtTime(shadow1.blur, shadow2.blur, t, startTime, duration);
        let offsetX = this.getValueAtTime(shadow1.offsetX, shadow2.offsetX, t, startTime, duration);
        let offsetY = this.getValueAtTime(shadow1.offsetY, shadow2.offsetY, t, startTime, duration);
        let color = this.getColorAtTime(shadow1.color, shadow2.color, t, startTime, duration);

        return new Shadow({
            blur,
            offsetX,
            offsetY,
            color
        });
    }

    public getBorderAtTime<T extends Border>(border1: T, border2: T, t: number, startTime: number, duration: number): Border {
        let lineCap = this.getConstantAtTime(border1.lineCap, border2.lineCap, t, startTime, duration);
        let lineDash = this.getValueAtTime(border1.lineDash, border2.lineDash, t, startTime, duration);
        let lineJoin = this.getConstantAtTime(border1.lineJoin, border2.lineJoin, t, startTime, duration);
        let lineWidth = this.getValueAtTime(border1.lineWidth, border2.lineWidth, t, startTime, duration);

        return new Border({
            lineCap,
            lineDash,
            lineWidth,
            lineJoin
        })
    }

    public getFontAtTime<T extends Font>(font1: T, font2: T, t: number, startTime: number, duration: number): Font {
        let fontKerning = this.getConstantAtTime(font1.fontKerning, font2.fontKerning, t, startTime, duration);
        let fontStretch = this.getConstantAtTime(font1.fontStretch, font2.fontStretch, t, startTime, duration);
        let fontVariantCaps = this.getConstantAtTime(font1.fontVariantCaps, font2.fontVariantCaps, t, startTime, duration);
        let font = this.getConstantAtTime(font1.font, font2.font, t, startTime, duration);

        return new Font({
            fontKerning, fontStretch, fontVariantCaps, font
        })
    }

    public getDOMMatrixAtTime<T extends DOMMatrixReadOnly>(matrix1: T, matrix2: T, t: number, startTime: number, duration: number): DOMMatrixReadOnly {
        let a = this.getValueAtTime(matrix1.a, matrix2.a, t, startTime, duration);
        let b = this.getValueAtTime(matrix1.b, matrix2.b, t, startTime, duration);
        let c = this.getValueAtTime(matrix1.c, matrix2.c, t, startTime, duration);
        let d = this.getValueAtTime(matrix1.d, matrix2.d, t, startTime, duration);
        let e = this.getValueAtTime(matrix1.e, matrix2.e, t, startTime, duration);
        let f = this.getValueAtTime(matrix1.f, matrix2.f, t, startTime, duration);

        return new DOMMatrix([a, b, c, d, e, f]);
    }

    public getFillTypeAtTime<T extends FILL_TYPE>(type1: T, type2: T, t: number, startTime: number, duration: number): FILL_TYPE {
        return this.getConstantAtTime(type1, type2, t, startTime, duration);
    }

    public getFillRuleAtTime<T extends FILL_RULE>(type1: T, type2: T, t: number, startTime: number, duration: number): FILL_RULE {
        return this.getConstantAtTime(type1, type2, t, startTime, duration);
    }

    public getFillableAtTime<T extends Fillable>(type1: T, type2: T, t: number, startTime: number, duration: number): Fillable {
        if (type1 instanceof ColorBase && type2 instanceof ColorBase) {
            return this.getColorAtTime(type1, type2, t, startTime, duration);
        } else if (type1 instanceof Parttern && type2 instanceof Parttern) {
            return this.getConstantAtTime(type1, type2, t, startTime, duration);
        } else if (type1 instanceof GradientBase && type2 instanceof GradientBase) {
            return this.getConstantAtTime(type1, type2, t, startTime, duration);
        } else {
            throw new AnimationFillableMixin("不同类型的不能融合")
        }
    }


}

export {LinearInterpolation}