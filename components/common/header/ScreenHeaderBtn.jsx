import React from 'react'
import { Pressable, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlepress}) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlepress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </Pressable>
  )
}

export default ScreenHeaderBtn