import { GraphFileBrowser } from '@microsoft/file-browser';
import * as React from 'react';
import './App.css';
import { IButtonProps, PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GraphFileBrowser 
          getAuthenticationToken={this.getAuthenticationToken}
          onSuccess={this.onSuccess}
          onCancel={this.onCancel}
          onRenderSuccessButton={this.onRenderSuccessButton}
          onRenderCancelButton={this.onRenderCancelButton} />
      </div>
    );
  }

  private getAuthenticationToken(): Promise<string> {
    return new Promise(resolve => resolve('<access_token>'));
  }

  private onSuccess(keys: any[]): void {
    console.log('onSuccess', keys);
  }

  private onCancel(err: Error): void {
    console.log('onCancel', err.message);
  }

  private onRenderSuccessButton(props: IButtonProps) {
    return <PrimaryButton {...props} />;
  }

  private onRenderCancelButton(props: IButtonProps) {
    return <DefaultButton {...props} />;
  }
}

export default App;
