import React, { Component } from 'react';
import { 
    View, 
    Text,
    TouchableWithoutFeedback, 
    LayoutAnimation 
} from 'react-native';

import { connect } from 'react-redux';

import { selectLibrary } from '../actions';
import { getSelectedLibrary } from '../selectors';

import { CardSection } from './commons';

class ListItem extends Component{
    constructor(props){
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
        this.renderDescription = this.renderDescription.bind(this);
    }
    componentWillUpdate(){
        LayoutAnimation.linear();
    }
    handleOnPress(id){
        this.props.selectLibrary(id);
    }
    renderDescription() {
        const { expanded, library, selectLibraryId } = this.props;
        const { description } = library;
        return (expanded && 
            <CardSection>
                <Text>{description}</Text>
            </CardSection>)
    }
    render(){
        const { id, title } = this.props.library;
        return(
            <TouchableWithoutFeedback
                onPress={()=> this.handleOnPress(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

function mapStateToProps(state, ownProps){
    const expanded = state.libraries.selectedLibrary === ownProps.library.id;
    return { expanded };
}

function dispatchStateToProps(dispatch){
    return {
        selectLibrary: (payload) => dispatch(selectLibrary(payload))
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(ListItem);