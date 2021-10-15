import React, { ReactElement } from 'react'
import { SafeAreaView as SafeAreaViewNative } from 'react-native-safe-area-context'

function SafeAreaView({ children }: { children: any }): ReactElement {
  return (
    <SafeAreaViewNative
      style={{
        flexGrow: 1
      }}>
      {children}
    </SafeAreaViewNative>
  )
}

export default SafeAreaView
