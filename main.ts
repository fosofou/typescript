// возвращает сумму элементов массива
export function arraySum(arr: number[]): number {
  return arr.reduce(function (sum:number,elem:number){
    return sum + elem;
  }, 0)
}

// возвращает исходную строку в Title Case
export function toTitleCase(str: string[]): string {
  let result:string = ''
  str.map((el:string) => {
      let item_array = el.split(' ')
      item_array.map((word) => {
          result += word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() + ' ';
      })
  })
  return result
}

// возвращает Promise, который зарезолвит true, если b больше чем a, и зареджектит, если наоборот
export function promiseCompare(a: number, b: number): Promise<true> {
    return new Promise(function (resolve, reject){
        if (b>a){
            resolve(true)
        } else reject(true)
    })
}


export async function asyncCompare(): Promise<boolean> {
  let a: number = 10;
  let b: number = 5;
  let res: boolean = false;
  while (res!==true) {
      try {
          res = await promiseCompare(a, b)
      } catch (e) {
          b+=1;
      }
  }
  return res
}


