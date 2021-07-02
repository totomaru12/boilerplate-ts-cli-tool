type C = 'aaa' | 'bbb' | 'ccc'

interface CsvA {
  a: string


  b: number
  c: C
}

const a: CsvA =  {
  a: 'abc',
  b: 123,
  c: 'bbb',
}

console.log(a)
