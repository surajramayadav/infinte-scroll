import * as React from 'react';
import {
  Avatar,
  Divider,
  Card,
  Title,
  Paragraph,
  Chip,
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

type propTypes = {
  title: string, url: string, created_at: string, tags: string[], author: string
}

const AuthorCard = ({ title, url, created_at, tags, author }: propTypes) => {
  return (
    <View style={styles.card}>
      <Card elevation={2}>
        <Card.Title title={author} subtitle={url} left={LeftContent} />
        <Card.Content>
          <Title>Title: {title}</Title>
          <Paragraph>{created_at}</Paragraph>
        </Card.Content>
        <View style={styles.tags}>
          {tags?.map((item, index) => (
            <Chip key={index} icon="tag-multiple" onPress={() => console.log('Pressed')}>
              {item}
            </Chip>
          ))}
        </View>
      </Card>
      <Divider />
    </View>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    marginTop: 10,
  },
});
