import { describe } from 'riteway'

import range from './range'

describe('range', async assert => {
  assert({
    given: 'a start and end number',
    should:'return an array of the range of numbers between start and end, inclusive',
    actual: range(1, 3),
    expected: [1,2,3]
  })

  assert({
    given: 'start and end are both zero',
    should: 'return an array of zero',
    actual: range(0, 0),
    expected: [0]
  })

  assert({
    given: 'starting number is higher than ending number',
    should: 'range should start at the higher number and count down',
    actual: range(1, -2),
    expected: [1, 0, -1, -2]
  })
})
