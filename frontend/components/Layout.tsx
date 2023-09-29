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
        <SafeAreaView className="grow">
            <StatusBar 
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
                animated={true}
            />
            <ScrollView 
              className="grow p-10"
              style={styles.container}
            >
                {props.children}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  }
});


export default Layout;
