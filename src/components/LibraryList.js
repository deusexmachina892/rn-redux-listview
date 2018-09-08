import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getLibraryList } from '../actions';

class LibraryList extends Component{
    componentDidMount(){
        this.props.getLibraryList();
    }
    render(){
        return(
            <View>
                <Text>
                    Library List
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return { 
        getLibraryList: () => dispatch(getLibraryList())
     };
}
export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);