
var closedIsland = function(grid) {
    
    const maxRows = grid.length
    const maxCols = grid[0].length

    const directions = [[0,1],[0,-1],[1,0],[-1,0]]

    const visit = new Set()

    const dfs = (r,c)=>{
        
        if(r<0 || r>= maxRows || c < 0 || c >= maxCols){
            return false
        }

        if(grid[r][c] === 1 || visit.has(`${r},${c}`)){
            return true
        }

        visit.add(`${r},${c}`)

        let isClosed = true
        for(const [dr,dc] of directions){
            const newRow = dr + r
            const newCol = dc + c

            isClosed = Math.min(isClosed,dfs(newRow,newCol))
        }

        return isClosed
    }


    let count = 0

    for(let r = 0 ; r < maxRows; r++){
        for(let c = 0 ; c < maxCols; c++){
            if(grid[r][c] === 0 && !visit.has(`${r},${c}`)){
                let res = dfs(r,c)
                if(res) {
                    count++
                    console.log("res: ", r,c)
                    } // we found a new closed island
                
            }
        }
    }

    return count

};