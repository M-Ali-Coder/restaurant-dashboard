import React from "react";
import QRCode from "qrcode.react";

class UserQRCode extends React.Component {
  state = {
    value: "Hello world",
    size: 400,
    fgColor: "#000000",
    bgColor: "#ffffff",
    level: "L",
    renderAs: "svg",
    includeMargin: false,
    includeImage: true,
    imageH: 24,
    imageW: 24,
    imageX: 0,
    imageY: 0,
    imageSrc: "https://static.zpao.com/favicon.png",
    imageExcavate: true,
    centerImage: true,
  };
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="mb-5 text-center">افحص الصورة باستخدام الموييل الخاص بك</h1>
        <QRCode
          value={this.state.value}
          size={this.state.size}
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          level={this.state.level}
          renderAs={this.state.renderAs}
          includeMargin={this.state.includeMargin}
          imageSettings={
            this.state.includeImage
              ? {
                  src: this.state.imageSrc,
                  height: this.state.imageH,
                  width: this.state.imageW,
                  x: this.state.centerImage ? null : this.state.imageX,
                  y: this.state.centerImage ? null : this.state.imageY,
                  excavate: this.state.imageExcavate,
                }
              : null
          }
        />
      </div>
    );
  }
}

export default UserQRCode;
