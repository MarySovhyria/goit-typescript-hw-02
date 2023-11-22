/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(value: T): Promise<T[]>{
  return new Promise((resolve) => {
    resolve([value]);
  });
}

getPromise("Text")
.then((data) => {
  console.log(data);
});
getPromise(50)
.then((data) => {
  console.log(data);
});

export {};