
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


