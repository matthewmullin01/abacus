import * as React from 'react';
import { AppRegistry, Alert } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from 'native-base';
import { StackNavigator, NavigationScreenProps } from 'react-navigation';
import Toolbar from '../../Containers/Header/header';

interface Props extends NavigationScreenProps {}

export default class ProfileScreen extends React.Component<Props> {
  componentDidMount() {
    Alert.alert('No Users Found', 'Oops, Looks like you are not signed in');
  }
  render() {
    return (
      <Container>
        <Toolbar leftIconString="arrow-back" leftIconFunction={() => this.props.navigation.pop()} title="Profile" />
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('homeScreen')}>
            <Text>Home</Text>
          </Button>
          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('editScreen')}>
            <Text>Go to Edit Screen</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
// (ProfileScreen as any).navigationOptions = ({ navigation }: any) => ({
//   header: (
//     <Header>
//       <Left>
//         <Button transparent onPress={() => (navigation as any).openDrawer()}>
//           <Icon name="menu" />
//         </Button>
//       </Left>
//       <Body>
//         <Title>Profile</Title>
//       </Body>
//       <Right />
//     </Header>
//   )
// });
