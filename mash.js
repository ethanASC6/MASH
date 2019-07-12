function getHome(){
    const home = ['Mansion', 'Apartment', 'Shack', 'House', process.argv[2]];
    return home[Math.floor(Math.random() * 5)];
}

function getChildrenCount(){
    const kids = Math.random() > .5 ? (Math.floor(Math.random()*100)) : process.argv[3];
    return kids
}

function getCar(){
    const car = ['box with wheels', 'convertible', 'lambo', 'jetplane', process.argv[4]];
    return car[Math.floor(Math.random() * 5)]
}

function mash(){
    return "You will live in a "+getHome()+", have "+getChildrenCount()+" kids,"+" and you'll drive a "+getCar()
}
console.log(mash());
