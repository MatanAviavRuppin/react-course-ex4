import React from 'react';
import {Center, Flex, Text} from 'native-base';

class Header extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     back = () => {
          this.props.onBack()
     }

     render() {
          return (
               <Center marginTop="10">
                         {
                              this.props.isBack ? 
                              <Flex paddingLeft="5" paddingRight="5" w="100%">
                                   <Text onPress={() => this.back()} fontSize="xl" backgroundColor="#6e6e6e" color="white" bold> Back</Text>
                              </Flex> : ''
                         }
                         <Text fontSize="6xl" bold color="white">{ this.props.title }</Text>
                         { this.props.slogan !== false ? <Text fontSize="md" bold color="white">{ this.props.slogan }</Text> : '' }
                    </Center>
          );
     }
}

export default Header;