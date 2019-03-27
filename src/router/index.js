import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
			path: '/',
			redirect: 'index',
		},
		{
			//主页
			path: '/index',
			redirect: 'course',
			component: resolve => require(['../components/Index.vue'], resolve),
			meta: {
				title: '主页'
			},
			children: [{
					//我的班课组件
					path: '/course',
					component: resolve => require(['../components/Course.vue'], resolve),
					meta: {
						title: '我的班课'
					}
				},
				{
					//任务中心
					path: '/task',
					component: resolve => require(['../components/Task.vue'], resolve),
					meta: {
						title: '任务中心'
					},
					children: [{
							//任务1
							path: '/task_one',
							component: resolve => require(['../components/taskone.vue'], resolve),
							meta: {
								title: '任务1'
							}
						},
						{
							//任务2
							path: '/task_two',
							component: resolve => require(['../components/tasktwo.vue'], resolve),
							meta: {
								title: '任务2'
							}
						},
						{
							//任务3
							path: '/task_three',
							component: resolve => require(['../components/taskthree.vue'], resolve),
							meta: {
								title: '任务3'
							}
						}
					]
				},
				{
					//库管理
					path: '/lib',
					component: resolve => require(['../components/Lib.vue'], resolve),
					meta: {
						title: '库管理'
					},
					
				},
				{
					//班课详情组件
					path: '/c/:id',
					component: resolve => require(['../components/CourseDetail.vue'], resolve),
					meta: {
						title: '专题详情'
					}
				},
				{
					// 个人中心组件
					path: '/ucenter',
					// redirect: 'user_infomation',
					component: resolve => require(['../components/UCenter.vue'], resolve),
					meta: {
						title: '个人中心'
					},
					children: [{
							//我的信息
							path: '/user_infomation',
							component: resolve => require(['../components/UserInfomation.vue'], resolve),
							meta: {
								title: '我的信息'
							}
						},
						{
							//用户信息
							path: '/user_profile',
							component: resolve => require(['../components/UserProfile.vue'], resolve),
							meta: {
								title: '用户信息'
							}
						},
						{
							//账号安全
							path: '/account_security',
							component: resolve => require(['../components/AccountSecurity.vue'], resolve),
							meta: {
								title: '账号安全'
							}
						}
					]
				},
			]
		},
		{
			// 注册登录
			path: '/sign',
			component: resolve => require(['../components/Sign.vue'], resolve),
			meta: {
				title: '注册登录'
			},
			children: [
				{
					path: '/sign_in',
					component: resolve => require(['../components/SignIn.vue'], resolve),
					meta: {
						title: '登录'
					},
				},
				{
					path: '/sign_up',
					component: resolve => require(['../components/SignUp.vue'], resolve),
					meta: {
						title: '注册'
					},
				}
			]
		}
	]
})