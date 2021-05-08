import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from './Login';
import Signup from './Signup';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

type UserState = {
  username: string,
  password: string,
  value: number
}
type AcceptedProps={
  updateToken: (newToken: string) => void;
  updateRole : (newRole: string) => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


// export default class SignInUpContainer extends Component <AcceptedProps, {}> {
export default class SignInUpContainer extends Component <AcceptedProps, UserState> {
  constructor (props: AcceptedProps) {
    super(props)
    this.state={
      username: '',
      password: '',
      value: 0      // 0 opens page on signin
      // sessionToken:"",
    }
  }
  updateValue = (newValue:number) => {
    this.setState({value:newValue})
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value:newValue});
  };

   paperStyle = { width: 340, margin: '20px auto' };

render () {

  return (
    <Paper elevation={20} style={this.paperStyle}>
      <Tabs
        value={this.state.value}
        indicatorColor='primary'
        textColor='primary'
        onChange={this.handleChange}
        aria-label='disabled tabs example'
        >
        <Tab label='Sign In' />

        <Tab label='Sign Up' />
      </Tabs>
      <TabPanel value={this.state.value} index={0}>
        <Login updateValue={this.updateValue} updateToken={this.props.updateToken}/>
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
        <Signup
        updateValue={this.updateValue} 
        updateToken={this.props.updateToken}
          //  updateToken={this.updateRole}
      
        />
      </TabPanel>
    </Paper>
  );
}
};

