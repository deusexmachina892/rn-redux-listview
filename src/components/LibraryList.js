import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { getLibraryList } from '../actions';

import { Spinner } from './commons';
import ListItem from './ListItem';

class LibraryList extends Component{
    componentDidMount(){
        this.props.getLibraryList();
    }
    renderItem(library){
        return <ListItem library={library.item} />
    }
    render(){
        const { libraries } = this.props;
        return(
            <View style={styles.listContainer}>
                {libraries.data.length > 0?
                    <FlatList 
                        data={this.props.libraries.data}
                        renderItem={library=>this.renderItem(library)}
                        keyExtractor={library=>library.id.toString()}
                    /> 
                    :<Spinner size='large' />   
                }
            </View>
        );
    }
}

const styles={
    listContainer: {
        flex: 1
    }
}
function mapStateToProps({ libraries }){
    return { libraries };
}

function mapDispatchToProps(dispatch){
    return { 
        getLibraryList: () => dispatch(getLibraryList())
     };
}
export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);