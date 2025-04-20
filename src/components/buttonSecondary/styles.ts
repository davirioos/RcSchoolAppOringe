import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const style = StyleSheet.create({
    
    conteiner:{
        backgroundColor: '#B8795E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: wp('70%'),
        height: hp('10%'),
        maxHeight: 50,
        maxWidth: 320,
        borderColor: '#754F3C',
        borderTopWidth: 3,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 8,
    },
    text:{
        fontFamily: 'Montserrat',
        fontWeight: 900,
        color: '#fff',
        fontSize: wp('5%'),
        
    }
})