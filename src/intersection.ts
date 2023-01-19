// & can be used to convey that the type
// should be intersection of the two given types
let data : {name : string, id: number} & {hobby: string[]} = {
    name: 'rahul',
    id: 25,
    hobby: ['cricket', 'football', 'painting']
}
console.log(data);