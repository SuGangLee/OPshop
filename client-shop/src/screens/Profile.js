import React, { useState, useContext } from "react";
import { UserContext } from "../contexts";
import { Button, Input } from "../components";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  margin-top: 3px;
  font-size: 14px;
  color: grey;
`;

const Profile = ({ navigation }) => {
  const { user, setUserInfo } = useContext(UserContext);
  return (
    <Container>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>상점을 개설하거나 추가 할 수 있어요!</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Text style={styles.cardText}>상점 개설</Text>
          <StyledText>
            기존 상점이 존재하지 않는 판매자는 해당 탭을 클릭 하세요!
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("EditAddress", { orderKey: 0 })}
        >
          <Text style={styles.cardText}>상점 추가</Text>
          <StyledText>
            기존 상점이 존재하는 판매자는 해당 탭을 클릭 하세요!
          </StyledText>
        </TouchableOpacity>
      </View>

      <Button title="로그아웃" onPress={() => setUserInfo({ userIdx: "" })} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  profile: {
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  profileInfo: {
    alignItems: "flex-end",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  cardContainer: {
    width: "90%",
    flex: 1,
    marginHorizontal: 15,
  },
  card: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
