import React from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions,
    Modal
} from 'react-native'
import { genericTypeAnnotation } from '@babel/types';

const { height } = Dimensions.get("window")
class Register extends React.Component {
    state = {
        division: "Select division",
        username: "",
        email: "",
        password: "",
        secureText: true,
        modal:false
    }
    eyeButton = () => {
        if (this.state.secureText == true) {
            return (
                <View style={{ height: 30, width: "80%", alignItems: "flex-end", justifyContent: "center", marginBottom: 15 }}>
                    <TouchableNativeFeedback onPress={() => this.setState({ secureText: false })}>
                        <Image
                            source={require("../assets/openeye.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableNativeFeedback>
                </View>
            )
        }
        else if (this.state.secureText == false) {

            return (
                <View style={{ height: 30, width: "80%", alignItems: "flex-end", justifyContent: "center", marginBottom: 15 }}>
                    <TouchableNativeFeedback onPress={() => this.setState({ secureText: true })}>
                        <Image
                            source={require("../assets/closeeye.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableNativeFeedback>
                </View>
            )
        }
    }
    changeProgrammer=()=>{
        this.setState({division:"Programmer",modal:false})
    }
    changeMultimedia=()=>{
        this.setState({division:"Multimedia",modal:false})
    }
    changeMarketer=()=>{
        this.setState({division:"Marketer",modal:false})
    }
    changeManager=()=>{
        this.setState({division:"Manager",modal:false})
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modal}
                onRequestClose={()=>this.setState({modal:!this.state.modal})}
                >
                    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"tranparant"}}>
                        <View style={{width:"80%",backgroundColor:"white",padding:10}}>
                            <TouchableNativeFeedback onPress={()=>this.changeProgrammer()}>
                                <View style={{height:50,width:"100%",padding:10,justifyContent:'center', backgroundColor:"white",elevation:10,marginBottom:10}}>
                                    <Text style={{fontSize:20,color:"grey"}}>Programmer</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>this.changeMultimedia()}>
                                <View style={{height:50,width:"100%",padding:10,justifyContent:'center', backgroundColor:"white",elevation:10,marginBottom:10}}>
                                    <Text style={{fontSize:20,color:"grey"}}>Mutlimedia</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>this.changeMarketer()}>
                                <View style={{height:50,width:"100%",padding:10,justifyContent:'center', backgroundColor:"white",elevation:10,marginBottom:10}}>
                                    <Text style={{fontSize:20,color:"grey"}}>Marketer</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>this.changeManager()}>
                                <View style={{height:50,width:"100%",padding:10,justifyContent:'center', backgroundColor:"white",elevation:10,marginBottom:10}}>
                                    <Text style={{fontSize:20,color:"grey"}}>Manager</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </Modal>
                <ScrollView >
                    <View style={styles.registerarea}>
                        <View style={styles.picker}>
                            <Text style={{ color: "grey" }}>{this.state.division}</Text>
                            <TouchableNativeFeedback onPress={()=>this.setState({modal:!this.state.modal})}>
                            <Image
                            source={require("../assets/arrow.png")}
                            style={{height:20,width:20}}
                            />
                            </TouchableNativeFeedback>
                        </View>
                        <TextInput
                            value={this.state.username}
                            placeholder="Username"
                            placeholderTextColor="grey"
                            onChangeText={teks => this.setState({ username: teks })}
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.email}
                            placeholder="Email"
                            placeholderTextColor="grey"
                            onChangeText={teks => this.setState({ email: teks })}
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder="Password"
                            placeholderTextColor="grey"
                            secureTextEntry={this.state.secureText}
                            onChangeText={teks => this.setState({ password: teks })}
                            style={styles.input}
                        />
                        {this.eyeButton()}
                        <TouchableNativeFeedback>
                            <View style={styles.buttonRegister}>
                                <Text style={styles.textbuttonRegister}>Register</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <Text style={styles.textNotHaveAccount}>Have an account ?</Text>
                        <Text style={styles.textLogin} onPress={() => this.props.navigation.navigate("Login")}>Login</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Register


const styles = ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    registerarea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    picker: {
        height: 50,
        width: "80%",
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        color: "grey",
        marginBottom: 15,
        marginTop: 20,
        flexDirection: "row"
    },
    input: {
        height: 50,
        width: "80%",
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        color: "grey",
        marginBottom: 15
    },
    buttonRegister: {
        height: 50,
        width: "80%",
        backgroundColor: "rgb(66, 155, 245)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    textbuttonRegister: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    textNotHaveAccount: {
        color: "grey"
    },
    textLogin: {
        color: "rgb(66,155,245)",
        fontSize: 20,
        fontWeight: "bold"
    }
})