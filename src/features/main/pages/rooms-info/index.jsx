import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import { Card } from 'antd';
import { BiMap, BiDollar, BiStar, BiTrip } from "react-icons/bi";
import { RiHomeHeartFill} from "react-icons/ri";
import { FaSlideshare } from "react-icons/fa";
import waitinglistService from "../../../../services/waitinglistService";
import sharingService from "../../../../services/sharingService";
import { BlockOutlined } from '@ant-design/icons';
import {DataContext} from '../../../../utils/DataContext'
import "../../index.scss"


const { Meta } = Card;


const handleshare = (id) => {
  const dataroomshare = {
    roomId: id,
    sharingDetails: [
        {
            userId:localStorage.getItem("id"),
            role: localStorage.getItem("role")
        }
    ]
  }
  sharingService.addsharing(dataroomshare) 
   .then(function (response) {
      console.log('Thanh cong');
      console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });
}

function RoomsInfo(props) {
  const loadroomwait = useContext(DataContext).loadroomwait;
  const roomwait = useContext(DataContext).roomwait;
  useEffect(() => {
    loadroomwait();
  }, [])

  //danh sách xem sau
  const handletym = (id) => {
    var idroomwaite = roomwait.find(i => i.userId == localStorage.getItem("id") && i.roomId == id)?.id;
    //nếu có thì xóa
    if(roomwait.some(i => i.roomId == id)) {
      waitinglistService.delete(idroomwaite) //Lấy room chờ theo userid
      .then(function (response) {
          loadroomwait();
          console.log('xóa đi');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
        //chưa có thì thêm
    else  {
      const dataroomtym = {
        userId: localStorage.getItem("id"),
        roomId: id
      }
      waitinglistService.add(dataroomtym) 
       .then(function (response) {
          loadroomwait();
          console.log('them vao');
          console.log(roomwait.some(i => i.roomId == id));
          console.log(response)
       })
       .catch(function (error) {
         console.log(error);
       });
    }
  }
  var items = props.data;
  var a = props?.itemsAmount
  const roomsInfo = items.map((item, index) => {
    
    return index < a && (
      <Col sm={8} key={index} xs={24} md={8} lg={8}>
          <Card
            hoverable
            cover={<img alt="Ảnh phòng trọ" height={250} src={(item.documentEntities && item.documentEntities !== []) ? item.documentEntities[0]?.nameUrl : "https://noithattrevietnam.com/uploaded/Kien-thuc-nha-dep/hinh-anh-nha-2-tang-mai-thai/1-hinh-anh-nha-2-tang-mai-thai.jpg"} />}
            style={{height: 420}}
          >
          <Link to={`detail/${item.roomId}`} style={{ color: "black"}} >
            <Meta title={item.titleRoom} />
            <Meta description={item.descriptionRoom} style={{ color: "black",lineHeight:1.4,height:16, fontSize: 14, WebkitLineClamp:1, WebkitBoxOrient:"vertical", overflow:"hidden",display:"block", display:'-webkit-box'}} />
            <div style={{marginTop: 5}}><BiTrip /> Diện tích: {item.capacity} m<sup>2</sup></div>
            <div><BiStar /> Đánh giá: ⭐️⭐️⭐️</div>
            <div>
              <BiMap /> {`${item.wardId?.wardName}, ${item.districtId?.districtName}, ${item.provinceEntity?.provinceName}`}
            </div>
            </Link>
            <div style={{display: 'inline-flex'}}>
            <Button type="primary" style={{ background: "#8D0972", borderColor: "#8D0972", marginTop: 5}}>{item.price}/tháng</Button>
            <Button onClick={() => {handletym(item.roomId)}} style={{ borderColor: "#ffff"}}>
            <RiHomeHeartFill class={roomwait.some(i => i.roomId == item.roomId) && "red"} style={{marginLeft: 0, width: 30, height: 30 }} />
            </Button>
            <Button onClick={() => handleshare(item.roomId, item.role)} style={{ borderColor: "#ffff"}}>
            <FaSlideshare style={{marginLeft: 0, width: 30, height: 30 }} />
            </Button>
            </div>
          </Card>
      </Col>
    )
  });
  return (
    <div className="container-fluid">
      <div className="titleHolder">
        <h2>{props.title}</h2>
        {props.desc ? <p>{props.desc}</p> : <></>}
      </div>
      <Row gutter={[16, 16]} >
        {roomsInfo}
      </Row>
      {a==6 &&
        <Row>
          <Col span={24} style={{textAlign: 'center', marginTop: 50}}>
            <Link to="room-list"><Button type="primary" >------ Xem tất cả ------</Button></Link>
          </Col>
        </Row>
      }
      <hr style={{border: 2, color: "#BCADB0"}} />
    </div>
  );
}

export default RoomsInfo;