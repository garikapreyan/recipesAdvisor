import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animation, Row, Col, Container } from 'mdbreact';
import InfiniteScroll from 'react-infinite-scroll-component';
import injectSheet from 'react-jss';

import { MediumCard } from '../Cards/index';
import BigCard from '../../containers/Cards/BigCard/index';

import styles from './styles';

let curPage = 0;

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curIndex: 0,
      curRecipe: 0,
      zoomOut: false,
      zoomIn: false
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      getPreferences,
      getFetchFavourites,
      getRecipes,
      firstPage,
      nextPage,
      labelsType,
      labels,
      q,
      type,
      jwt
    } = this.props;
    firstPage();
    const pref = new Promise(resolve => {
      if (jwt.length) resolve(getPreferences(jwt));
      else resolve();
    });
    pref
      .then(() => {
        if (jwt.length) getFetchFavourites(jwt);
      })
      .then(() => {
        const {
          preferences,
          favourites,
          curPage,
          isFavouritesFetching
        } = this.props;
        getRecipes(
          curPage,
          labels,
          q,
          labelsType,
          preferences,
          favourites,
          type
        );
      });
    nextPage(curPage + 1);
  }

  componentDidUpdate(prevProps) {
    const {
      isFavouritesFetching,
      firstPage,
      getRecipes,
      labelsType,
      labels,
      q,
      preferences,
      type
    } = this.props;
    if (labels !== prevProps.labels || q !== prevProps.q) {
      curPage = 0;
      const { favourites } = this.props;
      firstPage();
      getRecipes(curPage, labels, q, labelsType, preferences, favourites, type);
      if (isFavouritesFetching !== prevProps.isFavouritesFetching) {
        const { favourites } = this.props;
        getRecipes(
          curPage,
          labels,
          q,
          labelsType,
          preferences,
          favourites,
          type
        );
      }
    }
  }

  handleClick(index, i) {
    const { curIndex } = this.state;
    if (curIndex !== index) {
      const animationStart = new Promise(resolve =>
        resolve(
          this.setState({
            zoomOut: true,
            zoomIn: false
          })
        )
      );
      animationStart.then(() => {
        setTimeout(
          () =>
            this.setState({
              curIndex: index,
              curRecipe: i,
              zoomOut: false,
              zoomIn: true
            }),
          550
        );
      });
    }
  }

  fetchMoreData() {
    let time = 15000;
    const {
      updateRecipes,
      nextPage,
      curPage,
      labelsType,
      labels,
      q,
      preferences,
      favourites,
      type
    } = this.props;
    setTimeout(
      () =>
        updateRecipes(
          curPage,
          labels,
          q,
          labelsType,
          preferences,
          favourites,
          type
        ),
      time
    );
    nextPage(curPage + 1);
  }

  render() {
    const { curRecipe, curIndex, zoomOut, zoomIn } = this.state;
    const { classes, type, recipes, favourites, curPage } = this.props;
    if (type === 'favourite') {
      return (
        <Container className="my-5">
          <Row
            style={{
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {favourites.length ? (
              zoomOut ? (
                <Animation
                  type={'zoomOutDown'}
                  duration={'700ms'}
                  className={`col-md-12 col-lg-6`}
                >
                  <BigCard recipe={favourites[curIndex].recepte} />
                </Animation>
              ) : zoomIn ? (
                <Animation
                  type={'zoomInUp'}
                  duration={'700ms'}
                  className={'col-md-12 col-lg-6'}
                >
                  <BigCard recipe={favourites[curIndex].recepte} />
                </Animation>
              ) : (
                <Col md="12" lg="6">
                  <BigCard recipe={favourites[curIndex].recepte} />
                </Col>
              )
            ) : (
              ''
            )}
            <Col
              md="12"
              lg="6"
              id={'scrollableContent'}
              className={classes.scrollBar}
            >
              <InfiniteScroll
                style={{ overflowX: 'hidden', width: '90%' }}
                dataLength={favourites.length}
                next={this.fetchMoreData}
                hasMore={false}
                scrollableTarget="scrollableContent"
                loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>
                      {favourites.length
                        ? 'Yay! You have seen it all'
                        : 'You do not have any favourite recipes yet.'}
                    </b>
                  </p>
                }
              >
                {favourites.map((recipe, i) => (
                  <MediumCard
                    recipe={recipe.recepte}
                    key={i}
                    onClick={() => this.handleClick(i, 0)}
                  />
                ))}
              </InfiniteScroll>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container
        style={type === 'random' ? { width: '80%' } : {}}
        className="my-5"
      >
        <Row
          style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {recipes.length ? (
            zoomOut ? (
              <Animation
                type={'zoomOutDown'}
                duration={'700ms'}
                className={`col-md-12 col-lg-6`}
              >
                <BigCard recipe={recipes[curRecipe].hits[curIndex].recipe} />
              </Animation>
            ) : zoomIn ? (
              <Animation
                type={'zoomInUp'}
                duration={'700ms'}
                className={'col-md-12 col-lg-6'}
              >
                <BigCard recipe={recipes[curRecipe].hits[curIndex].recipe} />
              </Animation>
            ) : (
              <Col md="12" lg="6">
                <BigCard recipe={recipes[curRecipe].hits[curIndex].recipe} />
              </Col>
            )
          ) : (
            ''
          )}
          <Col
            md="12"
            lg="6"
            id={'scrollableContent'}
            className={classes.scrollBar}
          >
            <InfiniteScroll
              style={{ overflowX: 'hidden', width: '90%' }}
              dataLength={recipes.length}
              next={this.fetchMoreData}
              hasMore={curPage < 4}
              scrollableTarget="scrollableContent"
              loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {recipes.map((recipe, i) =>
                recipe.hits.map((item, index) => (
                  <MediumCard
                    recipe={item.recipe}
                    key={index}
                    onClick={() => this.handleClick(index, i)}
                  />
                ))
              )}
            </InfiniteScroll>
          </Col>
        </Row>
      </Container>
    );
  }
  static propTypes = {
    curPage: PropTypes.number,
    nextPage: PropTypes.func,
    preferences: PropTypes.array,
    getRecipes: PropTypes.func,
    isRecipesFetching: PropTypes.bool,
    recipes: PropTypes.array,
    classes: PropTypes.object
  };
  static defaultProps = {
    isRecipesFetching: false,
    recipes: []
  };
}

export default injectSheet(styles)(Recipes);
