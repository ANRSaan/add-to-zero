let array = [0,1,2,3,4,-4, -2]
let checker = false

for(let i = 0; i < array.length; i++){
  for (let j = 1; j < array.length; j++){
    if (array[i] + array[j] === 0){
      checker = true
      break;
    }
  }
  if(checker){
    break
  }
}

if (checker){
  console.log(true)
} else {
  console.log(false)
}