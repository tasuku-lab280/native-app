import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';

import ListItem from './ListItem';

const apiKey = '37a017654eec4c5d9813338c99ca3f57';
const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${apiKey}`;

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
