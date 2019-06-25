import React, { Component } from 'react';
import { Drawer, List, ListItem, Text } from 'native-base';

export default class DrawerExample extends Component {
    componentDidMount() {
        this.openDrawer()
    }
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
  render() {
      let content = <Text>nmzl</Text>
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={content}
        onClose={() => this.closeDrawer()} >
      </Drawer>
    );
  }
}