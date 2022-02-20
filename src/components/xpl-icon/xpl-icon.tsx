import { Component, Host, h, Prop } from '@stencil/core';
import octicons from '@fernandogelin/octicons';
import feather from '@fernandogelin/feather-icons';

@Component({
  tag: 'xpl-icon',
  shadow: true,
})
export class XplIcon {
  @Prop() icon: string;
  @Prop() from: 'octicon' | 'feather' = 'feather';

  render() {
    return (
      <Host>
        {this.from === 'feather' && <span innerHTML={feather.icons[this.icon].toSvg({fill: 'currentColor', stroke: 'none'})}/>}
        {this.from === 'octicon' && <span innerHTML={octicons[this.icon].toSVG({fill: 'currentColor', stroke: 'none'})}/>}
      </Host>
    );
  }

}
