import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useInfiniteHits } from 'react-instantsearch-hooks';

const Hits = (props: any) => {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  return (
    <FlatList
      data={hits}
      onEndReached={() => !isLastPage && showMore()}
      renderItem={({ item }) => <Text>{item.author_name as String}</Text>}
    ></FlatList>
  );
};

export default Hits;

const styles = StyleSheet.create({});
