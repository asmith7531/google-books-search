import React from 'react'
import {Input, Icon, Form,Button} from "semantic-ui-react";

function SearchInput(props) {
    return (
        <Form id='bookSearch'>
            <Input name="bookInput" id="bookInput" form="bookSearch"size='huge'/>
            <Button primary size="huge"type="submit" onClick={(e) => props.handleSearchClick(e)}>
                Search
                <Icon name="right arrow" />
            </Button>
        </Form>
    )
};

export default SearchInput;