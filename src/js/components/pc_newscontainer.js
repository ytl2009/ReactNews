import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import Root from "../root";

const TabPane = Tabs.TabPane;
import '../../images/11.png';//图片引入才可以被编译到
import '../../images/12.png';
import '../../images/13.png';
import '../../images/14.jpeg';

export default class PCNewsContainer extends React.Component {


    render() {
        const settings = {
            autoplay: true,
            dots: true,
            easing: 'linear',
            vertical: false
        };
        return (
            <div>
                <Row>
                    <Col span={2}/>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src='./images/11.png'/></div>
                                    <div><img src='./images/12.png'/></div>
                                    <div><img src='./images/13.png'/></div>
                                    <div><img src='./images/14.jpeg'/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={2}/>
                </Row>
            </div>
        );
    }
}