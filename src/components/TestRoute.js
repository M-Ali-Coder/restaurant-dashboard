import React from "react";
import QRCode from "qrcode.react";
class TestRoute extends React.Component {
  state = {
    value: "",
    size: 128,
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
    var imageSettingsCode = this.state.includeImage
      ? `
  imageSettings={{
    src: "${this.state.imageSrc}",
    x: ${this.state.centerImage ? "null" : this.state.imageX},
    y: ${this.state.centerImage ? "null" : this.state.imageY},
    height: ${this.state.imageH},
    width: ${this.state.imageW},
    excavate: ${this.state.imageExcavate},
  }}`
      : "";
    var code = `<QRCode
  value={"${this.state.value}"}
  size={${this.state.size}}
  bgColor={"${this.state.bgColor}"}
  fgColor={"${this.state.fgColor}"}
  level={"${this.state.level}"}
  includeMargin={${this.state.includeMargin}}
  renderAs={"${this.state.renderAs}"}${imageSettingsCode}
/>`;
    return (
      <div>
        {/* QRCode Value */}
        <div>
          <label>
            Value:
            <br />
            <input
              type="text"
              placeholder="Restaurant name"
              onChange={(e) => this.setState({ value: e.target.value })}
              value={this.state.value}
              style={{ padding: "10px", width: "300px" }}
            />
          </label>
        </div>
        {/* QRCode Value */}

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

export default TestRoute;
