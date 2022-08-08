import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { TextInput, Title } from 'react-native-paper';
import { View, Alert, StyleSheet, Text, FlatList } from 'react-native';
import { getList } from '../api/api';
import AuthorCard from '../components/AuthorCard';
import Loader from '../components/Loader';

function HomeScreen({ navigation }: any) {
  const [text, setText] = React.useState<string>('');
  const [list, setList] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  // const page = useRef(0);
  const [page, setPage] = React.useState<number>(0);

  // console.log(list)

  useEffect(() => {
    let temp = setInterval(() => {
      console.log('page', page);
      setPage(page => page + 1)
      // page.current = page.current + 1;
    }, 10000);

    return () => {
      clearInterval(temp);
    }

  }, []);

  useEffect(() => {
    async function getAuthorsList() {
      try {
        const { data } = await getList(page);
        setList(old => [...old, ...data.hits]);

        setLoading(false);
        console.log("Length", list.length)
      } catch (error) {
        console.log(error);
        setLoading(false);
        return <Text>Something went wrong</Text>;
      }
    }
    getAuthorsList();
  }, [page]);


  const RenderItem: any = useCallback(({ item }) => {
    return (
      <AuthorCard
        title={item?.title}
        url={item?.url}
        created_at={item?.created_at}
        tags={item?._tags}
        author={item?.author}
      />
    )
  }, [list]);


  function handleSearch() {
    if (text.length == 0) {
      Alert.alert('Input area is blank', 'Please input some keyword');
      return;
    }
    let result = list.filter(item => item.author == text || item.title == text);
    navigation.navigate('SearchResult', { result: result, keyword: text });
    setText('');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        label="Search Keyword"
        value={text}
        right={<TextInput.Icon onPress={handleSearch} name="magnify" />}
        onChangeText={text => setText(text.trim())}
      />
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Title>Total Available Page: {1 + page}</Title>
          {list.length != 0 && <FlatList
            data={list}
            extraData={list}
            keyExtractor={(item) => item?.objectID}
            renderItem={({ item }) => <RenderItem item={item} />}
          />}
        </View>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  container: {},
});
