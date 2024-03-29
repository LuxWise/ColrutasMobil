import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomInput from "../../components/customInput";
import CustomButtom from "../../components/customButtom";
import logo from "../../assets/logo.png";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { URL } from "../../constans";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [body, setBody] = useState({ usuario: "", contrasenia: "" });

  useEffect(() => {
    setBody({
      usuario: user,
      contrasenia: password,
    });
  }, [user, password]);

  const handleLogin = async () => {
    axios.post(`${URL}/loginMobile`, body).then(async res => {
      if (res.data.Status === "exito") {
        await SecureStore.setItemAsync("token", res.data.Token);
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        navigation.replace("Home");
      } else {
        console.log("bad login");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.containerInput}>
        <CustomInput
          placeholder="usuario"
          value={user}
          setValue={setUser}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="contraseña"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <CustomButtom onPress={handleLogin} text="Ingresar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
    backgroundColor: "#0ea5e9",
  },
  containerInput: {
    width: "100%",
  },
  logo: {
    width: "70%",
    maxWidth: 250,
    maxHeight: 200,
    borderRadius: 25,
  },
});

export default Login;

/*
  const checkUser = text => {
    setUser(text);
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password bad';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase) {
      return 'Password bad';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber) {
      return 'Password bad';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength) {
      return 'Password bad';
    }

    return null;
  };
    */
