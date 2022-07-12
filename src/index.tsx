import React from 'react';
import './index.css';
import {rerender} from "./Render";
import {state} from "./redux/state";
import {addNewPost} from "./redux/state";

rerender(state)
