let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    var cost = 0;
    if(guests<=50){
        cost = 4000; 
        return cost;
    }
    else if(guests>50 && guests<=100){
        cost = 10000;
        return cost; 
    }
    else if(guests>100 && guests<=200){
        cost = 15000; 
        return cost;
    }
    else {  
        cost = 20000; 
        return cost;
    }
}
    var price = getPrice(guests);
    console.log('Your wedding will cost '+price+' dollars');
