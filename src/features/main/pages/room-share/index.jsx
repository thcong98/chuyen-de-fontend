import sharingService from "../../../../services/sharingService";
import sharingDetailService from "../../../../services/sharingDetailService";
import roomService from "../../../../services/roomService";
import React, { useEffect, useState, useContext } from 'react';
import { Avatar, List, Card, Row } from 'antd';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Col } from "react-bootstrap";
import "../../index.scss";
import { BiMap, BiDollar, BiStar, BiTrip } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FiFacebook} from "react-icons/fi";
import { AiOutlinePhone} from "react-icons/ai";

function RoomShare() {
     const [roomshare, setRoomshare] = useState();
     const [sharedetail, setSharedetail] = useState();
     const [room, setRoom] = useState();
     
    const load = () => {
         sharingService.getsharing(localStorage.id) //Lấy room sharing theo id user đăng nhập
        .then(function (response) {
            setRoomshare(response)
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
        sharingService.deletesharing(id) //Lấy room sharing theo id
        .then(function (response) {
            load();
            console.log("thanhcong");
        })
        .catch(function (error) {
          console.log(error);
        });
     }
    return roomshare && (
        <>
            <h1 style={{marginTop: 100}}>Danh sách phòng trọ tìm người ở ghép</h1>
            {/* <List
                itemLayout="horizontal"
                dataSource={roomshare}
                renderItem={(item) => (
                <>  <div  style={{display: 'inline-flex', justifyContent: "space-between"}}>
                    <div>
                    <Link to={`/room-social-network/room-share-detail/${item?.sharingId}`} >
                    Chi tiết người ở ghép
                    </Link>
                    </div>
                    <div>
                    <Link to={`/room-social-network/detail/${item?.roomId}`} >
                    Chi tiết phòng ở ghép
                    </Link>
                    </div>
                    <div>
                    {item.description}
                    </div>
                    </div>
                    <List.Item>
                        <List.Item.Meta
                        title={item?.roomEntity?.descriptionRoom}
                        description = {`Giá:${item?.roomEntity?.price} VNĐ, 
                        Diện tích: ${item?.roomEntity?.capacity} 
                        m2 ${item?.sharingId}`}
                        />
                    <Button type="primary" onClick={() => {handledelete(item?.sharingId)}}>Xóa</Button>
                    </List.Item>
                </>
                )}
            /> */}
            {roomshare.map(e => {
                return <Row>
                <Col sm={24}>
                    <Card type="inner" title={e.roomEntity.titleRoom} extra={<Link to={`/room-social-network/detail/${e?.roomId}`} >Chi tiết</Link>}>
                    <img className='imgavartar' src={e.sharingDetails[0].userEntity.avatarUrl} width={46} height={46}/>
                    {e.description}
                    <hr/>
                    <span> {e.sharingDetails[0].userEntity.fullName} </span>
                    <div style={{marginTop: 5}}><AiOutlinePhone /> {e.sharingDetails[0].userEntity.phoneNumber}</div>
                    <div style={{marginTop: 5}}><CgMail /> {e.sharingDetails[0].userEntity.username}</div>
                    <div><FiFacebook /><a href={e.sharingDetails[0].userEntity.facebook}> {e.sharingDetails[0].userEntity.facebook}</a></div>
                    </Card>
                </Col>
                </Row>
            })}
        </>
    )
}
export default RoomShare