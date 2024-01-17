import { SimpleGrid as ChakraSimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import * as React from 'react'

export const SimpleGrid = (props: SimpleGridProps) => {
  const columns = React.useMemo(() => {
    const count = React.Children.toArray(props.children).filter(React.isValidElement).length
    return {
      base: Math.min(1, count),
      md: Math.min(2, count),
    }
  }, [props.children])

  return (
    <ChakraSimpleGrid
      columns={columns}
      columnGap={{ base: '4', md: '6' }}
      rowGap={{ base: '8', md: '10' }}
      {...props}
    />
  )
}