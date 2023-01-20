import React from 'react';
import { Text, Center, Flex, Box, ScrollView, Modal, Input, Button } from 'native-base';
import Header from './Header';

class NoteView extends React.Component {

     constructor(props) {
          super(props);
          this.state = {};
     }

     deleteNote = () => {
          this.props.deleteNote(this.props.index);
     }

     render() {

          return (
          <>
               <Flex width="100%" flexDirection="column">
                    <Box bgColor="white" padding="6"><Text>{ this.props.text }</Text></Box>
                    <Box bgColor="red.400" paddingLeft="6" paddingRight="6" paddingTop="3" paddingBottom="3"><Text onPress={() => this.deleteNote()}>DELETE</Text></Box>
               </Flex>
          </>
     );
     }
}

export default NoteView;