import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './Home.css';
import ReactTable from "react-table"
import "react-table/react-table.css"
import Bootstrap from 'react-bootstrap'
import { Route } from 'react-router';

export class EditBook extends React.Component {
    displayName = EditBook.name


    constructor(props) {
        super(props);
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

    async componentDidMount() {

        let url = 'https://localhost:44349/books/' + this.props.match.params.id;
        const response = await fetch(url); // //https://localhost:44349/books/all
        const data = await response.json();
        this.setState({ titleInput: data.title, authorInput: data.author, yearInput: data.year })

         
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
                                <input ref='author' type='text' class="form-control" placeholder="Author" onChange={this.handleChangeAuthor} value={this.state.authorInput}/>
                            </div>

                            <div class="form-group">
                                <label > Title </label>
                                <input ref='title' type='text' class="form-control" placeholder="Title" onChange={this.handleChangeTitle} value={this.state.titleInput} />
                            </div>

                            <div class="form-group">
                                <label> Year </label>
                                <input ref='year' type="number" class="form-control" placeholder="Year" min="0" max="2020" onChange={this.handleChangeYear} value={this.state.yearInput}/>
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

                                            let url = 'https://localhost:44349/books/editBook/' + this.props.match.params.id;

                                            const request = new Request(url, options);
                                            const response = await fetch(request);

                                             window.location = '/';
                                        }}> Change </button>
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