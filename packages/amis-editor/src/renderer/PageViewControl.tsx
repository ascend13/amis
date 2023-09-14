/**
 * @file 页面弹出视图控件
 */

import React from 'react';
import cx from 'classnames';
import {FormControlProps, FormItem, Switch, autobind} from 'amis';

interface PageViewControlProps extends FormControlProps {
  /**
   * 隐藏无弹出效果
   */
  hideDefaultView?: 'text' | 'dot' | 'ribbon';
  onChange: (preset: string) => void;
}

interface PageViewControlState {
  view: string;
}

const pageViewList = [
  {
    view: '',
    viewName: '无弹出',
    img: ''
  },
  {
    view: 'dialog',
    viewName: '弹窗',
    img: ''
  },
  {
    view: 'drawer',
    viewName: '抽屉',
    img: ''
  }
];

export default class PageViewControl extends React.Component<
  PageViewControlProps,
  PageViewControlState
> {
  constructor(props: PageViewControlProps) {
    super(props);

    this.state = {
      view: ''
    };
  }

  @autobind
  setActivePageView(activeView: string) {
    if (activeView !== this.state.view) {
      this.setState({
        view: activeView
      });
      this.props.onChange(activeView);
    }
  }

  render() {
    const {hideDefaultView} = this.props;
    let viewList = pageViewList;
    if (hideDefaultView) {
      viewList = viewList.filter(item => item.view !== '');
    }
    return (
      <div className={cx('ae-pageViewControl')}>
        <div className={cx('ae-pageViewControl-list')}>
          {viewList.map((item, index) => {
            return (
              <div
                className={cx('ae-pageViewControl-item')}
                key={index}
                onClick={() => this.setActivePageView(item.view)}
              >
                <div
                  className={cx('ae-pageViewControl-item-img-wrapper', {
                    'ae-pageViewControl-item-img-wrapper--active':
                      item.view === this.state.view
                  })}
                >
                  <div
                    className={cx(
                      'ae-pageViewControl-item-img',
                      item.img ? `ae-pageViewControl-item-img-${item.view}` : ''
                    )}
                  ></div>
                </div>
                <div className={cx('ae-pageViewControl-item-name')}>
                  {item.viewName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

@FormItem({type: 'ae-pageViewControl'})
export class BadgeControlRenderer extends PageViewControl {}
