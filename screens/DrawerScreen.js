import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTSIZE } from '../constant'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { DrawerComponents } from '../components'

const DrawerScreen = () => {

    const [active, setActive] = useState()

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            <View style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.primary
            }}>
                <View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 150,
                    marginTop: 20,
                    backgroundColor: 'white'
                }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 150,
                    }} source={{ uri: 'https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg' }} />
                </View>
                <Text style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: FONTSIZE.h1,
                    color: COLORS.white
                }}>Báo Mới Mỗi Ngày</Text>
            </View>

            <DrawerContentScrollView style={{
                backgroundColor: '#fff',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            }}>
                <DrawerComponents name={'Home'} setActive={(value) => setActive(value)} active={active} />
                <DrawerComponents name={'Coin'} setActive={(value) => setActive(value)} active={active} />
                <DrawerComponents name={'Gold'} setActive={(value) => setActive(value)} active={active} />
                <DrawerComponents name={'Setting'} setActive={(value) => setActive(value)} active={active} />
            </DrawerContentScrollView>

            <View style={{
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: COLORS.white,
                    fontSize: FONTSIZE.h3
                }}>@CopyRight Tuan.vn</Text>
            </View>
        </View>
    )
}

export default DrawerScreen