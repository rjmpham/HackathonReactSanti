export default class Vector2{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    equals(vector2){
        return (vector2.x === this.x) && (vector2.y === this.y);
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}