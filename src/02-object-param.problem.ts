import { expect, it } from 'vitest'

// permite primitivo e composto, diferente do interface que não aceita primitivo
type Props = { 
  first: number
  second: number
}

export const addTwoNumbers = (params: Props) => {
  return params.first + params.second
}

it('Should add the two numbers together', () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6)

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30)
})
