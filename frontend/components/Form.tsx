import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


interface FormProps {
  children?: any;
}


const Form = (props: FormProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderColor: '#363636',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: 'rgba(149, 157, 165, 0.2)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    elevation: 4
  }
});

export default Form;
