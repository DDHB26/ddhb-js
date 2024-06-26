const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                               //concat actually jo original arr hai marvel aur dc ka usme koi change nhi lata woh 2 arrays ko jodke ek nava array return karta hai toh usko store all heroes karta hai 

const all_new_heros = [...marvel_heros, ...dc_heros]    //... iska matlab agar do arryays jud re toh marvel heroes aur dc heroes kai elements ko pehle tod do fir jod do ek naye array kai liye, it is very useful for joining 2 or >2 arrays

// console.log(all_new_heros);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

 const real_another_array = another_array.flat(Infinity)  //yha pe infinity kai jagah agar 1 likha rehta toh [4,5] subarray waisa hie rehta but 2 kiya rehta toh sare subarrays mit jate aur ek hie array as an individual element dikhte 
 //console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) //  o/p=false
 console.log(Array.from("Hitesh"))    //  o/p= [ 'H', 'i', 't', 'e', 's', 'h' ]  , 12345678888 ka woh array nhi bana para but "12345678888" ka bana para hai means string pai kaam karta hai , objects pai bhi kaam karta hai shayad but pehle bolna padega kai key ka array banana hai ya values ka banana hai
// console.log(Array.from({name: "hitesh"})) // interesting

 let score1 = 100
 let score2 = 200
 let score3 = 300

console.log(Array.of(score1, score2, score3));  //of , what it actually do , it returns a new arrays out of set of elements you entered and elements can be variable,  arrays..  if if arrays are taken then o/p [ [ 100, 8, 5, 7 ], [ 200, 7, 587 ], 300 ] if score1,..2,..3 respectively is [100,8,5,7],[200,7,587] and 300