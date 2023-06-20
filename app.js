   //*  variables

let name ="burhan alaca";
console.log(name);
name="ahmet";
console.log(name);



const isim ="burhanın arabası";
console.log(isim);
// isim="ahmet arabası";
console.log(isim);


let number=50;
console.log(number);

number=number +10
number=number*12
number=number%11

console.log(number);



//!***** array******

const isimler =["mehmet", "ahmet","mustafa","murat"];
console.log( isimler.length);
console.log(isimler);
console.log(typeof isimler);
// isimler.push(3);

//* **push***** :javaScript'de push() yöntemi, bir dizinin sonuna bir veya daha fazla öğe eklemek için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziye yeni öğeler ekleyerek dizinin boyutunu değiştirir

let fruits1 = ['elma', 'muz', 'portakal'];
console.log(fruits); // ['elma', 'muz', 'portakal']

fruits.push('çilek');
console.log(fruits); // ['elma', 'muz', 'portakal', 'çilek']

fruits.push('kiraz', 'üzüm');
console.log(fruits); // ['elma', 'muz', 'portakal', 'çilek', 'kiraz', 'üzüm']

//***pop *****/JavaScript'de pop() yöntemi, bir diziden en son öğeyi çıkarmak için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziden son öğeyi kaldırarak dizinin boyutunu azaltır.

let fruits2 = ['elma', 'muz', 'portakal'];
console.log(fruits); // ['elma', 'muz', 'portakal']

let lastFruit = fruits.pop();
console.log(lastFruit); // 'portakal'
console.log(fruits); // ['elma', 'muz']


//* splice******JavaScript'de splice() yöntemi, bir diziden belirli bir konumda bulunan öğeleri çıkarmak veya yeni öğeler eklemek için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziyi değiştirir ve çıkartılan veya eklenen öğeleri döndürür

let fruits3 = ['elma', 'muz', 'portakal', 'çilek'];
console.log(fruits); // ['elma', 'muz', 'portakal', 'çilek']

let removedItems1 = fruits.splice(1, 2);
console.log(removedItems); // ['muz', 'portakal']
console.log(fruits); // ['elma', 'çilek']


let fruits = ['elma', 'muz', 'portakal'];
console.log(fruits); // ['elma', 'muz', 'portakal']

let removedItems = fruits.splice(1, 2, 'çilek', 'kiraz');
console.log(removedItems); // ['muz', 'portakal']
console.log(fruits); // ['elma', 'çilek', 'kiraz']