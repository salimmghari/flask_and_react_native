import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';


interface LayoutProps {
  children?: any;
}


const Layout = (props: LayoutProps): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
                animated={true}
            />
            <ScrollView style={styles.subContainer}>
                {props.children}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30
  }
});


export default Layout;
