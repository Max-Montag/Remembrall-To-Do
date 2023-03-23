import * as React from 'react'
import Svg, {Path, SvgProps} from 'react-native-svg'
import {ColorValue} from 'react-native'

interface JournalPlusProps extends SvgProps {
  color?: ColorValue
}

const CheckMark: React.FC<JournalPlusProps> = ({color, ...props}) => {
  return (
    <Svg viewBox='0 0 60 60'>
      <Path
        d='m4.6873 31.376c6.4437 5.864 10.608 11.142 17.501 23.374 14.984-37.823 35.502-47.534 32.9-49.208-5.264-3.5325-30.874 26.075-33.971 29.981-3.724-1.972-16.43-8.865-16.43-4.147z'
        fill='none'
        stroke='#fff'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='8.125'
      />
      <Path
        d='m4.6873 31.376c6.4437 5.864 10.608 11.142 17.501 23.374 14.984-37.823 35.502-47.534 32.9-49.208-5.264-3.5325-30.874 26.075-33.971 29.981-3.724-1.972-16.43-8.865-16.43-4.147z'
        fill='#62b01e'
        fill-rule='evenodd'
        stroke='#62b01e'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='3.125'
      />
    </Svg>
  )
}

export default CheckMark
