import * as React from 'react';
import { NavigationScreenProps, DrawerNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import Toolbar from '../../Containers/Header/header';

interface Props extends NavigationScreenProps {}

export default class HomeScreen extends React.Component<Props> {
  openNavDrawer = () => {
    (this.props.navigation as any).openDrawer();
  };

  render() {
    return (
      <Container>
        <Toolbar
          title="Home"
          leftIconString="menu"
          leftIconFunction={() => (this.props.navigation as any).openDrawer()}
          rightIconString="person"
          rightIconFunction={() => this.props.navigation.navigate('profileScreen')}
        />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          {/* <Button full rounded dark style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Chat')}>
            <Text>Chat With People</Text>
          </Button> */}
          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('profileScreen')}>
            <Text>Go to Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
