class Calculator {
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    add(){
        return this.x + this.y
    }
    product(){
        return this.x * this.y
    }
}


module.exports=Calculator;
