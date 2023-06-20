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
console.log(fruits1); // ['elma', 'muz', 'portakal']

fruits1.push('çilek');
console.log(fruits1); // ['elma', 'muz', 'portakal', 'çilek']

fruits1.push('kiraz', 'üzüm');
console.log(fruits1); // ['elma', 'muz', 'portakal', 'çilek', 'kiraz', 'üzüm']

//***pop *****/JavaScript'de pop() yöntemi, bir diziden en son öğeyi çıkarmak için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziden son öğeyi kaldırarak dizinin boyutunu azaltır.

let fruits2 = ['elma', 'muz', 'portakal'];
console.log(fruits2); // ['elma', 'muz', 'portakal']

let lastFruit = fruits2.pop();
console.log(lastFruit); // 'portakal'
console.log(fruits2); // ['elma', 'muz']


//* splice******JavaScript'de splice() yöntemi, bir diziden belirli bir konumda bulunan öğeleri çıkarmak veya yeni öğeler eklemek için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziyi değiştirir ve çıkartılan veya eklenen öğeleri döndürür

let fruits3 = ['elma', 'muz', 'portakal', 'çilek'];
console.log(fruits3); // ['elma', 'muz', 'portakal', 'çilek']

let removedItems1 = fruits3.splice(1, 2);
console.log(removedItems1); // ['muz', 'portakal']
console.log(fruits3); // ['elma', 'çilek']


let fruits4 = ['elma', 'muz', 'portakal'];
console.log(fruits4); // ['elma', 'muz', 'portakal']

let removedItems2 = fruits4.splice(1, 2, 'çilek', 'kiraz');
console.log(removedItems2); // ['muz', 'portakal']
console.log(fruits4); // ['elma', 'çilek', 'kiraz']

//*************slice**********JavaScript'de slice() yöntemi, bir dizinin belirli bir kısmını başka bir dizi olarak döndürmek için kullanılan bir dizi yöntemidir. Bu yöntem, mevcut diziyi değiştirmez, sadece belirtilen aralıktaki öğeleri içeren yeni bir dizi döndürür.

let fruits = ['elma', 'muz', 'portakal', 'çilek', 'kiraz'];
console.log(fruits); // ['elma', 'muz', 'portakal', 'çilek', 'kiraz']

let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // ['muz', 'portakal', 'çilek']