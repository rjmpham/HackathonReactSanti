export default class Worker{
    gender = 0;
    position = null;
    owner = null
    indicator = "W";

    // constructor(gender, position){
    //     this.gender = gender;
    //     this.position = position;
    // }

    constructor(position, owner){
        this.position = position;
        this.owner = owner;
    }
}

