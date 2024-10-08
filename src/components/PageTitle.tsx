import { Anchor, Box, createStyles, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'


const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 24
  }
}))

interface PageHeaderProps {
  title: string
  description?: string
  link?: string
  label?: string
}

const PageHeader = ({ title, description, link, label }: PageHeaderProps) => {
  const { classes } = useStyles()
  return (
    <Box mb='lg'>
      <Title className={classes.title} order={2} align='center' color='teal'>
        <strong>{title}</strong>
      </Title>
      <Text color='dimmed' size='lg' align='center' mt='xl'>
        {description}
        {link && (
          <Anchor to={link} size='lg' component={Link}>
            <strong>{label}</strong>
          </Anchor>
        )}
      </Text>
    </Box>
  )
}

export default PageHeader
