import { Box, Spinner } from '@chakra-ui/react'
import { TLoadingError } from '../types/components'

export function LoadingError({ isLoading, isError }: TLoadingError) {
  return (
    <Box>
      {isLoading && <Spinner />}
      {isError && <div>Error</div>}
    </Box>
  )
}
