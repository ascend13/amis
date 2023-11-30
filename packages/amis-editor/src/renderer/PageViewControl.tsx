/**
 * @file 页面弹出视图控件
 */
import React from 'react';
import cx from 'classnames';
import {FormControlProps, FormItem, autobind} from 'amis';
import {Icon} from 'amis-ui';

interface PageViewControlProps extends FormControlProps {
  /**
   * 隐藏无弹出效果
   */
  hideDefaultView?: 'text' | 'dot' | 'ribbon';
  onChange: (type: string) => void;
  onEdit: (type: string) => void;
}

interface PageViewControlState {
  view: string;
  hoverIndex?: number;
}

const pageViewList = [
  {
    view: 'empty',
    viewName: '无弹出'
  },
  {
    view: 'dialog',
    viewName: '弹窗'
  },
  {
    view: 'drawer',
    viewName: '抽屉'
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

  componentDidMount() {
    const dialogViewType = this.props.data?.dialogView?.dialogType;
    this.setState({
      view: dialogViewType ? dialogViewType : 'empty'
    });
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

  setHoverIndex(view: string, index: number) {
    this.setState({
      hoverIndex: view === this.state.view && view !== 'empty' ? index : -1
    });
  }

  render() {
    const {hideDefaultView} = this.props;
    let viewList = pageViewList;
    if (hideDefaultView) {
      viewList = viewList.filter(item => item.view !== 'empty');
    }
    return (
      <div className={cx('ae-pageViewControl')}>
        <div className={cx('ae-pageViewControl-list')}>
          {viewList.map((item, index) => {
            return (
              <div className={cx('ae-pageViewControl-item')} key={index}>
                <div
                  className={cx('ae-pageViewControl-item-img-wrapper', {
                    'ae-pageViewControl-item-img-wrapper--active':
                      item.view === this.state.view
                  })}
                  onMouseEnter={() => this.setHoverIndex(item.view, index)}
                  onMouseLeave={() => this.setState({hoverIndex: -1})}
                >
                  {this.state.hoverIndex === index && (
                    <div className={cx('ae-pageViewControl-item-edit')}>
                      <div
                        className={cx('ae-pageViewControl-item-icon-container')}
                        onClick={() => this.props.onEdit(item.view)}
                      >
                        <Icon icon="edit" className="icon" />
                      </div>
                    </div>
                  )}
                  <div className={cx('ae-pageViewControl-item-img-container')}>
                    <div
                      className={cx(
                        'ae-pageViewControl-item-img',
                        `ae-pageViewControl-item-img-${item.view}`
                      )}
                      onClick={() => this.setActivePageView(item.view)}
                    ></div>
                  </div>
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
