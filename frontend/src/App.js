import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
// import './App.css';
// import axios from 'axios';
// import React, {useEffect, useState} from 'react';
// import {DatePicker} from 'antd';
// import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import { Col, Row, Statistic } from 'antd';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { LoadingOutlined, SmileOutlined, SolutionOutlined } from '@ant-design/icons';
// import { Steps } from 'antd';

// const { Countdown } = Statistic;
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

// const onFinish = () => {
//   console.log('finished!');
// };
// const onChange = (val) => {
//   if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
//     console.log('changed!');
//   }
// };


// function App() {
//   const [userName, setUsername] = useState('');

//   useEffect(() => {
//     getNames();
//   }, [])


//   // Async call, we should handle the promises  
//   const getNames = async () => {
//     const response = await axios.get('/names');
//     console.log(response);
//     setUsername(response.data);
//   }

//   const [counter, setCounter] = useState(0);

//   const handleClick1 = () => {
//     setCounter(counter + 1);
//   };

//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <div >
//       <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
            
//             background: colorBgContainer,
//           }}
//         > 
//         <h1 style={{
//           margin: '5px 0',
//           marginLeft: '16px',
//         }}>
          
//           Hallo, ich bin {userName}
          
//         </h1> 
//         </Header>
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <items>User</items>
//             <items>Bill</items>
            
//           </Breadcrumb>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//       <FloatButton.Group
//       shape="circle"
//       style={{
//         right: 24,
//       }}
//     >
//       <FloatButton icon={<QuestionCircleOutlined />} />
//       <FloatButton />
//       <FloatButton.BackTop visibilityHeight={0} />
//     </FloatButton.Group>
    
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           ReDnaKs AG ©{new Date().getFullYear()} Created by Skander Nasri
//         </Footer>
//       </Layout>
//     </Layout>
      
//     </div>
//   );
// }

// export default App;


// Multiple pages
export default function App() {
  return (
    
    <div>
      
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NoPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

