'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Chip, Selectize as ChildField } from 'react-native-material-selectize';

export default class ChipField extends Component {
  static defaultProps = {
    onChipClose: () => {},
    onSubmitEditing: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  focus = () => {
    this._childField.focus();
  };

  blur = () => {
    this._childField.blur();
  };

  getSelected = () => this._childField.getSelectedItems().result;

  isErrored = () => {
    return !!this.state.error;
  }


  onChipClose = onClose => {
    const { onChipClose } = this.props;
    const { error } = this.state;

    onChipClose(!error && this.getSelected().length > 1);
    onClose();
  }

  render() {
    const { items } = this.props;
    const { error } = this.state;

    return (
      <ChildField
        ref={c => this._childField = c}
        chipStyle={[styles.chip, {marginHorizontal: this.props.marginHorizontal}]}
        chipIconStyle={styles.chipIcon}
        error={error}
        tintColor="#028fb0"
        textInputProps={{
          onBlur: () => this._childField.submit(),
          placeholder: this.props.inputPlaceHolder,
        }}
        renderChip={(id, onClose, item, style, iconStyle) => (
          <Chip
            key={id}
            iconStyle={iconStyle}
            onClose={() => this.onChipClose(onClose)}
            text={id}
            style={style}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  chip: {
    paddingRight: 2,


  },
  chipIcon: {
    backgroundColor: 'transparent',
  },
});