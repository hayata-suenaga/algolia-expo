import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-hooks';

import SearchBox from './SearchBox';
import Hits from './Hits';

const algoliaClient = algoliasearch(
  'NDXGY695YD',
  '9a70dd038b3e2a4df5e66cbbd6365072'
);

export default function App() {
  return (
    <InstantSearch searchClient={algoliaClient} indexName="sampleIndex">
      <View style={styles.container}>
        <SearchBox />
        <Hits />
        <StatusBar style="auto" />
      </View>
    </InstantSearch>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
