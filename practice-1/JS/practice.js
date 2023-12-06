const arr = ["sarfraj","asif","asif","sufiyan","sufiyan","toqeere","sarfraj","junaid","junaid","sarfraj","sarfraj","sarfraj"];

const arr2 =[];

for(let item of arr){
    if(!arr2.includes(item)){
        arr2.push(item)
    }
}
console.log(arr2);

const roadmap = {
    name:'JavaScript',
};

Object.freeze(roadmap);

roadmap.name = "JavaScript Roadmap";

console.log(roadmap.name);

let abc = arr.map((a)=>{
    a = a.charAt(0).toUpperCase() + a.slice(1);
    return a
 })

 console.log(abc);

 for(let i=0;i<5;i++){
    if(i===1){
        continue;
    }
    console.log(i);
 }

const json  = '{"name":"Js","year":1995}';
const data = JSON.parse(json);

console.log(data.name);