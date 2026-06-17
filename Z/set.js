const arr = [1,1,2,1,2,1,6];


function freq(arr){
    const map = new Map();

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1)
        }
        else{
            map.set(arr[i], 1)
        }
        
    }
    console.log(map)
}

freq(arr);

