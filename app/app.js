import { Controller } from "./controller.js";
import { Model } from './model.js';
import { View } from './view.js';


const controller = new Controller(new Model(), new View());

controller.getCoinTypes();
controller.flipCoins();
