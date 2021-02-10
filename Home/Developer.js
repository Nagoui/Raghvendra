
import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, FlatList, ImageStore, } from 'react-native';
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Thumbnail, Content, Header, Left, Right, Body, Button } from 'native-base';
var { height, width } = Dimensions.get('window');

export default class ProfileTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 1
        }
    }
    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'gray' }
            )
        }
        else {
            return (
                {}
            )
        }
    }
    // // renderSectionOne() {
    // //     return images.map((image, index) => {
    // //         return (
    // //             <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
    //                 {/* <Image style={{
    //                     flex: 1,
    //                     alignSelf: 'stretch',
    //                     width: undefined,
    //                     height: undefined
    //                 }}
    //                     source={image}
    //                 /> */}
    //             </View>
    //         )
    //     })
    // }
    renderSection() {

        if (this.state.activeIndex == 0) {
            alert('jhhg')

            // return (
            //     <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            //         {/* <Text>jyguyguyytr</Text> */}
            //         {this.renderSectionOne()}
            //     </View>
            // )

        }
        else if (this.state.activeIndex == 1) {

            return (
                <View>
                    {/* <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" /> */}
                </View>
            )
        }
    }

    componentDidMount() {
        console.log(width)
    }
    render() {
        return (

            <Container style={{ flex: 1, backgroundColor: 'white' }} >
                <Header style={{ backgroundColor: 'light-gray' }}>
                    <Left>
                        {/* <Icon name="camera" style={{ padding: 10, fontSize: 20 }} /> */}
                    </Left>
                    <Body style={{ alignItems: 'center' }}><Text style={{ width:160,fontSize:17,fontWeight:'bold',left:10 }}>About Developer</Text></Body>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 20 }} />
                    </Right>
                </Header>
                <Content>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1,alignItems:'center',justifyContent:'flex-start' }}>
                                <Image source={require('../asset/33.jpeg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }}
                                />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'flex-end' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{left:20}}>7</Text>
                                        <Text style={{ fontSize: 10, color: 'gray',left:20 }}>Developed App</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>9</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>In Progress</Text>
                                    </View>
                                    <View style={{ alignItems: 'center',right:20 }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>Total App</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row',alignItems:'flex-start',padding:10 }}>
                                    <View style={{flexDirection:'row'}}>
                                    <Button
                                        style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}
                                    >
                                        <Text>*Profile</Text>
                                    </Button>
                                    <Button border style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center' }}>
                                        {/* <Icon name="setting" style={{color:'black'}}/> */}
                                        <Text style={{fontSize:18}}>{'>'}</Text>
                                    </Button>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ paddingBottom: 10, paddingHorizontal: 10,width:width }}>
                            <Text style={{ fontWeight: 'bold' }}>About Ritesh</Text>
                            <Text>Ritesh Kumar Bharti</Text>
                            <Text>ECC1714022</Text>
                            <Text>BCA 3rd Year</Text>
                            <Text>Ewing Christan Collage</Text>
                            <Text>React-Native</Text>
                            <Text>riteshbharti373@gmail.com</Text>

                            <Text>https://nagoui.github.io/Nagoui_Website/</Text>

                        </View>
                    </View>

                    <View >
                        <View style={{ padding: 0, flexDirection: "row", justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                            
                            
                        <View style={{ padding: 10,paddingHorizontal:30 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1,alignItems:'center',justifyContent:'flex-start' }}>
                                <Image source={require('../asset/31.jpeg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }}
                                />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'flex-end' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{left:20}}>1</Text>
                                        <Text style={{ fontSize: 10, color: 'gray',left:20 }}>Developed App</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>1</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>In Progress</Text>
                                    </View>
                                    <View style={{ alignItems: 'center',right:20 }}>
                                        <Text>3</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>Total App</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row',alignItems:'flex-start',padding:10 }}>
                                    <View style={{flexDirection:'row'}}>
                                    <Button
                                        style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}
                                    >
                                        <Text>*Profile</Text>
                                    </Button>
                                    <Button border style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center' }}>
                                        {/* <Icon name="setting" style={{color:'black'}}/> */}
                                        <Text style={{fontSize:18}}>{'>'}</Text>
                                    </Button>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ paddingBottom: 10, paddingHorizontal: 10,width:width }}>
                            <Text style={{ fontWeight: 'bold' }}>About Raghvendra</Text>
                            <Text>Raghvendra Mishra</Text>
                            <Text>ECC1714063</Text>
                            <Text>BCA 3rd Year</Text>
                            <Text>Ewing Christan Collage</Text>
                            <Text>React-Native(expo)</Text>
                            <Text>MISHRA00721@gmail.com</Text>

                            {/* <Text>https://nagoui.github.io/Nagoui_Website/</Text> */}

                        </View>
                    </View>
                            
                            
                            
                            
                            
                            {/* <Button transparent
                                onPress={() => this.segmentClicked(0)}
                                transparent
                                active={this.state.activeIndex == 0}
                            >
                                <Icon name="app"
                                    style={[this.state.activeIndex == 0 ? {} : { color: 'gray' }]}
                                />
                            </Button> */}
                            {/* <Button
                                onPress={() => this.segmentClicked(1)}
                                transparent active={this.state.activeIndex == 1}>
                                <Icon name="list" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(2)}
                                transparent active={this.state.activeIndex == 2}>
                                <Icon name="bookmark" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }} size={32}></Icon>
                            </Button> */}
                            {/* <Button
                                onPress={() => this.segmentClicked(3)}
                                transparent last active={this.state.activeIndex == 3}>
                                <Icon name="people" style={[{ fontSize: 32 }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}></Icon>
                            </Button> */}

                        </View>
                        {/* {this.renderSection()} */}
 {/* <View style={{top:-100}}> */}
                        {/* <FlatList
                            horizontal={false}
                            numColumns={3}
                            
                            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }]}
                            renderItem={({ item, index }) =>
                                <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                                    <Image style={{
                                        backgroundColor:'lightgray',
                                        // height:90,
                                        // width:90,
                                        flex: 1,
                                        // top:-100,
                                        alignSelf: 'stretch',
                                        width: undefined,
                                        height: undefined,
                                    }}
                    resizeMode="contain"

                                        source={images[index]}>
                                    </Image>
                                </View>
                            }//end render item
                        /> */}
 {/* </View> */}
                    </View>
                    {/* <View> */}
                    {/* </View> */}
                </Content>
            </Container>
        );

    }

}