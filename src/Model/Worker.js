export default class Worker{
    gender = 0;
    position = null;
    owner = null;
    indicator = 'W';

    constructor(position, owner, indicator){
        this.position = position;
        this.owner = owner;
        this.indicator = indicator;
    }

    logSomething(){
        console.log('I LOGGED SOMETHING');
    }


}

