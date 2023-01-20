import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import Home from './components/Home';
import CategoryView from './components/CategoryView';

class App extends React.Component {

     constructor() {
          super();
          this.state = {
               categories: [
                    {name: "Personal"},
                    {name: "Work"},
                    {name: "Ideas"},
               ],
               notes: [
                    {
                         index: 0,
                         categoryIndex: 0, 
                         text: 'This is my very long long long long ongasdfjahsf asdfasdf sfasdfsadfjkas jnasdfjkasdnmfasdfnasdfn sda sd sdf sfd sd fsd sdf sd f note'
                    }
               ],
               page: 'home',
               category: -1,
          };
     }

     addCategory = (text) => {
          this.setState({
               categories: [...this.state.categories, {name: text}]
          });
     }
     
     enterCategory = (i) => {
          this.setState({
               page: 'category',
               category: i
          });
     }

     addNote = (text) => {
          this.setState({
               notes: [...this.state.notes, {categoryIndex: this.state.category, text: text, index: this.state.notes.length}]
          });
     }

     deleteNote = (index) => {
          let allNotes = this.state.notes;
          let findIndex = this.state.notes.findIndex(item => item.index == index);
          if (findIndex !== -1) {
               allNotes.splice(findIndex, 1);
               this.setState({notes: allNotes})
          }
     }

     setPage = (str) => {
          this.setState({
               page: 'home',
               category: -1
          });
     }


     render() {
          let notesOfCategory = [];
          if (this.state.category !== -1) {
               notesOfCategory = this.state.notes.filter(n => n.categoryIndex == this.state.category)
          }

          return (
          <NativeBaseProvider>
               <StatusBar style="auto" />
               <Box bgColor={'#61DBFB'} h="100%" w="100%">
                    { this.state.page == 'home' ? 
                    <Home 
                         enterCategory={(i) => this.enterCategory(i)} 
                         categories={this.state.categories} 
                         notes={this.state.notes}
                         addCategory={(text) => this.addCategory(text)}
                    /> : '' }

                    { 
                    this.state.page == 'category' ? 
                    <CategoryView 
                         setPage={(str) => this.setPage(str)} 
                         index={this.state.category} 
                         title={this.state.categories[this.state.category].name} 
                         notes={notesOfCategory}
                         addNote={(text) => this.addNote(text)}
                         deleteNote={(index) => this.deleteNote(index)}
                    /> : '' }
               </Box>
          </NativeBaseProvider>
     );
     }
}

/*

categoryNewModal: false,
               categoryNewText: '',
     categoryNewModal = (status) => {
          this.setState({categoryNewModal: status});
     }
     categoryNewChange = (text) => {
          this.setState({categoryNewText: text});
     }
     categoryNewClick = () => {
          this.setState({categories: [...this.state.categories, this.state.categoryNewText]});
          this.categoryNewModal(false);
     }

<Button 
                         onPress={() => this.categoryNewModal(true)}
                         position="absolute" 
                         bottom="1.5" 
                         right="1.5" 
                         opacity="0.9" 
                         backgroundColor="#6e6e6e" 
                         borderRadius="md" 
                         size="lg"
                         padding="4">
                         + New Category
                    </Button>

                    <Modal isOpen={this.state.categoryNewModal} backdropVisible={true}>
                         <Modal.Content>
                              <Modal.Header>Add a new category</Modal.Header>
                              <Modal.Body>
                                   <Input onChangeText={this.categoryNewChange} size="md" isFocused isRequired placeholder="Category name..." />
                                   <Flex
                                        flexDirection="row"
                                        justifyContent="space-between"
                                        marginTop="1.5"
                                   >
                                        <Button onPress={this.categoryNewClick}>Add</Button>
                                        <Button colorScheme="danger" onPress={this.categoryNewClick}>Cancel</Button>
                                   </Flex>
                              </Modal.Body>
                         </Modal.Content>
                    </Modal>

*/

export default App;