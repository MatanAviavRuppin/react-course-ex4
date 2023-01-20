import React from 'react';
import { Text, Center, Flex, Box, ScrollView, Modal, Button, TextArea } from 'native-base';
import Header from './Header';
import NoteView from './NoteView';

class CategoryView extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               modal: {
                    active: false,
                    text: '',
                    valid: false
               }
          };
     }

     back = () => {
          this.props.setPage('home');
     }

     notes = () => {
          let list = [];
          for (let note of this.props.notes) {
               const item = 
                    <NoteView deleteNote={(i) => this.deleteNote(i)} key={"cat" + this.props.title + "-" + note.index} index={note.index} text={note.text} />;
               list.push(item);
          }
          return list;
     }

     textChange = (text) => {
          let modal = {
               active: true,
               text: text,
               valid: String(text).trim().length == 0 ? false : true
          };
          this.setState({modal: modal})
     }

     addNote = () => {
          if (this.state.modal.valid) {
               this.props.addNote(this.state.modal.text);
               this.setState({
                    modal: {
                         active: false,
                         text: '',
                         valid: false
                    }
               });
          }
     }

     setModal = (active) => {
          this.setState({
               modal: {
                    ...this.state.modal,
                    active: active
               }
          });
     }

     deleteNote = (index) => {
          this.props.deleteNote(index);
     }

     render() {
          const notes = this.notes()
          return (
          <>
               <Header onBack={() => this.back()} isBack={true} title={this.props.title} slogan={false} />
               {
                    notes.length > 0 ?
                    <ScrollView 
                         marginRight="auto"
                         marginLeft="auto"
                         textAlign="center" 
                         width="80%"
                    >
                         {notes}
                    </ScrollView> :
                    <Center marginTop="6">
                         <Text bold color="white" fontSize="xl">No notes yet. Add one... 👇</Text>
                    </Center>
               }

               <Box
                    position="absolute"
                    bottom="2"
                    left="2"
                    bgColor="black"
                    padding="4"
               >
                    <Text onPress={() => this.setModal(true)} fontSize="2xl" color="white">+ Note</Text>
               </Box>

               <Modal isOpen={this.state.modal.active}>
                    <Modal.Content>
                         <Modal.Header>Add a new note</Modal.Header>
                         <Modal.Body>
                              <TextArea onChangeText={this.textChange} size="lg" h={40} placeholder="Enter text..." />
                              <Flex marginTop="2">
                                   <Button onPress={() => this.addNote()} isDisabled={!this.state.modal.valid ? true : false}>Add</Button>
                                   <Button onPress={() => this.setModal(false)} marginTop="1" colorScheme="danger">Cancel</Button>
                              </Flex>
                         </Modal.Body>
                    </Modal.Content>
               </Modal>
          </>
     );
     }
}

export default CategoryView;