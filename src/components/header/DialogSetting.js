import * as React from 'react';
import {View} from 'react-native';
import {Paragraph, Dialog, Portal} from 'react-native-paper';

const DialogSettings = ({visible, dismiss}) => {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss = {dismiss}>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogSettings;
