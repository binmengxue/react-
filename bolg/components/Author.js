import React from "react";
import { Avatar, Divider } from "antd";
import "../static/style/components/author.css";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="http://b-ssl.duitang.com/uploads/item/201802/20/20180220165946_RiGPS.thumb.700_0.jpeg"
        />
        <div className="author-introduction">
          在秃顶的路上一去不返
          <Divider>社交帐号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    </div>
  );
};
export default Author;
