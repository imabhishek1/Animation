// import { StatusBar } from 'expo-status-bar';
// import React from 'react'
// import { StyleSheet, Text, View, Image, FlatList, Animated } from 'react-native';
// import PngLocation from './constants/PngLocation';

// export default function App() {

//   const AVATAR_SIZE = 70
//   const SPACING = 20
//   const ITEM_SIZE = AVATAR_SIZE + SPACING * 3
//   const data = [

//     {
//      name: 'Abhishek',
//      id: 1,
//      email: 'shekabhi259@gmail.com',
//      image: PngLocation.card1,
//      phone: '8929483749'
//     },

//     {
//       name: 'Rahul',
//       id: 2,
//       email: 'Rahul259@gmail.com',
//       image: PngLocation.card2,
//       phone: '8929483749'
//      },

//      {
//       name: 'Hello',
//       id: 3,
//       email: 'Hello@gmail.com',
//       image: PngLocation.card3,
//       phone: '8929483749'
//      },

//      {
//       name: 'Hiren',
//       id: 4,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card1,
//       phone: '8929483749'
//      },

//      {
//       name: 'Shanti',
//       id: 5,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card4,
//       phone: '8929483749'
//      },

//      {
//       name: 'Simaran',
//       id: 6,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Hema',
//       id: 7,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card3,
//       phone: '8929483749'
//      },

//      {
//       name: 'Appli',
//       id: 8,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card2,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 9,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 16,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 10,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 11,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 12,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 13,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 14,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },

//      {
//       name: 'Harleen',
//       id: 15,
//       email: 'shekabhi259@gmail.com',
//       image: PngLocation.card5,
//       phone: '8929483749'
//      },


//   ]
    
//   const scrollY = React.useRef(new Animated.Value(0)).current;
  
//   return (
//     <View style = {{flex: 1, backgroundColor: "#fff"}}> 
//     <Image
//       source={PngLocation.card6}
//       style = {StyleSheet.absoluteFillObject}
//       blurRadius = {30}
//     />
//       <Animated.FlatList
//           data={data}
//           keyExtractor = {(item) => item.id}
//           onScroll = {Animated.event(
//             [{nativeEvent: {contentOffset: {y: scrollY}}}]
//           )}
//           contentContainerStyle = {{ padding: SPACING, 
//           paddingTop: StatusBar.currentHeight || 42}}
//           renderItem = {({ item, index}) => {
//             const inputRange = [
//               -1, 
//               0,
//               ITEM_SIZE * index,
//               ITEM_SIZE * (index + 2)
//             ]

//             const outputInputRange = [
//               -1, 
//               0,
//               ITEM_SIZE * index,
//               ITEM_SIZE * (index + 1)
//             ]

//             const scale = scrollY.interpolate(
//               {
//                 inputRange,
//                 outputRange : [1,1,1,0]
//               }
//             )

//             const opacity = scrollY.interpolate(
//               {
//                 inputRange: outputInputRange,
//                 outputRange : [1,1,1,0]
//               }
//             )

//             return (
//               <>
//                 <Animated.View style = {{flexDirection: "row", padding: SPACING, backgroundColor : '#ffffff',marginBottom: SPACING, borderRadius: 12,
//                                 shadowColor: "#000",
//                                 shadowOffset: {
//                                     width: 0,
//                                     height: 7,
//                                 },
//                                 shadowOpacity: 0.15,
//                                 elevation: 20,
//                                 opacity,
//                                 transform: [{scale}]
//               }}>
//                   <Image 
//                    source={item.image}
//                    style = {{
//                     width : AVATAR_SIZE,
//                     height : AVATAR_SIZE,
//                     borderRadius: AVATAR_SIZE,
//                     resizeMode: "stretch",
//                     marginRight: SPACING / 2
//                   }}
//                   />
//                   <View>
//                     <Text style = {{fontSize: 22, fontWeight: "700"}}>{item.name}</Text>
//                     <Text style = {{fontSize: 18, opacity: .7}}>{item.phone}</Text>
//                     <Text style = {{fontSize: 12, opacity: .8, color: "#0099cc"}}>{item.email}</Text>
//                   </View>
//                 </Animated.View>
//               </>
//             )
//           }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity
, FlatList } from 'react-native';
import PngLocation from './constants/PngLocation';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#FF6345', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    "image": PngLocation.card7
  },
  // <a href="https://www.flaticon.com/free-icons/earrings" title="earrings icons">Earrings icons created by Freepik - Flaticon</a>
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    "image": PngLocation.card8
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    "image": PngLocation.card9
  },
  {
    "key": "3571603",
    "title": "Monitored global data-warehouse",
    "description": "We need to program the open-source IB interface!",
    "image": PngLocation.card10
  }
]

const Indicator = ({scrollX}) => {
  return (
    <View style = {{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      
     {DATA.map((_, i) => {

      const inputRange = [(i-1) * width, i * width, (i+1) * width];

       const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8,1.4,0.8],
        extrapolate: 'clamp'

      });

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.6,0.9,0.6],
        extrapolate: 'clamp'

      });

        return (
          <Animated.View 
          key = {`indicator-${i}`}
          style = {{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
            margin: 10,
            opacity,
            transform: [{
              scale,
            }]
          }}>
            
          </Animated.View>
        )
      })} 
      
    </View>
  )
}

const BackDrop = ({scrollX}) => {

  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_,i)=> i* width),
    outputRange: bgs.map((bg) => bg)
  });

  return (
    <>
      <Animated.View 
        style = {[StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },]}
      >
        
      </Animated.View>
    </>
  )
}

const Square = ({scrollX}) => {

  const YOLO = Animated.modulo(Animated.divide(
    Animated.modulo(scrollX, width), new Animated.Value(width)
  ),1)

  const rotate = YOLO.interpolate({
    inputRange: [0,0.5,1],
    outputRange: ["35deg", "0deg", "35deg"]
  })

  const translateX = YOLO.interpolate({
    inputRange: [0,0.5,1],
    outputRange: [0, -height / 2, 1]
  })

  return <Animated.View 
    style = {{
      width : height,
      height: height,
      backgroundColor : "#fff",
      borderRadius: 86,
      position: "absolute",
      top: -height * 0.6 ,
      left: -height * 0.3,
      transform : [
        {
        rotate
        },
        {
          translateX
        }
    ]
    }}
  />
}

export default function App() {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX}/>
      <Square scrollX = {scrollX}/>
      <Animated.FlatList
        data={DATA}
        keyExtractor = {item => item.key}
        scrollEventThrottle = {16}
        onScroll = {Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        horizontal
        pagingEnabled
        contentContainerStyle = {{paddingBottom: 100}}
        showsHorizontalScrollIndicator = {false}
        renderItem = {({item}) => {
          return(
            <>
              <View style = {{ width, alignItems: 'center'}}>
                <View style = {{ flex: .7, justifyContent: 'center'}}>
                <Image 
                  source={item.image}
                  style = {{
                    width : width / 2,
                    height: width / 2,
                    resizeMode: "contain"
                  }} />
                </View>
                <View style = {{flex: .3, padding: 20}}>
                  <Text style = {{fontWeight: '800', fontSize: 28, marginBottom: 10, color: "#fff" }}>
                    {item.title}
                  </Text>
                  <Text style = {{fontWeight: '300', color: '#fff'}}>{item.description}</Text>
                </View>
              </View>
            </>
          )
        }}

      />

      <Indicator scrollX = {scrollX}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});