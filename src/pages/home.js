import React, { Component } from "react";

import {Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

//var width = Dimensions.get('window').scale; //full width
//var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  content:{
      backgroundColor: '#F3F3E2',
      flex: 1
  },
  header:{
    width: '100%',
    height: 92,
    backgroundColor: '#7FC7AF',
  },
  headerBox:{
    marginTop: -35,
    marginLeft: 90,
    flex: 1
  },
  entregarEm:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 14,

    color: '#FFFFFF',

  },
  endereco:{ 
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    
    color: '#FFFFFF'
  },
  foto:{
    width: 55,
    height: 55,
    left: 21,
    top: 15,
    borderRadius:50,
    
    backgroundColor: '#FFFFFF'
  },
  menuBox:{
    width: '100%',
    height: 154,
    top: -8,

    //borderWidth: 1,
    //borderColor: '#E0DEDE',
    elevation:2,

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameCateg:{
    marginLeft: 40,
    marginTop: -23,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,

    color: '#746666'

  },
  categ:{
    width: 147,
    height: 38,
    marginLeft: 21,
    marginTop: 10,
    elevation:1,
    
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#E0DEDE',
    borderRadius: 10
  },
  col1:{
    flex:0.5
  },
  col2:{
    flex:200
  },
  categ2:{
    width: 147,
    height: 38,
    marginLeft: 190,
    marginTop: 9.8,
    elevation:1,
    
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#E0DEDE',
    borderRadius: 10,
  },
  slide:{
    width: '100%',
    height: 245,
    marginTop: -3,
    //borderWidth: 1,
    borderColor: '#E0DEDE',
    elevation:1,
    
    backgroundColor: '#FFFFFF'
  },
  imagem:{
    width: 329,
    height: 215,
    left: 15,
    marginTop: 15,
    
    backgroundColor: '#000000',
    borderRadius: 10
  },
  Scroll:{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //flex:1
  },
  icon:{
    marginLeft: 10,
    marginTop: 5
  },
  boxBebidas:{
    width: '100%',
    height: 228,
    top: 6,
    //elevation:20,
    borderWidth: 1,
    borderColor: '#E0DEDE',
    backgroundColor: '#FFFFFF',
  },
  boxBebidasTitulo:{
    left: 19,
    top: 8,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,

    color: '#B7ABAB',
  },
  boxBebidasVerMais:{
    left: 275,
    top: -13,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 18,

    color: '#3FB8AF',
  },
  boxBebidasContent:{
    flex:1,
    flexDirection:'row'
  },
  Card:{
    width: 125,
    height: 170,
    left: 15,
    right:12,
    top: 1,

    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#E0DEDE',
    elevation:3,
    borderRadius: 10,
  }
});

export default class Home extends Component {
    render() {
      return (
        <SafeAreaView style={styles.content}>
          <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#4DA888" />
          <ScrollView>
            <View>
                <View style={styles.header}>
                    <View style={styles.foto}></View>
                    <View style={styles.headerBox}>
                      <Text style={styles.entregarEm}>Entregar em</Text>
                      <Text style={styles.endereco}>Rua Um, 02 - Sumaré</Text>
                    </View>
                </View>
                <View style={styles.menuBox}>
                    <View style={styles.col1}>
                        <View style={styles.categ}>
                          <Icon 
                            name="glass-mug-variant" 
                            size={25} 
                            color="#3FB8AF" 
                            style={styles.icon}
                          />
                          <Text style={styles.nameCateg}>Cervejas</Text>
                        </View>
                        <View style={styles.categ}>
                          <Icon 
                            name="glass-wine" 
                            size={25} 
                            color="#3FB8AF" 
                            style={styles.icon}
                          />
                          <Text style={styles.nameCateg}>Vinhos</Text>
                        </View>
                        <View style={styles.categ}>
                          <Icon 
                            name="glass-cocktail" 
                            size={25} 
                            color="#3FB8AF" 
                            style={styles.icon}
                          /><Text style={styles.nameCateg}>Destilados</Text>
                        </View>
                    </View>
                    <View style={styles.col2}>
                        <View style={styles.categ2}>
                          <Icon 
                            name="beer" 
                            size={25} 
                            color="#3FB8AF" 
                            style={styles.icon}
                          /><Text style={styles.nameCateg}>Sem álcool</Text>
                        </View>
                        <View style={styles.categ2}>
                          <Icon 
                            name="peanut-outline" 
                            size={25} 
                            color="#3FB8AF" 
                            style={styles.icon}
                          /><Text style={styles.nameCateg}>Petiscos</Text>
                        </View>
                        <View style={styles.categ2}>
                          <Icon 
                            name="delete-variant" 
                            size={25} color="#3FB8AF" 
                            style={styles.icon}
                          /><Text style={styles.nameCateg}>Outros</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.imagem}></View>
                </View>
                <View style={styles.boxBebidas}>
                  <View syle={styles.boxBebidasHeader}>
                    <Text style={styles.boxBebidasTitulo}>CERVEJAS</Text>
                    <Text style={styles.boxBebidasVerMais}>Ver mais</Text>
                  </View>
                  <View style={styles.boxBebidasContent}>
                    <View style={styles.Card}>

                    </View>
                    <View style={styles.Card}>

                    </View>
                  </View>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView> 
      );
    }
  }
  