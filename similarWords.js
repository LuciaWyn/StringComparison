function compare(word1, word2){
    let percentage = 0;
    let outOf = 0;
    let total = 1;
    
    //length
    if(word1.length === word2.length){
        outOf += 1;
    }
    
    
    //for starting order.
    for(let s=0; s<word1.length; s++){
        total += 1;
        if(word2.charAt(s) === word1.charAt(s)){
            outOf += 1;
        }
    }

    //divide string
    for(let d =0; d< (word1.length-1); d++){
        for(let dd= 1; dd<word1.length; dd++){
            let compareString = '';
            compareString = word1.substring(d, dd);
            total += 1;
            if(word2.indexOf(compareString) !== false){
                outOf += 1;
            }
            //how often string occurs
            compareString = new RegExp(compareString, 'gi');
            let matching1 = word1.match(compareString);
            matching1 = matching1.length; 
            if(matching1 >= 1){
                let matching2 = word2.match(compareString);
                if(matching2 !== null){
                    matching2 = matching2.length
                    if(matching2 >= 1){
                        if(matching1 > matching2){
                            total += matching1;
                            outOf += matching1-(matching1-matching2);
                        }
                        else if(matching1 == matching2){
                            total += 1;
                            outOf += 1;
                        }
                        else{
                            total += matching1;
                            outOf += matching1-(matching2-matching1);
                        }
                    }
                }
            }
        }
    }

    percentage = (outOf/total)*100;

    let stats = {
        percentage: percentage,
        outOf: outOf,
        total: total
    }
    return stats;
}
console.log(compare("play", "clay"));
console.log(compare('play', 'play'));
console.log(compare('empire', 'emporer'));
console.log(compare('stay', 'stray'));
console.log(compare('cat', 'catfish'));
console.log(compare('similar', 'similarity'));
console.log(compare('paul', 'saul'));