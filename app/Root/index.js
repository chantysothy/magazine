import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Pdf from "react-native-pdf";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  }
});

export default class Root extends React.Component {
  render() {
    let source = {
      uri:
        "https://www.easyweddings.com.au/wp-content/uploads/2016/12/EasyWeddings_Survey_Results_2016.pdf",
      cache: true
    };
    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={pageCount => {
            console.log(`total page count: ${pageCount}`);
          }}
          onPageChanged={(page, pageCount) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          scale={2}
          style={styles.pdf}
        />
      </View>
    );
  }
}
