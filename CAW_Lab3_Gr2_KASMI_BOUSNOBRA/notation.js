
function mean(scores){

    return (scores.reduce((a,b) => a+b,0))/scores.length

}
module.exports = mean;