import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './Home.css';
import ReactTable from "react-table"
import "react-table/react-table.css"
import Bootstrap from 'react-bootstrap'

export class AddBook extends React.Component {
    displayName = AddBook.name


    constructor() {
        
        super();
        this.state = {
            titleInput: "",
            authorInput: "",
            yearInput: ""
            
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.allClear = this.allClear.bind(this);
    }

    componentDidMount() {

    

    }

    handleChangeTitle(event) {
        this.setState({ titleInput: event.target.value });
        
    }

    handleChangeAuthor(event) {
        this.setState({ authorInput: event.target.value });
       
    }

    handleChangeYear(event) {
        this.setState({ yearInput: event.target.value });
        
    }

    allClear() {
        this.setState({ titleInput: "", authorInput: "", yearInput: "" });
    }

    render() {
        return (
            <div >
                <Row>
                    <Col sm={4}>
                        <div> </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <div class="form-group">
                                <label> Author </label>
                                <input ref='author' type='text' class="form-control" placeholder="Author" onChange={this.handleChangeAuthor} />
                            </div>

                            <div class="form-group">
                                <label > Title </label>
                                <input ref='title' type='text' class="form-control" placeholder="Title" onChange={this.handleChangeTitle}/>
                            </div>

                            <div class="form-group">
                                <label> Year </label>
                                <input ref='year' type="number" class="form-control" placeholder="Year" min="0" max="2020" onChange={this.handleChangeYear}/>
                            </div>

                            <div>
                                <Row>
                                    <Col sm={6}>
                                        <button onClick={async () => {

                                            const book = {
                                                title: this.state.titleInput,
                                                author: this.state.authorInput,
                                                year: this.state.yearInput
                                            };

                                            const headers = new Headers();
                                            headers.append('Content-Type', 'application/json');

                                            const options = {
                                                method: 'POST',
                                                headers,
                                                body: JSON.stringify(book)
                                            }

                                            const request = new Request('https://localhost:44349/books/addBook', options);
                                            const response = await fetch(request);

                                            window.location = '/add/book';

                                        }}> Add Book </button>
                                    </Col>
                                    <Col sm={6}>
                                        <button onClick={() => {

                                            window.location = '/';
                                        }}> Back </button>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}