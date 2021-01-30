import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './steams/StreamCreate'
import StreamDelete from './steams/StreamDelete'
import StreamEdit from './steams/StreamEdit'
import StreamList from './steams/StreamList'
import StreamShow from './steams/StreamShow'
import Header from './Header'
import history from '../history'


export default function App() {
    return (
        <div className="ui container" >
         
          <Router history={history} >
          <div>
          <Header />
          <Switch>
              <Route path="/" exact component={StreamList} ></Route>
              <Route path="/streams/new" exact component={StreamCreate} ></Route>
              <Route path="/streams/edit/:id" exact component={StreamEdit} ></Route>
              <Route path="/streams/delete/:id" exact component={StreamDelete} ></Route>
              <Route path="/streams/:id" exact component={StreamShow} ></Route>
              </Switch>
          </div>
          </Router>
        </div>
    )
}
