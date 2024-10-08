// import React from 'react'
// import { Box, Text, Anchor } from '@mantine/core'
// import { useTranslation } from 'react-i18next'

// const yearNow = new Date().getFullYear()

// const Footer: React.FC = () => {
//   const { t, ready } = useTranslation(['default'])

//   if (!ready) {
//     // If translations are not ready, you can choose to render a loading state or an empty element
//     return null // Or any other loading state you prefer
//   }

//   return (
//     <Box
//       sx={(theme) => ({
//         textAlign: 'center',
//         fontSize: '0.8rem',
//         padding: '1rem',
//         position: 'relative',
//         width: '100%',
//       })}
//     >
//       <Text mb={10} style={{ color: 'gray', opacity: 0.7 }}>
//         &copy; {yearNow} - Carelyo. All rights reserved.
//       </Text>
//       <Box
//         sx={{
//           display: 'inline-block',
//           position: 'relative',
//           fontSize: '1rem',
//         }}
//       >
        
//         <Anchor
//           href={import.meta.env.VITE_CARELYO_URL || 'https://carelyo.io'}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: 'green', textDecoration: 'none' }}
//         >
//           <Text
//             weight={700}
//             size="34px"
//             sx={{
//               display: 'inline-block',
//               color: 'green',
//               position: 'relative',
//               paddingTop: '1.2em', // Adjust spacing for better alignment
//             }}
//             >
//             Carelyo
//             <Text
//               weight={500}
//               size="34px"
//               sx={{
//                 position: 'absolute',
                // top: '0.2em',
                // right: '-0.3em',
//                 color: 'green',
//                 display: 'inline-block',
//               }}
//             >
//               ®
//             </Text>
            
//           </Text>
//           <Text
//           sx={{
//             // position: 'absolute',
//             // top: '0',
//             // left: '50%',
//             // transform: 'translateX(-50%)',
//             color: 'green',
//             fontSize: '0.8rem',
//             // whiteSpace: 'nowrap',
//             display: 'inline-block',
//           }}
//         >
//           Powered by
//         </Text>
//         </Anchor>
//       </Box>
//     </Box>
//   )
// }

// export default Footer
import React from 'react'
import { Box, Text, Anchor } from '@mantine/core'
import { useTranslation } from 'react-i18next'

const yearNow = new Date().getFullYear()

const Footer: React.FC = () => {
  const { t, ready } = useTranslation(['default'])

  if (!ready) {
    // If translations are not ready, you can choose to render a loading state or an empty element
    return null // Or any other loading state you prefer
  }

  return (
    <Box
      sx={(theme) => ({
        textAlign: 'center',
        fontSize: '0.8rem',
        padding: '1rem',
        position: 'relative',
        width: '100%',
      })}
    >
      <Text mb={10} style={{ color: 'gray', opacity: 0.7 }}>
        &copy; {yearNow} - Carelyo. All rights reserved.
      </Text>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '1rem',
        }}
      >
        <Anchor
          href={import.meta.env.VITE_CARELYO_URL || 'https://carelyo.io'}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'green', textDecoration: 'none' }}
        >
          <Text
            weight={700}
            size="34px"
            sx={{
              display: 'inline-block',
              color: 'green',
              position: 'relative',
              // paddingBottom: '0.5em', // Adjust spacing for better alignment
            }}
          >
            Carelyo
            <Text
              weight={500}
              size="34px"
              sx={{
                position: 'absolute',
                top: '-0.4em',
                right: '-0.3em',
                color: 'green',
                display: 'inline-block',
              }}
            >
              ®
            </Text>
          </Text>
        </Anchor>
        <Text
          sx={{
            color: 'green',
            fontSize: '0.8rem',
            marginTop: '-0.15em', // Space between Carelyo and Powered by
          }}
        >
          Powered by
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
