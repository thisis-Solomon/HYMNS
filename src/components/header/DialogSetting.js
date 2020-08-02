import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Dialog,
  Portal,
  Card,
  Title,
  Switch,
  IconButton,
  Colors,
} from 'react-native-paper';

const DialogSettings = ({visible, dismiss, selectVision, vision}) => {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={dismiss}>
          <Dialog.Content>
            {/*the hymn selection */}
            <Card
              style={styles.itemsCentered}
              onPress={selectVision}>
              <Card.Content>
  <Title>{vision}</Title>
              </Card.Content>
            </Card>

            {/* increament & decr */}
            <View style={styles.flexRow}>
              <Card.Content style={[styles.flexRow, styles.itemsCentered]}>
                <IconButton
                  icon="arrow-up-circle-outline"
                  color={Colors.red500}
                  size={25}
                  onPress={() => console.log('Pressed')}
                />
                <Title>14</Title>
                <IconButton
                  icon="arrow-down-circle-outline"
                  color={Colors.red500}
                  size={25}
                  onPress={() => console.log('Pressed')}
                />
              </Card.Content>

              {/* Dark Mode switch */}
              <Card.Content style={{alignSelf: 'center'}}>
                <Switch />
              </Card.Content>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  itemsCentered: {alignItems: 'center'},
});

export default DialogSettings;
