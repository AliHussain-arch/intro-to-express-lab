const express = require('express');
const app = express();

// -------------------------------------------------- Excercise 1 --------------------------------------------------

app.get('/greetings/:username',(req,res)=>{
    res.send(`What a delight it is to see you once more, ${req.params.username}`);
});

// -------------------------------------------------- Excercise 2 --------------------------------------------------

app.get('/roll/:number',(req,res)=>{
    if(isNaN(req.params.number)){
        res.send("You must specify a number.");
    }
    else{
        res.send(`You rolled a ${Math.floor(Math.random() * (Number(req.params.number) + 1))}`)
    }
});

// -------------------------------------------------- Excercise 3 --------------------------------------------------

app.get('/collectibles/:index',(req,res)=>{
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    if(!isNaN(req.params.index) && req.params.index >=0 && req.params.index < collectibles.length){
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`);
    }
    else{
        res.send("This item is not yet in stock. Check back soon!")
    }
});

// -------------------------------------------------- Excercise 4 --------------------------------------------------

app.get('/shoes',(req,res)=>{
    let shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    if(req.query.hasOwnProperty('min-price')){
        shoes = shoes.filter(shoe => shoe.price >= Number(req.query['min-price']));
    }
    if(req.query.hasOwnProperty('max-price')){
        shoes = shoes.filter(shoe => shoe.price <= Number(req.query['max-price']));
    }
    if(req.query.hasOwnProperty('type')){
        shoes = shoes.filter(shoe => shoe.type === req.query['type']);
    }
    res.send(shoes);
});


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});