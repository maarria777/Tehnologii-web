const distance = (a, b) => {
		let k=0
		if(typeof a!=="string" || typeof b!=="string"){
			throw new Error("InvalidType") 
		}else{
			if(a.length<b.length){
				k=b.length
			}else if(b.length<a.length){
				k=a.length
			}

			const matrice=[]
			for(let i=0;i<k+1;i++){ //+1 pentru empty string
				const rand=[];
				for(let j=0;j<k+1;j++){
					rand.push(j)
				}
				rand[0]=i
				matrice.push(rand)
			}
	
			for(let i=1;i<k+1;i++){
				for(let j=1;j<k+1;j++){
					if(a[i-1]===b[j-1]){
						matrice[i][j]=matrice[i-1][j-1]
					}else{
						matrice[i][j]=Math.min(matrice[i-1][j],matrice[i-1][j-1],matrice[i][j-1])+1
					}
				}
			}

			return matrice[a.length][b.length]
		}


}


module.exports.distance = distance