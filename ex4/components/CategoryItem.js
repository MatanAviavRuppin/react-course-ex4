import React from 'react';
import {Text, Flex, Box} from 'native-base';

class CategoryItem extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     enterCategory = () => {
          this.props.enterCategory(this.props.index);
     }

     render() {
          return (
               <Flex
               direction="row"
               width="100%"
               justifyContent="space-between"
               paddingTop="3"
          >
               <Box><Text onPress={() => this.enterCategory()} color="white" fontSize="3xl" bold>{this.props.name}</Text></Box>
               <Box><Text onPress={() => this.enterCategory()} color="white" fontSize="3xl" bold>{this.props.count}</Text></Box>
          </Flex>
          );
     }
}

export default CategoryItem;