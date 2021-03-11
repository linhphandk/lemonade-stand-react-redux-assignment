/* eslint-disable react/no-unescaped-entities */
import axios, {AxiosResponse} from 'axios';
import React, {FC} from 'react';
import {Dispatch} from 'redux';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {RecipesActions} from '../ducks/recipes';
import {IGetDrinkResponse, IRecipe} from '../ducks/recipes.interface';
import {Card, CardGroup} from 'react-bootstrap';
import './Recipes.style.css';
interface IRecipePageProps{
  recipes: IRecipe[],
  getRecipes: ()=>void
}

const RecipesPage: FC<IRecipePageProps> = (props) => {
  useEffect(() => {
    props.getRecipes();
  }, []);

  const recipesJSX = props.recipes.map((recipe, index) => (
    <Card className="card__container" key={index}>
      <p>{recipe.strDrink}</p>
      <Card.Img variant="top" src={recipe.strDrinkThumb} />
      <Card.Body>
        ingredient
        <ul>
          {
            new Array(15).fill(true).map((_: any, index) => {
              const property: keyof IRecipe =
                ('strIngredient' + (index + 1)) as keyof IRecipe;
              return recipe[property] ?
                <li key={index}>{recipe[property]}</li>:
                <></>;
            })
          }
        </ul>
        {recipe.strInstructions}
      </Card.Body>
    </Card>
  ),
  );

  return (
    <CardGroup>
      {recipesJSX}
    </CardGroup>
  );
};

RecipesPage.propTypes = {
  recipes: PropTypes.array.isRequired,
  getRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getRecipes: () => {
    axios.get<
      any,
      AxiosResponse<IGetDrinkResponse>>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then((data) => {
          dispatch({
            type: RecipesActions.GET_RECIPES,
            payload: data,
          });
        });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);

