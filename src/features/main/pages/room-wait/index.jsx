// import waitinglistService from "../../../../services/waitinglistService";
// import React, { useEffect, useState, useContext } from 'react';
// import { Avatar, List } from 'antd';
// import { Link } from "react-router-dom";
// import { Button } from 'antd';
// import {DataContext} from '../../../../utils/DataContext'
// import { red } from "@ant-design/colors";

// function RoomWait() {
//      //const [roomwait, setRoomwait] = useState();
//      const loadroomwait = useContext(DataContext).loadroomwait;
//      const roomwait = useContext(DataContext).roomwait;
//      const setroomwait = useContext(DataContext).setroomwait;
//     // const load = () => {
//     //     waitinglistService.getuserid(localStorage.getItem("id")) //Lấy room chờ theo userid
//     //     .then(function (response) {
//     //        setRoomwait(response)
//     //        console.log(response);
//     //     })
//     //     .catch(function (error) {
//     //       console.log(error);
//     //     });
//     // }
//     useEffect(() => {
//         loadroomwait();
//     },[])
//     const handlexoa = (id) => {
//         waitinglistService.delete(id) //Lấy room chờ theo userid
//         .then(function (response) {
//             loadroomwait();
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//      }

//      const handledowloadListWaiting = (id) => {
//         waitinglistService.dowload() //Lấy room chờ theo userid
//         .then(function (response) {
//             console.log("dowload ok");
//             console.log(response)
//         })
//         .catch(function (error) {
//           console.log("ko ok");
//         });
//      }
//     return roomwait && (
//         <>
//             <h1 style={{marginTop: 100}}>Danh sách phòng trọ xem sau</h1>
            
            
//             <List
//                 itemLayout="horizontal"
//                 dataSource={roomwait}
//                 renderItem={(item) => (
//                 <><div>
//                     <Link to={`/room-social-network/detail/${item?.roomId}`} >
//                     <List.Item>
//                         <List.Item.Meta
//                         avatar={<Avatar src={item.userEntity?.avatarUrl} />}
//                         title={item?.roomEntity?.titleRoom}
//                         description={item?.roomEntity?.descriptionRoom}
//                         />
//                     </List.Item>
//                     </Link>
//                     <Button type="primary" onClick={() => {handlexoa(item?.id)}}>Xóa</Button>
//                 </div>
//                 </>
//                 )}
//             />
//         </>
//     )
// }
// export default RoomWait

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Carousel, List, Space } from 'antd';
import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {DataContext} from '../../../../utils/DataContext'
import waitinglistService from "../../../../services/waitinglistService";
import userService from "../../../../services/userService";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function RoomWait() { 
    const roomwait = useContext(DataContext).roomwait;
    const loadroomwait = useContext(DataContext).loadroomwait;
    useEffect(() => {
        loadroomwait();
    },[])
    const handlexoa = (id) => {
        waitinglistService.delete(id) //Lấy room chờ theo userid
        .then(function (response) {
            loadroomwait();
        })
        .catch(function (error) {
          console.log(error);
        });
     }
    return roomwait && (
    <>
    <h1 style={{marginTop: 100}}>Danh sách phòng trọ xem sau</h1>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={roomwait}
    renderItem={(item) => (
      <List.Item
        key={item.titleRoom}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          <Button type="primary" onClick={() => {handlexoa(item?.id)}}>Xóa</Button>
        ]}
        extra={
            
          <img
            width={272}
            height={200}
            alt="logo"
            src={item.roomEntity.documentEntities[0]?.nameUrl}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.userEntity.avatarUrl} />}
          title={<Link to={`/room-social-network/detail/${item?.roomId}`} >{item?.roomEntity?.titleRoom}</Link>}
          description={item?.roomEntity?.descriptionRoom}
        />
        {item?.roomEntity?.descriptionRoom}
      </List.Item>
    )}
  />
  </>
)};

export default RoomWait;