import { Dimensions } from "react-native"
import styled from "styled-components/native";

const widthResponsive = Dimensions.get("window").width;

export const Input = styled.TextInput({
    background: "#FFFFFF",
    width: widthResponsive - 60,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 20
});

export const Button = styled.TouchableOpacity({
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "#7A55B7",
    width: Dimensions.get("window").width - 180,
    height: 48,
    borderRadius: 50,
    marginTop: 20
});

export const TextButton = styled.Text({
    color: "#FFFFFF"
});