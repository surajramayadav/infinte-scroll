import React from 'react';
import {FlatList, View} from 'react-native';
import {Title} from 'react-native-paper';
import AuthorCard from '../components/AuthorCard';


function SearchResultScreen({route}: any) {
  const {result, keyword} = route.params;
  return (
    <View>
      <Title>Search Keyword: {keyword}</Title>
      <FlatList
        data={result}
        keyExtractor={item => item.objectID}
        renderItem={({item}:any) => (
          <AuthorCard
            title={item?.title}
            url={item?.url}
            created_at={item?.created_at}
            tags={item?._tags}
            author={item?.author}
          />
        )}
      />
    </View>
  );
}

export default SearchResultScreen;
