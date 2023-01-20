
const user_data = [
    {name: 'rahul', phone: '9337094734', id: 1 },
    {name: 'pranav', phone: '9337094432', id: 2 },
    {name: 'sainath', phone: '9334594734', id: 3 }
];

function convert_list_to_dictionary <T>(users : T[]) {
    let user_obj : {
        [key : string] : T
    } = {};
    users.map((item : any)  => {
        user_obj[item.id] = item;
    });
    return user_obj;
}

let dict = convert_list_to_dictionary(user_data);
console.log(dict);

// Generics 
interface Dict<T>{
    [key : string] : T
}

function mapDict<T, U>(input : Dict<T>,
    mappingCb: (arg : T) => U
    ) : Dict<U>{

    let toReturn : Dict<U> = {};   

    for(let key in input){
        toReturn[key] = mappingCb(input[key]);
    }
    return toReturn;
}

function filterDict <T>(input: Dict<T>,
    filterCb : (arg : T) => boolean
    ) : Dict<T>{
    
    let toReturn : Dict<T> = {};

    for(let key in input){
        if(filterCb(input[key])){
            toReturn[key] = input[key];
        }
    }

    return  toReturn;
}

function reduceDict <T, V>(input: Dict<T>,
    reducerCb: (item : T, currentValue: V) => V,
    initialValue: V 
    ) : V{
        
    let toReturn : V = initialValue;

    for(let key in input){
        toReturn = reducerCb(input[key], toReturn);
    }
    return toReturn;
}


interface HasId{
    id : string
};

function listToDict<T extends HasId>(list : T[]){

}