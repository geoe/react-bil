import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
    Redirect
} from 'react-router-dom'
import './css/font/xiala/iconfont.css'
import './css/font/up/iconfont.css'
import './css/router.css'
import './css/app.css'
import {connect} from 'react-redux';
import Homeone from './component/homeone'
import Header from './component/header'
import Searchs from './component/search'

class AppUI extends Component {
	componentWillMount(){
    	this.props.lishijia(this.props.match.params.sid)
    }
  render() {
  	
    var props = this.props;
    return (
      <div className="Aps">
        <ul>
          {props.list.map(function(item, index){
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
	return{
		list:state.list
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		lishijia:function(data){
			dispatch({
				type:"shijijias",
				payload:data
			})
		}
	}
}
const show = connect(mapStateToProps,mapDispatchToProps)(AppUI)



class AppUIHome extends Component {
  render() {
    var props = this.props;
    return (
      <div>
		  <Homeone lists={props}/>
      </div>
    )
  }
}

const mapStateToPropshome = (state)=>{
	return{
		list:state.list
	}
}
const mapDispatchToPropshome = (dispatch)=>{
	return{
		
	}
}
const Home = connect(mapStateToPropshome,mapDispatchToPropshome )(AppUIHome)











const Anni = ({ match })=> (
<div>
<h2>
	<div>
		{match.params.xid}
	</div>
</h2>
</div>
)
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


class Search extends Component{
	render(){
		return(
			<div>
				<Searchs/>
			</div>
			)
	}

}


class App extends React.Component {constructor() {
		 super();
		 this.listst = this.listst.bind(this);
		 this.upla = this.upla.bind(this);
	}
	listst(){
		this.refs.islist.className+=' navli2'
	
	}
	upla(){
		this.refs.islist.className ='navul navul2'
	}
	render(){
		return(
		<Router>
	<div className='App'>
		<Header/>
		<div className='nav'>
		<div className='navcent'>
		<ul className='navul'>
<li><NavLink to="/home"  activeClassName='activeclass'><p>首页</p></NavLink></li>
<li><NavLink to="/channel/1" activeClassName='activeclass'><p>动画</p></NavLink></li>	
<li><NavLink to="/channel/13" activeClassName='activeclass'><p>番剧</p></NavLink></li>
<li><NavLink to="/channel/167" activeClassName='activeclass'><p>国创</p></NavLink></li>
<li><NavLink to="/channel/3" activeClassName='activeclass'><p>音乐</p></NavLink></li>
<li className='xiala'><i className="iconfont icon-xiala" onClick={this.listst}></i></li>
</ul>
	 </div>
	 <ul className='navul navul2' ref='islist'>
<li><NavLink to="/home"  activeClassName='activeclass'><p>首页</p></NavLink></li>
<li><NavLink to="/channel/1" activeClassName='activeclass'><p>动画</p></NavLink></li>	
<li><NavLink to="/channel/13" activeClassName='activeclass'><p>番剧</p></NavLink></li>
<li><NavLink to="/channel/167" activeClassName='activeclass'><p>国创</p></NavLink></li>
<li><NavLink to="/channel/3" activeClassName='activeclass'><p>音乐</p></NavLink></li>
<li><NavLink to="/channel/4" activeClassName='activeclass'><p>舞蹈</p></NavLink></li>
<li><NavLink to="/channel/5" activeClassName='activeclass'><p>科技</p></NavLink></li>
<li><NavLink to="/channel/6" activeClassName='activeclass'><p>游戏</p></NavLink></li>
<li><NavLink to="/channel/7" activeClassName='activeclass'><p>娱乐</p></NavLink></li>
<li><NavLink to="/channel/8" activeClassName='activeclass'><p>鬼畜</p></NavLink></li>
<li><NavLink to="/channel/9" activeClassName='activeclass'><p>电影</p></NavLink></li>
<li><NavLink to="/channel/0" activeClassName='activeclass'><p>电视剧</p></NavLink></li>
<li><NavLink to="/channel/11" activeClassName='activeclass'><p>纪录片</p></NavLink></li>
<li><NavLink to="/channel/12" activeClassName='activeclass'><p>影视</p></NavLink></li>
<li><NavLink to="/channel/1322" activeClassName='activeclass'><p>时尚</p></NavLink></li>
<li><NavLink to="/channel/14" activeClassName='activeclass'><p>生活</p></NavLink></li>
<li><NavLink to="/channel/15" activeClassName='activeclass'><p>广告</p></NavLink></li>
<li><NavLink to="/channel/17" activeClassName='activeclass'><p>直播</p></NavLink></li>
<li className='xiala xiala2' onClick={this.upla}><i className="iconfont icon-shang"></i></li>
</ul>
      <hr/>
      <Route  path="/" exact component={Home}/>
      <Route  path="/home" exact component={Home}/>
      <Route path="/channel/:xid" component={Anni}/>
      <Route path="/show/:sid" component={show}/>
	  <Route path="/search/:ssid" component={Search}/>
    </div>
	</div>    
  </Router>
  )
}
}
export default App