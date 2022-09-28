import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICardFavorite, Personaje } from "../types"; 

export interface AddFavoriteAction extends Action {
  type: "ADD_FAVORITE";
  id: string;
  favorite: boolean;
  card: Personaje
}

export interface LoadFavoriteAction extends Action {
  type: "LOAD_FAVORITES";
  cards: ICardFavorite[];
}

export interface LoadOneFavoriteAction extends Action {
  type: "LOAD_ONE_FAVORITE";
  card: ICardFavorite;
}

export interface DeleteFavoriteAction extends Action {
  type: "DELETE_FAVORITE";
  id: string;
  favorite: boolean;
}

export const addFavorite: ActionCreator<AddFavoriteAction> = (id: string, card: Personaje) => {
  return {
    type: "ADD_FAVORITE",
    id,
    card,
    favorite: true,
  };
};

export const loadFavorites: ActionCreator<LoadFavoriteAction> = (cards: ICardFavorite[]) => {
  return {
    type: "LOAD_FAVORITES",
    cards,
  };
};

export const deleteFavorite: ActionCreator<DeleteFavoriteAction> = (id: string) => {
  return {
    type: "DELETE_FAVORITE",
    id,
    favorite: false,
  };
};
