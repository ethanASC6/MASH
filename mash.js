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
function getWife(){
    const wife = ['Kanye West', 'Beyonce', 'Jahseh Onfroy', 'Bob', 'Joe?', 'Patricia', 'Kimberly', 'Carly', 'Marissa', 'Dennise'];
    return wife[Math.floor(Math.random() * 10)]
}
function getAge(){
    let age = Math.floor(Math.random()*100);
    while(age<16){
        age = Math.floor(Math.random()*100);
    }
    return age
}

function getClass(){
    const cls = ['Hobo', 'Peasant', 'Criminal', 'Theif', 'Working-class man', 'Hustler', 'McDonalds Employee', 'Officer', 'Lawyer', 'Singer', 'Noble', 'King', 'President', 'JROTC student', 'Millionaire', 'Bourgoise'];
    return cls[Math.floor(Math.random()*cls.length)]
}

function mash(){
    return "You will live in a "+getHome()+". You will have "+getChildrenCount()+" kids. You'll drive a "+getCar()+". Your wife's name is "+getWife()+". You'll live to be "+getAge()+" years old. You are a "+getClass()+"."
}
console.log(mash());
