import Layout from '@/components/common/layout-user'

const IssuedList = () => import(/* webpackChunkName: "home" */'@/views/userCenter/infoManagement/issued-list')
const IssueInfo = () => import(/* webpackChunkName: "home" */ '@/views/userCenter/infoManagement/issueInfo/issue-info')
const MyProfile = () => import(/* webpackChunkName: "home" */'@/views/userCenter/accountManagement/my-profile')
const MyCertification = () => import(/* webpackChunkName: "home" */'@/views/userCenter/accountManagement/my-certification')
const AccountSecurity = () => import(/* webpackChunkName: "home" */'@/views/userCenter/accountManagement/account-security')




export default {
  path: '/user-center',
  name: 'layout',
  component: Layout,
  children: [
    {
      path: 'issued-list',
      name: 'IssuedList',
      component: IssuedList
    },
    {
      path: 'issue-info',
      name: 'IssueInfo',
      component: IssueInfo
    },
    {
      path: 'my-profile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: 'detail',
      name: 'my-certification',
      component: MyCertification
    },
    {
      path: 'search',
      name: 'account-security',
      component: AccountSecurity
    }
  ]
}


