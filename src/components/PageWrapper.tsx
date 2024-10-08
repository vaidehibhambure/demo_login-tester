import React from 'react'
import { Paper } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  // Determine if the screen size is mobile
  const mobile = useMediaQuery('(max-width: 625px)')

  return (
    <Paper
      m='auto'
      maw={360}
      my={'md'}
      style={{
        paddingLeft: mobile ? '1rem' : '0',
        paddingRight: mobile ? '1rem' : '0',
      }}
    >
      {children}
    </Paper>
  )
}

export default PageWrapper
