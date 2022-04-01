import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FaRegCommentDots, FiSend, GiSelfLove, VscSaveAll, VscSettings} from "react-icons/all";
import {Link} from "react-router-dom";

export default function NewsLetterJs() {

    const styleStory = {
        width: "50px",
        height: "50px",
        borderRadius: "50%"
    }

    const dataStoriesUser = [
        {id: 1, username: 'azadov_azamat', activity: true},
        {id: 2, username: 'ulugbek_ayitboyev', activity: true},
        {id: 3, username: 'alisher_sultanoff', activity: true},
        {id: 4, username: 'tohir_isnatdonov', activity: true},
        {id: 5, username: 'shahriyor_0001', activity: false},
        {id: 6, username: 'boy_ota', activity: false},
        {id: 7, username: 'odilbek_nematullayev', activity: false},
        {id: 8, username: 'baxti_1', activity: false},
        {id: 9, username: 'konsta', activity: true},
        {id: 10, username: 'timur_alixanov', activity: true},
    ]

    return (
        <div style={{marginTop: '12vh'}}>
            <Container>
                <Row>
                    <Col className={"news_letter"}>
                        <div className="stories mt-4 p-2 d-flex w-100 bg-white d-flex align-items-center shadow">
                            {dataStoriesUser.map(element =>
                                <div key={element.id} className={"mx-2 d-flex align-items-center flex-column"}>
                                    <div className="img border text-center" style={styleStory}>
                                    </div>
                                    <span style={{fontSize: '13px'}}>{element.username}</span>
                                </div>
                            )}
                        </div>
                        <div className="posts_insta w-100 bg-white shadow mt-3">
                            <div
                                className="post_header w-100 border-bottom d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center mx-3">
                                    <div className="img border text-center" style={styleStory}>
                                    </div>
                                    <div className="user_name mx-2"><span>azadov_azamat</span></div>
                                </div>
                                <div className="settings mx-3">
                                    <VscSettings size={30}/>
                                </div>
                            </div>
                            <img
                                className="post w-100 h-100"
                                src="https://images.pexels.com/photos/10572777/pexels-photo-10572777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="post"/>
                            <div className="func_post">
                                <div className="like_func d-flex justify-content-between align-items-center">
                                    <ul className="d-flex align-items-center mt-1">
                                        <li className={"like_post list-group mx-2"} style={{fontSize: "1.6rem"}}>
                                            <Link className={"text-dark"} to={"/"}><GiSelfLove/></Link>
                                        </li>
                                        <li className={"comment_post list-group mx-2"} style={{fontSize: "1.6rem"}}>
                                            <Link className={"text-dark"} to={"/"}><FaRegCommentDots/></Link>
                                        </li>
                                        <li className={"send_post list-group mx-2"} style={{fontSize: "1.6rem"}}>
                                            <Link className={"text-dark"} to={"/"}><FiSend/></Link>
                                        </li>
                                    </ul>
                                    <div className="save_post">
                                        <Link className={"text-dark mx-4"} to={"/"}><VscSaveAll style={{fontSize: "1.6rem"}}/></Link>
                                    </div>
                                </div>
                                <div className="like_about mx-3">
                                    <div className="like_count">
                                        <span>Liked <b>12</b> users</span>
                                    </div>
                                    <div className="like_title mb-3">
                                        <b>azadov_azamat</b> about post
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
