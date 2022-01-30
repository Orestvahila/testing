const largestK = (m) => {
    let k=0;
    for (let i=1; Math.pow(4,i) <= m; i++){
        k++ ;
    }
    return k;
}


module.exports = largestK;