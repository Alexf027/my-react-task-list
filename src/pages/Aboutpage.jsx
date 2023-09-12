import { Text, Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';

export function Aboutpage() {
    return (
      <Tabs align='center'>
        <TabList>
          <Tab color='#08376B' _selected={{color:'#F5F5F5', bg:'#08376B'}}>About us</Tab>
          <Tab color='#08376B' _selected={{color:'#F5F5F5', bg:'#08376B'}}>Functionalities</Tab>
          <Tab color='#08376B' _selected={{color:'#F5F5F5', bg:'#08376B'}}>Used technology</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
        <Flex justify='center'>
        <Text height='300px' w='320px' mt='50px'>Our application was created with the aim of helping you organize your daily tasks in a simple and effective way.
          Whether you need to keep track of your to-dos at work, school, or your daily activities, our To-Do List is here to make it easy for you to manage your activities.</Text>
          </Flex>
          </TabPanel>
          <TabPanel>
            <List height='300px' w='370px' mt='50px' spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              Create new tasks and assign them a description.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              Mark tasks as complete once you've finished them.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              Edit or delete existing tasks.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              Display a to-do list to keep a clear track.
            </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
          <Text>
            Our app was built using the following technologies:
          </Text>
          <List height='300px' w='370px' mb='40px' mt='50px' spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              React: A JavaScript framework for building interactive user interfaces.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              React hook-form: is a form management library that makes management easy.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              React Router:A routing library to handle the different pages of the application.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              Chakra UI: A library of components and styles to design an attractive and responsive interface.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='#08376B'/>
              LocalStorage: We use the browser's local storage to save user tasks.
            </ListItem>
         </List>
         <Text>
         We hope you enjoy using our To Do List and that it helps you stay organized and productive in your daily activities!✅🎯
         </Text>
        </TabPanel>
      </TabPanels>  
    </Tabs> 
  )
}