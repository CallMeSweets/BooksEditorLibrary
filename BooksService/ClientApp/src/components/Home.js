import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './Home.css';
import ReactTable from "react-table"
import "react-table/react-table.css"
import MatchSorter from "match-sorter"

export class Home extends React.Component {
  displayName = Home.name

   
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            loading: true,
            titleInput: "",
            authorInput: "",
            yearInput: "",
            id: 0,
            filtered: []
        }

       
        this.allClear = this.allClear.bind(this);
    }

	async componentDidMount() {

		const response = await fetch('https://localhost:44349/books/all/'); // //https://localhost:44349/books/all
		const data = await response.json();
        this.setState({ books: data, loading: false })

	}

 
    getAllBooks() {
        const columns = [
            {
                Header: "Title",
                id: "title",
                accessor: d => d.title,
                filterMethod: (filter, rows) =>
                    MatchSorter(rows, filter.value, { keys: ["title"] }),
                filterAll: true,
                
            },
            {
                Header: "Author",
                id: "author",
                accessor: d => d.author,
                filterMethod: (filter, rows) =>
                    MatchSorter(rows, filter.value, { keys: ["author"] }),
                filterAll: true,
                
            },
            {
                Header: "Year",
                accessor: "year",
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                
            },
            {
                Header: "Delete",
                Cell: props => {
                    return (
                        <button className="" onClick={async () => {
                            let url = "https://localhost:44349/books/delete/" + props.index;
                            const response = await fetch(url);
                            const data = await response.json();
                            this.setState({ books: data, loading: false })
                            console.log("props", props.index);
                        }}> Delete </button>
                        )
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                sortable: false,
            }
        ]

        return (
            <ReactTable
                columns={columns}
                data={this.state.books}
                filterable
                defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]).includes(filter.value)
                }
                defaultPageSize={100}
                showPagination={false}
                filtered={this.state.filtered}
                onFilteredChange={filtered => {this.setState({filtered});}}
                getTrProps={(state, rowInfo) => ({
                   
                    onDoubleClick: () => this.props.history.push("/edit/book/" + rowInfo.index)

                })}
            >
                
            </ReactTable>
        );

    }

   
	
    async allClear() {
        this.setState({filtered: []});   
    }

  

  render() {
    return (
		<div>
			{this.state.loading || !this.state.books ? (
				<div> loading... </div>
			) : (

					<div>
						<div>
							<Grid fluid>
								<Row>
                                    <Col sm={10}>
                                    
									</Col>
                                    
                                    <Col sm={1}>
                                        <button onClick={() => {
                                            window.location = '/add/book';
                                        }}> Add Book </button>
                                    </Col>

                                    <Col sm={1}>
                                        <button onClick={this.allClear} > Clear </button>
									</Col>

								</Row>
							</Grid>
						</div>
						<div class="tableSettings" >
							<Row>
								<Col sm={12}>
									
										{this.getAllBooks()} 
									
								</Col>
							</Row>
						</div>
					</div>
				)}
			

		</div>
		
    );
  }
}




