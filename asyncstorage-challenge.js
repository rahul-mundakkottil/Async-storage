import React,{Component, useState} from 'react'
import {
     View,
     Text,
     StyleSheet,TextInput,TouchableHighlight,FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

 export default function asyncStorage(){
   const [inputdata,setdata]= useState("")
   const [getdata,setgetdata]= useState([])
   const [key,setkey]= useState([""])
   const [keys,setkeys]= useState([""])
   // const add =async()=>{
      //  try{AsyncStorage.setItem("note","todays task")}
      //  catch(e){console.error(e)}
  //  }
    const add =async(inputdata,key)=>{
        try{AsyncStorage.setItem(key,inputdata)}
        catch(e){console.error(e)}
    }

     // const get =async()=>{
      //  try{const storedata= await AsyncStorage.getItem("note")}
       // catch(e){console.error(e)}
 //   }
    const get =async()=>{
        try{
            const keys = await AsyncStorage.getAllKeys();
            console.log(keys[1])
            var i=1
            while(keys[i]!=null){
            const value= await AsyncStorage.getItem(keys[i])
            getdata[i] = value
            console.log("get data  " +getdata)
       //  setgetdata(getdata=>value)
      
        }
    }
       
          catch(e){console.error(e)}

        const RenderItem= ({getdata}) => (
            <View  style={styles.productbox}>
                <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{getdata}</Text>
                
            </View>
        )
        
    }
    function Product()  {                                                                            //{item}
        return keys((iteam) => {
          return (
            <View  style={{flexDirection:"row"}}>
            <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{keys[iteam]}</Text>
            <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>=</Text>
            <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}> await AsyncStorage.getItem(keys[i])</Text>
            
        </View>
          )
        })}


    return (
       < View style={styles.viewstyle}>
        
         <Text style={styles.textstyle}>{getdata}</Text>
         <Text style={styles.textstyle2}>Enter the data</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setdata(inputdata=>data,console.log("input data=", inputdata))} placeholder="input data" placeholderTextColor="black">
        
         </TextInput>
         <Text style={styles.textstyle2}>Enter the key</Text>
         <TextInput style={styles.textinput}  
            maxLength={20}
            onChangeText={(data2)=>setkey(key=>data2,console.log("key=", key))} placeholder="input key" placeholderTextColor="black">
         </TextInput>
        

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=>add(inputdata,key)}>
              <Text style={styles.buttontext}>Add</Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=> get()}>
              <Text style={styles.buttontext}>get</Text>
         </TouchableHighlight>
         
       </View>

    )
}
 
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
},
textstyle2:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',marginRight:250,marginBottom:5
},
textinput:{
      
    height:40,
    width:'90%',
    borderColor:'white',
    borderWidth:1,
    paddingLeft:40,
    marginBottom:5,
    backgroundColor:'#EBECF0',
    borderRadius:10
   

},
buttonstyle1:{
    height:40,
    width:'80%',
    marginLeft:0,
    marginTop:10,
    backgroundColor:'#4585FB',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderWidth:0.2
  
   },
   flatlist:{
        
    backgroundColor:"black"

},
productbox:{
    width:350,
    elevation:20,
    padding:10,
    marginBottom:10,
    backgroundColor:"white"
}

 })
