import React, { useMemo } from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from 'react-native-size-matters';
import dayjs from 'dayjs';

import { IPersonSelector } from 'src/interfaces/redux/person-redux.interface';

import Container from 'src/components/Container';
import Header from 'src/components/Header';
import * as COLORS from 'src/constants/colors';
import PersonInfoRow from 'src/components/PersonInfoRow';
import Accordion from 'src/components/Accordion';

import styles from './styles';

interface IPersonScreen {
  goBack: () => void;
  currentPerson: IPersonSelector;
  isInFavorite: boolean;
  onFavoritePress: () => void;
}

const PersonScreen: React.FC<IPersonScreen> = ({
  goBack,
  currentPerson,
  isInFavorite,
  onFavoritePress,
}) => {
  const species = useMemo(() => {
    return currentPerson.species.map((item) => item.name).join(', ');
  }, [currentPerson])

  return (
    <Container containerStyle={styles.container}>
      <Header
        goBack={goBack}
        title={currentPerson.name}
        renderRightComponent={(
          <TouchableOpacity
            onPress={onFavoritePress}
            style={styles.favoriteButton}
            hitSlop={15}
          >
            <Icon
              name={isInFavorite ? "favorite" : "favorite-border"}
              size={moderateScale(30)}
              color={COLORS.red}
            />
          </TouchableOpacity>
        )}
      />
      <ScrollView style={styles.scrollView}>
        <PersonInfoRow
          title="Name"
          description={currentPerson.name}
        />
        <PersonInfoRow
          title="Gender"
          description={currentPerson.gender}
        />
        <PersonInfoRow
          title="Birth Year"
          description={currentPerson.birth_year}
        />
        <PersonInfoRow
          title="Height"
          description={currentPerson.height}
        />
        <PersonInfoRow
          title="Mass"
          description={currentPerson.mass}
        />
        {
          currentPerson.homeworld?.name ? (
            <PersonInfoRow
              title="Homeworld"
              description={currentPerson.homeworld.name}
            />
          ) : null
        }
        {
          species ? (
            <PersonInfoRow
              title="Species"
              description={species}
            />
          ) : null
        }
        {
          currentPerson.species?.length ? (
            <Accordion title='Species'>
              <>
                {currentPerson.species.map((specie, index) => (
                  <View
                    key={specie.url}
                    style={[
                      styles.accordionItemContainer,
                      index === currentPerson.species.length - 1
                        ? styles.accordionItemContainerNoBorder
                        : {}
                    ]}
                  >
                    <PersonInfoRow
                      title='Name'
                      description={specie.name}
                    />
                    <PersonInfoRow
                      title='Language'
                      description={specie.language}
                    />
                    <PersonInfoRow
                      title='Skin Colors'
                      description={specie.skin_colors}
                    />
                    <PersonInfoRow
                      title='Designation'
                      description={specie.designation}
                    />
                    <PersonInfoRow
                      title='CLassification'
                      description={specie.classification}
                    />
                    <PersonInfoRow
                      title='Avarage Height'
                      description={specie.average_height}
                    />
                    <PersonInfoRow
                      title='Avarage Lifespan'
                      description={specie.average_lifespan}
                    />
                  </View>
                ))}
              </>
            </Accordion>
          ) : null
        }
        {
          currentPerson.films?.length ? (
            <Accordion title='Films'>
              <>
                {currentPerson.films.map((film, index) => (
                  <View
                    key={film.url}
                    style={[
                      styles.accordionItemContainer,
                      index === currentPerson.films.length - 1
                        ? styles.accordionItemContainerNoBorder
                        : {}
                    ]}
                  >
                    <PersonInfoRow
                      title='Name'
                      description={film.title}
                    />
                    <PersonInfoRow
                      title='Episode Number'
                      description={film.episode_id}
                    />
                    <PersonInfoRow
                      title='Director'
                      description={film.director}
                    />
                    <PersonInfoRow
                      title='Producer'
                      description={film.producer}
                    />
                    <PersonInfoRow
                      title='Release Date'
                      description={
                        dayjs(film.release_date).format('DD/MM/YYYY').toString()
                      }
                    />
                  </View>
                ))}
              </>
            </Accordion>
          ) : null
        }
      </ScrollView>
    </Container>
  );
};

export default PersonScreen;
