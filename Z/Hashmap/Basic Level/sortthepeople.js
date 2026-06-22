let names = ["Mary","John","Emma"]
let heights = [180,165,170]
// Output: ["Mary","Emma","John"]

function peoples(names,heights){
    const map = new Map();
    for(let i=0;i<names.length;i++){
        map.set(heights[i], names[i])
    }
    console.log(map)

    heights.sort((a,b)=> b-a);

    for(let i=0;i<names.length;i++){
        names[i] = map.get(heights[i])
    }

    console.log(names)

}

peoples(names,heights);