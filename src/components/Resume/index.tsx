import { Component } from 'react';
import { Card } from 'react-bootstrap';
export default class Resume extends Component {
    render() {
        return (
            <>
                <Card className="h-100 m-2">
                    <iframe title="Aiden`s Resume" src="https://docs.google.com/document/d/e/2PACX-1vR1o9CtXLcDJ5kTHn792dfyEz5sO1wgRULfRU3F8_cEXwaMxfhVLvTkmwWXZ7J_nCi_5NzSXQkWaZTX/pub?embedded=true"></iframe>
                </Card>
            </>
        )
    }
}