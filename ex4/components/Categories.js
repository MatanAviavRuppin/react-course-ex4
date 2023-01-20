import React from 'react';
import {ScrollView, Modal, Flex, Button, Input, Box, Text, Center} from 'native-base';
import CategoryItem from './CategoryItem';

class Categories extends React.Component {
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

     enterCategory = (i) => {
          this.props.enterCategory(i);
     }

     textChange = (text) => {
          let modal = {
               active: true,
               text: text,
               valid: String(text).trim().length == 0 ? false : true
          };
          this.setState({modal: modal})
     }

     addCategory = () => {
          if (this.state.modal.valid) {
               this.props.addCategory(this.state.modal.text);
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

     render() {
          let list = [], index = 0;
          for (let cat of this.props.categories) {
               const count = this.props.notes.filter(item => item.categoryIndex == index).length
               list.push(<CategoryItem enterCategory={(i) => this.enterCategory(i)} key={'category' + index} index={index} name={cat.name} count={ count} />);
               index++;
          }

          return (
               <>
                    {
                         list.length > 0 ?
                         <ScrollView 
                              marginRight="auto"
                              marginLeft="auto"
                              textAlign="center" 
                              width="80%" 
                              marginTop="10">
                              {list}
                         </ScrollView> :
                         <Center marginTop="6">
                              <Text bold color="white" fontSize="xl">No categories yet. Add one... 👇</Text>
                         </Center>
                    }

                    <Box
                         position="absolute"
                         bottom="2"
                         left="2"
                         bgColor="black"
                         padding="4"
                    >
                         <Text onPress={() => this.setModal(true)} fontSize="2xl" color="white">+ Category</Text>
                    </Box>

                    <Modal isOpen={this.state.modal.active}>
                         <Modal.Content>
                              <Modal.Header>Add a new category</Modal.Header>
                              <Modal.Body>
                                   <Flex marginTop="2">
                                        <Input onChangeText={this.textChange} size="lg" placeholder="Enter text..." />
                                        <Button marginTop="2" onPress={() => this.addCategory()} isDisabled={!this.state.modal.valid ? true : false}>Add</Button>
                                        <Button onPress={() => this.setModal(false)} marginTop="1" colorScheme="danger">Cancel</Button>
                                   </Flex>
                              </Modal.Body>
                         </Modal.Content>
                    </Modal>
               </>
          );
     }
}

export default Categories;