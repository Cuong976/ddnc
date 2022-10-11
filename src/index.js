import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList
} from 'react-native';
import { useState, useEffect, useRef } from "react";
import { Checkbox } from 'react-native-paper';

export function ListItem(data) {
    return(
        <View style={styles.componentFaltList}>
                <ScrollView style={styles.ScrollView}>
                {data.map((item, index) => {
                    return (
                        <View style={styles.componentItems} key={index}>
                            <Text style={styles.textItem}>{item}</Text>
                            <Checkbox style={styles.checkBox} 
                                      status={checked ? 'checked' : 'unchecked'}
                                      onPress={() => {
                                      setChecked(!checked);}}>
                            </Checkbox>
                        </View>
                    );
                })}
                </ScrollView>
            </View>
    );
}


export default function IndexComponent({navigation}) {

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const inputRef = useRef();

    const handleSubmit = () => {
        setData([...data, value]);
        setValue("");
    };

    
    const handleRemove = (itemIndex) => {
        const newTodos = data.filter((item, index) => {
            return index !== itemIndex;
        });
        setData(newTodos);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.componentInput}>
                <TextInput style={styles.inputText} 
                            placeholder='Nhập danh sách tại đây' 
                            value={value}
                            onChangeText={(value) => setValue(value)}
                />
            <View style={{flexDirection:'row', width:'100%'}}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleSubmit}>
                    <Text style={styles.textAdd}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAdd} onPress={() => {navigation.navigate('Index2')}}>
                    <Text style={styles.textAdd}>Xem danh sách</Text>
                </TouchableOpacity>
            </View>
            </View>

             {/* Không sử dụng flatlist*/}
            <View style={styles.componentFaltList}>
                <ScrollView style={styles.ScrollView}>
                {data.map((item, index) => {
                    return (
                        <View style={styles.componentItems} key={index}>
                            <Text style={styles.textItem}>{item}</Text>
                            <Checkbox style={styles.checkBox} 
                                      status={checked ? 'checked' : 'unchecked'}
                                      onPress={() => {
                                      setChecked(!checked);}}>
                            </Checkbox>
                        </View>
                    );
                })}
                </ScrollView>
            </View>

            {/* Sử dụng flatlist
            <FlatList data={data} style={styles.componentFaltList}
                    renderItem={({item, index}) =>{
                        return (
                            <View style={styles.componentItems} key={index}>
                                <Text style={styles.textItem}>{item}</Text>
                                <Checkbox style={styles.checkBox} 
                                          checked={checked}
                                          onPress={() => {
                                          setChecked(!checked);}}>
                                </Checkbox>
                            </View>
                        );
                    }}>
                
            </FlatList> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ScrollView:{
        width:'98%',
        height:'100%'
    },

    container: {
        flex: 1
    },

    componentInput: {
        borderWidth: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    componentFaltList: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center' // không đc sử dụng trong flatlist
    },

    inputText: {
        borderBottomWidth: 1,
        width: '50%',
        height: 35,
        textAlign: 'center',
        fontSize: 17,
        marginTop: 30
    },

    buttonAdd: {
        height: 40,
        width: 150,
        backgroundColor: 'blue',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textAdd: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    componentItems: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#f0f0f0',
    },

    textItem: {
        width: '90%'
    },

    checkBox: {
        width: '10%',
        borderWidth: 1,
        textAlign: 'center'
    }
});
