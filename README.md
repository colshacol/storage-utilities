# storage-utilities

## Usage

```js
import { parse, stringify } from 'storage-utilities'

// Sample of what localStorage might be.
const localStorage = {
  foo: "muahaha",
  fee: "[0, 1, 2]"
}

const foo: string = parse(localStorage.getItem('foo'))
// "muahaha"

const fee: number[] = parse(localStorage.getItem('fee'))
// [0, 1, 2]

const bar: string = stringify({ name: 'Tommy' })
// "{ name: 'Tommy' }"

const baz: string = stringify("yolo")
// "yolo"

```