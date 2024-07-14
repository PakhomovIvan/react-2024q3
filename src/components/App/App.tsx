import { Component } from 'react';

import './App.css';
import { I_States } from '../types/types';

export default class App extends Component<object, I_States> {
  states = {
    elemList: [],
    input: '',
    isLoad: true,
    isBreak: false,
  };

  componentDidMount(): void {
    this.getLSData
      ? (this.searchElem(this.getLSData),
        this.setState({
          input: this.getLSData?.toString() || '',
        }))
      : this.getElems();
  }
}

searchElem = async (input: string) => {};
