import React from 'react';
import logo from './logo.svg';
import './App.css';
import { adalApiFetch, adalGraphFetch } from './adalConfig';

interface IState {
  name: string;
  tenantId: string;
}

export class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tenantId: ""
    };
  }

  componentDidMount() {
    this.getMe(); 
    this.getCompany();
  }

  getMe() {
    const meUrl = "https://graph.microsoft.com/v1.0/me/";

    adalGraphFetch(fetch, meUrl, {})
      .then(r => r.json())
      .then(r => {
        console.log(r);
        this.setState(
          {
            name: r.displayName
          }
        );
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getCompany() {
    const apiUrl = "https://talentradar-dev-web.azurewebsites.net/api/company/7";

    adalApiFetch(fetch, apiUrl, {})
      .then(r => r.json())
      .then(r => {
        console.log(r);
          this.setState(
            {
              tenantId: r.id
            }
          )
      })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <h1>DisplayName: {this.state.name}</h1>
          <h1>Tenant Id: {this.state.tenantId}</h1>
        </div>
      </div>
    );      
  }
}