import React, { Component } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Card from'../../common/card'

var radio_props = [
    {label: 'Less attractive', value: 0 },
    {label: 'More attractive', value: 1 },
    {label: 'I feel the same', value: 1 }
  ];

class Mypregnancy extends Component {
    
    state = {
        value: 0
    } 

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ScrollView style={{ flex: 1, width: '100%'  }}>
                    <View style={{ alignItems: 'center', marginTop: 10, alignSelf: 'center', flexDirection: 'row', width: '90%', flex: 1}}>
                    <ImageBackground 
                        style={{ height: 160, flex: 1, alignSelf: 'center'}}
                        source={require('../../../assets/15weeks.jpeg')}
                        >
                        <View style={{ height: 50, width: '100%', backgroundColor: 'gray', opacity: 0.8, position: 'absolute', bottom: 0, justifyContent: 'center', padding: 5}}>
                            <Text style={{ color: 'white', alignSelf: 'center' }}>
                                You're 15 weeks 5 days pregnant
                            </Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground 
                        style={{ height: 160, flex: 1, alignSelf: 'center' }}
                        source={require('../../../assets/apple.jpeg')}
                        >
                        <View style={{ height: 50, width: '100%', backgroundColor: 'gray', opacity: 0.8, position: 'absolute', bottom: 0, justifyContent: 'center', padding: 5 }}>
                            <Text style={{ color: 'white', alignSelf: 'center' }}>
                                Your baby is about the size of an apple
                            </Text>
                        </View>
                    </ImageBackground>
                    </View>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ paddingTop: 5, fontSize: 20, color: '#4d2ec9' }}>
                                Today's tips: Do you know?
                            </Text>
                            <Text style={{ fontSize: 22 }}>
                                You may experience stuffy nose and sinusitis
                            </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                                <Icon name='calendar-multiselect' size={30} color='#4d2ec9' style={{  }} />
                                <Text style={{ color: '#4d2ec9', padding: 5, fontSize: 20, fontWeight: '600' }}>
                                    Trimester Changes
                                </Text>
                            </View>
                            <Text style={{ fontSize: 22, }}>
                                How will you feel/What to do about it 
                            </Text>    
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <View style={{ flexDirection: 'row'}}>
                                <Icon name='file-document-box-outline' size={30} color='#4d2ec9' style={{  }} />
                                <Text style={{ color: '#4d2ec9', padding: 5, fontSize: 22, fontWeight: '600' }}>
                                    Your To Do Lists
                                </Text>
                            </View>
                            <Text style={{ fontSize: 18, }}>
                                Add activities to carry out this week
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, color: '#4d2ec9', fontWeight: '700' }}>
                                Rhinitis During Pregnancy: Flu, Cough and Catarrh
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/nasal-cavity.jpeg')} />
                            <Text style={{ fontSize: 18, }}>
                                Seasonal allergic rhinitis (hay fever) is most often caused by pollen......
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, color: '#4d2ec9' }}>
                                Weight gain during pregnancy
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/Pregnancy-weight.jpg')} />
                            <Text style={{ fontSize: 18, }}>
                                Seasonal allergic rhinitis (hay fever) is most often caused by pollen......
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <View style={{ flexDirection: 'row'}}>
                                <Icon name='file-document-box-outline' size={30} color='#4d2ec9' style={{  }} />
                                <Text style={{ color: '#4d2ec9', padding: 5, fontSize: 20, fontWeight: '600' }}>
                                    Poll
                                </Text>
                            </View>
                            <Text style={{ fontSize: 22, marginBottom: 10 }}>
                                Does being pregnant  make you feel more or less attractive 
                            </Text>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                onPress={(value) => {this.setState({value:value})}}
                                />
                            <TouchableOpacity style={{ backgroundColor: 'gray', opacity: 0.6, borderRadius: 4, width: '60%', marginTop: 10, marginBottom: 10 }}>
                                <Text style={{alignSelf: 'center', paddingTop: 10, paddingBottom: 10, fontSize: 26,}}>Vote</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 22, marginTop: 10, color: '#4d2ec9' }}>
                                Show results
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.containerStyle}> 
                            <Text style={{ fontSize: 22, color: '#4d2ec9' }}>
                                Exercise: Putting pillows between your legs to deal with Sciatic Pain
                            </Text>
                            <Image style={{ height: 150, width: '100%', alignSelf: 'center', marginTop: 5, marginBottom: 5 }} source={require('../../../assets/pregnancy-pillow.jpg')} />
                            <Text style={{ fontSize: 18, }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do wousmod tempor indhdifnnfi...
                            </Text>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#4d2ec9',
        paddingBottom: 5
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
}

export default Mypregnancy