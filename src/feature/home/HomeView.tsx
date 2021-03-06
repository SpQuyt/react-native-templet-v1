import * as React from 'react'
import {View} from 'react-native'
import ApiService from '../../api/config/request'
import {AUTH_URL} from '../../api/config/urls'
import {StyledList} from '../../shared/components/base'
import StyledText from '../../shared/components/base/StyledText'

const HomeView = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StyledText text={'Home'} />
        </View>
    )
}
export default HomeView
