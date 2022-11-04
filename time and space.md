-Time complexity: how many primitive operations are executed

-Sace complexity: how much memory is used

## EXAMPLE 1
we are comparing all prices of hotels to the other prices (number of hotels of loops with each of the hotels)

    | hotels    | operations |
    | --------- |:----------:|
    |      3    |       9    |
    |      5    |      25    |
    |     10    |     100    |
    |    100    |    1000    |

**Operations = n^2**

## EXAMPLE 2
we have to search min and max from an unordered array

    |    max    |    min     |
    | --------- |:----------:|
    |    200    |     200    |
    |    200    |      50    |
    |    ...    |     ...    |
    |    200    |      50    |

**Operations = n*2**

## EXAMPLE 3
we have to search min and max from an ordered array

    |    max    |    min     |
    | --------- |:----------:|
    |    200    |     200    |
    |    200    |      50    |
    |    ...    |     ...    |
    |    200    |      50    |

**Operations = 2**

