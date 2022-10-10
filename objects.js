const river = {
    name : 'Padma',
    id : 01,
    location : 'Bangladesh',
    isBig : true,
    hilshaPrice : 1500,

    getHilsha : function(){
       return `A lot of hilsha caught in the ${this.name} river of ${this.location}`;
       //      A lot of hilsha caught in the Padma river of Bangladesh
    },

    // getHilsha : ()=>{
    //     return `A lot of hilsha caught in the ${this.name} river of ${this.location}`; 
    //     //      A lot of hilsha caught in the undefined river of undefined
    //  },

    othersRiver : ['Jamuna', 'Megna', 'Surma'],
    bromuputroRiver : {
        length : '125km',
        caughtHilsha : false,
        deep : 'Average',
    },
    
    riverInfo01 : function(){
       return `${this.name} is big from ${this.othersRiver}`;
    },

    riverInfo02 : function(){
       return `${this.name} is big from ${this.othersRiver[1]}`;
    },

    riverInfo03 : function(){
       return `${this.name} is ${this.getHilsha()}`;
       // Padma is A lot of hilsha caught in the Padma river of Bangladesh
    },

    riverInfo04 : function(number, country){
       return `${this.name} is ${number} no river of ${country}`;
       // Padma is 1 no river of Bangladesh
    },

    riverInfo05 : function(money, discount){
       this.hilshaPrice = this.hilshaPrice - money + discount;
       return this.hilshaPrice;
       // 1200
    },
};

const result01 = river.name;
console.log(result01); // Padma

const result02 = river.id;
console.log(result02); // 1

const result03 = river.isBig;
console.log(result03); // true

const result04 = river.getHilsha();
console.log(result04);  // A lot of hilsha caught in the Padma river of Bangladesh

const result05 = river.othersRiver;
console.log(result05); // [ 'Jamuna', 'Megna', 'Surma' ]

const result06 = river.othersRiver[1];
console.log(result06); // Megna

const result07 = river.bromuputroRiver;
console.log(result07); // { length: '125km', caughtHilsha: false, deep: 'Average' }

const result08 = river.bromuputroRiver.caughtHilsha;
console.log(result08); // false

const result09 = river.bromuputroRiver.length;
console.log(result09); // 125km

const result10 = river.riverInfo01();
console.log(result10); // Padma is big from Jamuna,Megna,Surma

const result11 = river.riverInfo02();
console.log(result11); // Padma is big from Megna

const result12 = river.riverInfo03();
console.log(result12); // Padma is A lot of hilsha caught in the Padma river of Bangladesh

const result13 = river.riverInfo04(1,'Bangladesh');
console.log(result13);   // Padma is 1 no river of Bangladesh

const result14 = river.riverInfo05(500,200);
console.log(result14);     // 1200 

const result15 = river.riverInfo05(400,100);
console.log(result15);    // 900     

