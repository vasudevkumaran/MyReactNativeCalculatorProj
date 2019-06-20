import React,{Component} from 'react';
import {View,TouchableOpacity,Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#420C01'
  },
  resultContainer:{
    flex:1
  },
  btnsContainer:{
    flex:4,
    backgroundColor:'#DA7803'
  },
  btnsRow:{
    flex:1,
    flexDirection:'row'
  },
  inputBtn:{
    flex:1,
    backgroundColor:'#420C01',
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
    margin:4
  },
  inputBtnEqual:{
    flex:2,
    backgroundColor:'#420C01',
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
    margin:4
  },
  inputBtnText:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold'
  },
  resultText:{
    color:'#FFFFFF',
    fontSize:70,
    textAlign:'right',
    margin:10
  }
});

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <View style={style.container}>
      <View style={style.resultContainer}>
          <Text style={style.resultText}>0</Text>
      </View>
      <View style={style.btnsContainer}>
        <View style={style.btnsRow}>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnsRow}>
        <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnsRow}>
        <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnsRow}>
        <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={style.btnsRow}>
        <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtn}>
            <Text style={style.inputBtnText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.inputBtnEqual}>
            <Text style={style.inputBtnText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }
}

