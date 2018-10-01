import { GraphFileBrowser } from '@microsoft/file-browser';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GraphFileBrowser 
          getAuthenticationToken={this.getAuthenticationToken}
          onSuccess={this.onSuccess}
          onCancel={this.onCancel} />
      </div>
    );
  }

  private getAuthenticationToken(): Promise<string> {
    return new Promise(resolve => resolve('access_token'));
  }

  private onSuccess(keys: any[]): void {
    console.log('onSuccess', keys);
  }

  private onCancel(err: Error): void {
    console.log('onCancel', err.message);
  }
}

export default App;
