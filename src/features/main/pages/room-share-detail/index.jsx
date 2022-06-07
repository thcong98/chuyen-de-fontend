import sharingService from "../../../../services/sharingService";
import sharingDetailService from "../../../../services/sharingDetailService";
import roomService from "../../../../services/roomService";
import React, { useEffect, useState, useContext } from 'react';
import { Avatar, List } from 'antd';
import { Link } from "react-router-dom";
import { Button } from 'antd';

function ShareDetail() {
     const [roomshare, setRoomshare] = useState();
     const [sharedetail, setSharedetail] = useState();
     const [room, setRoom] = useState();
     
    const load = () => {
      sharingDetailService.getsharingdetail(localStorage.id) //Lấy room sharing theo id user đăng nhập
        .then(function (response) {
          setSharedetail(response)
            setRoom(response)
            //setSharedetail(response)
            
            console.log("phòng ở ghép");
           console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    useEffect(() => {
        load()
    },[])
    const handledelete = (id) => {
        sharingDetailService.deletesharingdetail(id) //Lấy room sharing theo id
        .then(function (response) {
            load();
            console.log("thanhcong");
        })
        .catch(function (error) {
          console.log(error);
        });
     }
    return sharedetail && (
        <>
            <h1 style={{marginTop: 100}}>Chi tiết phòng ở ghép</h1>
            <List
                itemLayout="horizontal"
                dataSource={sharedetail}
                renderItem={(item) => (
                <>
                    <Link to={`/room-social-network/room-share-detail/${item?.sharingId}`} >
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.userEntity?.avatarUrl} />}
                        title={item?.roomEntity?.descriptionRoom}
                        description = {`Tên người ở ghép: ${item?.userEntity.fullName}
                        , giới tính: ${item?.userEntity.gender}, liên lạc qua facebook: ${item?.userEntity.facebook}, liên lạc qua gmail: ${item?.userEntity.username}`}
                        />
                    </List.Item>

                    </Link>
                    <Button type="primary" onClick={() => {handledelete(item?.sharingId)}}>Xóa</Button>
                </>
                )}
            />
        </>
    )
}
export default ShareDetail