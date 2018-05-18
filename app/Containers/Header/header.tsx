import * as React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Left, Button, Icon, Title, Body, Right, Header } from 'native-base';

type Props = {
  title: string;
  leftIconString?: string;
  leftIconFunction?: Function;
  rightIconString?: string;
  rightIconFunction?: Function;
};

const Toolbar: React.SFC<Props> = props => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => (props.leftIconFunction ? props.leftIconFunction() : null)}>
          <Icon name={props.leftIconString ? props.leftIconString : ''} />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => (props.rightIconFunction ? props.rightIconFunction() : null)}>
          <Icon name={props.rightIconString ? props.rightIconString : ''} />
        </Button>
      </Right>
    </Header>
  );
};

export default Toolbar;
