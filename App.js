/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import type { Node } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [oneHundred, setOneHundred] = useState(0);
  const [twoHundred, setTwoHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [sum, setSum] = useState(0);

  const [coke, setCoke] = useState(0);
  const [pepsi, setPepsi] = useState(0);
  const [soda, setSoda] = useState(0);

  const [buy, setBuy] = useState(0);
  const [remain, setRemain] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Cancel = () =>
    Alert.alert(
      "Bạn muốn hủy bỏ giao dịch?",
      "Tiến trình mua hàng sẽ bị hủy, tiền sẽ được hoàn lại.",
      [
        {
          text: "OK",
          onPress: () => {
            Alert.alert(
              "Bạn đã hủy tiến trình!",
              "Bạn được hoàn " + sum.toString() + " đồng",
              [
                {
                  text: 'Ok'
                }
              ]
            )
            setTen(0);
            setTwenty(0);
            setFifty(0);
            setOneHundred(0);
            setTwoHundred(0);
            setFiveHundred(0);
            setCoke(0);
            setPepsi(0);
            setSoda(0)
            setSum(0)
            setBuy(0)
            setRemain(0)

          }
        },
        {
          text: "Cancel",
          style: "cancel"
        }

      ]
    );

  const Submit = () =>
    Alert.alert(
      "Bạn muốn xác nhận giao dịch?",
      "Bạn sẽ nhận được: " + coke.toString() + " chai coke, "+ pepsi.toString() + " chai pepsi, "+ soda.toString() + " chai soda và "+ remain.toString() + " đồng tiền thừa.",
      [
        {
          text: "OK",
          onPress: () => {
            Alert.alert(
              "Thành công!",
              "Chúc bạn vui vẻ.",
              [
                {
                  text: 'Ok'
                }
              ]
            )
            setTen(0);
            setTwenty(0);
            setFifty(0);
            setOneHundred(0);
            setTwoHundred(0);
            setFiveHundred(0);
            setCoke(0);
            setPepsi(0);
            setSoda(0);
            setSum(0);
            setBuy(0);
            setRemain(0);
          }
        },
        {
          text: "Cancel",
          style: "cancel"
        }

      ]
    );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.text}>Mời bạn bỏ tiền vào máy</Text>
          <View
            style={{ flexDirection: 'row' }}
          >
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: 'yellow' }}
              onPress={() => { setTen(prevCount => prevCount + 1); setSum(prevSum => prevSum + 10000); setRemain(prevSum => prevSum + 10000) }}
            >
              <Text>
                10.000đ | {ten}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#0033FF' }}
              onPress={() => { setTwenty(prevCount => prevCount + 1); setSum(prevSum => prevSum + 20000); setRemain(prevSum => prevSum + 20000)  }}
            >
              <Text>
                20.000đ | {twenty}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: 'pink' }}
              onPress={() => { setFifty(prevCount => prevCount + 1); setSum(prevSum => prevSum + 50000); setRemain(prevSum => prevSum + 50000)  }}
            >
              <Text>
                50.000đ | {fifty}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: 'row' }}
          >
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: 'green' }}
              onPress={() => { setOneHundred(prevCount => prevCount + 1); setSum(prevSum => prevSum + 100000); setRemain(prevSum => prevSum + 100000)  }}
            >
              <Text>
                100.000đ | {oneHundred}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#FFFF66' }}
              onPress={() => { setTwoHundred(prevCount => prevCount + 1); setSum(prevSum => prevSum + 200000); setRemain(prevSum => prevSum + 200000)  }}
            >
              <Text>
                200.000đ | {twoHundred}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#3366CC' }}
              onPress={() => { setFiveHundred(prevCount => prevCount + 1); setSum(prevSum => prevSum + 500000); setRemain(prevSum => prevSum + 500000)  }}
            >
              <Text>
                500.000đ | {fiveHundred}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            Tổng số tiền: {sum} đ
          </Text>
          <Text style={styles.text}>
            Các mặt hàng:
          </Text>
          <View
            style={{ flexDirection: 'row' }}
          >
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: 'red' }}
              onPress={() => { setCoke(prevCount => prevCount + 1); setBuy(prevSum => prevSum + 10000); setRemain(prevSum => prevSum - 10000) }}
            >
              <Text>
                Coke | {coke}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#3333FF' }}
              onPress={() => { setPepsi(prevCount => prevCount + 1); setBuy(prevSum => prevSum + 10000); setRemain(prevSum => prevSum - 10000) }}
            >
              <Text>
                Pepsi | {pepsi}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#EEEEEE' }}
              onPress={() => { setSoda(prevCount => prevCount + 1); setBuy(prevSum => prevSum + 20000); setRemain(prevSum => prevSum - 20000) }}
            >
              <Text>
                Soda | {soda}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            Đã mua: {buy} đ
          </Text>
          <Text style={styles.text}>
            Còn lại: {remain} đ
          </Text>
          <View
            style={{ flexDirection: 'row' }}
          >
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: 'red' }}
              onPress={Cancel}
            >
              <Text>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#00FF00' }}
              onPress={Submit}
            >
              <Text>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin:10,
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    height: 50,
    backgroundColor: "#DDDDDD",
    margin: 10
  },
});

export default App;
