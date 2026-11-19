// Magic Numbers

// function orbitalPeriod(arr) {
//     const a = 2 * Math.PI;
//     const newArr = [];
    
//     const getOrbPeriod = function(obj) {
//         const c = Math.pow(6367.447 + obj.avgAlt, 3);
//         const b = Math.sqrt(c / 398600.4418);
//         const orbPeriod = Math.round(a * b);
//         delete obj.avgAlt;
//         obj.orbitalPeriod = orbPeriod;
        
//         return obj;
//     }
    
//     for (elem in arr) {
//         newArr.push(getOrbPeriod(arr[elem]))
//     }
    
//     return newArr;
// }


// Magic Numbers

function orbitalPeriod(arr) {
    const earthRadius = 6367.447;
    const gravityMetric = 398600.4418;
    const twoPi = 2 * Math.PI;
    const newArr = [];
    
    const getOrbPeriod = function(obj) {
        const gravityCircumference = Math.pow(earthRadius + obj.avgAlt, 3);
        const totalGravityMetric = Math.sqrt(gravityCircumference / gravityMetric);
        const orbPeriod = Math.round(twoPi * totalGravityMetric);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        
        return obj;
    }
    
    for (elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]))
    }
    
    return newArr;
}