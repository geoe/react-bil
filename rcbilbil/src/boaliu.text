import React ,{Component}from 'react'
import './css/router.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './css/font/xiala/iconfont.css'
import './css/font/up/iconfont.css'
import Searchs from './component/search'
import Homeone from './component/homeone'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'

class Home extends Component{
	  componentWillReceiveProps(nextProps) {
     console.log(nextProps.location.pathname)
     } 
	render(){
		return(
			<div>
				<Homeone/>
			</div>
			)
	}

}

const Anni = ({ match })=> (
<div>
<h2>
	<div>
		{match.params.xid}
	</div>
</h2>
</div>
)


const show = ({ match }) => (
<div>
<h3>{match.params.sid}</h3>
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




class router extends Component {constructor() {
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
		<Route  path="/home" exact component={Home}/>
		<Route path="/channel/:xid" component={Anni}/>
		<Route path="/show/:sid" component={show}/>
		<Route path="/search" component={Search}/>
		</div>
		</Router>

		)
	}

}
export default router
