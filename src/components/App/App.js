import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import './app.css'
import Leader from '../Leader/Leader'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Find from '../Find/Find'
import Message from '../Message/Message'
import TaskDetails from '../TaskDetails/TaskDetails'
import TaskReply from '../TaskReply/TaskReply'
import CommentDetails from '../CommentDetails/CommentDetails'
import User from '../User/User'
import About from '../About/About'
import Feedback from '../Feedback/Feedback'
import Account from '../Account/Account'
import Withdraw from '../Withdraw/Withdraw';
import Cash from '../Cash/Cash'
import Error from '../Error/Error'
import CashSure from '../CashSure/CashSure'
import Settings from '../Settings/Settings'
import UpdateUserInfo from '../UpdateUserInfo/UpdateUserInfo'
import ChangePassword from '../ChangePassword/ChangePassword'
import MyCard from '../MyCard/MyCard'
import Credit from '../Credit/Credit'
import Issue from '../Issue/Issue'
import WithdrawSure from '../WithdrawSure/WithdrawSure';
import  IssueTask from '../IssueTask/IssueTask'
import PersonalitySignature from '../PersonalitySignature/PersonalitySignature'
import Particulars from '../Particulars/Particulars'
import Question from '../Question/Question'
import Paysucceed from '../PaySucceed/Paysucceed'
import System from '../System/System'
import DialogBox from '../DialogBox/DialogBox'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Leader}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/find' component={Find}></Route>
          <Route path='/message' exact component={Message}></Route>
          <Route path='/message/system' component={System}></Route>
          <Route path='/details/:id' component={TaskDetails}></Route>
          <Route path='/reply' component={TaskReply}></Route>
          <Route path='/comment' component={CommentDetails}></Route>
          <Route path='/user' exact component={User}></Route>
          <Route path='/user/about' component={About}></Route>
          <Route path='/user/feedback' component={Feedback}></Route>
          <Route path='/user/account' exact component={Account}></Route>
          <Route path='/user/account/withdraw' component={Withdraw}></Route>
          <Route path='/user/account/cash' component={Cash}></Route>
          <Route path='/user/account/cash-sure' component={CashSure}></Route>
          <Route path='/user/account/withdraw-sure' component={WithdrawSure}></Route>
          <Route path='/user/settings' exact component={Settings}></Route>
          <Route path='/user/settings/update-user-info' component={UpdateUserInfo}></Route>
          <Route path='/user/settings/change-password' component={ChangePassword}></Route>
          <Route path='/user/my-card' component={MyCard}></Route>
          <Route path='/user/credit' exact component={Credit}></Route>
          <Route path='/user/credit/pay-succeed' component={Paysucceed}></Route>
          <Route path='/issue' exact component={Issue}></Route>
          <Route path='/issue/issue-task' component={IssueTask}></Route>
          <Route path='/user/settings/personality-signature' component={PersonalitySignature}></Route>
          <Route path='/user/account/particulars' component={Particulars}></Route>
          <Route path='/error' component={Error}></Route>
          <Route path='/user/account/question' component={Question}></Route>
          <Route path='/message/dialog-box' component={DialogBox}></Route>

        </div>
      </Router>
    )
  }
}

export default App
