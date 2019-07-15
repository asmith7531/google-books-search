import React, { Component } from 'react';
import Card from "semantic-ui-react"
export default class BookCard extends Component {
    render() {
        return (
            <div>
                <Card
                    width={12}
                    href='#card-example-link-card'
                    header='Harry Potter and The Sorcerors Stone'
                    meta='J.K. Rowling'
                    description="You're a wizard Harry."
                />
            </div>
        )
    }
}
