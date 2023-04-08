import axios from 'axios';
import recipes from './recipes/recipes.json';

//*
axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';
//*

export const getFavoriteRecipes = async () => {
  try {
    return recipes;
    // const { data } = await axios.get(`/favorites`);
    // return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.delete(`/favorites/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async () => {
  try {
    return recipes;
    // const { data } = await axios.get(`/recipes/own-recipes`);
    // return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    const { data } = await axios.delete(`/recipes/own-recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//!                  Shopping List omponent

export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/users/shopping-list`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteShoppingList = async _id => {
  try {
    const { data } = await axios.patch(`/users/shopping-list`, { _id });
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};
