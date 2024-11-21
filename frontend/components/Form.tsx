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
    <View 
      className="p-10 rounded-md shadow-lg"
      style={styles.container}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#363636',
    borderWidth: 1,
    borderStyle: 'solid'
  }
});

export default Form;
