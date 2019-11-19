import React from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions
} from 'react-native'
import Spinner from 'react-native-spinkit'

const { height } = Dimensions.get("window")
class Login extends React.Component {
    state = {
        username: "",
        password: "",
        secureText: true,
        splash: true
    }
    componentDidMount(){
      this.settime()
    }
    componentWillUnmount(){
      this.settime()
    }
    settime = () => {
        setTimeout(() => {
            this.setState({ splash: false })
        }, 5000);
    }
    splashscreen = () => {
        if (this.state.splash == true) {
            return (
                <View style={styles.splashscreen}>
                    <Image
                        source={require("../assets/pondokit.png")}
                        style={styles.logo}
                    />
                    <Spinner
                        type="FadingCircleAlt"
                        color="purple"
                        size={40}
                    />
                </View>
            )
        }
        else {
            return false
        }
    }
    eyeButton = () => {
        if (this.state.secureText == true) {
            return (
                <View style={{ height: 30, width: "80%", alignItems: "flex-end", justifyContent: "center", marginBottom: 15 }}>
                    <TouchableNativeFeedback onPress={()=>this.setState({secureText:false})}>
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
                    <TouchableNativeFeedback onPress={()=>this.setState({secureText:true})}>
                        <Image
                            source={require("../assets/closeeye.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableNativeFeedback>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.splashscreen()}
                <ScrollView >
                    <View style={styles.loginarea}>
                        <Image
                            source={require("../assets/laporansantrilogo.png")}
                            style={styles.laporansantrilogo}
                        />
                        <TextInput
                            value={this.state.username}
                            placeholder="Username"
                            placeholderTextColor="grey"
                            onChangeText={teks => this.setState({ username: teks })}
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
                            <View style={styles.buttonLogin}>
                                <Text style={styles.textbuttonLogin}>Login</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <Text style={styles.textNotHaveAccount}>Not have an account ?</Text>
                        <Text style={styles.textRegister} onPress={() => this.props.navigation.navigate("Register")}>Register</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Login


const styles = ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    splashscreen: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    logo: {
        height: 150,
        width: 200
    },
    loginarea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    laporansantrilogo: {
        marginBottom: 25,
        marginTop: height / 10
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
    buttonLogin: {
        height: 50,
        width: "80%",
        backgroundColor: "rgb(66, 155, 245)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    textbuttonLogin: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    textNotHaveAccount: {
        color: "grey"
    },
    textRegister: {
        color: "rgb(66,155,245)",
        fontSize: 20,
        fontWeight: "bold"
    }
})