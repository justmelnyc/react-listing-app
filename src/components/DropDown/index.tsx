import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IDropDownProps, IDropDownState } from './DropDown';
import './DropDown.scss';

class DropDown extends React.Component<IDropDownProps, IDropDownState> {
  constructor(props: IDropDownProps) {
    super(props);
    this.state = {
      displayMenu: false,
    };
  }

  public showDropdownMenu = (event: any) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  public hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  public handleChange = (value: string) => {
    const { onChange, dropDownName } = this.props;
    onChange(dropDownName, value);
  };

  public render() {
    const { label, selectedValue, list } = this.props;
    const { displayMenu } = this.state;
    let selected = '';
    if (list) {
      list.forEach((e: any) => {
        if (selectedValue === e.value) {
          selected = e.label;
        }
      });
    }
    return (
      <div className="dropdown-container">
        <p className="dropdown-label">{label}</p>
        <div className="dropdown" onClick={this.showDropdownMenu}>
          <span>{selected}</span>
          <span className="down-caret">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        {displayMenu && list && (
          <div className="list-item-container">
            {list.map((option: any, index: number) => {
              return (
                <div
                  className="list-item"
                  key={index}
                  onClick={() => {
                    this.handleChange(option.value);
                  }}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DropDown;
