import React, { useMemo } from 'react';
import { View, Text, FlatList, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { IPerson, PeopleArrayType } from 'src/interfaces/redux/people-list-redux.interface';
import { IFavoriteSplitedLists } from 'src/interfaces/redux/favorite-redux.interface';

import Container from 'src/components/Container';
import Header from 'src/components/Header';
import PeopleListItem from 'src/components/PeopleListItem';
import * as COLORS from 'src/constants/colors';

import styles from './styles';

interface IPeopleListScreen {
  onRefreshList: () => void;
  onLoadMore: () => void;
  onClearFavoriteList: () => void;
  list: PeopleArrayType;
  refreshing: boolean;
  loadModeLoading: boolean;
  favoriteSplitedLists: IFavoriteSplitedLists,
}

const PeopleListScreen: React.FC<IPeopleListScreen> = ({
  list,
  onRefreshList,
  onLoadMore,
  refreshing,
  loadModeLoading,
  favoriteSplitedLists,
  onClearFavoriteList,
}) => {
  const renderItem = ({ item }: {item: IPerson}) => {
    return (
      <PeopleListItem item={item} />
    );
  };

  const RightComponent = useMemo(() => {
    return (
      <TouchableOpacity
        style={styles.clearButton}
        hitSlop={15}
        onPress={onClearFavoriteList}
      >
        <Text style={styles.clearText}>Clear</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <Container containerStyle={styles.container}>
      <View style={styles.content}>
        <Header
          title='People'
          renderRightComponent={RightComponent}
        />
        <View style={styles.statisticContainer}>
          <Text style={styles.statisticText}>
            Female Fans: <Text style={styles.statisticValue}>
              {favoriteSplitedLists.female.length}
            </Text>
          </Text>
          <Text style={styles.statisticText}>
            Male Fans: <Text style={styles.statisticValue}>
              {favoriteSplitedLists.male.length}
            </Text>
          </Text>
          <Text style={styles.statisticText}>
            Others: <Text style={styles.statisticValue}>
              {favoriteSplitedLists.other.length}
            </Text>
          </Text>
        </View>
        <FlatList
          onRefresh={onRefreshList}
          refreshing={refreshing}
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.url}
          style={styles.flatlist}
          ListFooterComponent={(
            <View style={styles.footerView}>
              {
                loadModeLoading ? (
                  <ActivityIndicator
                    color={COLORS.lightBlack}
                    size={Platform.OS === 'ios' ? 'large' : moderateScale(20)}
                  />
                ) : null
              }
            </View>
          )}
          onEndReached={onLoadMore}
        />
      </View>
    </Container>
  );
};

export default PeopleListScreen;
