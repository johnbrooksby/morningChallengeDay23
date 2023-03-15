let p0 = 1500000;

function popGrowth (p0, percent, aug, pop){
    let years = 0
    if (p0 < pop){
        while (p0 < pop){
            p0 = (p0 * (1 + percent/100)) + aug;
            years++
        }
    } else if(pop < p0){
        while (p0 > pop){
            p0 = (p0 * (1 + percent/100)) + aug;
            years++ 
        }
    } 
    return years
}
let population = 20000
console.log(popGrowth(p0, 2.5, -100000, population) + " years to get to population " + population + ".")
