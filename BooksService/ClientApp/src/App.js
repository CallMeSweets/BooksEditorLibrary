import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AddBook } from './components/AddBook';
import { EditBook } from './components/EditBook';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/add/book' component={AddBook} />
            <Route exact path='/edit/book/:id' component={EditBook} />
      </Layout>
    );
  }
}
