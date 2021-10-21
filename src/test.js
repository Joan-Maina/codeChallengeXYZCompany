let arr = [{name: 'joa', home: 'nyeri'}, {name:'robert', home: 'kiambu'}]
joanArr = arr.filter(item => !(item.home == 'nyeri'))
console.log(joanArr)